var imgData = [
    {
        id: "1",
        name: "North Paravur Sessions Court",
        photo: "../img/gallery/court.jpg",
        photosmall: "../img/gallery/court_small.jpg"
    },
    {
        id: "2",
        name: "Gothuruth Boat Race",
        photo: "../img/gallery/boat.jpg",
        photosmall: "../img/gallery/boat_small.jpg"
    },
    {
        id: "3",
        name: "Kadamakudy Islands",
        photo: "../img/gallery/kadamakudy.jpg",
        photosmall: "../img/gallery/kadamakudy_small.jpg"
    },
    {
        id: "4",
        name: "Muziris Kizhthali Shiva Temple",
        photo: "../img/gallery/kizhthali.jpg",
        photosmall: "../img/gallery/kizhthali_small.jpg"
    },
    {
        id: "5",
        name: "Kuzhuppilly Backwaters",
        photo: "../img/gallery/kuzhuppilli.jpg",
        photosmall: "../img/gallery/kuzhuppilli_small.jpg"
    },
    {
        id: "6",
        name: "North Paravur Evening Market",
        photo: "../img/gallery/market.jpg",
        photosmall: "../img/gallery/market_small.jpg"
    },
    {
        id: "7",
        name: "Munambam Muziris Beach",
        photo: "../img/gallery/munambam.jpg",
        photosmall: "../img/gallery/munambam_small.jpg"
    },
    {
        id: "8",
        name: "Muziris Hop-On Hop-Off Boat Cruise",
        photo: "../img/gallery/muziris.jpg",
        photosmall: "../img/gallery/muziris_small.jpg"
    },
    {
        id: "9",
        name: "North Paravur Paithrikolsavam",
        photo: "../img/gallery/paithrkolsavam.jpg",
        photosmall: "../img/gallery/paithrkolsavam_small.jpg"
    },
    {
        id: "10",
        name: "Samooham High School",
        photo: "../img/gallery/samooham.jpg",
        photosmall: "../img/gallery/samooham_small.jpg"
    },
    {
        id: "11",
        name: "Chendamangalam Jewish Synagogue",
        photo: "../img/gallery/synagogue.jpg",
        photosmall: "../img/gallery/synagogue_small.jpg"
    },
    {
        id: "12",
        name: "Valuthattu Temple Theyyam",
        photo: "../img/gallery/theyyam.jpg",
        photosmall: "../img/gallery/theyyam_small.jpg"
    },
    {
        id: "13",
        name: "Varapuzha Bridge",
        photo: "../img/gallery/varapuzha.jpg",
        photosmall: "../img/gallery/varapuzha_small.jpg"
    }
];

function galleryTemplate(img) {
    return `
        <div class="galleryCard">
            <a href="${img.photo}" data-lightbox="mygallery" data-title="${img.name}">
                <img alt="${img.name}" src="${img.photosmall}" loading="lazy">
            </a>
            <div class="galleryCaption">${img.name}</div>
        </div>
    `;
}

document.getElementById('gallery').innerHTML = imgData.map(galleryTemplate).join('');