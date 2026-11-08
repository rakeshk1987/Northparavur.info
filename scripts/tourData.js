// ============================================================================
// Tourism Page Engine — Powered by NP_MASTER_DATA (or fallback tourData)
// Includes Category Filter Pills, Live Search, Lightbox & Google Maps Directions
// ============================================================================

var rawTourList = (window.NP_MASTER_DATA && window.NP_MASTER_DATA.tourism) ? window.NP_MASTER_DATA.tourism.map(function (item) {
	return Object.assign({}, item, {
		photo: item.photo.startsWith("..") ? item.photo : "../" + item.photo,
		photosmall: item.photosmall.startsWith("..") ? item.photosmall : "../" + item.photosmall
	});
}) : [];

var activeCategory = "All";
var searchQuery = "";

function weburl(url) {
	var full = url.startsWith("http") ? url : `https://${url}`;
	return `<p><b>Website:</b> <a href="${full}?utm_source=northparavur.in" target="_blank" rel="noopener">${url}</a></p>`;
}

function tourismTemplate(place) {
	var mapQuery = encodeURIComponent(place.name + " North Paravur Kerala");
	var lang = localStorage.getItem("np_lang") || "en";
	var displayTitle = (lang === "ml" && place.name_ml) ? `${place.name_ml} (${place.name})` : place.name;

	return `
	<div class="places">
		<a data-lightbox="myimage" data-title="${place.name}" href="${place.photo}">
			<img alt="${place.name}" class="place-photo" src="${place.photosmall}" loading="lazy">
		</a>
		<span class="npBadge ${place.featured ? 'npBadgeFeatured' : ''}">${place.badge || place.category}</span>
		<h4><b>${displayTitle}</b></h4>
		<p><b>Category:</b> ${place.category} &bull; <b>Distance from Paravur:</b> ${place.distance}</p>
		<p>${place.about}</p>
		${place.website ? weburl(place.website) : ""}
		<div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
			<button id="${place.id}" onclick="descOpen(this.id)" style="margin:0;"><i class="fas fa-book-open"></i> Full History & Details</button>
			<a class="btnWeb" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener" style="padding:8px 14px;">
				<i class="fas fa-directions"></i> Google Maps
			</a>
			<a class="btnWeb" href="../pages/directory/hotels.html" style="padding:8px 14px;">
				<i class="fas fa-bed"></i> Nearby Stays
			</a>
		</div>
	</div>`;
}

function tourismDesc(place) {
	return `
		<div class="bg-modal" id="tourModal_${place.id}" style="display: none;" onclick="if(event.target===this) descClose('${place.id}')">
			<div class="modal-content">
				<div class="closeButton" onclick="descClose('${place.id}')">+</div>
				<span class="npBadge">${place.category} &bull; ${place.distance}</span>
				<h3>${place.name}</h3>
				<img alt="${place.name}" src="${place.photo}" loading="lazy">
				<p class="modal-desc">${place.description}</p>
			</div>
		</div>`;
}

function renderTourismFilterBar() {
	var container = document.getElementById("tourismData");
	if (!container) return;

	var categories = ["All", "Muziris Heritage", "Beaches & Backwaters", "Pilgrim & Heritage", "Backwaters & Eco-Tourism"];
	var existingBar = document.getElementById("tourismFilterWrap");
	if (!existingBar) {
		var wrap = document.createElement("div");
		wrap.id = "tourismFilterWrap";
		wrap.className = "searchContainer";
		wrap.style.margin = "0 0 16px 0";
		wrap.innerHTML = `
			<input id="tourismSearchInput" type="search" class="searchInput" placeholder="Search Cherai, Synagogue, Paliam, Fort, Kadamakudy..." aria-label="Search tourist places">
			<div id="tourismCategoryPills" style="display:flex; gap:8px; flex-wrap:wrap;"></div>
		`;
		container.parentNode.insertBefore(wrap, container);

		document.getElementById("tourismSearchInput").addEventListener("input", function (e) {
			searchQuery = e.target.value.toLowerCase().trim();
			renderTourismList();
		});
	}

	var pillsEl = document.getElementById("tourismCategoryPills");
	if (pillsEl) {
		pillsEl.innerHTML = categories.map(function (cat) {
			var isAct = cat === activeCategory;
			return `<button type="button" onclick="setTourismCategory('${cat}')" class="controlBtn" style="${isAct ? 'background:var(--brand-primary); color:#fff; border-color:var(--brand-primary);' : ''}">${cat}</button>`;
		}).join("");
	}
}

window.setTourismCategory = function (cat) {
	activeCategory = cat;
	renderTourismFilterBar();
	renderTourismList();
};

function renderTourismList() {
	var filtered = rawTourList.filter(function (place) {
		var matchesCat = activeCategory === "All" || place.category === activeCategory;
		var matchesQuery = !searchQuery ||
			place.name.toLowerCase().indexOf(searchQuery) !== -1 ||
			place.about.toLowerCase().indexOf(searchQuery) !== -1 ||
			place.category.toLowerCase().indexOf(searchQuery) !== -1;
		return matchesCat && matchesQuery;
	});

	document.getElementById("tourismData").innerHTML = filtered.map(tourismTemplate).join("");
	document.getElementById("tourismDesc").innerHTML = rawTourList.map(tourismDesc).join("");
}

renderTourismFilterBar();
renderTourismList();

window.addEventListener("npLanguageChanged", function () {
	renderTourismList();
});

function descOpen(clicked_id) {
	var modal = document.getElementById("tourModal_" + clicked_id);
	if (modal) modal.style.display = "flex";
}

function descClose(clicked_id) {
	var modal = document.getElementById("tourModal_" + clicked_id);
	if (modal) modal.style.display = "none";
}
