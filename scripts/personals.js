var personaldata = [
    {
        id: 1,
        Name: "Kedamangalam Sadanandan",
        Life: "1926–2008",
        profession: "Kadhaprasangam (Storytelling), Lyricist, Actor",
        details: "Kedamangalam Sadanandan was a Kadhaprasangam artist, film actor, screenwriter and lyricist from Kerala. He performed Kadhaprasangam in more than 15,000 stages for over 50,000 hours in a career spanning about 64 years. He wrote scripts for 12 films, lyrics for more than a hundred films and acted in about 40 films.",
        photo_small: "../img/personals/kedamangalam.jpg",
        wiki: "https://en.wikipedia.org/wiki/Kedamangalam_Sadanandan"
    },
    {
        id: 2,
        Name: "Sankaradi",
        Life: "1924–2001",
        profession: "Actor, Politician, Journalist",
        details: "Chandrasekhara Menon, better known by his screen name Sankaradi (1924–2001), was an iconic Indian actor born in Cherai, North Paravur. He was a veteran Malayalam comedian and character artist who had over 700 Malayalam films to his credit and was one of the pioneers of realistic acting in South Indian cinema.",
        photo_small: "../img/personals/Sankaradi.jpg",
        wiki: "https://en.wikipedia.org/wiki/Sankaradi"
    },
    {
        id: 3,
        Name: "Kesari Balakrishna Pillai",
        Life: "1889–1960",
        profession: "Writer, Critic, Journalist",
        details: "Akathoot Balakrishna Pillai, known as Kesari Balakrishna Pillai, was a Malayalam writer, critic and journalist who spent his later life in Madathumpady, North Paravur. He was the founder of the newspaper Kesari and one of the three major figures in modern Malayalam literary criticism.",
        photo_small: "../img/personals/kesari.jpg",
        wiki: "https://en.wikipedia.org/wiki/Kesari_Balakrishna_Pillai"
    },
    {
        id: 4,
        Name: "Paravoor T. K. Narayana Pillai",
        Life: "1890–1971",
        profession: "Freedom Fighter, First Chief Minister of Travancore-Cochin",
        details: "Paravoor T. K. Narayana Pillai was an Indian freedom fighter and statesman born in North Paravur. He served as the last Prime Minister of Travancore and the first Chief Minister of Travancore-Cochin at the time of its formation in 1949. He was popularly known as Parur T. K.",
        photo_small: "../img/personals/paravurtk.jpg",
        wiki: "https://en.wikipedia.org/wiki/Paravoor_T._K._Narayana_Pillai"
    },
    {
        id: 5,
        Name: "Paravoor Bharathan",
        Life: "1929–2015",
        profession: "Actor",
        details: "Paravoor Bharathan was a beloved Indian actor from Moothakunnam, North Paravur who acted in over 300 Malayalam films starting in the 1950s. He was known for his versatility across negative roles, character roles, and comedy roles.",
        photo_small: "../img/personals/bharathan.jpg",
        wiki: "https://en.wikipedia.org/wiki/Paravoor_Bharathan"
    },
    {
        id: 6,
        Name: "G. A. Menon",
        Life: "1931–2003",
        profession: "Entrepreneur, Founder of UST Global & Toonz Animation",
        details: "G. A. Menon was a visionary US-based entrepreneur born in North Paravur. He founded two landmark Technopark companies in Kerala: UST Global and Toonz Animation.",
        photo_small: "../img/personals/gamenon.jpg",
        wiki: "https://en.wikipedia.org/wiki/G._A._Menon"
    },
    {
        id: 7,
        Name: "Salim Kumar",
        Life: "1969–Present",
        profession: "National Award-Winning Actor, Director, Writer",
        details: "Salim Kumar is an Indian film actor, director, and writer born in Chittattukara, North Paravur. He won the National Film Award for Best Actor in 2010 for his role in Adaminte Makan Abu.",
        photo_small: "../img/personals/salim.jpg",
        wiki: "https://en.wikipedia.org/wiki/Salim_Kumar"
    },
    {
        id: 8,
        Name: "V. D. Satheesan",
        Life: "1964–Present",
        profession: "Politician, Leader of the Opposition (Kerala Legislative Assembly)",
        details: "Vadassery Damodaran Satheesan is an Indian politician serving as the Leader of the Opposition in the 15th Kerala Legislative Assembly and representing the North Paravur constituency continuously since 2001.",
        photo_small: "../img/personals/vds.jpg",
        wiki: "https://en.wikipedia.org/wiki/V._D._Satheesan"
    }
];

function personaldataTmplt(person) {
    return `
    <div class="personals">
        <a data-lightbox="myimage" data-title="${person.Name}" href="${person.photo_small}">
            <img alt="${person.Name}" class="place-photo" src="${person.photo_small}" loading="lazy">
        </a>
        <h4><b>${person.Name}</b></h4>
        <p><b>Years:</b> ${person.Life}</p>
        <p><b>Profession:</b> ${person.profession}</p>
        <p><b>Details:</b> ${person.details}</p>
        <p><b>Source:</b> <a href="${person.wiki}" target="_blank" rel="noopener" class="wiki">Read on Wikipedia &rarr;</a></p>
    </div>`;
}

document.getElementById('personals').innerHTML = personaldata.map(personaldataTmplt).join('');