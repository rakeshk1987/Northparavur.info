// Events & Local Business Highlights Data
var tourData = [
	{
		id: "1",
		name: "O FOUR SPORTS (Indoor Rooftop Turf)",
		website: "ofoursports.com",
		category: "SPORTS & LEISURE",
		about: "Play 7's turf football and turf cricket in an indoor rooftop turf just 6 KM away from North Paravur town.",
		location: "HM Building, Near Matha College of Technology, Manakkapadi-Manjaly Road, Karumalloor P.O., North Paravur, Ernakulam 683513",
		description: "Play 7's turf football and turf cricket in an indoor rooftop turf. Operating from 5:00 A.M to 10:00 P.M, Monday to Sunday.",
		phone: "+919846437740",
		email: "midhun@ofoursports.com",
		photo: "../img/events/turf.jpg",
		photosmall: "../img/events/turf_small.jpg",
		date: "Featured Venue"
	}
];

function weburl(url) {
	return url.startsWith("http") ? url : `https://${url}/?utm_source=northparavur.in`;
}

function eventTemplate(place) {
	var cleanPhone = place.phone ? place.phone.replace(/[^0-9+]/g, "") : "";
	var waPhone = place.phone ? place.phone.replace(/[^0-9]/g, "") : "";
	var waText = encodeURIComponent("Hi, I found " + place.name + " on NorthParavur.in and would like to inquire about booking.");

	return `
	<div class="places">
		<a data-lightbox="myimage" data-title="${place.name}" href="${place.photo}">
			<img alt="${place.name}" class="place-photo" src="${place.photosmall}" loading="lazy">
		</a>
		<p style="text-align: right; font-size: 12px; font-weight: 700; color: var(--brand-primary);">${place.date}</p>
		<h4><b><a href="${place.website ? weburl(place.website) : '#'}" target="_blank" rel="noopener">${place.name}</a></b></h4>
		<p>${place.about}</p>
		<p><b>Category:</b> ${place.category}</p>
		<p><b>Phone:</b> ${place.phone}</p>
		<div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
			<button id="${place.id}" onclick="descOpen(this.id)" style="margin:0;"><i class="fas fa-info-circle"></i> More Info</button>
			${cleanPhone ? `<a class="btnCall" href="tel:${cleanPhone}"><i class="fas fa-phone-alt"></i> Call Now</a>` : ""}
			${waPhone ? `<a class="btnWhatsApp" href="https://wa.me/${waPhone}?text=${waText}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> WhatsApp</a>` : ""}
		</div>
	</div>`;
}

function eventmDesc(place) {
	return `
		<div class="bg-modal" id="eventModal_${place.id}" style="display: none;" onclick="if(event.target===this) descClose('${place.id}')">
			<div class="modal-content">
				<div class="closeButton" onclick="descClose('${place.id}')">+</div>
				<h3>${place.name}</h3>
				<img alt="${place.name}" src="${place.photosmall}">
				<p class="modal-desc">${place.description}</p>
				<p class="modal-desc"><b>Location:</b><br>${place.location}</p>
				<p class="modal-desc"><b>Phone:</b> <a href="tel:${place.phone}">${place.phone}</a></p>
				<p class="modal-desc"><b>Email:</b> <a href="mailto:${place.email}">${place.email}</a></p>
			</div>
		</div>`;
}

document.getElementById("eventData").innerHTML = tourData.map(eventTemplate).join("");
document.getElementById("eventDesc").innerHTML = tourData.map(eventmDesc).join("");

function descOpen(clicked_id) {
	var modal = document.getElementById("eventModal_" + clicked_id);
	if (modal) modal.style.display = "flex";
}

function descClose(clicked_id) {
	var modal = document.getElementById("eventModal_" + clicked_id);
	if (modal) modal.style.display = "none";
}
