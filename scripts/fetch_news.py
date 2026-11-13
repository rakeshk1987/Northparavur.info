#!/usr/bin/env python3
"""Fetch daily English & Malayalam Google News RSS headlines for North Paravur Taluk areas."""

from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
import json
import os
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

OUTPUT_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data", "newsFeed.json")

EN_AREAS = [
    "North Paravur", "Paravur", "Ezhikkara", "Eloor", "Chittattukara",
    "Chendamangalam", "Vadakkekara", "Kottuvally", "Kunnukara", "Karumalloor",
    "Varapuzha", "Puthenvelikkara", "Kadungalloor", "Moothakunnam", "Alangad",
    "Munambam", "Binanipuram", "Cherai", "Kaitharam", "Chathanad", "Muziris",
    "Gothuruth", "Koonammavu", "Pallippuram"
]

ML_AREAS = [
    "വടക്കൻ പറവൂർ", "ഏഴിക്കര", "ഏലൂർ", "ചിറ്റാറ്റുകര",
    "ചേന്ദമംഗലം", "വടക്കേക്കര", "കോട്ടുവള്ളി", "കുന്നുകര", "കരുമാല്ലൂർ",
    "വരാപ്പുഴ", "പുത്തൻവേലിക്കര", "കടുങ്ങല്ലൂർ", "മൂത്തകുന്നം", "ആലങ്ങാട്",
    "മുനമ്പം", "ബിനാനിപുരം", "ചെറായി", "കൈതാരം", "ചാത്തനാട്", "മുസിരിസ്",
    "ഗോതുരുത്ത്", "കൂനമ്മാവ്", "പള്ളിപ്പുറം"
]

EN_QUERIES = [
    '("North Paravur" OR "Chendamangalam" OR "Varapuzha" OR "Munambam" OR "Eloor") Kerala',
    '("Alangad" OR "Alangadu" OR "Kadungalloor" OR "Karumalloor" OR "Binanipuram" OR "Moothakunnam") Ernakulam',
    '("Ezhikkara" OR "Chittattukara" OR "Vadakkekara" OR "Kottuvally" OR "Kunnukara" OR "Puthenvelikkara")',
    '("Cherai" OR "Kaitharam" OR "Chathanad" OR "Chathanadu" OR "Gothuruth" OR "Koonammavu" OR "Pallippuram" OR "Muziris") Kerala'
]

ML_QUERIES = [
    '"വടക്കൻ പറവൂർ" OR "ചേന്ദമംഗലം" OR "വരാപ്പുഴ" OR "മുനമ്പം" OR "ഏലൂർ"',
    '"ആലങ്ങാട്" OR "കടുങ്ങല്ലൂർ" OR "കരുമാല്ലൂർ" OR "ബിനാനിപുരം" OR "മൂത്തകുന്നം"',
    '"ഏഴിക്കര" OR "ചിറ്റാറ്റുകര" OR "വടക്കേക്കര" OR "കോട്ടുവള്ളി" OR "കുന്നുകര" OR "പുത്തൻവേലിക്കര"',
    '"ചെറായി" OR "കൈതാരം" OR "ചാത്തനാട്" OR "ഗോതുരുത്ത്" OR "കൂനമ്മാവ്" OR "പള്ളിപ്പുറം" OR "മുസിരിസ്"'
]

NH66_EN_QUERIES = [
    '("NH 66" OR "NH-66" OR "NH66") ("Ernakulam" OR "Kodungallur" OR "Paravur" OR "Varapuzha" OR "Edappally" OR "Moothakunnam")'
]

NH66_ML_QUERIES = [
    '("NH 66" OR "NH-66" OR "ദേശീയപാത 66") ("എറണാകുളം" OR "കൊടുങ്ങല്ലൂർ" OR "പറവൂർ" OR "വരാപ്പുഴ" OR "ഇടപ്പള്ളി" OR "മൂത്തകുന്നം")'
]

