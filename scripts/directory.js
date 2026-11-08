// ============================================================================
// Directory Rendering Engine with Live Search, Tap-to-Call & UTM Attribution
// ============================================================================

var segments = window.location.pathname.split('/');
var result = segments[segments.length - 1];

function formatTelLink(phone) {
    if (!phone || phone === "NA") return "";
    var clean = phone.replace(/[^0-9+]/g, "");
    return clean;
}

function buildActionButtons(item) {
    var btns = [];
    var tel = formatTelLink(item.phone);
    var lang = localStorage.getItem("np_lang") || "en";
    var callLabel = lang === "ml" ? "വിളിക്കുക" : "Call";
    var webLabel = lang === "ml" ? "വെബ്സൈറ്റ്" : "Website";
    var mapLabel = lang === "ml" ? "മാപ്പ്" : "Directions";

    if (tel) {
        btns.push(`<a class="btnCall" href="tel:${tel}"><i class="fas fa-phone-alt"></i> ${callLabel}</a>`);
    }
    var site = item.web || item.website;
    if (site) {
        var fullUrl = site.startsWith("http") ? site : `https://${site}`;
        var trackedUrl = fullUrl + (fullUrl.indexOf("?") === -1 ? "?utm_source=northparavur.in" : "&utm_source=northparavur.in");
        btns.push(`<a class="btnWeb" href="${trackedUrl}" target="_blank" rel="noopener"><i class="fas fa-globe"></i> ${webLabel}</a>`);
    }
    var mapQuery = encodeURIComponent((item.name || "") + " North Paravur Kerala");
    btns.push(`<a class="btnWeb" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener"><i class="fas fa-map-marker-alt"></i> ${mapLabel}</a>`);

    return `<div class="actionBtns">${btns.join("")}</div>`;
}

function injectSearchBar(targetId, placeholderEn, placeholderMl, onSearch) {
    var container = document.getElementById(targetId);
    if (!container) return;
    var existing = document.getElementById("dirSearchBox");
    var lang = localStorage.getItem("np_lang") || "en";
    var ph = lang === "ml" ? placeholderMl : placeholderEn;

    if (!existing) {
        var wrapper = document.createElement("div");
        wrapper.className = "searchContainer";
        wrapper.innerHTML = `<input id="dirSearchBox" type="search" class="searchInput" placeholder="${ph}" aria-label="Search directory" />`;
        container.parentNode.insertBefore(wrapper, container);
        var input = document.getElementById("dirSearchBox");
        input.addEventListener("input", function (e) {
            onSearch(e.target.value.toLowerCase().trim());
        });
    } else {
        existing.placeholder = ph;
    }
}

// 1. HOSPITALS
if (result === "hospitals.html") {
    var hospitalsCache = [];
    var renderHospitals = function (query) {
        var q = query || "";
        var filtered = hospitalsCache.filter(function (h) {
            return h.name.toLowerCase().indexOf(q) !== -1 || (h.address && h.address.toLowerCase().indexOf(q) !== -1);
        });
        document.getElementById("hospitals").innerHTML = filtered.map(function (hospital) {
            return `
            <div class="items">
                <div>
                    <img alt="${hospital.name}" src="${hospital.photo}" loading="lazy">
                    <h4>${hospital.name}</h4>
                    <p><i class="fas fa-map-pin"></i> ${hospital.address}</p>
                    <p><b>Phone:</b> ${hospital.phone}</p>
                    ${hospital.email ? `<p style="font-size:12px;"><a href="mailto:${hospital.email}">${hospital.email}</a></p>` : ""}
                </div>
                ${buildActionButtons(hospital)}
            </div>`;
        }).join("");
    };

    fetch("../../data/hospitalData.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            hospitalsCache = data;
            injectSearchBar("hospitals", "Search hospitals by name or location...", "ആശുപത്രികൾ തിരയുക...", renderHospitals);
            renderHospitals("");
        });

    window.addEventListener("npLanguageChanged", function () {
        injectSearchBar("hospitals", "Search hospitals by name or location...", "ആശുപത്രികൾ തിരയുക...", renderHospitals);
        var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
        renderHospitals(q);
    });
}

