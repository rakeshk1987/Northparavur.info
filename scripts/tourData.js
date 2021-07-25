//Tourism Data
var tourData = [
	{
		id: "1",
		name: "Cherai Beach",
		category: "Beaches & Backwaters",
		distance: "6.3 KM",
		about: "Cherai Beach is One of the most visited beaches in Kerala, it is situated at around 25 km from downtown Kochi and 20 km from Cochin International Airport.",
		description: "Cherai Beach is situated at around 25 km from downtown Kochi and 20 km from Cochin International Airport. The seashells found here are unique and one often runs into dolphins in this area. <br><br>It is the ideal blend of both the backwaters and the sea. The area itself has seen many new resorts and hotels crop up, which have facilitated the increase in tourist activity.",
		photo: "../img/tourism/cherai.jpg",
		photosmall: "../img/tourism/cherai_small.jpg"
	},
	{
		id: "2",
		name: "Munambam Beach",
		category: "Beaches & Backwaters",
		distance: "10 KM",
		about: "Munambam Beach (also known as Muziris Beach) is situated at the north end of Vypin Island in Ernakulam.",
		description: "Munambam is a suburb of Kochi, India at the north end of Vypeen Island, surrounded by the Arabian Sea on the west, Periyar river on the east, and a mouth of the sea on the north. <br><br>The main occupation of its inhabitants is fishing. Munambam is famous in Ernakulam and Thrissur districts for the presence of major fishing harbour in this region. It is also the mouth of the district major river Periyar which can be seen from the Munambam Muziris beach.",
		photo: "../img/tourism/munambam.jpg",
		photosmall: "../img/tourism/munambam_small.jpg"
	},
	{
		id: "3",
		name: "Kuzhuppilly Beach",
		category: "Beaches & Backwaters",
		distance: "9.4 KM",
		about: "At a distance of 3.5 kms from Cherai Beach in Kochi, Kuzhuppilly Beach is remotely located and really well hidden even from the localites.",
		description: "Lined with huge rocks all along the shore, the place makes for a perfect romantic spot or even if you want to spend some time away from the hustle-bustle of the city. <br><br>The drive to the beach is equally beautiful with two lakes flanked on the side of the narrow road.",
		photo: "../img/tourism/kuzhuppilly.jpg",
		photosmall: "../img/tourism/kuzhuppilly_small.jpg"
	},
	{
		id: "4",
		name: "Paliam Palace",
		category: "Monument",
		distance: "4.6 KM",
		about: "The Paliam Palace was once used as the residence of the Paliath Achans, who were the prime ministers to the former Maharajas of the State of Kochi.",
		description: "The Paliam Palace was once used as the residence of the Paliath Achans, who were the prime ministers to the former Maharajas of the State of Kochi. <br><br>During the 16th century, when the security of the Raja was under threat by the Portuguese, the then Paliath Achan ensured the safety of the Raja by escorting him to Chendamangalam.). <br><br>The Raja is believed to have stayed incognito in the place near the Kalari, hence the name Paliam Kovilakom (Palace). The Dutch in appreciation of the Paliath Achan's services renovated this building in Chendamangalam and presented it to him.",
		photo: "../img/tourism/paliyam.jpg",
		photosmall: "../img/tourism/paliyam_small.jpg",
		website: "www.paliam.in"
	},
	{
		id: "5",
		name: "Chennamangalam Jewish Synagogue",
		category: "Monument",
		distance: "5.3 KM",
		about: "The Jewish Synagogue at Chennamangalam, constructed around the 17th century is of a traditional style",
		description: "The Jewish Synagogue at Chennamangalam, constructed around the 17th century is of a traditional style, with a separate entrance for women. <br><br>The land for it was provided by the family of Paliam, the traditional ministers of Kochi, who owned the village of Chennamangalam during that period. The Department of Archeology had scientifically conserved the Synagogue using traditional materials, which was otherwise in a dilapidated state. <br><br>A tomb inscription believed to belong to one of the early members of the Synagogue is found in front of it. Many other tomb inscriptions have also been collected from the same site. On the East side of the Synagogue, there is a cemetery of about 400 meters long belonging to this Synagogue. <br><br>The Department, in collaboration with the Jews abroad, has arranged a display inside the Synagogue, which is titled - The Jewish Synagogues in Kerala.",
		photo: "../img/tourism/synagogue.jpg",
		photosmall: "../img/tourism/synagogue_small.jpg"
	},
	{
		id: "6",
		name: "Paliam Nalukettu Museum",
		category: "Monument",
		distance: "4.7 KM",
		about: "Paliam Nalukettu's are the traditional homesteads (tharavads) where several generations of a matrilineal joint family lived together",
		description: "Paliam Nalukettu's are the traditional homesteads (tharavads) where several generations of a matrilineal joint family lived together. <br><br>Nalukettu consists of a main house along with a few satellite houses. Portico, Inner Hall, Kitchen and four blocks - Northern, Southern, Eastern and Western - constitute the different parts of a traditional Nalukettu. The design and construction pattern are closely linked to the life cycle of women in the family, their rituals, beliefs and celebrations. <br><br>Nalukettu was occupied by the women of Paliam Noble family who followed matrilineal system. This structure is also an epitome of the traditional housing architecture of Kerala. Nalukettu museum presents to the visitor, the architectural model of Nalukettu and various social-cultural and economic practices from the feudal era.",
		photo: "../img/tourism/paliyammuseum.jpg",
		photosmall: "../img/tourism/paliyammuseum_small.jpg",
		website: "www.paliam.in"
	},
	{
		id: "7",
		name: "Kottappuram Muziris Fort",
		category: "Monument",
		distance: "10.5 KM",
		about: "Kottappuram Fort, built by the Portuguese in 1523 was referred to popularly as Cranganore Fort and is now known as Kodungallur Fort.",
		description: "Kottappuram Fort, built by the Portuguese in 1523 was referred to popularly as Cranganore Fort and is now known as Kodungallur Fort. It was captured and destroyed by the Dutch in 1663. <br><br>The Fort had a strategic position, on the mouth of the river Periyar, before it joins the Arabian Sea, which gave it the advantage of controlling the ships and boats that passed to and from the interior of Malabar. <br><br>The town developed around this fort. A church and many traditional houses in the nearby area, built by the Europeans still remain today. <br><br>Kottappuram Fort played a significant role in many wars between the Zamorin and the rulers of Kochi. <br><br>In 1662 the Dutch fleet had made an attempt to capture it from the Portuguese, but that invasion was successful only in 1663. It was a heavy fight, in which the Kottappuram Fort was severely damaged. <br><br>After taking over the Fort, the Dutch demolished it to the minimum and used it as an outhouse to guard their trade ships. When the interest of the rulers of Mysore turned towards Malabar, Haider Ali negotiated with the Dutch for the purchase of the Kottappuram Fort and the one at Pallippuram. <br><br>During Tipu Sultan’s possession of the Malabar Coast, the Travancore rulers felt it was imperative for them to possess these forts, to safeguard their kingdom against invasion by the Mysore rulers. So, the then Travancore King, Ramavarma Dharmaraja (1758-1798), purchased these two forts on 31 July 1789. The agreement was executed in 1909, by Raja Kesava Dasa, the Dewan of Travancore and John Gerard Van Angelbeck, the Dutch Governor. Later, finding it in a ruined state, the Department of Archaeology of Travancore erected a memorial pillar inside the Fort and decided to preserve it as a public property.",
		photo: "../img/tourism/kottapuram.jpg",
		photosmall: "../img/tourism/kottapuram_small.jpg"
	},
	{
		id: "8",
		name: "Pallippuram Fort",
		category: "Monument",
		distance: "7.8 KM",
		about: "Pallippuram Fort was built by the Portuguese in 1503 and is the oldest existing European fort in India.",
		description: "Pallippuram Fort is a fort in Pallippuram, Vyppin, Ernakulam district of Kerala, south India. It was built by the Portuguese in 1503 and is the oldest existing European fort in India. <br><br>The Dutch captured the fort in 1661 and sold it to the Kingdom of Travancore in 1789 and is now a protected monument of the Kerala State Department of Archaeology.",
		photo: "../img/tourism/pallipuram.jpg",
		photosmall: "../img/tourism/pallipuram_small.jpg"
	},
	{
		id: "9",
		name: "St. Thomas Kottakkavu Forane Church",
		category: "Religious",
		distance: "1 KM",
		about: "Kottakkavu Mar Thoma Syro-Malabar Pilgrim Church is a Syro-Malabar church established in 52 AD by St. Thomas/ Mar Thoma shleeha",
		description: "Kottakavu Church situated in the heart of Paravur town in Kerala is a significant place of religious importance as one of the seven churches or Christian settlements established by St. Thomas, one of the apostles of Jesus Christ. <br><br> It is believed that the Persian Cross, which is preserved in the chapel in front of the church, might have been engraved in rock in 880 AD. A wooden cross which the saint had planted was kept in the church till the 18th century. <br><br>But during the siege of Tipu Sultan, various churches were demolished, and this cross too was destroyed. The church ransacked at that time was the third one built after the saint's time. The church of 1308 was rebuilt and blessed on 15th August 2002.",
		photo: "../img/tourism/kottakavu.jpg",
		photosmall: "../img/tourism/kottakavu_small.jpg"
	},
	{
		id: "10",
		name: "Cheramaan Juma Mosque",
		category: "Religious",
		distance: "9.7 KM",
		about: "Cheraman Juma Majsid is the first mosque in India. Built in 629 AD and it is located on the Paravur-Kodungallur road.",
		description: "Malik Bin Dinar, one of the first Arab propagators of Islam to have come to the Indian subcontinent, built the Cheraman Juma Masjid in 629 CE. Among the many stories in circulation about the mosque’s origins, the most popular recounts how Cheraman Perumal, the region’s king, gave up his throne to embrace Islam and make a pilgrimage to Mecca. <br><br>After years spent in Mecca, the king decided to return home but fell ill and died on the way. However, Malik Bin Dinar and his companions completed the king’s journey on his behalf. They carried with them a series of letters written by Cheraman Perumal asking local rulers of Kerala for their permission to build the area’s first mosques.",
		photo: "../img/tourism/cheraman.jpg",
		photosmall: "../img/tourism/cheraman_small.jpg"
	},
	{
		id: "11",
		name: "Kadamakudy, Varapuzha",
		category: "Backwaters & Fishing",
		distance: "21.3 KM",
		about: "Kadamakkudy Islands is a cluster of fourteen islands and its known as the 'Kuttanadu (alappuzha)' of Ernakulam district.",
		description: "Kadamakkudy is a cluster of island located near to varapuzha, 15 km away from Kochi and 21KM away from N. Paravur. This countryside is a live gallery of agricultural activities, fishing ,toddy tapping and prawn farming.<br><br> The area is not crowded as there are not many public transportation facilities. So please stick to private vehicle if you are planning to visit here",
		photo: "../img/tourism/kadamakudi.jpg",
		photosmall: "../img/tourism/kadamakudi_small.jpg"
	},
	{
		id: "12",
		name: "Matsyafed Njarakkal Fish Farm",
		category: "Fishing Camp",
		distance: "17 KM",
		about: "Eco- friendly aquatourism facilities are provided  in the ambience of backwaters in Matsyafed  fish farms at Njarakkal",
		description: "The farm is very close to chappa beach in Elankunnappuzha panchayat. The farm is famous for the  culture of Indian Grey Mullet ( Mugil cephalus ) which is popularly called  “ Thirutha”. <br><br>The fish ponds and canals around the farm including a mangrove island are ideal for aqua tourism.  The Fish Farm has 46 acres of water body with 3 blocks of fish culture ponds. Facilities like pedal boating, row boating, angling of fish  are available. ",
		photo: "../img/tourism/njarakkal.jpg",
		photosmall: "../img/tourism/njarakkal_small.jpg"
	}
];