EVENTS_EN_QUERIES = [
    '("North Paravur" OR "Muziris" OR "Cherai" OR "Chendamangalam" OR "Varapuzha" OR "Alangad" OR "Alangadu" OR "Kottuvally" OR "Kaitharam" OR "Ezhikkara" OR "Chathanad" OR "Chathanadu" OR "Gothuruth" OR "Eloor" OR "Munambam") ("festival" OR "utsavam" OR "perunnal" OR "boat race" OR "exhibition" OR "camp" OR "mela" OR "fest")'
]

EVENTS_ML_QUERIES = [
    '("വടക്കൻ പറവൂർ" OR "മുസിരിസ്" OR "ചെറായി" OR "ചേന്ദമംഗലം" OR "വരാപ്പുഴ" OR "ആലങ്ങാട്" OR "കോട്ടുവള്ളി" OR "കൈതാരം" OR "ഏഴിക്കര" OR "ചാത്തനാട്" OR "ഗോതുരുത്ത്" OR "ഏലൂർ" OR "മുനമ്പം") ("ഉത്സവം" OR "പെരുന്നാൾ" OR "വള്ളംകളി" OR "മേള" OR "ക്യാമ്പ്" OR "ഫെസ്റ്റ്")'
]

AREA_ALIASES = [
    ("North Paravur", ["north paravur", "paravur", "വടക്കൻ പറവൂർ", "പറവൂർ"]),
    ("Cherai", ["cherai", "ചെറായി"]),
    ("Muziris", ["muziris", "മുസിരിസ്"]),
    ("Eloor", ["eloor", "ഏലൂർ"]),
    ("Binanipuram", ["binanipuram", "ബിനാനിപുരം"]),
    ("Munambam", ["munambam", "മുനമ്പം"]),
    ("Varapuzha", ["varapuzha", "വരാപ്പുഴ"]),
    ("Chendamangalam", ["chendamangalam", "ചേന്ദമംഗലം"]),
    ("Alangad", ["alangad", "alangadu", "ആലങ്ങാട്"]),
    ("Kaitharam", ["kaitharam", "കൈതാരം"]),
    ("Chathanad", ["chathanad", "chathanadu", "ചാത്തനാട്"]),
    ("Gothuruth", ["gothuruth", "ഗോതുരുത്ത്"]),
    ("Koonammavu", ["koonammavu", "കൂനമ്മാവ്"]),
    ("Pallippuram", ["pallippuram", "പള്ളിപ്പുറം"]),
    ("Kadungalloor", ["kadungalloor", "കടുങ്ങല്ലൂർ"]),
    ("Karumalloor", ["karumalloor", "കരുമാല്ലൂർ"]),
    ("Ezhikkara", ["ezhikkara", "ഏഴിക്കര"]),
    ("Chittattukara", ["chittattukara", "ചിറ്റാറ്റുകര"]),
    ("Vadakkekara", ["vadakkekara", "വടക്കേക്കര"]),
    ("Kottuvally", ["kottuvally", "കോട്ടുവള്ളി"]),
    ("Kunnukara", ["kunnukara", "കുന്നുകര"]),
    ("Puthenvelikkara", ["puthenvelikkara", "പുത്തൻവേലിക്കര"]),
    ("Moothakunnam", ["moothakunnam", "മൂത്തകുന്നം"]),
]


def detect_area(text):
    lowered = text.lower()
    for label, aliases in AREA_ALIASES:
        if any(a in lowered for a in aliases):
            return label
    return None


def extract_feed_thumb(item, desc_text):
    for child in item:
        tag = child.tag.lower()
        if tag.endswith("content") or tag.endswith("thumbnail") or tag == "enclosure":
            url = child.attrib.get("url", "")
            if url.startswith("http"):
                return url
    m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', desc_text or "", re.I)
    if m and m.group(1).startswith("http"):
        return m.group(1)
    return ""


