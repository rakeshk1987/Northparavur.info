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
            { key: "hotels", url: "./pages/directory/hotels.html", label: "Hotel / Resort" },
            { key: "colleges", url: "./pages/directory/colleges.html", label: "College" },
            { key: "schools", url: "./pages/directory/schools.html", label: "School" },
            { key: "offices", url: "./pages/directory/offices.html", label: "Govt. Office" },
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
                    category: group.label + (entry.phone && entry.phone !== "NA" ? " • " + entry.phone : ""),
                    subtitle: entry.address || entry.about || entry.type || "",
                    url: targetUrl,
                    phone: entry.phone,
                    badge: entry.badge || group.label
                });
            });
        });

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
                resultsBox.innerHTML = `<div style="padding:14px; color:var(--text-secondary);">No matching places or businesses found for "<b>${q}</b>". Try searching <i>Cherai, Synagogue, Hospital, Resort, School, RTO</i>.</div>`;
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
            // Show 6 High-Utility Local & Business Directory Hubs with live counts
            var d = db.directory;
            var hubs = [
                {
                    title: lang === "ml" ? "ആശുപത്രികളും ആരോഗ്യ കേന്ദ്രങ്ങളും" : "Hospitals & Emergency Care",
                    badge: (d.hospitals.length) + " Verified Listings",
                    desc: lang === "ml" ? "താലൂക്ക് ആശുപത്രി, ഡോൺ ബോസ്കോ, കെ.എം.കെ, എസ്.എൻ മെഡിക്കൽ കോളേജ്, ആയുർവേദ & ഹോമിയോ ആശുപത്രികൾ." : "24x7 Taluk Hospital, Don Bosco, KMK, SNIMS Medical College, Ayurveda & Homoeo centres with one-tap calling.",
                    img: "./img/directory/hospitals/donbosco.jpg",
                    url: "./pages/directory/hospitals.html"
                },
                {
                    title: lang === "ml" ? "ഹോട്ടലുകളും ചെറായി റിസോർട്ടുകളും" : "Hotels & Cherai Beach Resorts",
                    badge: (d.hotels.length) + " Featured Stays",
                    desc: lang === "ml" ? "ചെറായി ബീച്ച് റിസോർട്ടുകൾ, ക്ലബ് മഹീന്ദ്ര, ഇന്ദ്രിയ സാൻഡ്സ്, പറവൂർ ടൗൺ ഹോട്ടലുകൾ." : "Book beachfront resorts in Cherai & Kuzhuppilly or business hotels in North Paravur town centre.",
                    img: "./img/directory/hotels/cheraibeachresort.jpg",
                    url: "./pages/directory/hotels.html"
                },
                {
                    title: lang === "ml" ? "സ്കൂളുകൾ (State & CBSE)" : "Schools (State & CBSE Syllabus)",
                    badge: (d.schools.length) + " Schools Listed",
                    desc: lang === "ml" ? "പറവൂരിലെ പ്രധാന സർക്കാർ, എയ്ഡഡ്, സി.ബി.എസ്.ഇ സ്കൂളുകളുടെ ഫോൺ നമ്പറുകളും വിവരങ്ങളും." : "Complete directory of Govt, Aided, and CBSE schools across North Paravur with contact details.",
                    img: "./img/directory/schools/snhss.jpg",
                    url: "./pages/directory/schools.html"
                },
                {
                    title: lang === "ml" ? "കോളേജുകളും ഉന്നത വിദ്യാഭ്യാസവും" : "Colleges & Higher Education",
                    badge: (d.colleges.length) + " Institutions",
                    desc: lang === "ml" ? "മെഡിക്കൽ, എഞ്ചിനീയറിംഗ്, ആർട്സ് & സയൻസ് കോളേജുകൾ (SNM, SNIMS, SNGIST, MES)." : "Medical, Engineering, and Arts & Science colleges in Paravur Taluk with direct website & call links.",
                    img: "./img/directory/colleges/snm.jpg",
                    url: "./pages/directory/colleges.html"
                },
                {
                    title: lang === "ml" ? "സർക്കാർ ഓഫീസുകളും സേവനങ്ങളും" : "Govt. Offices & Civic Utilities",
                    badge: (d.offices.length) + " Civic Offices",
                    desc: lang === "ml" ? "നഗരസഭ, താലൂക്ക് ഓഫീസ്, ആർ.ടി.ഒ (KL-42), കെ.എസ്.ഇ.ബി, പോസ്റ്റ് ഓഫീസ്, ട്രഷറി." : "Municipality, Taluk Office, RTO (KL-42), KSEB, Sub Treasury, LIC & Main Post Office contacts.",
                    img: "./img/directory/office/office.jpg",
                    url: "./pages/directory/offices.html"
                },
                {
                    title: lang === "ml" ? "സ്പോർട്സ് ടർഫുകളും ഇവന്റുകളും" : "Featured Businesses, Turfs & Events",
                    badge: "Local Highlights",
                    desc: lang === "ml" ? "ഒ ഫോർ സ്പോർട്സ് ഇൻഡോർ ടർഫ്, ചേന്ദമംഗലം കൈത്തറി സംഘങ്ങൾ, പ്രാദേശിക പരിപാടികൾ." : "Discover O Four Sports rooftop turf, GI-tagged Chendamangalam Handloom societies, and local events.",
                    img: "./img/events/turf.jpg",
                    url: "./pages/events.html"
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

    // 5. MUZIRIS HERITAGE TIMELINE CARDS
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
        renderHeritageTimeline();
    });
})();