//arrow function to return websites
weburl = (url) => `<p><b>Website:</b><a href="${url}"> ${url}</a></P>`

//function for display content
tourismTemplate = (place) =>{

	return `

	<div class="places">

		<a data-lightbox="myimage" data-title = "${place.name}" href="${place.photo}"> <img alt="${place.name}" class="place-photo" src="${place.photosmall}"></a>
		<h4><b>${place.name}</b></h4>
		<p><b>Category:</b> ${place.category}</P>
		<p><b>Distance from Paravur:</b> ${place.distance}</P>
		<p><b>About:</b> ${place.about}</P>
		${place.website ? weburl(place.website) : ''}
		<br>
		<button id="${place.id}" onclick="descOpen(this.id)">More Info</button>		
	</div>

	`
}

function tourismDesc(place){
	return `

		<div class="bg-modal" style="display: none;">
			<div class="modal-content">
				<div class="closeButton" id="close" onclick="descClose(${place.id})">+</div>
				<h3>${place.name}</h3>
				<img alt="${place.name}" src="${place.photo}">
				<p class="modal-desc">${place.description}</p>
			</div>
		</div>

	`
}



document.getElementById("tourismData").innerHTML = `${tourData.map(tourismTemplate).join('')}`
document.getElementById("tourismDesc").innerHTML = `${tourData.map(tourismDesc).join('')}`


//modal click button
function descOpen(clicked_id){
	document.querySelector('#tourismDesc > div:nth-child('+clicked_id+')').style.display = 'flex';
}

//modal close button
function descClose(clicked_id){
	document.querySelector('#tourismDesc > div:nth-child('+clicked_id+')').style.display = 'none';
}


