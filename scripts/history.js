// ============================================================================
// NorthParavur.in — Dynamic Markdown History Parser & Timeline Renderer
// Reads ../data/history_en.md and ../data/history_ml.md dynamically
// ============================================================================

(function () {
    var currentView = "timeline"; // 'timeline' or 'book'
    var searchQuery = "";
    var cachedMarkdown = { en: null, ml: null };

    // Era metadata & icons for each of the 12 historical chapters
    var CHAPTER_META = {
        1: { era_en: "Ancient Era • 1st Century", era_ml: "പുരാതന കാലഘട്ടം", icon: "fa-ship" },
        2: { era_en: "200 BCE – 1000 CE (KCHR 2007)", era_ml: "ക്രി.മു. 2-ാം നൂറ്റാണ്ട് – എ.ഡി. 10-ാം നൂറ്റാണ്ട്", icon: "fa-archway" },
        3: { era_en: "9th – 12th Century CE", era_ml: "9 – 12 നൂറ്റാണ്ടുകൾ", icon: "fa-crown" },
        4: { era_en: "52 CE & 9th Century CE", era_ml: "എ.ഡി. 52 • ഒൻപതാം നൂറ്റാണ്ട്", icon: "fa-cross" },
        5: { era_en: "1164 CE / 1615–1616 CE", era_ml: "1164 • 1615–1616 കാലഘട്ടം", icon: "fa-star-of-david" },
        6: { era_en: "1498 – 18th Century", era_ml: "1498 – 18-ാം നൂറ്റാണ്ട്", icon: "fa-anchor" },
        7: { era_en: "1663 – 1809 CE", era_ml: "1663 – 1809 കാലഘട്ടം", icon: "fa-landmark" },
        8: { era_en: "1762 – 15 April 1790", era_ml: "1762 – 1790 ഏപ്രിൽ 15", icon: "fa-shield-alt" },
        9: { era_en: "1938 – 1945", era_ml: "1938 – 1945 സ്വാതന്ത്ര്യസമരം", icon: "fa-flag" },
        10: { era_en: "1912 – Modern Era", era_ml: "1912 – നഗരസഭ രൂപീകരണം", icon: "fa-city" },
        11: { era_en: "19 May 1982", era_ml: "1982 മെയ് 19 (ആദ്യ EVM)", icon: "fa-vote-yea" },
        12: { era_en: "Present Day", era_ml: "ഇന്നത്തെ പറവൂർ", icon: "fa-water" }
    };

    function getLang() {
        return localStorage.getItem("np_lang") || "en";
    }

    // Parse Markdown (# Title, *Subtitle*, ## 1. Chapter Title, Paragraphs)
    function parseHistoryMarkdown(mdText) {
        var lines = mdText.replace(/\r\n/g, "\n").split("\n");
        var mainTitle = "";
        var subtitle = "";
        var chapters = [];
        var currentChapter = null;

        lines.forEach(function (rawLine) {
            var line = rawLine.trim();
            if (!line) return;

            if (line.indexOf("# ") === 0) {
                mainTitle = line.substring(2).trim();
            } else if (line.indexOf("## ") === 0) {
                if (currentChapter) chapters.push(currentChapter);
                var rawHeading = line.substring(3).trim();
                var numMatch = rawHeading.match(/^(\d+)\.\s*(.*)$/);
                var chapNum = numMatch ? parseInt(numMatch[1], 10) : chapters.length + 1;
                var cleanHeading = numMatch ? numMatch[2] : rawHeading;
                currentChapter = {
                    number: chapNum,
                    fullHeading: rawHeading,
                    title: cleanHeading,
                    paragraphs: []
                };
            } else if (!currentChapter && line.charAt(0) === "*" && line.charAt(line.length - 1) === "*") {
                subtitle = line.substring(1, line.length - 1).trim();
            } else if (currentChapter) {
                currentChapter.paragraphs.push(line);
            }
        });

        if (currentChapter) chapters.push(currentChapter);
        return {
            mainTitle: mainTitle,
            subtitle: subtitle,
            chapters: chapters
        };
    }

    function fetchMarkdown(lang) {
        if (cachedMarkdown[lang]) {
            return Promise.resolve(cachedMarkdown[lang]);
        }
        var file = lang === "ml" ? "../data/history_ml.md" : "../data/history_en.md";
        return fetch(file)
            .then(function (res) { return res.text(); })
            .then(function (text) {
                var parsed = parseHistoryMarkdown(text);
                cachedMarkdown[lang] = parsed;
                return parsed;
            });
    }

    window.setHistoryView = function (view) {
        currentView = view;
        var btnTimeline = document.getElementById("btnViewTimeline");
        var btnBook = document.getElementById("btnViewBook");
        if (btnTimeline && btnBook) {
            btnTimeline.className = view === "timeline" ? "viewToggleBtn activeView" : "viewToggleBtn";
            btnBook.className = view === "book" ? "viewToggleBtn activeView" : "viewToggleBtn";
        }
        renderHistoryPage();
    };

    function renderHistoryPage() {
        var lang = getLang();
        fetchMarkdown(lang).then(function (data) {
            var titleEl = document.getElementById("historyMainTitle");
            var subEl = document.getElementById("historyMainSubtitle");
            var searchInput = document.getElementById("historySearchInput");
            var pillsEl = document.getElementById("historyChapterPills");
            var bodyEl = document.getElementById("historyContentArea");

            if (titleEl) titleEl.textContent = data.mainTitle;
            if (subEl) subEl.textContent = data.subtitle;
            if (searchInput) {
                searchInput.placeholder = lang === "ml"
                    ? "ചരിത്ര അധ്യായങ്ങൾ തിരയുക (ഉദാ: മുസിരിസ്, പട്ടണം, പാലിയം, നെടുങ്കോട്ട, EVM)..."
                    : "Search chapters (e.g., Muziris, Pattanam, Synagogue, Paliam, Nedumkotta, EVM)...";
            }

            // Filter chapters by search query
            var filtered = data.chapters.filter(function (ch) {
                if (!searchQuery) return true;
                var inTitle = ch.fullHeading.toLowerCase().indexOf(searchQuery) !== -1;
                var inBody = ch.paragraphs.some(function (p) {
                    return p.toLowerCase().indexOf(searchQuery) !== -1;
                });
                return inTitle || inBody;
            });

            // Render quick-jump pills
            if (pillsEl) {
                pillsEl.innerHTML = data.chapters.map(function (ch) {
                    return `<a class="chapterPill" href="#chapter-${ch.number}">${ch.number}. ${ch.title}</a>`;
                }).join("");
            }

            if (!bodyEl) return;

            if (filtered.length === 0) {
                bodyEl.innerHTML = `<div class="historyBookView" style="text-align:center;"><p>No chapters matched "<b>${searchQuery}</b>".</p></div>`;
                return;
            }

            if (currentView === "timeline") {
                bodyEl.innerHTML = `
                    <div class="historyTimeline">
                        ${filtered.map(function (ch) {
                            var meta = CHAPTER_META[ch.number] || { era_en: "Chapter " + ch.number, era_ml: "അധ്യായം " + ch.number, icon: "fa-history" };
                            var eraLabel = lang === "ml" ? meta.era_ml : meta.era_en;
                            return `
                                <article class="timelineNode" id="chapter-${ch.number}">
                                    <div class="timelineMarker">${ch.number}</div>
                                    <div class="timelineNodeHeader">
                                        <h2>${ch.number}. ${ch.title}</h2>
                                        <span class="timelineEraBadge"><i class="fas ${meta.icon}"></i> ${eraLabel}</span>
                                    </div>
                                    <div class="timelineBody">
                                        ${ch.paragraphs.map(function (p) { return `<p>${p}</p>`; }).join("")}
                                    </div>
                                </article>
                            `;
                        }).join("")}
                    </div>
                `;
            } else {
                bodyEl.innerHTML = `
                    <div class="historyBookView">
                        ${filtered.map(function (ch) {
                            var meta = CHAPTER_META[ch.number] || { era_en: "Chapter " + ch.number, era_ml: "അധ്യായം " + ch.number, icon: "fa-history" };
                            var eraLabel = lang === "ml" ? meta.era_ml : meta.era_en;
                            return `
                                <section class="bookChapter" id="chapter-${ch.number}">
                                    <span class="timelineEraBadge"><i class="fas ${meta.icon}"></i> ${eraLabel}</span>
                                    <h2>${ch.number}. ${ch.title}</h2>
                                    ${ch.paragraphs.map(function (p) { return `<p>${p}</p>`; }).join("")}
                                </section>
                            `;
                        }).join("")}
                    </div>
                `;
            }
        });
    }

    function initHistoryEvents() {
        var searchInput = document.getElementById("historySearchInput");
        if (searchInput) {
            searchInput.addEventListener("input", function (e) {
                searchQuery = e.target.value.toLowerCase().trim();
                renderHistoryPage();
            });
        }
        renderHistoryPage();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initHistoryEvents);
    } else {
        initHistoryEvents();
    }

    window.addEventListener("npLanguageChanged", function () {
        renderHistoryPage();
    });
})();
