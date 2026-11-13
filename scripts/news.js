var newsItems = [
	{
		id: "1",
		title: "Muziris Heritage & Chendamangalam Handloom Circuit",
		date: "Community Highlight",
		summary: "Explore the restored synagogues, Paliam Kovilakom, and traditional Chendamangalam handloom weaving centres across North Paravur Taluk.",
		details: "North Paravur serves as the heart of the Muziris Heritage Project, one of India's largest conservation initiatives. Visitors can explore the Paravur & Chendamangalam Jewish Synagogues, Paliam Palace, and Nalukettu Museum, and support local weavers by purchasing authentic GI-tagged Chendamangalam handlooms.",
		photo: "../img/gallery/muziris.jpg",
		photosmall: "../img/gallery/muziris_small.jpg"
	},
	{
		id: "2",
		title: "Submit Local News, Temple/Church Festivals & Civic Updates",
		date: "NorthParavur.in Desk",
		summary: "Organizing a public event, cultural festival, medical camp, or sports tournament in North Paravur? Share it with our community.",
		details: "Email event posters and announcements to contact@northparavur.in to get featured on the NorthParavur.in News & Events portal free of charge for community & public service events.",
		photo: "../img/gallery/paithrkolsavam.jpg",
		photosmall: "../img/gallery/paithrkolsavam_small.jpg"
	}
];

function newsTemplate(item) {
	return `
	<div class="places">
		<a data-lightbox="myimage" data-title="${item.title}" href="${item.photo}">
			<img alt="${item.title}" class="place-photo" src="${item.photosmall}" loading="lazy">
		</a>
		<p style="text-align: right; font-size: 12px; font-weight: 700; color: var(--brand-primary);">${item.date}</p>
		<h4><b>${item.title}</b></h4>
		<p>${item.summary}</p>
		<p style="font-size: 14px;">${item.details}</p>
	</div>`;
}

var newsContainer = document.getElementById("newsData");
if (newsContainer) {
	newsContainer.innerHTML = newsItems.map(newsTemplate).join("");
}
