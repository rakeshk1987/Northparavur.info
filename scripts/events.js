//Tourism Data
var tourData = [
	{
		id: "1",
		name: "O FOUR SPORTS",
        website: "http://ofoursports.com/",
		category: "SPORTS & LEISURE",
		about: "Play 7's turf football and turf Cricket in Kochi's first indoor rooftop turf just 6 K.M away from town",
		location: "HM Building ,Near Matha College of Technology, <br> Manakkapadi-Manjaly Road, Karumalloor P O,<br> North Paravur, Ernakulam 683513",
        description:"Play 7's turf football and turf Cricket in Kochi's first indoor rooftop turf. Operating From 5:00 A.M to 10:00 P.M, Monday to Friday.",
        phone: "+919846437740",
        email:"midhun@ofoursports.com",
		photo: "../img/events/turf.jpg",
		photosmall: "../img/events/turf_small.jpg",
        date: "24/07/2021"
	}
];


//arrow function to return websites
weburl = (url) => `<p><b>Website:</b><a href="${url}"> ${url}</a></P>`

//function for display content
eventTemplate = (place) =>{

	return `

	<div class="places">

		<a data-lightbox="myimage" data-title = "${place.name}" href="${place.photo}"> <img class="place-photo" src="${place.photosmall}"></a>
        <p style="text-align: right; font-size: xx-small; color: blueviolet;">${place.date}</p>
		<h4><b>${place.name}</b></h4>
        <p>${place.about}</P>
		<p><b>Category:</b> ${place.category}</P>
        <p><b>Location:</b> ${place.location}</P>
		${place.website ? weburl(place.website) : ''}
		<br>
		<button id="${place.id}" onclick="descOpen(this.id)">More Info</button>		
	</div>

	`
}

function eventmDesc(place){
	return `

		<div class="bg-modal" style="display: none;">
			<div class="modal-content">
				<div class="closeButton" id="close" onclick="descClose(${place.id})">+</div>
				<h3>${place.name}</h3>
                <img src="${place.photosmall}">
				<p class="modal-desc">${place.description}</p>
                <p class="modal-desc"><b>Phone:</b> ${place.phone}</p>
                <p class="modal-desc"><b>Email:</b> ${place.email}</p>
			</div>
		</div>

	`
}



document.getElementById("eventData").innerHTML = `${tourData.map(eventTemplate).join('')}`
document.getElementById("eventDesc").innerHTML = `${tourData.map(eventmDesc).join('')}`


//modal click button
function descOpen(clicked_id){
	document.querySelector('#eventDesc > div:nth-child('+clicked_id+')').style.display = 'flex';
}

//modal close button
function descClose(clicked_id){
	document.querySelector('#eventDesc > div:nth-child('+clicked_id+')').style.display = 'none';
}