def fetch_rss(query, lang, require_area=True):
    hl = "ml" if lang == "ml" else "en-IN"
    ceid = "IN:ml" if lang == "ml" else "IN:en"
    url = (
        f"https://news.google.com/rss/search?q={urllib.parse.quote(query)}"
        f"&hl={hl}&gl=IN&ceid={ceid}"
    )
    req = urllib.request.Request(url, headers={"User-Agent": "NorthParavurNewsBot/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        xml_bytes = resp.read()

    root = ET.fromstring(xml_bytes)
    items = []
    for item in root.findall("./channel/item"):
        raw_title = (item.findtext("title") or "").strip()
        desc = (item.findtext("description") or "").strip()
        area = detect_area(raw_title + " " + desc)
        if require_area and not area:
            continue

        link = (item.findtext("link") or "").strip()
        pub_raw = (item.findtext("pubDate") or "").strip()
        source_el = item.find("source")
        source = (source_el.text or "").strip() if source_el is not None else "Google News"

        # Google News often appends " - Source Name" to titles
        title = re.sub(r"\s+-\s+[^-]+$", "", raw_title).strip() or raw_title
        try:
            dt = parsedate_to_datetime(pub_raw).astimezone(timezone.utc)
            iso_date = dt.isoformat()
            display_date = dt.strftime("%d %b %Y")
        except Exception:
            iso_date = ""
            display_date = pub_raw[:16]

        items.append({
            "title": title,
            "source": source,
            "link": link,
            "published": iso_date,
            "dateLabel": display_date,
            "lang": lang,
            "area": area or "NH-66 Corridor",
            "thumb": extract_feed_thumb(item, desc),
        })
    return items


def main():
    seen = set()
    all_items = []

    for q in EN_QUERIES:
        try:
            for it in fetch_rss(q, "en"):
                key = it["title"].lower()
                if key not in seen:
                    seen.add(key)
                    all_items.append(it)
        except Exception as exc:
            print(f"EN query error ({q}): {exc}")

    for q in ML_QUERIES:
        try:
            for it in fetch_rss(q, "ml"):
                key = it["title"].lower()
                if key not in seen:
                    seen.add(key)
                    all_items.append(it)
        except Exception as exc:
            print(f"ML query error ({q}): {exc}")

    all_items.sort(key=lambda x: x["published"], reverse=True)
    en_items = [x for x in all_items if x["lang"] == "en"][:18]
    ml_items = [x for x in all_items if x["lang"] == "ml"][:18]
    combined = sorted(en_items + ml_items, key=lambda x: x["published"], reverse=True)

    nh_seen = set()
    nh_items = []
    for lang, queries in [("en", NH66_EN_QUERIES), ("ml", NH66_ML_QUERIES)]:
        for q in queries:
            try:
                for it in fetch_rss(q, lang, require_area=False):
                    key = it["title"].lower()
                    if key not in nh_seen:
                        nh_seen.add(key)
                        nh_items.append(it)
            except Exception as exc:
                print(f"NH66 {lang} query error: {exc}")
    nh_items = sorted(nh_items, key=lambda x: x["published"], reverse=True)[:12]

    ev_seen = set()
    ev_items = []
    for lang, queries in [("en", EVENTS_EN_QUERIES), ("ml", EVENTS_ML_QUERIES)]:
        for q in queries:
            try:
                for it in fetch_rss(q, lang, require_area=True):
                    key = it["title"].lower()
                    if key not in ev_seen:
                        ev_seen.add(key)
                        ev_items.append(it)
            except Exception as exc:
                print(f"Events {lang} query error: {exc}")
    ev_items = sorted(ev_items, key=lambda x: x["published"], reverse=True)[:16]

    payload = {
        "updatedAt": datetime.now(timezone.utc).isoformat(),
        "areas": EN_AREAS,
        "count": len(combined),
        "items": combined,
        "nh66Items": nh_items,
        "eventItems": ev_items,
    }

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)

    print(f"Saved {len(combined)} news items ({len(en_items)} EN, {len(ml_items)} ML) + {len(nh_items)} NH-66 + {len(ev_items)} events to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
