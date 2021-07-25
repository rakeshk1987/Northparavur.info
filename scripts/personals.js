var personaldata = [
    {
        id: 1,
        Name: "Kedamangalam Sadanandan",
        Life: "1926-2008",
        profession:"Kadhaprasangam (story telling)",
        details:"Kedamangalam Sadanandan was a Kadhaprasangam artist, film actor, screenwriter and lyricist from Kerala. He performed Kadhaprasangam in more than 15,000 stages for over 50,000 hours in a career spanning about 64 years. He wrote scripts for 12 films, lyrics for more than hundred films and acted in about 40 films.",
        photo_small:"../img/personals/kedamangalam.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/Kedamangalam_Sadanandan"
    },
    {
        id: 2,
        Name: "Sankaradi",
        Life: "1924-2001",
        profession:"Actor, Politician, Journalist",
        details:"Chandrasekhara Menon, better known by his screen name Sankaradi (1924–2001), was an Indian actor. He was a veteran Malayalam comedian and character artist, who had over 700 Malayalam films to his credit. He was one of the first realistic actors in South Indian cinema.",
        photo_small:"../img/personals/sankaradi.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/Sankaradi"
    },
    {
        id: 3,
        Name: "Kesari Balakrishna Pillai",
        Life: "1889-1960",
        profession:"Writer, Critic, Journalist",
        details:"Akathoot Balakrishna Pillai, known as Kesari Balakrishna Pillai, was a Malayalam writer, critic and journalist, considered by many as one of the most influential thinkers of modern Kerala. He was the eponymous founder of the newspaper, Kesari and was one of the three major figures in modern Malayalam literary criticism, along with Joseph Mundassery and M. P. Paul.",
        photo_small:"../img/personals/kesari.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/Kesari_Balakrishna_Pillai"
    },
    {
        id: 4,
        Name: "Paravoor T. K. Narayana Pillai",
        Life: "1890–1971",
        profession:"Politician",
        details:"Paravoor T. K. Narayana Pillai was an Indian freedom fighter during the British Raj in India and was a member of the Indian National Congress (INC) which fought against the British rule in India. He was the last Prime Minister of Travancore and the first Chief Minister of Travancore-Cochin at the time of its formation in 1949. He was commonly known as Parur TK.",
        photo_small:"../img/personals/paravurtk.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/Paravoor_T._K._Narayana_Pillai"
    },
    {
        id: 5,
        Name: "Paravoor Bharathan",
        Life: "1929-2015",
        profession:"Actor",
        details:"Paravoor Bharathan was an Indian actor who acted in Malayalam films. He started his career in movies during the 1950s. Bharathan is known as a versatile actor and has played a variety of roles including negative roles, character roles and comedy roles.",
        photo_small:"../img/personals/bharathan.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/Paravoor_Bharathan"
    },
    {
        id: 6,
        Name: "G. A. Menon",
        Life: "1931-2003",
        profession:"Entrepreneur",
        details:"was a US-based entrepreneur born in North Paravur. He set up the two Technopark companies namely UST Global and Toonz Animation",
        photo_small:"../img/personals/gamenon.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/G._A._Menon"
    },
    {
        id: 7,
        Name: "Salim Kumar",
        Life: "1969-",
        profession:"Actor",
        details:"Salim Kumar is an Indian film actor born in North Paravur, director and writer in Malayalam cinema. He won the National Film Award for Best Actor in 2010 for his role in Adaminte Makan Abu",
        photo_small:"../img/personals/salim.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/Salim_Kumar"
    },
    {
        id: 8,
        Name: "V. D. Satheesan",
        Life: "1964-",
        profession:"Politician",
        details:"Vadassery Damodaran Satheesan (born 31 May 1964) is an Indian politician from the Indian National Congress serving as Leader of the Opposition in the 15th Kerala Legislative Assembly. He succeeds Ramesh Chennithala as the leader of opposition. He is also acting as MLA of North Paravur from 2001 onwards.",
        photo_small:"../img/personals/vds.jpg",
        photo_large:"",
        wiki:"https://en.wikipedia.org/wiki/V._D._Satheesan"
    }
];

function personaldataTmplt(person)
{
    return `
    
    <div class="personals">
    
        <a data-lightbox="myimage" data-title = "${person.Name}" href="${person.photo_small}"> <img class="place-photo" src="${person.photo_small}"></a>
        <h4><b>${person.Name}</b></h4>
        <p><b>Years:</b> ${person.Life}</P>
        <p><b>Profession:</b> ${person.profession}</P>
        <p><b>Details:</b> ${person.details}</P>
        <p><b>Source: </b><a href="${person.wiki}" target="#" class="wiki">Wikipedia</a></P>
        

    </div>
    
    `
}

document.getElementById('personals').innerHTML = `${personaldata.map(personaldataTmplt).join('')}`