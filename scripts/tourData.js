// Tourism Data
var tourData = [
	{
		id: "1",
		name: "Cherai Beach",
		category: "Beaches & Backwaters",
		distance: "6.3 KM",
		about: "Cherai Beach is one of the most visited beaches in Kerala, situated around 25 km from downtown Kochi and 20 km from Cochin International Airport.",
		description: "Cherai Beach is situated at around 25 km from downtown Kochi and 20 km from Cochin International Airport. The seashells found here are unique and one often runs into dolphins in this area.<br><br>It is the ideal blend of both the backwaters and the sea. The area itself has seen many new resorts and hotels crop up, which have facilitated the increase in tourist activity.",
		photo: "../img/tourism/cherai.jpg",
		photosmall: "../img/tourism/cherai_small.jpg"
	},
	{
		id: "2",
		name: "Munambam Beach",
		category: "Beaches & Backwaters",
		distance: "10 KM",
		about: "Munambam Beach (also known as Muziris Beach) is situated at the north end of Vypin Island in Ernakulam.",
		description: "Munambam is a suburb of Kochi, India at the north end of Vypeen Island, surrounded by the Arabian Sea on the west, Periyar river on the east, and a mouth of the sea on the north.<br><br>The main occupation of its inhabitants is fishing. Munambam is famous in Ernakulam and Thrissur districts for the presence of major fishing harbour in this region. It is also the mouth of the district's major river Periyar which can be seen from the Munambam Muziris beach.",
		photo: "../img/tourism/munambam.jpg",
		photosmall: "../img/tourism/munambam_small.jpg"
	},
	{
		id: "3",
		name: "Kuzhuppilly Beach",
		category: "Beaches & Backwaters",
		distance: "9.4 KM",
		about: "At a distance of 3.5 kms from Cherai Beach in Kochi, Kuzhuppilly Beach is a serene coastal stretch famous for kite festivals and pine trees.",
		description: "Lined with huge rocks all along the shore, the place makes for a perfect spot to spend time away from the hustle-bustle of the city.<br><br>The drive to the beach is equally beautiful with paddy fields and backwater lakes flanked on the sides of the road.",
		photo: "../img/tourism/kuzhuppilly.jpg",
		photosmall: "../img/tourism/kuzhuppilly_small.jpg"
	},
	{
		id: "4",
		name: "Paliam Palace (Kovilakom)",
		category: "Heritage Monument",
		distance: "4.6 KM",
		about: "The Paliam Palace was once used as the residence of the Paliath Achans, who were the prime ministers to the former Maharajas of the State of Kochi.",
		description: "The Paliam Palace was once used as the residence of the Paliath Achans, who were the prime ministers to the former Maharajas of the State of Kochi.<br><br>During the 16th century, when the security of the Raja was under threat by the Portuguese, the then Paliath Achan ensured the safety of the Raja by escorting him to Chendamangalam.<br><br>The Dutch in appreciation of the Paliath Achan's services renovated this building in Chendamangalam and presented it to him.",
		photo: "../img/tourism/paliyam.jpg",
		photosmall: "../img/tourism/paliyam_small.jpg",
		website: "www.paliam.in"
	},
	{
		id: "5",
		name: "Chendamangalam Jewish Synagogue",
		category: "Heritage Monument",
		distance: "5.3 KM",
		about: "The Jewish Synagogue at Chendamangalam, constructed around the 17th century, reflects Kerala's historic Jewish heritage.",
		description: "The Jewish Synagogue at Chendamangalam, constructed around the 17th century is of a traditional style, with a separate entrance for women.<br><br>The land for it was provided by the family of Paliam, the traditional ministers of Kochi, who owned the village of Chendamangalam during that period. The Department of Archaeology scientifically conserved the Synagogue using traditional materials.<br><br>A historic Hebrew tomb inscription dating to 1269 AD is found in front of it.",
		photo: "../img/tourism/synagogue.jpg",
		photosmall: "../img/tourism/synagogue_small.jpg"
	},
	{
		id: "6",
		name: "Paliam Nalukettu Museum",
		category: "Heritage Monument",
		distance: "4.7 KM",
		about: "Paliam Nalukettu is the traditional homestead (tharavad) where several generations of the matrilineal Paliam joint family lived together.",
		description: "Paliam Nalukettu is the traditional homestead where several generations of a matrilineal joint family lived together.<br><br>Nalukettu consists of a main house along with a few satellite houses. Portico, Inner Hall, Kitchen and four blocks - Northern, Southern, Eastern and Western - constitute the different parts of a traditional Nalukettu. This structure is an epitome of the traditional housing architecture of Kerala.",
		photo: "../img/tourism/paliyammuseum.jpg",
		photosmall: "../img/tourism/paliyammuseum_small.jpg",
		website: "www.paliam.in"
	},
	{
		id: "7",
		name: "Kottappuram Muziris Fort",
		category: "Heritage Monument",
		distance: "10.5 KM",
		about: "Kottappuram Fort, built by the Portuguese in 1523, was referred to popularly as Cranganore Fort and is now known as Kodungallur Fort.",
		description: "Kottappuram Fort, built by the Portuguese in 1523 was referred to popularly as Cranganore Fort and is now known as Kodungallur Fort. It was captured by the Dutch in 1663.<br><br>The Fort had a strategic position on the mouth of the river Periyar before it joins the Arabian Sea, which gave it the advantage of controlling the ships and boats that passed to and from the interior of Malabar.",
		photo: "../img/tourism/kottapuram.jpg",
		photosmall: "../img/tourism/kottapuram_small.jpg"
	},
	{
		id: "8",
		name: "Pallippuram Fort",
		category: "Heritage Monument",
		distance: "7.8 KM",
		about: "Pallippuram Fort was built by the Portuguese in 1503 and is the oldest existing European fort in India.",
		description: "Pallippuram Fort is a hexagonal fort in Pallippuram, Vypin, Ernakulam district of Kerala. It was built by the Portuguese in 1503 and is the oldest existing European fort in India.<br><br>The Dutch captured the fort in 1661 and sold it to the Kingdom of Travancore in 1789. It is now a protected monument of the Kerala State Department of Archaeology.",
		photo: "../img/tourism/pallipuram.jpg",
		photosmall: "../img/tourism/pallipuram_small.jpg"
	},
	{
		id: "9",
		name: "St. Thomas Kottakkavu Forane Church",
		category: "Pilgrim & Heritage",
		distance: "1 KM",
		about: "Kottakkavu Mar Thoma Syro-Malabar Pilgrim Church was established in 52 AD by St. Thomas the Apostle.",
		description: "Kottakkavu Church situated in the heart of Paravur town in Kerala is a significant place of religious importance as one of the seven churches established by St. Thomas, one of the apostles of Jesus Christ.<br><br>It is believed that the Persian Cross preserved in the chapel in front of the church was engraved in rock in 880 AD.",
		photo: "../img/tourism/kottakavu.jpg",
		photosmall: "../img/tourism/kottakavu_small.jpg"
	},
	{
		id: "10",
		name: "Cheraman Juma Mosque",
		category: "Pilgrim & Heritage",
		distance: "9.7 KM",
		about: "Cheraman Juma Masjid is the first mosque in India, built in 629 AD on the Paravur-Kodungallur road.",
		description: "Malik Bin Dinar, one of the first Arab propagators of Islam to have come to the Indian subcontinent, built the Cheraman Juma Masjid in 629 CE. It stands as a timeless symbol of religious harmony and ancient maritime trade links between Muziris and Arabia.",
		photo: "../img/tourism/cheraman.jpg",
		photosmall: "../img/tourism/cheraman_small.jpg"
	},
	{
		id: "11",
		name: "Kadamakudy Islands, Varapuzha",
		category: "Backwaters & Eco-Tourism",
		distance: "14 KM",
		about: "Kadamakudy Islands is a scenic cluster of fourteen islands famous for pokkali paddy fields, kayaking, and sunset backwater views.",
		description: "Kadamakudy is a cluster of islands located near Varapuzha, 15 km away from Kochi and 14 km from N. Paravur. This countryside is a live gallery of pokkali farming, fishing, toddy tapping and prawn farming.",
		photo: "../img/tourism/kadamakudi.jpg",
		photosmall: "../img/tourism/kadamakudi_small.jpg"
	},
	{
		id: "12",
		name: "Matsyafed Njarakkal Aqua Tourism Farm",
		category: "Aqua Tourism",
		distance: "17 KM",
		about: "Eco-friendly aquatourism facilities in the ambience of backwaters in Matsyafed fish farms at Njarakkal.",
		description: "The farm is very close to Chappa beach in Elamkunnapuzha panchayat. The Fish Farm has 46 acres of water body with 3 blocks of fish culture ponds. Facilities like pedal boating, row boating, mangrove walks, and angling of fish are available.",
		photo: "../img/tourism/njarakkal.JPG",
		photosmall: "../img/tourism/njarakkal_small.jpg"
	}
];