// 2. HOTELS, RESORTS & BARS
if (result === "hotels.html") {
    var hotelsCache = [];
    var activeHotelType = "All";

    var renderHotels = function (query) {
        var q = query || "";
        var filtered = hotelsCache.filter(function (h) {
            var matchesQuery = h.name.toLowerCase().indexOf(q) !== -1 || (h.type && h.type.toLowerCase().indexOf(q) !== -1) || (h.star && h.star.toLowerCase().indexOf(q) !== -1);
            if (!matchesQuery) return false;
            if (activeHotelType === "All") return true;
            if (activeHotelType === "Resort") return h.type && h.type.toLowerCase().indexOf("resort") !== -1;
            if (activeHotelType === "Bar") return h.type && h.type.toLowerCase().indexOf("bar") !== -1;
            if (activeHotelType === "Hotel") return h.type && h.type.toLowerCase().indexOf("resort") === -1 && h.type.toLowerCase().indexOf("bar") === -1;
            return true;
        });
        document.getElementById("hotels").innerHTML = filtered.map(function (hotel) {
            return `
            <div class="items">
                <div>
                    <img alt="${hotel.name}" src="${hotel.photo}" loading="lazy">
                    <h4>${hotel.name} <span style="color:#f59e0b;">(${hotel.star})</span></h4>
                    <p><b>Type:</b> ${hotel.type} &bull; <b>Distance:</b> ${hotel.distance}</p>
                    <p><b>Phone:</b> ${hotel.phone}</p>
                </div>
                ${buildActionButtons(hotel)}
            </div>`;
        }).join("");
    };

    var injectHotelFilterPills = function () {
        var container = document.getElementById("hotels");
        if (!container || document.getElementById("hotelFilterBar")) return;
        var bar = document.createElement("div");
        bar.id = "hotelFilterBar";
        bar.style.cssText = "display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin: 10px 20px 18px 20px;";
        var tabs = [
            { id: "All", label: "All Stays & Bars" },
            { id: "Resort", label: "Beach & Backwater Resorts" },
            { id: "Hotel", label: "Town Hotels & Homestays" },
            { id: "Bar", label: "Bar Hotels & Lounges" }
        ];
        bar.innerHTML = tabs.map(function (t) {
            var activeStyle = t.id === activeHotelType
                ? "background:var(--brand-primary, #0f3d3e); color:#fff; border-color:var(--brand-primary, #0f3d3e);"
                : "background:var(--bg-surface, #fff); color:var(--text-primary, #1e293b); border-color:var(--border-subtle, #cbd5e1);";
            return `<button type="button" data-hotel-tab="${t.id}" style="padding:7px 15px; border-radius:999px; border:1px solid; font-size:13px; font-weight:600; cursor:pointer; ${activeStyle}">${t.label}</button>`;
        }).join("");
        container.parentNode.insertBefore(bar, container);

        bar.querySelectorAll("[data-hotel-tab]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                activeHotelType = btn.getAttribute("data-hotel-tab");
                bar.remove();
                injectHotelFilterPills();
                var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
                renderHotels(q);
            });
        });
    };

    fetch("../../data/hotelData.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            hotelsCache = data;
            injectSearchBar("hotels", "Search resorts, hotels, homestays or bars...", "ഹോട്ടലുകൾ / റിസോർട്ടുകൾ / ബാറുകൾ തിരയുക...", renderHotels);
            injectHotelFilterPills();
            renderHotels("");
        });

    window.addEventListener("npLanguageChanged", function () {
        injectSearchBar("hotels", "Search resorts, hotels, homestays or bars...", "ഹോട്ടലുകൾ / റിസോർട്ടുകൾ / ബാറുകൾ തിരയുക...", renderHotels);
        var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
        renderHotels(q);
    });
}

// 3. COLLEGES
if (result === "colleges.html") {
    var collegesCache = [];
    var renderColleges = function (query) {
        var q = query || "";
        var filtered = collegesCache.filter(function (c) {
            return c.name.toLowerCase().indexOf(q) !== -1 || (c.address && c.address.toLowerCase().indexOf(q) !== -1);
        });
        document.getElementById("colleges").innerHTML = filtered.map(function (college) {
            return `
            <div class="items">
                <div>
                    <img alt="${college.name}" src="${college.photo}" loading="lazy">
                    <h4>${college.name}</h4>
                    <p>${college.address}</p>
                    <p><b>Phone:</b> ${college.phone}</p>
                    ${college.email ? `<p style="font-size:12px;">${college.email}</p>` : ""}
                </div>
                ${buildActionButtons(college)}
            </div>`;
        }).join("");
    };

    fetch("../../data/collegeData.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            collegesCache = data;
            injectSearchBar("colleges", "Search colleges in North Paravur...", "കോളേജുകൾ തിരയുക...", renderColleges);
            renderColleges("");
        });

    window.addEventListener("npLanguageChanged", function () {
        injectSearchBar("colleges", "Search colleges in North Paravur...", "കോളേജുകൾ തിരയുക...", renderColleges);
        var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
        renderColleges(q);
    });
}

