// ============================================================================
// NorthParavur.in — Homepage Interactive Engine (scripts/index.js)
// Powers:
// 1. Unified Global Omni-Search across Tourism, History, Hospitals, Hotels, Schools, Colleges, Offices
// 2. Dual-Mode Explorer (Tourist & Heritage Mode vs Local & Business Directory Mode)
// 3. Interactive Muziris Heritage Trail & Day-Trip Itinerary Builder
// 4. Muziris Historical Timeline Cards
// ============================================================================

(function () {
    var currentMode = "tourist";
    var currentItinerary = "heritage_trail";

    function getLang() {
        return localStorage.getItem("np_lang") || "en";
    }

    // 1. BUILD FLATTENED SEARCH INDEX FROM MASTER DATA
    function getSearchIndex() {
        var db = window.NP_MASTER_DATA;
        if (!db) return [];
        var items = [];

        // Tourism
        (db.tourism || []).forEach(function (t) {
            items.push({
                title: t.name + (t.name_ml ? " (" + t.name_ml + ")" : ""),
                category: "Tourist Attraction • " + t.category,
                subtitle: t.about,
                url: "./pages/tourism.html",
                badge: t.badge || "Tourism"
            });
        });

        // History Eras
        (db.heritageTimeline || []).forEach(function (h) {
            items.push({
                title: h.era + ": " + h.title_en,
                category: "Muziris History",
                subtitle: h.desc_en,
                url: "./pages/history.html",
                badge: "History"
            });
        });

        // Directory categories
        var dirMap = [
            { key: "hospitals", url: "./pages/directory/hospitals.html", label: "Hospital" },
            { key: "hotels", url: "./pages/directory/hotels.html", label: "Hotel / Resort / Bar" },
            { key: "colleges", url: "./pages/directory/colleges.html", label: "College" },
            { key: "schools", url: "./pages/directory/schools.html", label: "School" },
            { key: "offices", url: "./pages/directory/offices.html", label: "Govt. Office" },
            { key: "worship", url: "./pages/directory/worship.html", label: "Place of Worship" },
            { key: "events", url: "./pages/events.html", label: "Featured / Event" }
        ];

        dirMap.forEach(function (group) {
            var list = (db.directory && db.directory[group.key]) || [];
            list.forEach(function (entry) {
                var targetUrl = group.url;
                if (group.key === "schools") {
                    targetUrl = entry.syllabus === "CBSE" ? "./pages/directory/schools_cbse.html" : "./pages/directory/schools_aided.html";
                }
                items.push({
                    title: entry.name,
                    category: (entry.religion || group.label) + (entry.phone && entry.phone !== "NA" ? " • " + entry.phone : ""),
                    subtitle: entry.address || entry.highlights || entry.about || entry.type || "",
                    url: targetUrl,
                    phone: entry.phone,
                    badge: entry.religion || entry.badge || group.label
                });
            });
        });

        // Bus Timings
        if (db.busTimings && db.busTimings.routes) {
            db.busTimings.routes.forEach(function (r) {
                items.push({
                    title: "Bus: " + r.route,
                    category: r.operator + " • " + r.frequency,
                    subtitle: "First: " + r.firstBus + " | Last: " + r.lastBus + " | Via: " + r.via,
                    url: "#transitHub",
                    badge: "Bus Timing"
                });
            });
        }

        // NH-66 Progress
        if (db.nh66Progress && db.nh66Progress.segments) {
            db.nh66Progress.segments.forEach(function (s) {
                items.push({
                    title: "NH-66: " + s.segment,
                    category: "NH-66 Six-Lane Work • " + s.percent + "% (" + s.status + ")",
                    subtitle: s.detail,
                    url: "#transitHub",
                    badge: "NH-66 (" + s.percent + "%)"
                });
            });
        }

        return items;
    }

    // 2. GLOBAL OMNI-SEARCH HANDLER
    function initGlobalSearch() {
        var input = document.getElementById("globalSearchInput");
        var resultsBox = document.getElementById("globalSearchResults");
        if (!input || !resultsBox) return;

        input.addEventListener("input", function (e) {
            var q = e.target.value.toLowerCase().trim();
            if (!q) {
                resultsBox.style.display = "none";
                resultsBox.innerHTML = "";
                return;
            }
            var index = getSearchIndex();
            var matches = index.filter(function (item) {
                return (
                    item.title.toLowerCase().indexOf(q) !== -1 ||
                    item.category.toLowerCase().indexOf(q) !== -1 ||
                    item.subtitle.toLowerCase().indexOf(q) !== -1
                );
            }).slice(0, 8);

            if (matches.length === 0) {
                resultsBox.innerHTML = `<div style="padding:14px; color:var(--text-secondary);">No matching places or businesses found for "<b>${q}</b>". Try searching <i>Cherai, Temple, Church, Mosque, Resort, Bar, Bus, NH-66, Hospital, Police</i>.</div>`;
            } else {
                resultsBox.innerHTML = matches.map(function (m) {
                    return `
                        <a class="searchResultItem" href="${m.url}">
                            <div>
                                <div class="searchResultTitle">${m.title}</div>
                                <div class="searchResultMeta">${m.category} — ${m.subtitle.substring(0, 90)}...</div>
                            </div>
                            <span class="npBadge">${m.badge}</span>
                        </a>
                    `;
                }).join("");
            }
            resultsBox.style.display = "block";
        });

        // Quick chip search triggers
        var chips = document.querySelectorAll("[data-quick-search]");
        chips.forEach(function (chip) {
            chip.addEventListener("click", function () {
                var term = chip.getAttribute("data-quick-search");
                input.value = term;
                input.dispatchEvent(new Event("input"));
                input.focus();
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (e) {
            if (!e.target.closest(".heroSearchWrap")) {
                resultsBox.style.display = "none";
            }
        });
    }

    // 3. DUAL-MODE EXPLORER (Tourist & Heritage vs Local & Business)
    window.switchExplorerMode = function (mode) {
        currentMode = mode;
        var btnTourist = document.getElementById("tabTourist");
        var btnLocal = document.getElementById("tabLocal");
        if (btnTourist && btnLocal) {
            btnTourist.className = mode === "tourist" ? "modeTabBtn activeTab" : "modeTabBtn";
            btnLocal.className = mode === "local" ? "modeTabBtn activeTab" : "modeTabBtn";
        }
        renderExplorerGrid();
    };

    function renderExplorerGrid() {
        var container = document.getElementById("dualExplorerGrid");
        var db = window.NP_MASTER_DATA;
        if (!container || !db) return;
        var lang = getLang();

        if (currentMode === "tourist") {
            // Show Top 6 Featured/Curated Tourist & Heritage Spots + Resorts
            var spots = (db.tourism || []).slice(0, 6);
            container.innerHTML = spots.map(function (place) {
                var displayTitle = lang === "ml" && place.name_ml ? place.name_ml : place.name;
                var mapQuery = encodeURIComponent(place.name + " North Paravur Kerala");
                return `
                    <article class="portalCard">
                        <div>
                            <img class="portalCardImg" src="./${place.photosmall}" alt="${place.name}" loading="lazy">
                            <div class="portalCardBody">
                                <span class="npBadge ${place.featured ? 'npBadgeFeatured' : ''}">${place.badge || place.category}</span>
                                <h3>${displayTitle}</h3>
                                <p>${place.about}</p>
                            </div>
                        </div>
                        <div class="portalCardFooter">
                            <span style="font-size:12.5px; font-weight:600; color:var(--text-muted);"><i class="fas fa-route"></i> ${place.distance} from Town</span>
                            <div style="display:flex; gap:10px;">
                                <a class="portalLink" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener"><i class="fas fa-directions"></i> Map</a>
                                <a class="portalLink" href="./pages/tourism.html">${lang === "ml" ? "വിവരങ്ങൾ" : "Explore"} &rarr;</a>
                            </div>
                        </div>
                    </article>
                `;
            }).join("");
        } else {
            // Show High-Utility Local & Business Directory Hubs with live counts
            var d = db.directory;
            var hubs = [
                {
                    title: lang === "ml" ? "ക്ഷേത്രങ്ങൾ, പള്ളികൾ, മസ്ജിദുകൾ & സിനഗോഗുകൾ" : "Temples, Churches, Mosques & Synagogues",
                    badge: ((d.worship && d.worship.length) || 26) + " Sacred Sites",
                    desc: lang === "ml" ? "ദക്ഷിണ മൂകാംബിക, പെരുവാരം, കോട്ടക്കാവ് പള്ളി, ചേരമാൻ മസ്ജിദ്, പറവൂർ - ചേന്ദമംഗലം ജൂതപ്പള്ളികൾ." : "Explore 26 historic Temples, Pilgrim Churches, Juma Masjids & Jewish Synagogues with timings and maps.",
                    img: "./img/tourism/kottakavu_small.jpg",
                    url: "./pages/directory/worship.html"
                },
                {
                    title: lang === "ml" ? "റിസോർട്ടുകൾ, ഹോട്ടലുകൾ & ബാറുകൾ" : "Resorts, Hotels, Homestays & Bars",
                    badge: (d.hotels.length) + " Stays & Lounges",
                    desc: lang === "ml" ? "ചെറായി ബീച്ച് റിസോർട്ടുകൾ, ഹോംസ്റ്റേകൾ, പറവൂർ ടൗൺ ഹോട്ടലുകൾ, ക്ലാസിഫൈഡ് ബാർ ഹോട്ടലുകൾ." : "Beachfront resorts in Cherai, family homestays, town hotels, and classified executive bar hotels.",
                    img: "./img/directory/hotels/cheraibeachresort.jpg",
                    url: "./pages/directory/hotels.html"
                },
                {
                    title: lang === "ml" ? "ആശുപത്രികളും ആരോഗ്യ കേന്ദ്രങ്ങളും" : "Hospitals, Clinics & Eye Care",
                    badge: (d.hospitals.length) + " Verified Listings",
                    desc: lang === "ml" ? "താലൂക്ക് ആശുപത്രി, ഡോൺ ബോസ്കോ, കെ.എം.കെ, എസ്.എൻ മെഡിക്കൽ കോളേജ്, ആയുർവേദ & ഹോമിയോ ആശുപത്രികൾ." : "24x7 Taluk Hospital, Don Bosco, KMK, SNIMS Medical College, Eye hospitals, Ayurveda & Homoeo centres.",
                    img: "./img/directory/hospitals/donbosco.jpg",
                    url: "./pages/directory/hospitals.html"
                },
                {
                    title: lang === "ml" ? "സർക്കാർ ഓഫീസുകൾ, പോലീസ് & ഫയർഫോഴ്സ്" : "Govt. Offices, Police & Fire Station",
                    badge: (d.offices.length) + " Civic Offices",
                    desc: lang === "ml" ? "പോലീസ് സ്റ്റേഷൻ, ഫയർ സ്റ്റേഷൻ, നഗരസഭ, താലൂക്ക് ഓഫീസ്, ആർ.ടി.ഒ (KL-42), കെ.എസ്.ആർ.ടി.സി, കെ.എസ്.ഇ.ബി." : "Police Stations, Fire & Rescue, Municipality, Taluk Office, RTO (KL-42), KSRTC, KWA, Excise & Village Offices.",
                    img: "./img/directory/office/office.jpg",
                    url: "./pages/directory/offices.html"
                },
                {
                    title: lang === "ml" ? "സ്കൂളുകൾ (State & CBSE)" : "Schools (State & CBSE Syllabus)",
                    badge: (d.schools.length) + " Schools Listed",
                    desc: lang === "ml" ? "പറവൂർ താലൂക്കിലെ പ്രധാന സർക്കാർ, എയ്ഡഡ്, സി.ബി.എസ്.ഇ സ്കൂളുകളുടെ ഫോൺ നമ്പറുകളും വിവരങ്ങളും." : "Complete directory of 21 Govt, Aided, and CBSE schools across North Paravur Taluk with contact details.",
                    img: "./img/directory/schools/snhss.jpg",
                    url: "./pages/directory/schools.html"
                },
                {
                    title: lang === "ml" ? "കോളേജുകളും ഉന്നത വിദ്യാഭ്യാസവും" : "Colleges & Higher Education",
                    badge: (d.colleges.length) + " Institutions",
                    desc: lang === "ml" ? "മെഡിക്കൽ, എഞ്ചിനീയറിംഗ്, ആർട്സ് & സയൻസ് കോളേജുകൾ (കേസരി കോളേജ്, SNM, SNIMS, SNGIST, മാതാ കോളേജ്)." : "16 Medical, Engineering, B.Ed, Polytechnic, and Arts & Science colleges in Paravur Taluk.",
                    img: "./img/directory/colleges/snm.jpg",
                    url: "./pages/directory/colleges.html"
                }
            ];

            container.innerHTML = hubs.map(function (h) {
                return `
                    <article class="portalCard">
                        <div>
                            <img class="portalCardImg" src="${h.img}" alt="${h.title}" loading="lazy">
                            <div class="portalCardBody">
                                <span class="npBadge npBadgeFeatured">${h.badge}</span>
                                <h3>${h.title}</h3>
                                <p>${h.desc}</p>
                            </div>
                        </div>
                        <div class="portalCardFooter">
                            <span style="font-size:12.5px; color:var(--text-muted);"><i class="fas fa-phone-alt"></i> Tap-to-Call Ready</span>
                            <a class="portalLink" href="${h.url}">${lang === "ml" ? "ഡയറക്ടറി തുറക്കുക" : "Open Directory"} &rarr;</a>
                        </div>
                    </article>
                `;
            }).join("");
        }
    }

    // 4. INTERACTIVE DAY-TRIP ITINERARY BUILDER
    window.selectItinerary = function (itinKey) {
        currentItinerary = itinKey;
        var btns = document.querySelectorAll("[data-itin-key]");
        btns.forEach(function (b) {
            b.className = b.getAttribute("data-itin-key") === itinKey ? "itinBtn activeItin" : "itinBtn";
        });
        renderItinerary();
    };

    function renderItinerary() {
        var container = document.getElementById("itineraryContent");
        var db = window.NP_MASTER_DATA;
        if (!container || !db || !db.itineraries) return;

        var plan = db.itineraries[currentItinerary];
        if (!plan) return;
        var lang = getLang();

        var title = lang === "ml" ? plan.title_ml : plan.title_en;
        var subtitle = lang === "ml" ? plan.subtitle_ml : plan.subtitle_en;

        var stopsHTML = plan.stops.map(function (s) {
            var stopTitle = lang === "ml" && s.title_ml ? s.title_ml : s.title_en;
            return `
                <div class="itinStop">
                    <span class="itinTime"><i class="far fa-clock"></i> ${s.time} &bull; ${s.duration}</span>
                    <h4>${stopTitle}</h4>
                    <p>${s.note_en}</p>
                </div>
            `;
        }).join("");

        container.innerHTML = `
            <div style="text-align:center; margin-bottom:20px;">
                <h3 style="margin:0 0 4px 0; color:var(--brand-primary); font-family:'Cinzel','Manjari',serif;">${title}</h3>
                <p style="margin:0; font-size:14px; color:var(--text-secondary);">${subtitle}</p>
            </div>
            <div class="itinTimeline">${stopsHTML}</div>
            <div style="text-align:center; margin-top:22px; display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
                <a class="btnCall" href="./pages/tourism.html" style="padding:10px 20px; font-size:14px;">
                    <i class="fas fa-map-marked-alt"></i> ${lang === "ml" ? "എല്ലാ വിനോദസഞ്ചാര കേന്ദ്രങ്ങളും കാണുക" : "View All 12 Attractions & Maps"}
                </a>
                <a class="btnWeb" href="./pages/directory/hotels.html" style="padding:10px 20px; font-size:14px;">
                    <i class="fas fa-bed"></i> ${lang === "ml" ? "ഹോട്ടലുകളും റിസോർട്ടുകളും" : "Find Nearby Hotels & Resorts"}
                </a>
            </div>
        `;
    }

    // 5. BUS STATION TIMINGS (KSRTC & PRIVATE) + NH-66 WORK PROGRESS TRACKER
    function renderTransitAndNh66() {
        var container = document.getElementById("transitAndNh66Container");
        var db = window.NP_MASTER_DATA;
        if (!container || !db || !db.busTimings || !db.nh66Progress) return;
        var lang = getLang();
        var bus = db.busTimings;
        var nh = db.nh66Progress;

        var routesHtml = bus.routes.map(function (r) {
            return `
                <div style="padding:14px; border:1px solid var(--border-subtle, #e2e8f0); border-radius:12px; background:var(--bg-body, #f8fafc);">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; flex-wrap:wrap;">
                        <h4 style="margin:0; font-size:14.5px; color:var(--text-primary);"><i class="fas fa-bus" style="color:var(--brand-accent, #d97706);"></i> ${r.route}</h4>
                        <span class="npBadge npBadgeFeatured">${r.frequency}</span>
                    </div>
                    <p style="margin:6px 0 4px 0; font-size:12.5px; color:var(--text-secondary);"><b>Operator:</b> ${r.operator} &bull; <b>First Bus:</b> ${r.firstBus} &bull; <b>Last Bus:</b> ${r.lastBus}</p>
                    <p style="margin:0; font-size:12px; color:var(--text-muted);"><b>Via:</b> ${r.via} — ${r.highlights}</p>
                </div>
            `;
        }).join("");

        var segmentsHtml = nh.segments.map(function (s) {
            var barColor = s.percent >= 90 ? "#16a34a" : (s.percent >= 75 ? "#d97706" : "#0284c7");
            return `
                <div style="padding:14px; border:1px solid var(--border-subtle, #e2e8f0); border-radius:12px; background:var(--bg-body, #f8fafc);">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; gap:8px;">
                        <span style="font-weight:700; font-size:14px; color:var(--text-primary);">${s.segment}</span>
                        <span style="font-size:12px; font-weight:700; padding:3px 9px; border-radius:999px; background:${barColor}20; color:${barColor};">${s.status} (${s.percent}%)</span>
                    </div>
                    <div style="width:100%; height:8px; background:var(--border-subtle, #e2e8f0); border-radius:999px; overflow:hidden; margin-bottom:8px;">
                        <div style="width:${s.percent}%; height:100%; background:${barColor}; border-radius:999px;"></div>
                    </div>
                    <p style="margin:0; font-size:12.5px; color:var(--text-secondary); line-height:1.45;">${s.detail}</p>
                </div>
            `;
        }).join("");

        var summaryText = lang === "ml" ? nh.statusSummary_ml : nh.statusSummary_en;

        container.innerHTML = `
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:24px;">
                <!-- KSRTC & Private Bus Timings Card -->
                <div style="background:var(--bg-surface, #fff); border:1px solid var(--border-subtle, #e2e8f0); border-radius:16px; padding:22px; box-shadow:var(--shadow-sm);">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
                        <div>
                            <span class="npBadge">KSRTC &amp; Private Stand</span>
                            <h3 style="margin:6px 0 2px 0; font-size:18px; color:var(--text-primary);">
                                ${lang === "ml" ? "ബസ് സമയം (KSRTC & പ്രൈവറ്റ് ബസ്)" : "Bus Station Timings & Corridors"}
                            </h3>
                        </div>
                        <a class="btnCall" href="tel:+914842444439" style="font-size:12.5px; padding:7px 12px;">
                            <i class="fas fa-phone-alt"></i> KSRTC: 0484 2444439
                        </a>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        ${routesHtml}
                    </div>
                </div>

                <!-- NH-66 Six-Lane Work Progress Tracker Card -->
                <div style="background:var(--bg-surface, #fff); border:1px solid var(--border-subtle, #e2e8f0); border-radius:16px; padding:22px; box-shadow:var(--shadow-sm);">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                        <div>
                            <span class="npBadge npBadgeFeatured">NHAI Bharatmala • ${nh.overallCompletion}% Complete</span>
                            <h3 style="margin:6px 0 2px 0; font-size:18px; color:var(--text-primary);">
                                ${lang === "ml" ? "NH-66 ആറുവരിപ്പാത നിർമ്മാണ പുരോഗതി" : "NH-66 Six-Lane Work Progress Tracker"}
                            </h3>
                        </div>
                        <span style="font-size:20px; font-weight:800; color:var(--brand-accent, #d97706);">${nh.overallCompletion}%</span>
                    </div>
                    <p style="font-size:13px; color:var(--text-secondary); margin:0 0 14px 0; line-height:1.55;">
                        ${summaryText}
                    </p>
                    <div style="display:flex; flex-direction:column; gap:10px;">
                        ${segmentsHtml}
                    </div>
                </div>
            </div>
        `;
    }

    // 6. MUZIRIS HERITAGE TIMELINE CARDS
    function renderHeritageTimeline() {
        var container = document.getElementById("heritageTimelineGrid");
        var db = window.NP_MASTER_DATA;
        if (!container || !db || !db.heritageTimeline) return;
        var lang = getLang();

        container.innerHTML = db.heritageTimeline.map(function (item) {
            var title = lang === "ml" ? item.title_ml : item.title_en;
            var desc = lang === "ml" ? item.desc_ml : item.desc_en;
            return `
                <div class="eraCard">
                    <span class="eraBadge">${item.era}</span>
                    <h4>${title}</h4>
                    <p>${desc}</p>
                </div>
            `;
        }).join("");
    }

    function initAll() {
        initGlobalSearch();
        renderExplorerGrid();
        renderItinerary();
        renderTransitAndNh66();
        renderHeritageTimeline();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAll);
    } else {
        initAll();
    }

    window.addEventListener("npLanguageChanged", function () {
        renderExplorerGrid();
        renderItinerary();
        renderTransitAndNh66();
        renderHeritageTimeline();
    });
})();