function weburl(url) {
	var full = url.startsWith("http") ? url : `https://${url}`;
	return `<p><b>Website:</b> <a href="${full}?utm_source=northparavur.in" target="_blank" rel="noopener">${url}</a></p>`;
}

function tourismTemplate(place) {
	var mapQuery = encodeURIComponent(place.name + " North Paravur Kerala");
	return `
	<div class="places">
		<a data-lightbox="myimage" data-title="${place.name}" href="${place.photo}">
			<img alt="${place.name}" class="place-photo" src="${place.photosmall}" loading="lazy">
		</a>
		<h4><b>${place.name}</b></h4>
		<p><b>Category:</b> ${place.category}</p>
		<p><b>Distance from Paravur:</b> ${place.distance}</p>
		<p><b>About:</b> ${place.about}</p>
		${place.website ? weburl(place.website) : ""}
		<div style="margin-top:8px;">
			<button id="${place.id}" onclick="descOpen(this.id)"><i class="fas fa-info-circle"></i> More Info</button>
			<a class="btnWeb" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener" style="padding:8px 14px;">
				<i class="fas fa-directions"></i> Directions
			</a>
		</div>
	</div>`;
}

function tourismDesc(place) {
	return `
		<div class="bg-modal" id="tourModal_${place.id}" style="display: none;" onclick="if(event.target===this) descClose('${place.id}')">
			<div class="modal-content">
				<div class="closeButton" onclick="descClose('${place.id}')">+</div>
				<h3>${place.name}</h3>
				<img alt="${place.name}" src="${place.photo}" loading="lazy">
				<p class="modal-desc">${place.description}</p>
			</div>
		</div>`;
}

document.getElementById("tourismData").innerHTML = tourData.map(tourismTemplate).join("");
document.getElementById("tourismDesc").innerHTML = tourData.map(tourismDesc).join("");

function descOpen(clicked_id) {
	var modal = document.getElementById("tourModal_" + clicked_id);
	if (modal) modal.style.display = "flex";
}

function descClose(clicked_id) {
	var modal = document.getElementById("tourModal_" + clicked_id);
	if (modal) modal.style.display = "none";
}