// 4. AIDED / STATE SCHOOLS
if (result === "schools_aided.html") {
    var aidedCache = [];
    var renderAided = function (query) {
        var q = query || "";
        var filtered = aidedCache.filter(function (s) {
            return s.name.toLowerCase().indexOf(q) !== -1 || (s.address && s.address.toLowerCase().indexOf(q) !== -1);
        });
        document.getElementById("adidedSchools").innerHTML = filtered.map(function (school) {
            return `
            <div class="items">
                <div>
                    <img alt="${school.name}" src="${school.photo}" loading="lazy">
                    <h4>${school.name}</h4>
                    <p>${school.address}</p>
                    <p><b>Classes:</b> ${school.class}</p>
                    <p><b>Phone:</b> ${school.phone}</p>
                </div>
                ${buildActionButtons(school)}
            </div>`;
        }).join("");
    };

    fetch("../../data/schoolData.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            aidedCache = data.filter(function (s) { return s.syllabus === "State"; });
            injectSearchBar("adidedSchools", "Search State / Aided schools...", "സ്കൂളുകൾ തിരയുക...", renderAided);
            renderAided("");
        });

    window.addEventListener("npLanguageChanged", function () {
        injectSearchBar("adidedSchools", "Search State / Aided schools...", "സ്കൂളുകൾ തിരയുക...", renderAided);
        var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
        renderAided(q);
    });
}

// 5. CBSE SCHOOLS
if (result === "schools_cbse.html") {
    var cbseCache = [];
    var renderCbse = function (query) {
        var q = query || "";
        var filtered = cbseCache.filter(function (s) {
            return s.name.toLowerCase().indexOf(q) !== -1 || (s.address && s.address.toLowerCase().indexOf(q) !== -1);
        });
        document.getElementById("cbseSchools").innerHTML = filtered.map(function (school) {
            return `
            <div class="items">
                <div>
                    <img alt="${school.name}" src="${school.photo}" loading="lazy">
                    <h4>${school.name}</h4>
                    <p>${school.address}</p>
                    <p><b>Classes:</b> ${school.class}</p>
                    <p><b>Phone:</b> ${school.phone}</p>
                </div>
                ${buildActionButtons(school)}
            </div>`;
        }).join("");
    };

    fetch("../../data/schoolData.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            cbseCache = data.filter(function (s) { return s.syllabus === "CBSE"; });
            injectSearchBar("cbseSchools", "Search CBSE schools...", "സി.ബി.എസ്.ഇ സ്കൂളുകൾ തിരയുക...", renderCbse);
            renderCbse("");
        });

    window.addEventListener("npLanguageChanged", function () {
        injectSearchBar("cbseSchools", "Search CBSE schools...", "സി.ബി.എസ്.ഇ സ്കൂളുകൾ തിരയുക...", renderCbse);
        var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
        renderCbse(q);
    });
}

// 6. GOVT OFFICES
if (result === "offices.html") {
    var officesCache = [];
    var renderOffices = function (query) {
        var q = query || "";
        var filtered = officesCache.filter(function (o) {
            return o.name.toLowerCase().indexOf(q) !== -1 || (o.address && o.address.toLowerCase().indexOf(q) !== -1);
        });
        document.getElementById("offices").innerHTML = filtered.map(function (office) {
            return `
            <div class="items">
                <div>
                    <img alt="${office.name}" src="${office.photo}" loading="lazy">
                    <h4>${office.name}</h4>
                    <p>${office.address}</p>
                    <p><b>Phone:</b> ${office.phone}</p>
                    ${office.email ? `<p style="font-size:12px;"><a href="mailto:${office.email}">${office.email}</a></p>` : ""}
                </div>
                ${buildActionButtons(office)}
            </div>`;
        }).join("");
    };

    fetch("../../data/officeData.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            officesCache = data;
            injectSearchBar("offices", "Search Govt. Offices (e.g., Police, Fire, RTO, KSEB, Taluk)...", "സർക്കാർ ഓഫീസുകൾ തിരയുക...", renderOffices);
            renderOffices("");
        });

    window.addEventListener("npLanguageChanged", function () {
        injectSearchBar("offices", "Search Govt. Offices (e.g., Police, Fire, RTO, KSEB, Taluk)...", "സർക്കാർ ഓഫീസുകൾ തിരയുക...", renderOffices);
        var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
        renderOffices(q);
    });
}

