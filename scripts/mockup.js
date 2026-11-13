// ============================================================================
// NorthParavur.in — Interactive Redesign Mockup Engine (scripts/mockup.js)
// ============================================================================

(function () {
    var currentView = "home";
    var currentLang = localStorage.getItem("np_lang") || "en";
    var historyLang = "en"; // Independent toggle inside History pane only
    var currentTheme = localStorage.getItem("np_theme") || "light";
    var explorerMode = "tourist";
    var activeTourCat = "All";
    var activeGalleryCat = "All";
    var activeWorshipCat = "All";
    var worshipDataCache = [];
    var newsFeedCache = { items: [], updatedAt: "" };
    var activePersonCat = "All";
    var activeNewsLang = "All";
    var activeNewsArea = "All";

    function makeMonogramSvg(initials, subtitle) {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="320" viewBox="0 0 400 320">' +
            '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f3d3e"/><stop offset="100%" stop-color="#196668"/></linearGradient></defs>' +
            '<rect width="400" height="320" fill="url(#g)"/>' +
            '<circle cx="200" cy="130" r="62" fill="rgba(224,168,76,0.18)" stroke="#e0a84c" stroke-width="2.5"/>' +
            '<text x="200" y="146" text-anchor="middle" font-family="Georgia,serif" font-size="44" font-weight="bold" fill="#fbbf24">' + initials + '</text>' +
            '<text x="200" y="242" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="600" letter-spacing="2" fill="#e2e8f0">' + subtitle.toUpperCase() + '</text>' +
            '</svg>';
        return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    function makeWorshipSvg(religion, name) {
        var palette = {
            Temple: { bg1: "#7c2d12", bg2: "#b45309", accent: "#fde68a", symbol: "&#x1F6D5;" },
            Church: { bg1: "#1e3a8a", bg2: "#1d4ed8", accent: "#bfdbfe", symbol: "&#x26EA;" },
            Mosque: { bg1: "#064e3b", bg2: "#047857", accent: "#a7f3d0", symbol: "&#x1F54C;" },
            Synagogue: { bg1: "#312e81", bg2: "#4338ca", accent: "#c7d2fe", symbol: "&#x1F54D;" }
        }[religion] || { bg1: "#0f3d3e", bg2: "#196668", accent: "#fde68a", symbol: "&#x2728;" };
        var shortName = (name || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").slice(0, 34);
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="480" height="300" viewBox="0 0 480 300">' +
            '<defs><linearGradient id="wg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="' + palette.bg1 + '"/><stop offset="100%" stop-color="' + palette.bg2 + '"/></linearGradient></defs>' +
            '<rect width="480" height="300" fill="url(#wg)"/>' +
            '<circle cx="240" cy="115" r="50" fill="rgba(255,255,255,0.12)" stroke="' + palette.accent + '" stroke-width="2"/>' +
            '<text x="240" y="132" text-anchor="middle" font-size="44">' + palette.symbol + '</text>' +
            '<text x="240" y="205" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#ffffff">' + shortName + '</text>' +
            '<text x="240" y="232" text-anchor="middle" font-family="sans-serif" font-size="12" letter-spacing="1.5" fill="' + palette.accent + '">' + (religion || "SACRED SITE").toUpperCase() + ' • PHOTO ARCHIVE PENDING</text>' +
            '</svg>';
        return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
    }

    var MUZIRIS_BOAT_SERVICE = {
        title: "Muziris Heritage Hop-On / Hop-Off Boat Service",
        operator: "Muziris Heritage Project (Kerala Tourism / KTIL)",
        hours: "9:00 AM – 5:00 PM",
        sessions: "Morning: 9:30 AM – 12:30 PM • Afternoon: 2:00 PM – 5:00 PM",
        img: "./img/tourism/kottapuram.jpg",
        fares: [
            { label: "Half-Day Cruise Package (24-Seater)", price: "₹399 / person" },
            { label: "Heritage Cluster Cruise (Adults / Students / Seniors)", price: "₹330 – ₹660 / person" },
            { label: "6-Seater AC Water Taxi (Hourly)", price: "₹3,570 / hour" },
            { label: "Full-Day Group Charter (up to 24 pax)", price: "₹22,000 / group" }
        ],
        jetties: [
            "Kottappuram Fort & Boat Jetty",
            "Paliam Palace & Nalukettu (Chendamangalam)",
            "Paravur Jewish Synagogue",
            "Kottayil Kovilakom",
            "Pattanam Archaeological Site",
            "Gothuruth / Azheekkal"
        ],
        note: "Tickets are issued at the Kottappuram and Paravur Muziris boat jetty counters. Timings and boat availability may vary seasonally or with weather."
    };

    var activeEventCat = "All";

    function isRecentNews(item) {
        if (!item || !item.published) return true;
        var dt = new Date(item.published);
        if (isNaN(dt.getTime())) return true;
        var cutoff = Date.now() - (60 * 24 * 60 * 60 * 1000); // 2 months (60 days)
        return dt.getTime() >= cutoff;
    }

    var LOCAL_EVENTS = [
        {
            id: "ev1",
            cat: "Boat Race & Coastal",
            name: "Gothuruth Boat Race (Chundan Vallam)",
            timing: "September (Onam Season)",
            venue: "Periyar River, Gothuruth, North Paravur",
            img: "./img/gallery/boat_small.jpg",
            summary: "Centuries-old traditional snake boat race along the Periyar backwaters at Gothuruth, drawing teams and spectators from across Ernakulam.",
            details: "Hosted annually during the Onam season on the Periyar river stretch at Gothuruth, this historic jalotsavam features Chundan Vallams and Iruttukuthi boats alongside cultural processions."
        },
        {
            id: "ev2",
            cat: "Festivals & Culture",
            name: "Dakshina Mookambika Navaratri & Vidyarambham",
            timing: "September – October (Annual)",
            venue: "Dakshina Mookambika Temple, North Paravur",
            img: "./img/directory/worship/dakshina_mookambika.jpg",
            summary: "Ten-day Navaratri music & dance festival culminating in Vidyarambham for thousands of children.",
            details: "One of Kerala's premier Saraswathi shrines hosts classical music concerts, Pancharathna Keerthana recitals, and auspicious Vidyarambham ceremonies in the heart of Paravur."
        },
        {
            id: "ev3",
            cat: "Festivals & Culture",
            name: "Kottakkavu Mar Thoma Pilgrim Church Perunnal",
            timing: "January / November (Annual Feast)",
            venue: "Kottakkavu, North Paravur",
            img: "./img/directory/worship/kottakkavu_church.jpg",
            summary: "Historic annual feast celebrating the 52 AD church founded by St. Thomas the Apostle.",
            details: "Pilgrims gather from across Kerala for solemn liturgical processions, heritage exhibitions, and traditional festivities at one of India's oldest Christian shrines."
        },
        {
            id: "ev4",
            cat: "Festivals & Culture",
            name: "Muziris Paithrukolsavam & Chendamangalam Handloom Expo",
            timing: "December – January",
            venue: "Chendamangalam & Paravur Heritage Circuit",
            img: "./img/gallery/paithrkolsavam_small.jpg",
            summary: "Heritage arts festival and GI-tagged Chendamangalam handloom weaver showcase.",
            details: "Showcases traditional weavers' co-operatives, folk performances, and guided heritage walks connecting Paliam Kovilakom, Synagogues, and Kottayil Kovilakom."
        },
        {
            id: "ev5",
            cat: "Boat Race & Coastal",
            name: "Cherai Beach & Munambam Coastal Carnival",
            timing: "December – January (Winter Season)",
            venue: "Cherai Beach & Munambam Harbour",
            img: "./img/tourism/cherai_small.jpg",
            summary: "Sunset cultural evenings, beach sports, and coastal seafood stalls along Cherai–Munambam.",
            details: "Seasonal coastal tourism gatherings along the Cherai promenade and Munambam beach with local crafts, music, and backwater boat rides."
        }
    ];

    // Chronologically ordered by birth / living era (Earliest to Present)
    var PERSONALITIES = [
        {
            id: 10,
            cat: "Politics & Heritage",
            name: "Paliath Raman Valiyachan",
            life: "18th – 19th Century",
            role: "Hereditary Prime Minister (Sarvadhikaryakkar) of Cochin",
            badge: "Royal Heritage",
            photo: "./img/tourism/paliyam_small.jpg",
            bio: "Head of the noble Paliam family of Chendamangalam, North Paravur, who served as hereditary Prime Ministers of the Kingdom of Cochin and shaped central Kerala's diplomacy and temple/synagogue patronage.",
            wiki: "https://en.wikipedia.org/wiki/Paliath_Achan"
        },
        {
            id: 4,
            cat: "Literature & Journalism",
            name: "Kesari Balakrishna Pillai",
            life: "1889 – 1960",
            role: "Pioneering Journalist, Art & Literary Critic, Progressive Thinker",
            badge: "Literature & Journalism",
            photo: "./img/personals/kesari.jpg",
            bio: "Founder of the influential newspaper 'Kesari' and one of the foremost pillars of modern Malayalam literary criticism, who introduced modern European literary trends to Malayalam literature and spent his later years at Madathumpady in North Paravur.",
            wiki: "https://en.wikipedia.org/wiki/Kesari_Balakrishna_Pillai"
        },
        {
            id: 2,
            cat: "Politics & Heritage",
            name: "Paravoor T. K. Narayana Pillai",
            life: "1890 – 1971",
            role: "Freedom Fighter & First Chief Minister of Travancore-Cochin",
            badge: "Statesman",
            photo: "./img/personals/paravurtk.jpg",
            bio: "Born in North Paravur, Paravoor T. K. Narayana Pillai served as the last Prime Minister of Travancore and became the first Chief Minister of Travancore-Cochin upon its formation in 1949.",
            wiki: "https://en.wikipedia.org/wiki/Paravoor_T._K._Narayana_Pillai"
        },
        {
            id: 12,
            cat: "Literature & Journalism",
            name: "Kuttipuzha Krishna Pillai",
            life: "1900 – 1971",
            role: "Literary Critic, Essayist & Rationalist Thinker",
            badge: "Literature & Journalism",
            photo: "./img/personals/kuttipuzha_krishna_pillai.png",
            bio: "A noted Malayalam literary critic, essayist, and rationalist thinker from Paravur Taluk who significantly shaped modern Malayalam literary criticism.",
            wiki: "https://en.wikipedia.org/wiki/Kuttipuzha_Krishna_Pillai"
        },
        {
            id: 13,
            cat: "Literature & Journalism",
            name: "M. P. Paul",
            life: "1904 – 1952",
            role: "Literary Critic, Educator & Co-founder of SPCS",
            badge: "Literature & Journalism",
            photo: makeMonogramSvg("MP", "Literary Critic • SPCS Founder"),
            bio: "An influential Malayalam literary critic, educator, and founder of the Sahithya Pravarthaka Co-operative Society (SPCS), transforming Malayalam publishing and literary criticism.",
            wiki: "https://en.wikipedia.org/wiki/M._P._Paul"
        },
        {
            id: 14,
            cat: "Literature & Journalism",
            name: "P. Kesavadev",
            life: "1904 – 1983",
            role: "Novelist & Social Reformer (Odayil Ninnu)",
            badge: "Literature & Journalism",
            photo: "./img/personals/p_kesavadev.jpg",
            bio: "Born in Kedamangalam near North Paravur, P. Kesavadev was a celebrated Malayalam novelist, playwright, and social reformer renowned for progressive classics like 'Odayil Ninnu' and 'Ayalkkar'.",
            wiki: "https://en.wikipedia.org/wiki/P._Kesavadev"
        },
        {
            id: 5,
            cat: "Cinema & Arts",
            name: "Sankaradi (Chandrasekhara Menon)",
            life: "1924 – 2001",
            role: "Veteran Film Actor (700+ Films)",
            badge: "Cinema",
            photo: "./img/personals/Sankaradi.jpg",
            bio: "Born in Cherai, North Paravur, Sankaradi was one of Malayalam cinema's most iconic character actors, acting in over 700 films and pioneering naturalistic performances.",
            wiki: "https://en.wikipedia.org/wiki/Sankaradi"
        },
        {
            id: 7,
            cat: "Cinema & Arts",
            name: "Kedamangalam Sadanandan",
            life: "1926 – 2008",
            role: "Kadhaprasangam Maestro, Lyricist & Actor",
            badge: "Performing Arts",
            photo: "./img/personals/kedamangalam.jpg",
            bio: "Performed Kadhaprasangam across more than 15,000 stages over 64 years, and wrote scripts and lyrics for over 100 Malayalam films.",
            wiki: "https://en.wikipedia.org/wiki/Kedamangalam_Sadanandan"
        },
        {
            id: 8,
            cat: "Cinema & Arts",
            name: "Paravoor Bharathan",
            life: "1929 – 2015",
            role: "Veteran Malayalam Film Actor (300+ Films)",
            badge: "Cinema",
            photo: "./img/personals/bharathan.jpg",
            bio: "Hailing from Moothakunnam, North Paravur, Paravoor Bharathan graced over 300 Malayalam films since the 1950s with memorable character and comedy roles.",
            wiki: "https://en.wikipedia.org/wiki/Paravoor_Bharathan"
        },
        {
            id: 9,
            cat: "Sports & Tech",
            name: "G. A. Menon",
            life: "1931 – 2003",
            role: "Tech Entrepreneur (Founder, UST Global & Toonz Animation)",
            badge: "Global Tech",
            photo: "./img/personals/gamenon.jpg",
            bio: "Visionary US-based entrepreneur born in North Paravur who founded landmark Kerala IT and animation companies UST Global and Toonz Animation.",
            wiki: "https://en.wikipedia.org/wiki/G._A._Menon"
        },
        {
            id: 15,
            cat: "Sports & Tech",
            name: "Pappan",
            life: "20th Century",
            role: "Noted Volleyball Player from Paravur Taluk",
            badge: "Sports • Volleyball",
            photo: makeMonogramSvg("PP", "Volleyball • Paravur Taluk"),
            bio: "A noted volleyball player from Paravur Taluk who gained wide recognition in the sport and inspired generations of local athletes.",
            wiki: "https://en.wikipedia.org/wiki/Paravur_taluk"
        },
        {
            id: 16,
            cat: "Literature & Journalism",
            name: "Paravur Lathika Nair",
            life: "Contemporary",
            role: "Poet, Lyricist & Educator",
            badge: "Literature & Poetry",
            photo: makeMonogramSvg("LN", "Poet • Lyricist • Educator"),
            bio: "A Malayalam poet, lyricist, and educator from North Paravur known for several acclaimed Malayalam poetry collections and cultural contributions.",
            wiki: "https://www.nairs.in/bio_l.htm"
        },
        {
            id: 11,
            cat: "Politics & Heritage",
            name: "V. K. Ebrahimkunju",
            life: "1952 – 2026",
            role: "Former Kerala Minister for Public Works & Industries",
            badge: "Public Service",
            photo: "./img/personals/vk_ebrahimkunju.jpg",
            bio: "Born in Alangad, Paravur Taluk, he represented Mattancherry and Kalamassery in the Kerala Legislative Assembly and served as Minister for Public Works and Industries.",
            wiki: "https://en.wikipedia.org/wiki/V._K._Ebrahimkunju"
        },
        {
            id: 1,
            cat: "Politics & Heritage",
            name: "V. D. Satheesan",
            life: "1964 – Present",
            role: "Chief Minister of Kerala • MLA North Paravur (Since 2001)",
            badge: "Chief Minister",
            photo: "./img/personals/vds.jpg",
            bio: "Vadassery Damodaran Satheesan is an Indian statesman serving as the Chief Minister of Kerala and representing the North Paravur Assembly constituency continuously since 2001. Known for his parliamentary acumen, disaster-relief leadership during the 2018 floods ('Punarjani' housing initiative in Paravur), and policy advocacy.",
            wiki: "https://en.wikipedia.org/wiki/V._D._Satheesan"
        },
        {
            id: 6,
            cat: "Cinema & Arts",
            name: "Salim Kumar",
            life: "1969 – 2026",
            role: "National Award-Winning Actor & Director",
            badge: "National Award",
            photo: "./img/personals/salim.jpg",
            bio: "Born in Chittattukara, North Paravur, Salim Kumar won the National Film Award for Best Actor (2010) for 'Adaminte Makan Abu' and was celebrated across Malayalam cinema for both dramatic and comic roles.",
            wiki: "https://en.wikipedia.org/wiki/Salim_Kumar"
        },
        {
            id: 3,
            cat: "Cinema & Arts",
            name: "Sithara Krishnakumar",
            life: "1986 – Present",
            role: "Playback Singer & Composer (Kerala State Award Winner)",
            badge: "Music",
            photo: "./img/personals/sithara_krishnakumar.jpg",
            bio: "Acclaimed Indian playback singer and composer raised in Maliankara, North Paravur. Recipient of multiple Kerala State Film Awards for Best Playback Singer and celebrated across Malayalam, Tamil, and Telugu cinema.",
            wiki: "https://en.wikipedia.org/wiki/Sithara_(singer)"
        }
    ];

    var EXPANDED_GALLERY = [
        { id: "g1", cat: "Heritage & Worship", name: "Dakshina Mookambika Temple, North Paravur", img: "./img/directory/worship/dakshina_mookambika.jpg" },
        { id: "g2", cat: "Heritage & Worship", name: "Peruvaram Mahadeva Temple", img: "./img/directory/worship/peruvaram_temple.jpg" },
        { id: "g3", cat: "Heritage & Worship", name: "Kottakkavu Mar Thoma Pilgrim Church (52 AD)", img: "./img/directory/worship/kottakkavu_church.jpg" },
        { id: "g4", cat: "Heritage & Worship", name: "Our Lady of Mount Carmel & St. Joseph Church, Varapuzha", img: "./img/directory/worship/varapuzha_church.jpg" },
        { id: "g5", cat: "Heritage & Worship", name: "Paravur Jewish Synagogue (1615 AD)", img: "./img/directory/worship/paravur_synagogue.jpg" },
        { id: "g6", cat: "Heritage & Worship", name: "Chendamangalam Synagogue", img: "./img/directory/worship/chendamangalam_synagogue.jpg" },
        { id: "g7", cat: "Heritage & Worship", name: "Cheraman Juma Masjid (629 AD)", img: "./img/directory/worship/cheraman_masjid.jpg" },
        { id: "g8", cat: "Heritage & Worship", name: "Our Lady of Snows Basilica, Pallippuram", img: "./img/directory/worship/manjumatha_basilica.jpg" },
        { id: "g9", cat: "Heritage & Worship", name: "Paliam Kovilakom Palace, Chendamangalam", img: "./img/tourism/paliyam_small.jpg" },
        { id: "g10", cat: "Heritage & Worship", name: "Pallippuram Portuguese Fort (1503 AD)", img: "./img/tourism/pallipuram_small.jpg" },
        { id: "g11", cat: "Beaches & Backwaters", name: "Cherai Beach Golden Coast", img: "./img/tourism/cherai_small.jpg" },
        { id: "g12", cat: "Beaches & Backwaters", name: "Munambam Muziris Beach & Harbour", img: "./img/gallery/munambam_small.jpg" },
        { id: "g13", cat: "Beaches & Backwaters", name: "Kadamakudy Pokkali Islands", img: "./img/gallery/kadamakudy_small.jpg" },
        { id: "g14", cat: "Beaches & Backwaters", name: "Kuzhuppilly Backwaters", img: "./img/gallery/kuzhuppilli_small.jpg" },
        { id: "g15", cat: "Beaches & Backwaters", name: "Muziris Hop-On Hop-Off Boat Cruise", img: "./img/gallery/muziris_small.jpg" },
        { id: "g16", cat: "Beaches & Backwaters", name: "Matsyafed Njarakkal Aqua Tourism", img: "./img/tourism/njarakkal_small.jpg" },
        { id: "g17", cat: "Culture & Town", name: "Gothuruth Boat Race", img: "./img/gallery/boat_small.jpg" },
        { id: "g18", cat: "Culture & Town", name: "North Paravur Sessions Court", img: "./img/gallery/court_small.jpg" },
        { id: "g19", cat: "Culture & Town", name: "North Paravur Evening Market", img: "./img/gallery/market_small.jpg" },
        { id: "g20", cat: "Culture & Town", name: "North Paravur Paithrikolsavam", img: "./img/gallery/paithrkolsavam_small.jpg" },
        { id: "g21", cat: "Culture & Town", name: "Valuthattu Temple Theyyam", img: "./img/gallery/theyyam_small.jpg" },
        { id: "g22", cat: "Culture & Town", name: "Varapuzha Bridge Panorama", img: "./img/gallery/varapuzha_small.jpg" }
    ];

    function weatherLabel(code) {
        if (code >= 95) return { icon: "fa-bolt", text: "Thunderstorm" };
        if (code >= 51) return { icon: "fa-cloud-rain", text: "Rain" };
        if (code >= 2) return { icon: "fa-cloud-sun", text: "Partly Cloudy" };
        return { icon: "fa-sun", text: "Clear" };
    }

    // 1. Live Temperature + Next 7 Days Forecast in Header (Open-Meteo API)
    function loadHeaderWeather() {
        var el = document.getElementById("headerTempText");
        var listEl = document.getElementById("forecastList");
        if (!el) return;
        fetch("https://api.open-meteo.com/v1/forecast?latitude=10.14&longitude=76.23&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia%2FKolkata&forecast_days=7")
            .then(function (r) { return r.json(); })
            .then(function (data) {
                if (data && data.current && typeof data.current.temperature_2m !== "undefined") {
                    var temp = Math.round(data.current.temperature_2m);
                    var cur = weatherLabel(data.current.weather_code);
                    el.textContent = temp + "°C • " + cur.text + " • N. Paravur";
                }
                if (listEl && data && data.daily && data.daily.time) {
                    listEl.innerHTML = data.daily.time.map(function (dateStr, idx) {
                        var d = new Date(dateStr + "T00:00:00");
                        var dayName = idx === 0 ? "Today" : d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
                        var info = weatherLabel(data.daily.weather_code[idx]);
                        var maxT = Math.round(data.daily.temperature_2m_max[idx]);
                        var minT = Math.round(data.daily.temperature_2m_min[idx]);
                        return `
                            <div class="forecastRow">
                                <span style="font-weight:${idx === 0 ? '800' : '600'};">${dayName}</span>
                                <span style="color:var(--text-secondary);"><i class="fas ${info.icon}" style="color:#f59e0b;"></i> ${info.text}</span>
                                <span style="font-weight:700; color:var(--brand-primary);">${minT}° / ${maxT}°C</span>
                            </div>`;
                    }).join("");
                }
            })
            .catch(function () {
                el.textContent = "30°C • Coastal Breeze • N. Paravur";
                if (listEl) {
                    listEl.innerHTML = `<div class="forecastRow"><span>Today</span><span>Clear</span><span>25° / 31°C</span></div>`;
                }
            });
    }

    // 2. Theme & Language
    function applyTheme(t) {
        currentTheme = t;
        document.documentElement.setAttribute("data-theme", t);
        localStorage.setItem("np_theme", t);
        var btn = document.getElementById("mockThemeBtn");
        if (btn) {
            btn.innerHTML = t === "dark"
                ? '<i class="fas fa-sun" style="color:#fbbf24;"></i> Light'
                : '<i class="fas fa-moon"></i> Dark';
        }
    }

    window.toggleMockTheme = function () {
        applyTheme(currentTheme === "dark" ? "light" : "dark");
    };

    window.toggleMockLang = function () {
        currentLang = currentLang === "en" ? "ml" : "en";
        localStorage.setItem("np_lang", currentLang);
        var btn = document.getElementById("mockLangBtn");
        if (btn) {
            btn.innerHTML = currentLang === "en"
                ? '<i class="fas fa-language"></i> മലയാളം'
                : '<i class="fas fa-language"></i> English';
        }
        // Note: Global dialect change intentionally does NOT alter History story language!
        if (currentView !== "history") {
            renderView();
        }
    };

    window.setHistoryLang = function (lang) {
        historyLang = lang;
        if (currentView === "history") {
            renderView();
        }
    };

    var VALID_VIEWS = ["home", "news", "events", "history", "tourism", "personalities", "taluk", "gallery", "worship", "directory"];

    window.switchView = function (view, skipHash) {
        if (VALID_VIEWS.indexOf(view) === -1) view = "home";
        currentView = view;
        document.querySelectorAll(".navTab").forEach(function (b) {
            b.classList.toggle("activeNav", b.getAttribute("data-view") === view);
        });
        if (!skipHash && window.history && window.history.replaceState) {
            window.history.replaceState(null, "", "#" + view);
        }
        renderView();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // 3. Modal Popup Engine
    window.openMockModal = function (opts) {
        var modal = document.getElementById("mockModal");
        var content = document.getElementById("mockModalInner");
        if (!modal || !content) return;
        var imgClass = opts.portrait ? "modalHeroImg portrait" : "modalHeroImg";
        content.innerHTML = `
            <button class="modalClose" onclick="closeMockModal()" aria-label="Close">&times;</button>
            ${opts.img ? `<img class="${imgClass}" src="${opts.img}" alt="${opts.title}">` : ""}
            <div class="modalBody">
                ${opts.badge ? `<span class="tileBadge">${opts.badge}</span>` : ""}
                <h2>${opts.title}</h2>
                ${opts.meta ? `<p style="font-size:13px; color:var(--text-muted); margin:0 0 12px 0; font-weight:600;">${opts.meta}</p>` : ""}
                <div style="font-size:14.5px; line-height:1.75; color:var(--text-primary);">${opts.body}</div>
                <div class="modalActions">${opts.actions || ""}</div>
            </div>
        `;
        modal.classList.add("open");
    };

    window.closeMockModal = function () {
        var modal = document.getElementById("mockModal");
        if (modal) modal.classList.remove("open");
    };

    // 4. Views
    function renderHome() {
        var db = window.NP_MASTER_DATA;
        var d = db.directory;
        var nh = db.nh66Progress;
        var bus = db.busTimings;

        var explorerItems = explorerMode === "tourist"
            ? (db.tourism || []).slice(0, 6).map(function (p) {
                return `
                    <div class="tileCard" onclick='openTourModal(${JSON.stringify(p.id)})'>
                        <img class="tileImg" src="./${p.photosmall}" alt="${p.name}" loading="lazy">
                        <div class="tileBody">
                            <div>
                                <span class="tileBadge">${p.badge || p.category}</span>
                                <h4 class="tileTitle">${currentLang === "ml" && p.name_ml ? p.name_ml : p.name}</h4>
                            </div>
                            <p class="tileSub"><i class="fas fa-route"></i> ${p.distance} &bull; Click for details</p>
                        </div>
                    </div>`;
            }).join("")
            : [
                { title: "Temples, Churches & Mosques", count: "35 Sites", img: "./img/directory/worship/dakshina_mookambika.jpg", view: "worship" },
                { title: "Resorts, Hotels & Bars", count: "16 Stays", img: "./img/directory/hotels/cheraibeachresort.jpg", href: "./pages/directory/hotels.html" },
                { title: "Hospitals & Clinics", count: "13 Centres", img: "./img/directory/hospitals/donbosco.jpg", href: "./pages/directory/hospitals.html" },
                { title: "Police, Fire & Govt. Offices", count: "19 Offices", img: "./img/directory/office/office.jpg", href: "./pages/directory/offices.html" },
                { title: "Schools (State & CBSE)", count: "21 Schools", img: "./img/directory/schools/snhss.jpg", href: "./pages/directory/schools.html" },
                { title: "Colleges & Institutes", count: "16 Colleges", img: "./img/directory/colleges/snm.jpg", href: "./pages/directory/colleges.html" }
            ].map(function (h) {
                var clickAttr = h.view ? `onclick="switchView('${h.view}')"` : `onclick="window.location.href='${h.href}'"`;
                return `
                    <div class="tileCard" ${clickAttr}>
                        <img class="tileImg" src="${h.img}" alt="${h.title}" loading="lazy">
                        <div class="tileBody">
                            <div>
                                <span class="tileBadge">${h.count}</span>
                                <h4 class="tileTitle">${h.title}</h4>
                            </div>
                            <p class="tileSub">Open verified directory &rarr;</p>
                        </div>
                    </div>`;
            }).join("");

        var nhBars = nh.segments.slice(0, 4).map(function (s) {
            var color = s.percent >= 90 ? "#16a34a" : (s.percent >= 75 ? "#d97706" : "#0284c7");
            return `
                <div class="progWrap">
                    <div class="progHeader">
                        <span>${s.segment.split(" & ")[0]}</span>
                        <span style="color:${color};">${s.percent}%</span>
                    </div>
                    <div class="progTrack"><div class="progFill" style="width:${s.percent}%; background:${color};"></div></div>
                </div>`;
        }).join("");

        return `
        <div class="threeColGrid">
            <!-- LEFT RAIL: Muziris Boat, Emergency & Quick Facts -->
            <aside class="stickyRail">
                <div class="panelCard">
                    <h3 class="panelTitle"><span><i class="fas fa-ship"></i> Muziris Boat (Hop-Off)</span><span class="countPill">₹330+</span></h3>
                    <p style="font-size:12.5px; color:var(--text-secondary); margin:0 0 6px 0;"><b>Hours:</b> ${MUZIRIS_BOAT_SERVICE.hours}</p>
                    <p style="font-size:12.5px; color:var(--text-secondary); margin:0 0 6px 0;"><b>Cruises:</b> 9:30 AM &bull; 2:00 PM</p>
                    <p style="font-size:12.5px; color:var(--text-secondary); margin:0 0 10px 0;"><b>Stops:</b> Kottappuram &harr; Paliam &harr; Paravur Synagogue</p>
                    <button class="pillBtn active" style="width:100%; justify-content:center;" onclick="openMuzirisBoatModal()"><i class="fas fa-ticket-alt"></i> Timings, Fares &amp; Jetties</button>
                </div>

                <div class="panelCard">
                    <h3 class="panelTitle"><span><i class="fas fa-phone-alt"></i> 24x7 Emergency</span></h3>
                    <div class="emergRow"><span>Police Station</span><a href="tel:+914842445525">0484 2445525</a></div>
                    <div class="emergRow"><span>Fire &amp; Rescue</span><a href="tel:+914842443101">0484 2443101</a></div>
                    <div class="emergRow"><span>Taluk Hospital</span><a href="tel:+914842444438">0484 2444438</a></div>
                    <div class="emergRow"><span>KSRTC Enquiry</span><a href="tel:+914842444439">0484 2444439</a></div>
                    <div class="emergRow"><span>KSEB Paravur</span><a href="tel:+914842442322">0484 2442322</a></div>
                </div>

                <div class="panelCard">
                    <h3 class="panelTitle"><span><i class="fas fa-calendar-alt"></i> Local Events</span><span class="countPill">${LOCAL_EVENTS.length}</span></h3>
                    ${LOCAL_EVENTS.slice(0, 3).map(function (ev) {
                        return `<div onclick="openEventModal('${ev.id}')" style="cursor:pointer; padding:7px 0; border-bottom:1px dashed var(--border-color);">
                            <div style="font-weight:700; font-size:12.5px; color:var(--text-primary); line-height:1.35;">${ev.name}</div>
                            <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">${ev.timing}</div>
                        </div>`;
                    }).join("")}
                    <button class="pillBtn active" style="width:100%; justify-content:center; margin-top:10px;" onclick="switchView('events')"><i class="fas fa-calendar-alt"></i> All Events &rarr;</button>
                </div>
            </aside>

            <!-- CENTER MAIN STAGE -->
            <section>
                <div class="compactHero" style="background-image: linear-gradient(120deg, rgba(11,36,38,0.88), rgba(15,61,62,0.78)), url('./img/home.JPG');">
                    <span class="tileBadge" style="background:rgba(255,255,255,0.18); color:#fbbf24;">Ancient Port of Muziris &bull; Est. 52 BC &bull; KL-42</span>
                    <h1>${currentLang === "ml" ? "നോർത്ത് പറവൂർ — മുസിരിസിന്റെ കവാടം" : "Discover North Paravur"}</h1>
                    <p>${currentLang === "ml"
                        ? "ചരിത്രവും വിനോദസഞ്ചാരവും പ്രാദേശിക സേവനങ്ങളും ഒരൊറ്റ പോർട്ടലിൽ."
                        : "Clean, organized access to Muziris heritage, Cherai beaches, local businesses, bus timings, and civic services."}</p>
                    <div class="searchBarWrap">
                        <div class="searchBox">
                            <i class="fas fa-search"></i>
                            <input id="mockSearchInput" type="search" placeholder="Search Cherai, Synagogue, Hospital, Bus, V. D. Satheesan..." autocomplete="off">
                        </div>
                        <div id="mockSearchDrop" class="searchDropdown"></div>
                    </div>
                </div>

                <div class="panelCard" style="margin-bottom:20px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
                        <h2 style="margin:0; font-family:'Cinzel',serif; font-size:20px; color:var(--brand-primary);">
                            ${explorerMode === "tourist" ? "Top Heritage & Tourist Tiles" : "Local Business & Civic Hubs"}
                        </h2>
                        <div style="display:flex; gap:8px;">
                            <button class="pillBtn ${explorerMode === 'tourist' ? 'active' : ''}" onclick="setExplorerMode('tourist')"><i class="fas fa-umbrella-beach"></i> Tourists</button>
                            <button class="pillBtn ${explorerMode === 'local' ? 'active' : ''}" onclick="setExplorerMode('local')"><i class="fas fa-building"></i> Locals &amp; Business</button>
                        </div>
                    </div>
                    <div class="tilesGrid" style="grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));">
                        ${explorerItems}
                    </div>
                </div>

                <div class="panelCard" style="margin-bottom:20px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
                        <h2 style="margin:0; font-family:'Cinzel',serif; font-size:20px; color:var(--brand-primary);">
                            <i class="fas fa-newspaper"></i> Latest Local News (Last 2 Months)
                        </h2>
                        <button class="pillBtn active" onclick="switchView('news')">All Headlines &rarr;</button>
                    </div>
                    ${(newsFeedCache.items || []).filter(isRecentNews).slice(0, 4).map(function (n) {
                        return `<a href="${n.link}" target="_blank" rel="noopener" style="display:flex; justify-content:space-between; align-items:center; gap:12px; padding:10px 0; border-bottom:1px dashed var(--border-color); text-decoration:none; color:inherit;">
                            ${n.thumb ? `<img src="${n.thumb}" alt="${n.area}" loading="lazy" style="width:54px; height:54px; border-radius:8px; object-fit:cover; flex-shrink:0;">` : ""}
                            <div style="flex:1; min-width:0;">
                                <div style="font-weight:700; font-size:14px; color:var(--text-primary); line-height:1.35;">${n.title}</div>
                                <div style="font-size:12px; color:var(--text-muted); margin-top:3px;">${n.source} &bull; ${n.dateLabel}</div>
                            </div>
                            <span class="countPill" style="flex-shrink:0;">${n.area}</span>
                        </a>`;
                    }).join("") || '<p style="font-size:13px; color:var(--text-muted); margin:0;">Loading North Paravur Taluk headlines...</p>'}
                </div>

                <div class="panelCard">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
                        <h2 style="margin:0; font-family:'Cinzel',serif; font-size:20px; color:var(--brand-primary);">
                            <i class="fas fa-calendar-alt"></i> Festivals &amp; Local Events
                        </h2>
                        <button class="pillBtn active" onclick="switchView('events')">All ${LOCAL_EVENTS.length} Events &rarr;</button>
                    </div>
                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap:12px;">
                        ${LOCAL_EVENTS.slice(0, 3).map(function (ev) {
                            return `<div class="tileCard" onclick="openEventModal('${ev.id}')">
                                <img class="tileImg" src="${ev.img}" alt="${ev.name}" loading="lazy">
                                <div class="tileBody">
                                    <div>
                                        <span class="tileBadge">${ev.timing}</span>
                                        <h4 class="tileTitle">${ev.name}</h4>
                                    </div>
                                    <p class="tileSub">${ev.venue}</p>
                                </div>
                            </div>`;
                        }).join("")}
                    </div>
                </div>
            </section>

            <!-- RIGHT RAIL: NH-66 Live News & Transit -->
            <aside class="stickyRail rightRail">
                <div class="panelCard">
                    <h3 class="panelTitle"><span><i class="fas fa-road"></i> NH-66 Updates</span><span class="countPill">Live Feed</span></h3>
                    ${(newsFeedCache.nh66Items || []).slice(0, 3).map(function (n) {
                        return `<a href="${n.link}" target="_blank" rel="noopener" style="display:block; padding:7px 0; border-bottom:1px dashed var(--border-color); text-decoration:none; color:inherit;">
                            <div style="font-weight:700; font-size:12.5px; color:var(--text-primary); line-height:1.35;">${n.title}</div>
                            <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">${n.source} &bull; ${n.dateLabel}</div>
                        </a>`;
                    }).join("") || '<p style="font-size:12.5px; color:var(--text-muted); margin:0 0 8px 0;">Loading NH-66 Ernakulam &amp; Kodungallur news...</p>'}
                    <button class="pillBtn active" style="width:100%; justify-content:center; margin-top:10px;" onclick="switchView('news')"><i class="fas fa-newspaper"></i> All NH-66 News &rarr;</button>
                </div>

                <div class="panelCard">
                    <h3 class="panelTitle"><span><i class="fas fa-bus"></i> Bus Stand Frequency</span></h3>
                    ${bus.routes.slice(0, 4).map(function (r) {
                        return `<div style="padding:7px 0; border-bottom:1px dashed var(--border-color); font-size:12.5px;">
                            <div style="font-weight:700; color:var(--text-primary);">${r.route.replace("North Paravur ↔ ", "To ")}</div>
                            <div style="color:var(--text-secondary);">${r.frequency} (${r.firstBus} – ${r.lastBus})</div>
                        </div>`;
                    }).join("")}
                </div>
            </aside>
        </div>`;
    }

    function renderTourism() {
        var list = (window.NP_MASTER_DATA && window.NP_MASTER_DATA.tourism) || [];
        var cats = ["All", "Muziris Heritage", "Beaches & Backwaters", "Pilgrim & Heritage", "Backwaters & Eco-Tourism"];
        var filtered = list.filter(function (p) { return activeTourCat === "All" || p.category === activeTourCat; });

        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <h2 style="margin:0 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary);">Explore Muziris &amp; Cherai (Click any tile for full details)</h2>
                <p style="margin:0 0 14px 0; font-size:14px; color:var(--text-secondary);">Clean tile view — click any destination to open its history, high-res photo, and Google Maps directions in a popup.</p>
                <div class="filterRow" style="margin-bottom:0;">
                    ${cats.map(function (c) {
                        return `<button class="pillBtn ${activeTourCat === c ? 'active' : ''}" onclick="setTourCat('${c}')">${c}</button>`;
                    }).join("")}
                </div>
            </div>
            <div class="panelCard" style="margin-bottom:18px; border-left:4px solid var(--brand-primary); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:14px;">
                <img src="${MUZIRIS_BOAT_SERVICE.img}" alt="Muziris Heritage Hop-On Hop-Off Boat Service" loading="lazy" style="width:140px; height:96px; border-radius:10px; object-fit:cover; flex-shrink:0;">
                <div style="flex:1; min-width:240px;">
                    <span class="tileBadge"><i class="fas fa-ship"></i> Hop-On / Hop-Off Water Cruise</span>
                    <h3 style="margin:4px 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary); font-size:18px;">${MUZIRIS_BOAT_SERVICE.title}</h3>
                    <p style="margin:0 0 6px 0; font-size:13.5px; color:var(--text-secondary);">
                        <b>Timings:</b> ${MUZIRIS_BOAT_SERVICE.hours} (${MUZIRIS_BOAT_SERVICE.sessions})
                    </p>
                    <p style="margin:0; font-size:13.5px; color:var(--text-secondary);">
                        <b>Fares:</b> Half-Day Cruise ₹399 &bull; Cluster Cruise ₹330–₹660 &bull; AC Water Taxi ₹3,570/hr
                    </p>
                </div>
                <button class="actionBtn" onclick="openMuzirisBoatModal()"><i class="fas fa-info-circle"></i> Boat Schedule, Fares &amp; Jetties</button>
            </div>
            <div class="tilesGrid">
                ${filtered.map(function (p) {
                    return `
                        <div class="tileCard" onclick="openTourModal('${p.id}')">
                            <img class="tileImg" src="./${p.photosmall}" alt="${p.name}" loading="lazy">
                            <div class="tileBody">
                                <div>
                                    <span class="tileBadge">${p.badge || p.category}</span>
                                    <h4 class="tileTitle">${currentLang === "ml" && p.name_ml ? p.name_ml : p.name}</h4>
                                </div>
                                <p class="tileSub"><i class="fas fa-map-marker-alt"></i> ${p.distance} from Town</p>
                            </div>
                        </div>`;
                }).join("")}
            </div>`;
    }

    function renderPersonalities() {
        var cats = ["All", "Literature & Journalism", "Politics & Heritage", "Cinema & Arts", "Sports & Tech"];
        var filtered = PERSONALITIES.filter(function (p) {
            return activePersonCat === "All" || p.cat === activePersonCat;
        });
        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <h2 style="margin:0 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary);">Prominent Personalities from North Paravur (${PERSONALITIES.length} Profiles)</h2>
                <p style="margin:0 0 14px 0; font-size:14px; color:var(--text-secondary);">Ordered chronologically from 18th-century Paliath Raman Valiyachan to literary pioneers, Chief Minister V. D. Satheesan, and modern icons. Click any tile to read full biography.</p>
                <div class="filterRow" style="margin-bottom:0;">
                    ${cats.map(function (c) {
                        var count = c === "All" ? PERSONALITIES.length : PERSONALITIES.filter(function (p) { return p.cat === c; }).length;
                        return `<button class="pillBtn ${activePersonCat === c ? 'active' : ''}" onclick="setPersonCat('${c}')">${c} (${count})</button>`;
                    }).join("")}
                </div>
            </div>
            <div class="tilesGrid">
                ${filtered.map(function (p) {
                    return `
                        <div class="tileCard" onclick="openPersonModal(${p.id})">
                            <img class="tileImg tileImgPortrait" src="${p.photo}" alt="${p.name}" loading="lazy">
                            <div class="tileBody">
                                <div>
                                    <span class="tileBadge">${p.badge}</span>
                                    <h4 class="tileTitle">${p.name}</h4>
                                </div>
                                <p class="tileSub">${p.life} &bull; Click for bio</p>
                            </div>
                        </div>`;
                }).join("")}
            </div>`;
    }

    function renderTaluk() {
        var villages = ["Paravur", "Ezhikkara", "Eloor", "Chittattukara", "Chendamangalam", "Vadakkekara", "Kottuvally", "Kunnukara", "Karumalloor", "Varapuzha", "Puthenvelikkara", "Kadungalloor", "Moothakunnam", "Alangad"];
        var panchayats = ["Alangad", "Chendamangalam", "Chittattukara", "Ezhikkara", "Kadungalloor", "Karumalloor", "Kottuvally", "Kunnukara", "Puthenvelikkara", "Vadakkekara", "Varapuzha"];
        var pins = [
            "683513 • North Paravur", "683512 • Chendamangalam", "683514 • Cherai",
            "683516 • Moothakunnam", "683517 • Varapuzha", "683518 • Koonammavu",
            "683519 • Kottuvally", "683520 • Mannam", "683511 • Alangad", "683594 • Puthenvelikkara"
        ];
        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <h2 style="margin:0 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary);">Paravur Taluk — Administrative, Map &amp; Civic Hub</h2>
                <p style="margin:0; font-size:14.5px; color:var(--text-secondary);">Located across the fertile Periyar River delta at the northern tip of Ernakulam district (17 km north of Kochi city, bordering Thrissur district).</p>
            </div>
            <div class="kpiStrip">
                <div class="kpiBox"><div class="kpiNum">191.82</div><div class="kpiLabel">Area (sq km)</div></div>
                <div class="kpiBox"><div class="kpiNum">KL-42</div><div class="kpiLabel">RTO Code</div></div>
                <div class="kpiBox"><div class="kpiNum">2</div><div class="kpiLabel">Municipalities</div></div>
                <div class="kpiBox"><div class="kpiNum">2</div><div class="kpiLabel">Block Panchayats</div></div>
                <div class="kpiBox"><div class="kpiNum">11</div><div class="kpiLabel">Grama Panchayats</div></div>
                <div class="kpiBox"><div class="kpiNum">14</div><div class="kpiLabel">Revenue Villages</div></div>
            </div>
            <div class="talukBento" style="margin-bottom:18px;">
                <div class="panelCard" style="grid-column: span 1;">
                    <h3 class="panelTitle"><i class="fas fa-map-marked-alt"></i> Interactive Taluk Map</h3>
                    <iframe style="border-radius:10px; border:1px solid var(--border-color);" width="100%" height="230" frameborder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=230&amp;hl=en&amp;q=North%20Paravur%20Taluk%20Kerala&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Paravur Taluk Map"></iframe>
                </div>
                <div class="panelCard">
                    <h3 class="panelTitle"><i class="fas fa-compass"></i> Boundaries &amp; Key Transit</h3>
                    <p style="font-size:13.5px; margin:0 0 8px 0;"><b>North:</b> Kodungallur / Thrissur District (across Moothakunnam Bridge)</p>
                    <p style="font-size:13.5px; margin:0 0 8px 0;"><b>South:</b> Kochi City &amp; Edappally (via Varapuzha NH-66)</p>
                    <p style="font-size:13.5px; margin:0 0 8px 0;"><b>West:</b> Arabian Sea &amp; Vypin Island (Cherai / Munambam)</p>
                    <p style="font-size:13.5px; margin:0 0 12px 0;"><b>East:</b> Aluva Railway Station (17 km) &amp; CIAL Airport (22 km)</p>
                    <h4 style="margin:0 0 8px 0; font-size:12.5px; text-transform:uppercase; color:var(--brand-primary);">Key PIN Codes</h4>
                    <div class="chipList">${pins.map(function (p) { return `<span class="dataChip">${p}</span>`; }).join("")}</div>
                </div>
            </div>
            <div class="talukBento">
                <div class="panelCard">
                    <h3 class="panelTitle"><i class="fas fa-city"></i> Municipalities (2)</h3>
                    <p style="font-size:13.5px; margin:0 0 10px 0;"><b>North Paravur Municipality:</b> Historic Taluk HQ (Est. 1912), 3 km from Pattanam Muziris archaeological site.</p>
                    <p style="font-size:13.5px; margin:0;"><b>Eloor Municipality:</b> Industrial island suburb along the Periyar River, 13 km north of Kochi city centre.</p>
                </div>
                <div class="panelCard">
                    <h3 class="panelTitle"><i class="fas fa-landmark"></i> Assembly &amp; Block Panchayats</h3>
                    <p style="font-size:13.5px; margin:0 0 8px 0;"><b>Assembly Constituencies:</b> Paravur &amp; Kalamassery (Eloor, Alangad, Kadungalloor, Karumalloor, Kunnukara).</p>
                    <p style="font-size:13.5px; margin:0 0 8px 0;"><b>Block Panchayats:</b> Paravur Block Panchayat &bull; Alangad Block Panchayat.</p>
                    <p style="font-size:13.5px; margin:0;"><b>Police Stations:</b> North Paravur, Vadakkekara, Varapuzha, Munambam &amp; Binanipuram.</p>
                </div>
                <div class="panelCard">
                    <h3 class="panelTitle"><i class="fas fa-map-signs"></i> 14 Revenue Villages</h3>
                    <div class="chipList">${villages.map(function (v) { return `<span class="dataChip">${v}</span>`; }).join("")}</div>
                </div>
                <div class="panelCard">
                    <h3 class="panelTitle"><i class="fas fa-users"></i> 11 Grama Panchayats</h3>
                    <div class="chipList">${panchayats.map(function (p) { return `<span class="dataChip">${p}</span>`; }).join("")}</div>
                </div>
            </div>`;
    }

    function renderGallery() {
        var cats = ["All", "Heritage & Worship", "Beaches & Backwaters", "Culture & Town"];
        var filtered = EXPANDED_GALLERY.filter(function (g) { return activeGalleryCat === "All" || g.cat === activeGalleryCat; });
        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <h2 style="margin:0 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary);">Expanded Photo Gallery (${EXPANDED_GALLERY.length} Photos)</h2>
                <div class="filterRow" style="margin-bottom:0; margin-top:10px;">
                    ${cats.map(function (c) {
                        return `<button class="pillBtn ${activeGalleryCat === c ? 'active' : ''}" onclick="setGalleryCat('${c}')">${c}</button>`;
                    }).join("")}
                </div>
            </div>
            <div class="tilesGrid">
                ${filtered.map(function (g) {
                    return `
                        <div class="tileCard" onclick="openMockModal({title:'${g.name.replace(/'/g, "\\'")}', img:'${g.img}', badge:'${g.cat}', body:'North Paravur Heritage &amp; Coastal Visual Archive.'})">
                            <img class="tileImg" src="${g.img}" alt="${g.name}" loading="lazy">
                            <div class="tileBody">
                                <span class="tileBadge">${g.cat}</span>
                                <h4 class="tileTitle">${g.name}</h4>
                            </div>
                        </div>`;
                }).join("")}
            </div>`;
    }

    function renderWorship() {
        var cats = ["All", "Temple", "Church", "Mosque", "Synagogue"];
        var filtered = worshipDataCache.filter(function (w) { return activeWorshipCat === "All" || w.religion === activeWorshipCat; });
        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <h2 style="margin:0 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary);">Temples, Churches, Mosques &amp; Synagogues (${worshipDataCache.length} Sacred Sites)</h2>
                <div class="filterRow" style="margin-bottom:0; margin-top:10px;">
                    ${cats.map(function (c) {
                        return `<button class="pillBtn ${activeWorshipCat === c ? 'active' : ''}" onclick="setWorshipCat('${c}')">${c}</button>`;
                    }).join("")}
                </div>
            </div>
            <div class="tilesGrid">
                ${filtered.map(function (w, idx) {
                    var imgPath = w.photo ? w.photo.replace("../../", "./") : makeWorshipSvg(w.religion, w.name);
                    return `
                        <div class="tileCard" onclick="openWorshipModal(${idx}, '${activeWorshipCat}')">
                            <img class="tileImg" src="${imgPath}" alt="${w.name}" loading="lazy">
                            <div class="tileBody">
                                <div>
                                    <span class="tileBadge">${w.religion}</span>
                                    <h4 class="tileTitle">${w.name}</h4>
                                </div>
                                <p class="tileSub">${w.timings || w.address}</p>
                            </div>
                        </div>`;
                }).join("")}
            </div>`;
    }

    function renderNews() {
        var allItems = newsFeedCache.items || [];
        var recentItems = allItems.filter(isRecentNews);
        var archiveItems = allItems.filter(function (i) { return !isRecentNews(i); });
        var areas = ["All"].concat(Array.from(new Set(recentItems.map(function (i) { return i.area; }))));
        var filtered = recentItems.filter(function (i) {
            var okLang = activeNewsLang === "All" || i.lang === activeNewsLang;
            var okArea = activeNewsArea === "All" || i.area === activeNewsArea;
            return okLang && okArea;
        });
        var updatedLabel = newsFeedCache.updatedAt ? new Date(newsFeedCache.updatedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "";

        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
                    <h2 style="margin:0; font-family:'Cinzel',serif; color:var(--brand-primary);"><i class="fas fa-newspaper"></i> North Paravur Taluk News — Last 2 Months (${filtered.length})</h2>
                    ${updatedLabel ? `<span class="countPill">Updated: ${updatedLabel}</span>` : ""}
                </div>
                <p style="margin:0 0 12px 0; font-size:14px; color:var(--text-secondary);">Recent English &amp; Malayalam headlines from the past 60 days across Paravur Taluk localities.</p>
                <div class="filterRow" style="margin-bottom:10px;">
                    <button class="pillBtn ${activeNewsLang === 'All' ? 'active' : ''}" onclick="setNewsLang('All')">All Languages (${recentItems.length})</button>
                    <button class="pillBtn ${activeNewsLang === 'en' ? 'active' : ''}" onclick="setNewsLang('en')">English (${recentItems.filter(function (x) { return x.lang === 'en'; }).length})</button>
                    <button class="pillBtn ${activeNewsLang === 'ml' ? 'active' : ''}" onclick="setNewsLang('ml')">മലയാളം (${recentItems.filter(function (x) { return x.lang === 'ml'; }).length})</button>
                </div>
                <div class="filterRow" style="margin-bottom:0;">
                    ${areas.map(function (a) {
                        return `<button class="pillBtn ${activeNewsArea === a ? 'active' : ''}" onclick="setNewsArea('${a}')">${a}</button>`;
                    }).join("")}
                </div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">
                ${filtered.map(function (n) {
                    return `
                        <a class="panelCard" href="${n.link}" target="_blank" rel="noopener" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; justify-content:space-between; gap:10px; transition:transform .15s;">
                            <div style="display:flex; gap:12px; align-items:flex-start;">
                                ${n.thumb ? `<img src="${n.thumb}" alt="${n.area}" loading="lazy" style="width:68px; height:68px; border-radius:10px; object-fit:cover; flex-shrink:0;">` : ""}
                                <div style="flex:1; min-width:0;">
                                    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:6px;">
                                        <span class="tileBadge">${n.area}</span>
                                        <span class="countPill">${n.lang === 'ml' ? 'മലയാളം' : 'EN'}</span>
                                    </div>
                                    <h4 style="margin:0; font-size:15.5px; line-height:1.4; color:var(--text-primary);">${n.title}</h4>
                                </div>
                            </div>
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px; color:var(--text-muted); border-top:1px dashed var(--border-color); padding-top:8px;">
                                <span><i class="fas fa-rss"></i> ${n.source}</span>
                                <span>${n.dateLabel} <i class="fas fa-external-link-alt" style="margin-left:4px;"></i></span>
                            </div>
                        </a>`;
                }).join("") || '<div class="panelCard"><p style="margin:0;">No recent news matched the selected filters.</p></div>'}
            </div>

            <div class="panelCard" style="margin-top:26px; margin-bottom:16px; border-left:4px solid var(--brand-primary);">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <div>
                        <h3 style="margin:0 0 4px 0; font-family:'Cinzel',serif; color:var(--brand-primary);"><i class="fas fa-road"></i> NH-66 Updates — Ernakulam &amp; Kodungallur</h3>
                        <p style="margin:0; font-size:13.5px; color:var(--text-secondary);">Separate shared section tracking NH-66 widening, bridges, and corridor updates across Edappally, Varapuzha, Paravur, Moothakunnam &amp; Kodungallur.</p>
                    </div>
                    <span class="countPill">${(newsFeedCache.nh66Items || []).length} Updates</span>
                </div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:16px; margin-bottom:26px;">
                ${(newsFeedCache.nh66Items || []).map(function (n) {
                    return `
                        <a class="panelCard" href="${n.link}" target="_blank" rel="noopener" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; justify-content:space-between; gap:10px;">
                            <div>
                                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:6px;">
                                    <span class="tileBadge"><i class="fas fa-road"></i> NH-66</span>
                                    <span class="countPill">${n.lang === 'ml' ? 'മലയാളം' : 'EN'}</span>
                                </div>
                                <h4 style="margin:0; font-size:15.5px; line-height:1.4; color:var(--text-primary);">${n.title}</h4>
                            </div>
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px; color:var(--text-muted); border-top:1px dashed var(--border-color); padding-top:8px;">
                                <span><i class="fas fa-rss"></i> ${n.source}</span>
                                <span>${n.dateLabel} <i class="fas fa-external-link-alt" style="margin-left:4px;"></i></span>
                            </div>
                        </a>`;
                }).join("") || '<div class="panelCard"><p style="margin:0;">No recent NH-66 updates found.</p></div>'}
            </div>

            <details class="panelCard" style="margin-top:8px;">
                <summary style="cursor:pointer; font-family:'Cinzel',serif; font-weight:700; font-size:16px; color:var(--brand-primary); display:flex; justify-content:space-between; align-items:center;">
                    <span><i class="fas fa-archive"></i> News Archive (Older than 2 Months)</span>
                    <span class="countPill">${archiveItems.length} Archived</span>
                </summary>
                <div style="margin-top:14px; display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:12px;">
                    ${archiveItems.map(function (n) {
                        return `<a href="${n.link}" target="_blank" rel="noopener" style="padding:10px 12px; border:1px solid var(--border-color); border-radius:10px; text-decoration:none; color:inherit;">
                            <div style="display:flex; justify-content:space-between; gap:8px; margin-bottom:4px;">
                                <span class="tileBadge">${n.area}</span>
                                <span style="font-size:11.5px; color:var(--text-muted);">${n.dateLabel}</span>
                            </div>
                            <div style="font-weight:700; font-size:13.5px; color:var(--text-primary); line-height:1.35;">${n.title}</div>
                            <div style="font-size:11.5px; color:var(--text-muted); margin-top:4px;">${n.source}</div>
                        </a>`;
                    }).join("") || '<p style="margin:0; font-size:13.5px; color:var(--text-muted);">No archived items older than 2 months yet.</p>'}
                </div>
            </details>`;
    }

    function renderEvents() {
        var cats = ["All", "Festivals & Culture", "Boat Race & Coastal"];
        var filtered = LOCAL_EVENTS.filter(function (ev) {
            return activeEventCat === "All" || ev.cat === activeEventCat;
        });
        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <h2 style="margin:0 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary);"><i class="fas fa-calendar-alt"></i> Festivals, Boat Races &amp; Local Events (${LOCAL_EVENTS.length})</h2>
                <p style="margin:0 0 14px 0; font-size:14px; color:var(--text-secondary);">Annual cultural festivals, temple &amp; church feasts, the Gothuruth Snake Boat Race, and sports venues across North Paravur Taluk.</p>
                <div class="filterRow" style="margin-bottom:0;">
                    ${cats.map(function (c) {
                        return `<button class="pillBtn ${activeEventCat === c ? 'active' : ''}" onclick="setEventCat('${c}')">${c}</button>`;
                    }).join("")}
                </div>
            </div>
            <div class="tilesGrid">
                ${filtered.map(function (ev) {
                    return `
                        <div class="tileCard" onclick="openEventModal('${ev.id}')">
                            <img class="tileImg" src="${ev.img}" alt="${ev.name}" loading="lazy">
                            <div class="tileBody">
                                <div>
                                    <span class="tileBadge">${ev.timing}</span>
                                    <h4 class="tileTitle">${ev.name}</h4>
                                </div>
                                <p class="tileSub">${ev.venue}</p>
                            </div>
                        </div>`;
                }).join("")}
            </div>

            <div class="panelCard" style="margin-top:24px; margin-bottom:16px; border-left:4px solid var(--brand-primary);">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <div>
                        <h3 style="margin:0 0 4px 0; font-family:'Cinzel',serif; color:var(--brand-primary);"><i class="fas fa-rss"></i> Daily Local Events, Festivals &amp; Camps Feed</h3>
                        <p style="margin:0; font-size:13.5px; color:var(--text-secondary);">Auto-updated English &amp; Malayalam event announcements (festivals, utsavam, perunnal, boat races, expos &amp; camps) across North Paravur, Muziris, Cherai, Varapuzha, Alangad, Kottuvally, Kaitharam, Ezhikkara &amp; Chathanad.</p>
                    </div>
                    <span class="countPill">${(newsFeedCache.eventItems || []).length} Live</span>
                </div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">
                ${(newsFeedCache.eventItems || []).map(function (ev) {
                    return `
                        <a class="panelCard" href="${ev.link}" target="_blank" rel="noopener" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; justify-content:space-between; gap:10px;">
                            <div>
                                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:6px;">
                                    <span class="tileBadge">${ev.area}</span>
                                    <span class="countPill">${ev.lang === 'ml' ? 'മലയാളം' : 'EN'}</span>
                                </div>
                                <h4 style="margin:0; font-size:15.5px; line-height:1.4; color:var(--text-primary);">${ev.title}</h4>
                            </div>
                            <div style="display:flex; justify-content:space-between; align-items:center; font-size:12.5px; color:var(--text-muted); border-top:1px dashed var(--border-color); padding-top:8px;">
                                <span><i class="fas fa-calendar-check"></i> ${ev.source}</span>
                                <span>${ev.dateLabel} <i class="fas fa-external-link-alt" style="margin-left:4px;"></i></span>
                            </div>
                        </a>`;
                }).join("") || '<div class="panelCard"><p style="margin:0;">Loading live local event announcements...</p></div>'}
            </div>`;
    }

    function renderDirectory() {
        var cats = [
            { title: "Hospitals & Emergency Care", img: "./img/directory/hospitals/ayurveda.jpg", count: "24x7 Care", desc: "Taluk Hospital, Don Bosco Hospital, KMJ, KMK & emergency numbers across Paravur.", href: "./pages/directory/hospitals.html", badge: "Medical" },
            { title: "Govt. Offices, Police & Fire", img: "./img/directory/office/kseb.jpg", count: "Civic Services", desc: "Taluk Office, Municipality, Police Stations, Fire & Rescue, Village Offices & KSEB.", href: "./pages/directory/offices.html", badge: "Government" },
            { title: "Schools (Govt, Aided & CBSE)", img: "./img/directory/schools/adarsha.jpg", count: "Education", desc: "Boys & Girls HSS, SNM, St. Aloysius, Don Bosco, Toc H & CBSE institutions.", href: "./pages/directory/schools.html", badge: "Schools" },
            { title: "Colleges & Institutes", img: "./img/directory/colleges/lakshmi.jpg", count: "Higher Ed", desc: "SNM College Maliankara, SNGIST, polytechnic & professional colleges.", href: "./pages/directory/colleges.html", badge: "Colleges" },
            { title: "Hotels, Resorts & Bars", img: "./img/directory/hotels/ceecee.jpg", count: "Hospitality", desc: "Cherai Beach resorts, heritage homestays, family restaurants & licensed bars.", href: "./pages/directory/hotels.html", badge: "Stays & Dining" },
            { title: "Temples, Churches & Mosques", img: "./img/directory/worship/dakshina_mookambika.jpg", count: (worshipDataCache.length || 35) + " Sites", desc: "Explore 35 sacred sites across Paravur Taluk with timings, deities & Google Maps.", view: "worship", badge: "Worship" }
        ];
        var bus = (window.NP_MASTER_DATA && window.NP_MASTER_DATA.busTimings) || { routes: [] };
        return `
            <div class="panelCard" style="margin-bottom:18px;">
                <h2 style="margin:0 0 6px 0; font-family:'Cinzel',serif; color:var(--brand-primary);"><i class="fas fa-address-book"></i> North Paravur Business &amp; Civic Directory</h2>
                <p style="margin:0; font-size:14px; color:var(--text-secondary);">Quick access to hospitals, government offices, schools, colleges, resorts, bus timings, and sacred sites in the unified portal.</p>
            </div>
            <div class="tilesGrid" style="margin-bottom:20px;">
                ${cats.map(function (c) {
                    var action = c.view ? `onclick="switchView('${c.view}')"` : `onclick="window.location.href='${c.href}'"`;
                    return `
                        <div class="tileCard" ${action}>
                            <img class="tileImg" src="${c.img}" alt="${c.title}" loading="lazy">
                            <div class="tileBody">
                                <div>
                                    <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:6px;">
                                        <span class="tileBadge">${c.badge}</span>
                                        <span class="countPill">${c.count}</span>
                                    </div>
                                    <h4 class="tileTitle">${c.title}</h4>
                                    <p style="margin:6px 0 0 0; font-size:13px; color:var(--text-secondary); line-height:1.45;">${c.desc}</p>
                                </div>
                                <p class="tileSub" style="margin-top:10px; color:var(--brand-primary); font-weight:700;">Open Directory &rarr;</p>
                            </div>
                        </div>`;
                }).join("")}
            </div>
            <div class="panelCard">
                <h3 class="panelTitle"><span><i class="fas fa-bus"></i> KSRTC &amp; Private Bus Stand Timings</span><span class="countPill">Municipal Stand</span></h3>
                <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap:12px;">
                    ${(bus.routes || []).map(function (r) {
                        return `<div style="padding:10px 12px; border:1px solid var(--border-color); border-radius:10px;">
                            <div style="font-weight:700; font-size:13.5px; color:var(--text-primary);">${r.route}</div>
                            <div style="font-size:12.5px; color:var(--text-secondary); margin-top:4px;">${r.frequency} &bull; ${r.firstBus} – ${r.lastBus}</div>
                        </div>`;
                    }).join("")}
                </div>
            </div>`;
    }

    function renderHistoryShell() {
        return `
        <div class="threeColGrid">
            <aside class="stickyRail">
                <div class="panelCard">
                    <h3 class="panelTitle"><i class="fas fa-list-ol"></i> 12 Chapters</h3>
                    <div id="mockChapterList">Loading chapters...</div>
                </div>
            </aside>
            <section>
                <div class="panelCard" style="margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <div>
                        <span class="tileBadge" style="margin-bottom:4px;">Independent Story Language</span>
                        <h2 style="margin:0; font-family:'Cinzel','Manjari',serif; font-size:19px; color:var(--brand-primary);">
                            ${historyLang === "ml" ? "വടക്കൻ പറവൂർ – ചരിത്രവും പൈതൃകവും" : "History of North Paravur (12 Chapters)"}
                        </h2>
                    </div>
                    <div style="display:flex; gap:6px;">
                        <button class="pillBtn ${historyLang === 'en' ? 'active' : ''}" onclick="setHistoryLang('en')">English</button>
                        <button class="pillBtn ${historyLang === 'ml' ? 'active' : ''}" onclick="setHistoryLang('ml')">മലയാളം</button>
                    </div>
                </div>
                <div id="mockHistoryBody">
                    <div class="historyChapterCard"><p>Loading full history...</p></div>
                </div>
            </section>
            <aside class="stickyRail rightRail">
                <div class="panelCard">
                    <h3 class="panelTitle"><i class="fas fa-map-marked-alt"></i> Visit History Sites</h3>
                    <button class="quickLinkRow" onclick="switchView('tourism')"><span>Pattanam &amp; Muziris</span><span class="countPill">Map</span></button>
                    <button class="quickLinkRow" onclick="switchView('worship')"><span>Kottakkavu Church (52 AD)</span><span class="countPill">Photo</span></button>
                    <button class="quickLinkRow" onclick="switchView('worship')"><span>Paravur Synagogue</span><span class="countPill">Photo</span></button>
                    <button class="quickLinkRow" onclick="switchView('tourism')"><span>Paliam Kovilakom</span><span class="countPill">Map</span></button>
                </div>
            </aside>
        </div>`;
    }

    function hydrateHistory() {
        var mdFile = historyLang === "ml" ? "./data/history_ml.md" : "./data/history_en.md";
        fetch(mdFile)
            .then(function (r) { return r.text(); })
            .then(function (md) {
                var sections = md.split(/\n## /);
                var chapters = sections.slice(1).map(function (sec, idx) {
                    var lines = sec.split("\n");
                    var title = lines[0].trim();
                    var body = lines.slice(1).join("\n").trim().split(/\n\n+/).map(function (p) {
                        return `<p>${p.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>")}</p>`;
                    }).join("");
                    return { id: "chap-" + idx, title: title, body: body };
                });

                var navEl = document.getElementById("mockChapterList");
                var bodyEl = document.getElementById("mockHistoryBody");
                if (navEl) {
                    navEl.innerHTML = chapters.map(function (c) {
                        return `<button class="chapterItem" onclick="document.getElementById('${c.id}').scrollIntoView({behavior:'smooth', block:'start'})">${c.title}</button>`;
                    }).join("");
                }
                if (bodyEl) {
                    bodyEl.innerHTML = chapters.map(function (c) {
                        return `<article id="${c.id}" class="historyChapterCard"><h3>${c.title}</h3>${c.body}</article>`;
                    }).join("");
                }
            });
    }

    // Helper global handlers
    window.setExplorerMode = function (m) { explorerMode = m; renderView(); };
    window.setTourCat = function (c) { activeTourCat = c; renderView(); };
    window.setPersonCat = function (c) { activePersonCat = c; renderView(); };
    window.setGalleryCat = function (c) { activeGalleryCat = c; renderView(); };
    window.setWorshipCat = function (c) { activeWorshipCat = c; renderView(); };
    window.setNewsLang = function (l) { activeNewsLang = l; renderView(); };
    window.setNewsArea = function (a) { activeNewsArea = a; renderView(); };
    window.setEventCat = function (c) { activeEventCat = c; renderView(); };

    window.openEventModal = function (id) {
        var ev = LOCAL_EVENTS.find(function (x) { return x.id === id; });
        if (!ev) return;
        var mapQ = encodeURIComponent(ev.venue + " North Paravur Kerala");
        openMockModal({
            title: ev.name,
            img: ev.img,
            badge: ev.cat,
            meta: ev.timing + " • " + ev.venue,
            body: `<p>${ev.summary}</p><p>${ev.details}</p>${ev.phone ? `<p><b>Phone:</b> <a href="tel:${ev.phone}">${ev.phone}</a></p>` : ""}`,
            actions: `<a class="actionBtn" href="https://www.google.com/maps/search/?api=1&query=${mapQ}" target="_blank" rel="noopener"><i class="fas fa-directions"></i> Google Maps</a>
                      ${ev.website ? `<a class="actionBtn secondary" href="${ev.website}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Visit Website</a>` : ""}`
        });
    };

    window.openTourModal = function (id) {
        var list = (window.NP_MASTER_DATA && window.NP_MASTER_DATA.tourism) || [];
        var p = list.find(function (x) { return x.id === String(id); });
        if (!p) return;
        var mapQ = encodeURIComponent(p.name + " North Paravur Kerala");
        openMockModal({
            title: currentLang === "ml" && p.name_ml ? p.name_ml + " (" + p.name + ")" : p.name,
            img: "./" + p.photo,
            badge: p.category + " • " + p.distance,
            meta: p.about,
            body: p.description,
            actions: `<a class="actionBtn" href="https://www.google.com/maps/search/?api=1&query=${mapQ}" target="_blank" rel="noopener"><i class="fas fa-directions"></i> Google Maps</a>
                      <a class="actionBtn secondary" href="./pages/directory/hotels.html"><i class="fas fa-bed"></i> Nearby Resorts &amp; Stays</a>`
        });
    };

    window.openMuzirisBoatModal = function () {
        var b = MUZIRIS_BOAT_SERVICE;
        var faresHtml = b.fares.map(function (f) {
            return `<li><b>${f.label}:</b> ${f.price}</li>`;
        }).join("");
        var jettiesHtml = b.jetties.map(function (j) {
            return `<span class="dataChip">${j}</span>`;
        }).join("");
        openMockModal({
            title: b.title,
            img: b.img,
            badge: "Hop-On / Hop-Off Cruise",
            meta: b.operator + " • " + b.hours,
            body: `<p><b>Cruise Sessions:</b> ${b.sessions}</p>
                   <p><b>Ticket Prices &amp; Packages:</b></p>
                   <ul style="margin:6px 0 12px 18px; line-height:1.7;">${faresHtml}</ul>
                   <p><b>Key Boat Jetties &amp; Heritage Stops:</b></p>
                   <div class="chipList" style="margin-bottom:12px;">${jettiesHtml}</div>
                   <p style="font-size:13px; color:var(--text-muted);">${b.note}</p>`,
            actions: `<a class="actionBtn" href="https://www.google.com/maps/search/?api=1&query=Kottappuram+Muziris+Boat+Jetty+Kodungallur" target="_blank" rel="noopener"><i class="fas fa-directions"></i> Boat Jetty Map</a>
                      <a class="actionBtn secondary" href="https://www.keralatourism.org/muziris" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Official Muziris Portal</a>`
        });
    };

    window.openPersonModal = function (id) {
        var p = PERSONALITIES.find(function (x) { return x.id === id; });
        if (!p) return;
        openMockModal({
            title: p.name,
            img: p.photo,
            portrait: true,
            badge: p.badge,
            meta: p.life + " • " + p.role,
            body: "<p>" + p.bio + "</p>",
            actions: `<a class="actionBtn" href="${p.wiki}" target="_blank" rel="noopener"><i class="fab fa-wikipedia-w"></i> Read on Wikipedia</a>`
        });
    };

    window.openWorshipModal = function (idx, cat) {
        var filtered = worshipDataCache.filter(function (w) { return cat === "All" || w.religion === cat; });
        var w = filtered[idx];
        if (!w) return;
        var mapQ = encodeURIComponent(w.name + " North Paravur Kerala");
        openMockModal({
            title: w.name,
            img: w.photo ? w.photo.replace("../../", "./") : makeWorshipSvg(w.religion, w.name),
            badge: w.religion,
            meta: (w.deity || "") + (w.timings ? " • Timings: " + w.timings : ""),
            body: `<p><b>Address:</b> ${w.address}</p><p>${w.highlights || ""}</p>${w.phone && w.phone !== "NA" ? `<p><b>Phone:</b> ${w.phone}</p>` : ""}`,
            actions: `<a class="actionBtn" href="https://www.google.com/maps/search/?api=1&query=${mapQ}" target="_blank" rel="noopener"><i class="fas fa-directions"></i> Google Maps</a>`
        });
    };

    function bindMockSearch() {
        var input = document.getElementById("mockSearchInput");
        var drop = document.getElementById("mockSearchDrop");
        if (!input || !drop) return;
        input.addEventListener("input", function (e) {
            var q = e.target.value.toLowerCase().trim();
            if (!q) { drop.style.display = "none"; return; }
            var matches = [];
            if ("muziris boat service hop on hop off water cruise ferry jetty kottappuram".indexOf(q) !== -1) {
                matches.push({ title: MUZIRIS_BOAT_SERVICE.title, tag: "Boat Cruise", action: "openMuzirisBoatModal()" });
            }
            (window.NP_MASTER_DATA.tourism || []).forEach(function (t) {
                if (t.name.toLowerCase().indexOf(q) !== -1) matches.push({ title: t.name, tag: "Tourism", action: "switchView('tourism')" });
            });
            PERSONALITIES.forEach(function (p) {
                if (p.name.toLowerCase().indexOf(q) !== -1 || p.role.toLowerCase().indexOf(q) !== -1) matches.push({ title: p.name, tag: p.badge, action: "openPersonModal(" + p.id + ")" });
            });
            worshipDataCache.forEach(function (w) {
                if (w.name.toLowerCase().indexOf(q) !== -1) matches.push({ title: w.name, tag: w.religion, action: "switchView('worship')" });
            });
            drop.innerHTML = matches.slice(0, 7).map(function (m) {
                return `<div class="searchItem" onclick="${m.action}"><span>${m.title}</span><span class="countPill">${m.tag}</span></div>`;
            }).join("") || `<div class="searchItem"><span>No results for "${q}"</span></div>`;
            drop.style.display = "block";
        });
    }

    function renderView() {
        var stage = document.getElementById("mockStage");
        if (!stage) return;
        if (currentView === "home") { stage.innerHTML = renderHome(); bindMockSearch(); }
        else if (currentView === "history") { stage.innerHTML = renderHistoryShell(); hydrateHistory(); }
        else if (currentView === "tourism") stage.innerHTML = renderTourism();
        else if (currentView === "personalities") stage.innerHTML = renderPersonalities();
        else if (currentView === "taluk") stage.innerHTML = renderTaluk();
        else if (currentView === "gallery") stage.innerHTML = renderGallery();
        else if (currentView === "worship") stage.innerHTML = renderWorship();
        else if (currentView === "news") stage.innerHTML = renderNews();
        else if (currentView === "events") stage.innerHTML = renderEvents();
        else if (currentView === "directory") stage.innerHTML = renderDirectory();
    }

    fetch("./data/worshipData.json")
        .then(function (r) { return r.json(); })
        .then(function (d) { worshipDataCache = d; if (currentView === "worship") renderView(); });

    fetch("./data/newsFeed.json")
        .then(function (r) { return r.json(); })
        .then(function (d) { newsFeedCache = d; if (currentView === "home" || currentView === "news" || currentView === "events") renderView(); })
        .catch(function () {});

    applyTheme(currentTheme);
    loadHeaderWeather();

    var initialHash = (window.location.hash || "").replace("#", "").toLowerCase();
    var initialQuery = new URLSearchParams(window.location.search).get("view") || "";
    var startView = VALID_VIEWS.indexOf(initialHash) !== -1 ? initialHash : (VALID_VIEWS.indexOf(initialQuery) !== -1 ? initialQuery : "home");
    window.switchView(startView, true);

    window.addEventListener("hashchange", function () {
        var h = (window.location.hash || "").replace("#", "").toLowerCase();
        if (VALID_VIEWS.indexOf(h) !== -1 && h !== currentView) {
            window.switchView(h, true);
        }
    });
})();