// 7. PLACES OF WORSHIP (TEMPLES, CHURCHES, MOSQUES & SYNAGOGUES)
if (result === "worship.html") {
    var worshipCache = [];
    var activeReligion = "All";

    var renderWorship = function (query) {
        var q = query || "";
        var filtered = worshipCache.filter(function (w) {
            var matchesQuery =
                w.name.toLowerCase().indexOf(q) !== -1 ||
                (w.address && w.address.toLowerCase().indexOf(q) !== -1) ||
                (w.deity && w.deity.toLowerCase().indexOf(q) !== -1) ||
                (w.highlights && w.highlights.toLowerCase().indexOf(q) !== -1);
            if (!matchesQuery) return false;
            if (activeReligion === "All") return true;
            return w.religion === activeReligion;
        });

        document.getElementById("worship").innerHTML = filtered.map(function (place) {
            return `
            <div class="items">
                <div>
                    <img alt="${place.name}" src="${place.photo}" loading="lazy">
                    <h4>${place.name}</h4>
                    <p style="color:#d97706; font-weight:700; font-size:12.5px;">${place.religion.toUpperCase()} &bull; ${place.deity || ""}</p>
                    <p><i class="fas fa-map-pin"></i> ${place.address}</p>
                    ${place.timings ? `<p><b>Timings:</b> ${place.timings}</p>` : ""}
                    ${place.highlights ? `<p style="font-size:12.5px; line-height:1.5;">${place.highlights}</p>` : ""}
                    ${place.phone && place.phone !== "NA" ? `<p><b>Phone:</b> ${place.phone}</p>` : ""}
                </div>
                ${buildActionButtons(place)}
            </div>`;
        }).join("");
    };

    var injectWorshipFilterPills = function () {
        var container = document.getElementById("worship");
        if (!container || document.getElementById("worshipFilterBar")) return;
        var bar = document.createElement("div");
        bar.id = "worshipFilterBar";
        bar.style.cssText = "display:flex; gap:8px; flex-wrap:wrap; justify-content:center; margin: 10px 20px 18px 20px;";
        var tabs = [
            { id: "All", label: "All Places of Worship (26)" },
            { id: "Temple", label: "Temples (ക്ഷേത്രങ്ങൾ)" },
            { id: "Church", label: "Churches (പള്ളികൾ)" },
            { id: "Mosque", label: "Mosques (മസ്ജിദുകൾ)" },
            { id: "Synagogue", label: "Jewish Synagogues (ജൂതപ്പള്ളികൾ)" }
        ];
        bar.innerHTML = tabs.map(function (t) {
            var activeStyle = t.id === activeReligion
                ? "background:var(--brand-primary, #0f3d3e); color:#fff; border-color:var(--brand-primary, #0f3d3e);"
                : "background:var(--bg-surface, #fff); color:var(--text-primary, #1e293b); border-color:var(--border-subtle, #cbd5e1);";
            return `<button type="button" data-worship-tab="${t.id}" style="padding:7px 15px; border-radius:999px; border:1px solid; font-size:13px; font-weight:600; cursor:pointer; ${activeStyle}">${t.label}</button>`;
        }).join("");
        container.parentNode.insertBefore(bar, container);

        bar.querySelectorAll("[data-worship-tab]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                activeReligion = btn.getAttribute("data-worship-tab");
                bar.remove();
                injectWorshipFilterPills();
                var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
                renderWorship(q);
            });
        });
    };

    fetch("../../data/worshipData.json")
        .then(function (res) { return res.json(); })
        .then(function (data) {
            worshipCache = data;
            injectSearchBar("worship", "Search Temples, Churches, Mosques or Synagogues...", "ക്ഷേത്രങ്ങൾ, പള്ളികൾ, മസ്ജിദുകൾ തിരയുക...", renderWorship);
            injectWorshipFilterPills();
            renderWorship("");
        });

    window.addEventListener("npLanguageChanged", function () {
        injectSearchBar("worship", "Search Temples, Churches, Mosques or Synagogues...", "ക്ഷേത്രങ്ങൾ, പള്ളികൾ, മസ്ജിദുകൾ തിരയുക...", renderWorship);
        var q = document.getElementById("dirSearchBox") ? document.getElementById("dirSearchBox").value.toLowerCase().trim() : "";
        renderWorship(q);
    });
}

