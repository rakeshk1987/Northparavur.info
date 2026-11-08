// ============================================================================
// NorthParavur.in — Unified Master Data Store (masterData.js)
// Edit this single file to add/update Attractions, Itineraries, Businesses,
// Schools, Hospitals, Hotels, Govt Offices, Events, News, or Personalities!
// ============================================================================

window.NP_MASTER_DATA = {
    meta: {
        siteName: "NorthParavur.in",
        domain: "https://northparavur.in",
        contactEmail: "contact@northparavur.in",
        whatsappLeadPhone: "919846437740",
        lastUpdated: "2026"
    },

    // 1. HISTORICAL TIMELINE (12 Chapters — Bilingual EN & ML)
    heritageTimeline: [
        {
            era: "1. Ancient Era • 1st Century",
            title_en: "Ancient Paravur & Port of Muziris",
            title_ml: "ചരിത്രം – പുരാതന പറവൂരും മുസിരിസും",
            desc_en: "Located along the Periyar River and backwaters, Muziris connected early Chera Kerala with Egypt, Rome, Greece, Arabia, and West Asia in the spice, black pepper, ivory, and pearl trade.",
            desc_ml: "പെരിയാർ നദിയുടെയും കായലുകളുടെയും സമീപത്തായി സ്ഥിതിചെയ്യുന്ന പറവൂരും മുസിരിസ് തുറമുഖവും ഈജിപ്ത്, റോം, ഗ്രീസ്, അറേബ്യ എന്നിവയുമായി കുരുമുളക് - സുഗന്ധവ്യഞ്ജന വ്യാപാരം നടത്തിയിരുന്നു."
        },
        {
            era: "2. 200 BCE – 1000 CE",
            title_en: "Pattanam Archaeological Excavations (KCHR 2007)",
            title_ml: "പട്ടണം – പുരാതന മുസിരിസിന്റെ അവശേഷിപ്പുകൾ",
            desc_en: "Excavations at Pattanam unearthed Roman-Mediterranean pottery, storage jars, brick structures, and wharf remains proving active global trade from the 2nd century BCE to 10th century CE.",
            desc_ml: "2007-ൽ KCHR നേതൃത്വത്തിൽ പട്ടണത്ത് നടന്ന ഖനനങ്ങളിൽ റോമൻ-മെഡിറ്ററേനിയൻ മൺപാത്രങ്ങൾ, ഇഷ്ടിക നിർമ്മിതികൾ, പുരാതന കിണറുകൾ എന്നിവ കണ്ടെത്തി."
        },
        {
            era: "3. 9th – 12th Century CE",
            title_en: "The Chera Dynasty & Mahodayapuram",
            title_ml: "ചേരന്മാരും മഹോദയപുരവും",
            desc_en: "From the Sangam Cheras to the Chera Perumals ruling from Mahodayapuram (Kodungallur), Paravur formed a key part of this political and commercial heartland.",
            desc_ml: "ഒൻപതാം നൂറ്റാണ്ടിനും പന്ത്രണ്ടാം നൂറ്റാണ്ടിനും ഇടയിൽ മഹോദയപുരം ആസ്ഥാനമാക്കി ഭരിച്ച ചേര പെരുമാക്കന്മാരുടെ ചരിത്ര-സാംസ്കാരിക മേഖലയുടെ ഭാഗമായിരുന്നു പറവൂർ."
        },
        {
            era: "4. 52 CE & 9th Century",
            title_en: "Christian Heritage – Kottakkavu Church",
            title_ml: "ക്രൈസ്തവ പൈതൃകം – കോട്ടക്കാവ് പള്ളി",
            desc_en: "Traditionally founded by St. Thomas the Apostle in 52 CE among his eight churches in Kerala, preserving an ancient 9th-century Persian Cross.",
            desc_ml: "എ.ഡി. 52-ൽ വിശുദ്ധ തോമാശ്ലീഹാ സ്ഥാപിച്ച പള്ളികളിലൊന്നായ കോട്ടക്കാവ് പള്ളിയിൽ ഒൻപതാം നൂറ്റാണ്ടിലെ പുരാതന പേർഷ്യൻ കുരിശ് സംരക്ഷിക്കപ്പെടുന്നു."
        },
        {
            era: "5. 1164 / 1615–1616 CE",
            title_en: "Jewish Heritage – Paravur Synagogue",
            title_ml: "യഹൂദ പൈതൃകം – പറവൂർ ജൂതപ്പള്ളി",
            desc_en: "Reconstructed in 1615–1616 on an earlier 1164 synagogue site, blending Kerala Padippura architecture with Jewish liturgical traditions; now preserved as the Kerala Jews History Museum.",
            desc_ml: "1164-ലെ പഴയ ജൂതപ്പള്ളിയുടെ സ്ഥാനത്ത് 1615–1616-ൽ പുനർനിർമ്മിച്ച കേരളീയ-യഹൂദ വാസ്തുവിദ്യാ സ്മാരകം; ഇന്ന് കേരള ജൂത ചരിത്ര മ്യൂസിയം."
        },
        {
            era: "6. 1498 – 18th Century",
            title_en: "European Arrival & Kingdom of Cochin",
            title_ml: "യൂറോപ്യന്മാരുടെ വരവും കൊച്ചി രാജ്യവും",
            desc_en: "Following Vasco da Gama's arrival in 1498, the Portuguese, Dutch, and English shaped central Kerala's spice trade and fortifications.",
            desc_ml: "1498-ൽ വാസ്കോ ഡ ഗാമയുടെ വരവിനുശേഷം പോർച്ചുഗീസുകാരും ഡച്ചുകാരും ഇംഗ്ലീഷുകാരും കൊച്ചി രാജ്യവുമായി ചേർന്ന് നടത്തിയ വ്യാപാര-രാഷ്ട്രീയ മാറ്റങ്ങൾ."
        },
        {
            era: "7. 1663 – 1809 CE",
            title_en: "Chendamangalam & the Paliath Achans",
            title_ml: "ചേന്ദമംഗലവും പാലിയത്തച്ചന്മാരും",
            desc_en: "Ancestral seat of the Paliath Achans, hereditary Prime Ministers of Cochin, and a rare symbol of harmony where synagogue, church, temple, and palace stand together.",
            desc_ml: "കൊച്ചി രാജാക്കന്മാരുടെ പ്രധാനമന്ത്രിമാരായിരുന്ന പാലിയത്തച്ചന്മാരുടെ ആസ്ഥാനവും മതസൗഹാർദ്ദത്തിന്റെ പ്രതീകവുമായ ചേന്ദമംഗലം."
        },
        {
            era: "8. 1762 – 15 April 1790",
            title_en: "Travancore Rule & Nedumkotta (Travancore Lines)",
            title_ml: "തിരുവിതാംകൂർ ഭരണവും നെടുങ്കോട്ടയും",
            desc_en: "Ceded to Travancore in 1762, Paravur stood along the strategic Nedumkotta fortifications before Tipu Sultan's forces breached the lines on 15 April 1790.",
            desc_ml: "1762-ൽ തിരുവിതാംകൂറിന്റെ ഭാഗമായ പറവൂരും മൈസൂർ ആക്രമണങ്ങളെ ചെറുക്കാൻ നിർമ്മിച്ച ചരിത്രപ്രസിദ്ധമായ നെടുങ്കോട്ടയും."
        },
        {
            era: "9. 1912 – 1945",
            title_en: "Municipality (1912) & Freedom Struggle (1938–1945)",
            title_ml: "സ്വാതന്ത്ര്യസമരവും നഗരസഭാ രൂപീകരണവും (1912)",
            desc_en: "Established as a Municipality in 1912; hosted Mahatma Gandhi at the Concert Ground and formed the Travancore State Congress unit in 1938.",
            desc_ml: "1912-ൽ നഗരസഭയായി രൂപീകരിക്കപ്പെട്ടു; മഹാത്മാഗാന്ധിയുടെ പറവൂർ സന്ദർശനവും 1938-ലെ സ്റ്റേറ്റ് കോൺഗ്രസ് പ്രക്ഷോഭങ്ങളും."
        },
        {
            era: "10. 19 May 1982",
            title_en: "India's First Electronic Voting Machine (EVM) Trial",
            title_ml: "ഇന്ത്യയിലെ ആദ്യത്തെ ഇലക്ട്രോണിക് വോട്ടിംഗ് പരീക്ഷണം",
            desc_en: "On 19 May 1982, 50 out of 84 polling stations in Paravur Assembly constituency made history with the first experimental use of EVMs in an Indian election!",
            desc_ml: "1982 മെയ് 19-ന് പറവൂർ നിയമസഭാ മണ്ഡലത്തിലെ 50 പോളിംഗ് സ്റ്റേഷനുകളിൽ ഇന്ത്യയിൽ ആദ്യമായി ഇലക്ട്രോണിക് വോട്ടിംഗ് മെഷീനുകൾ പരീക്ഷിച്ചു."
        }
    ],

    // 2. CURATED DAY-TRIP ITINERARIES (For Interactive Itinerary Builder)
    itineraries: {
        heritage_trail: {
            id: "heritage_trail",
            title_en: "1-Day Muziris Royal & Heritage Trail",
            title_ml: "1-ദിവസത്തെ മുസിരിസ് പൈതൃക യാത്ര",
            subtitle_en: "Ideal for history buffs, families & international travelers (9:00 AM – 6:00 PM)",
            subtitle_ml: "ചരിത്രപ്രേമികൾക്കും കുടുംബങ്ങൾക്കും അനുയോജ്യമായ ഏകദിന യാത്ര",
            stops: [
                {
                    time: "09:30 AM",
                    placeId: "4",
                    title_en: "Paliam Kovilakom & Nalukettu Museum, Chendamangalam",
                    title_ml: "പാലിയം കൊട്ടാരവും നാലുകെട്ട് മ്യൂസിയവും, ചേന്ദമംഗലം",
                    note_en: "Explore the Dutch-renovated palace and traditional Kerala matrilineal Tharavad architecture.",
                    duration: "90 mins"
                },
                {
                    time: "11:15 AM",
                    placeId: "5",
                    title_en: "Chendamangalam Jewish Synagogue & Kottayil Kovilakom",
                    title_ml: "ചേന്ദമംഗലം ജൂത സിനഗോഗും കോട്ടയിൽ കോവിലകവും",
                    note_en: "Walk the rare hillock where a Hindu Temple, Church, Mosque, and 17th-century Synagogue stand side by side, and shop authentic GI-tagged Chendamangalam Handlooms.",
                    duration: "75 mins"
                },
                {
                    time: "01:00 PM",
                    placeId: "9",
                    title_en: "Paravur Town Heritage & Lunch (Kottakkavu Church & Paravur Synagogue)",
                    title_ml: "പറവൂർ ടൗൺ പൈതൃക കാഴ്ചകളും ഉച്ചഭക്ഷണവും",
                    note_en: "Visit St. Thomas Kottakkavu Church (52 AD) and the restored Paravur Jewish Synagogue along the old market street.",
                    duration: "90 mins"
                },
                {
                    time: "03:00 PM",
                    placeId: "8",
                    title_en: "Pallippuram Hexagonal Portuguese Fort (1503 AD)",
                    title_ml: "പള്ളിപ്പുറം പോർച്ചുഗീസ് കോട്ട (1503 AD)",
                    note_en: "Drive across to Vypin Island to inspect the oldest surviving European fort in India.",
                    duration: "45 mins"
                },
                {
                    time: "04:30 PM",
                    placeId: "1",
                    title_en: "Sunset at Cherai Beach & Backwater Lagoon",
                    title_ml: "ചെറായി ബീച്ചിലെ സൂര്യാസ്തമയം",
                    note_en: "Relax where the calm backwaters meet the Arabian Sea; enjoy fresh seafood along the promenade.",
                    duration: "90 mins"
                }
            ]
        },
        coastal_backwater: {
            id: "coastal_backwater",
            title_en: "Beach, Backwaters & Pokkali Island Trail",
            title_ml: "ബീച്ച് - കായൽ - കടമക്കുടി യാത്ര",
            subtitle_en: "Ideal for nature lovers, photographers & weekend getaways",
            subtitle_ml: "പ്രകൃതിസ്നേഹികൾക്കും ഫോട്ടോഗ്രാഫർമാർക്കും അനുയോജ്യമായ യാത്ര",
            stops: [
                {
                    time: "08:30 AM",
                    placeId: "11",
                    title_en: "Morning Kayaking & Country Boat Ride at Kadamakudy Islands",
                    title_ml: "കടമക്കുടി ദ്വീപുകളിലെ പ്രഭാത കാഴ്ചകളും വള്ളംകളിയും",
                    note_en: "Experience the 14 islands of Kadamakudy, pokkali rice paddies, migratory birds, and local toddy/seafood.",
                    duration: "2.5 hours"
                },
                {
                    time: "12:00 PM",
                    placeId: "12",
                    title_en: "Matsyafed Njarakkal Aqua Tourism & Mangrove Hammocks",
                    title_ml: "ഞാറയ്ക്കൽ ഫിഷ് ഫാം അക്വാ ടൂറിസം",
                    note_en: "Enjoy traditional freshly grilled fish lunch, pedal boating, and shady mangrove island walks.",
                    duration: "2 hours"
                },
                {
                    time: "03:00 PM",
                    placeId: "3",
                    title_en: "Kuzhuppilly Beach Floating Bridge & Pine Grove",
                    title_ml: "കുഴുപ്പിള്ളി ബീച്ച്",
                    note_en: "Quiet rocky shoreline and breeze away from city crowds.",
                    duration: "1 hour"
                },
                {
                    time: "04:45 PM",
                    placeId: "2",
                    title_en: "Munambam Muziris Beach & Periyar River Mouth",
                    title_ml: "മുനമ്പം മുസിരിസ് ബീച്ചും അഴിമുഖവും",
                    note_en: "Watch fishing trawlers return at the dramatic confluence of the Periyar River and Arabian Sea.",
                    duration: "90 mins"
                }
            ]
        },
        pilgrim_harmony: {
            id: "pilgrim_harmony",
            title_en: "Sacred Heritage & Temple/Church/Mosque Circuit",
            title_ml: "തീർത്ഥാടന - സാംസ്കാരിക പൈതൃക യാത്ര",
            subtitle_en: "Explore 2,000 years of spiritual harmony across North Paravur",
            subtitle_ml: "രണ്ടായിരം വർഷത്തെ മതസൗഹാർദ്ദത്തിന്റെ നേർക്കാഴ്ചകൾ",
            stops: [
                {
                    time: "08:00 AM",
                    placeId: "9",
                    title_en: "Dakshina Mookambika Temple & Kannankulangara Temple, Paravur",
                    title_ml: "ദക്ഷിണ മൂകാംബിക ക്ഷേത്രവും കണ്ണൻകുളങ്ങര ക്ഷേത്രവും",
                    note_en: "Famous lotus-pond Saraswathi shrine renowned for Vidyarambham and classical arts.",
                    duration: "75 mins"
                },
                {
                    time: "09:45 AM",
                    placeId: "9",
                    title_en: "St. Thomas Kottakkavu Forane Pilgrim Church (52 AD)",
                    title_ml: "കോട്ടക്കാവ് സെന്റ് തോമസ് ഫൊറോന പള്ളി (52 AD)",
                    note_en: "One of the seven churches founded by St. Thomas the Apostle, featuring the ancient Persian Cross.",
                    duration: "60 mins"
                },
                {
                    time: "11:30 AM",
                    placeId: "5",
                    title_en: "Chendamangalam Jewish Synagogue (1614 AD)",
                    title_ml: "ചേന്ദമംഗലം ജൂത സിനഗോഗ്",
                    note_en: "Historic Jewish house of worship with a 1269 AD Hebrew tombstone.",
                    duration: "60 mins"
                },
                {
                    time: "02:30 PM",
                    placeId: "10",
                    title_en: "Cheraman Juma Masjid (629 AD)",
                    title_ml: "ചേരമാൻ ജുമാ മസ്ജിദ് (629 AD)",
                    note_en: "India's first mosque featuring traditional Kerala lamp-lit architecture.",
                    duration: "75 mins"
                }
            ]
        }
    },

    // 3. TOURIST ATTRACTIONS (12 Destinations)
    tourism: [
        {
            id: "1",
            name: "Cherai Beach",
            name_ml: "ചെറായി ബീച്ച്",
            category: "Beaches & Backwaters",
            distance: "6.3 KM",
            featured: true,
            badge: "Top Rated Beach",
            about: "Cherai Beach is one of the most visited beaches in Kerala, where calm backwaters run parallel to the golden Arabian Sea shoreline.",
            description: "Cherai Beach is situated around 25 km from downtown Kochi and 20 km from Cochin International Airport. The seashells found here are unique and one often spots dolphins along the coast.<br><br>It is the ideal blend of both backwaters and the sea, lined with beach resorts, cycling tracks, and seafood cafes.",
            photo: "img/tourism/cherai.jpg",
            photosmall: "img/tourism/cherai_small.jpg"
        },
        {
            id: "2",
            name: "Munambam Muziris Beach",
            name_ml: "മുനമ്പം മുസിരിസ് ബീച്ച്",
            category: "Beaches & Backwaters",
            distance: "10 KM",
            featured: false,
            badge: "River Confluence",
            about: "Situated at the northern tip of Vypin Island where the mighty Periyar River meets the Arabian Sea.",
            description: "Munambam is famous for its major fishing harbour, long breakwaters (Pulimutt), and kite-flying festivals. Watching fishing boats navigate the mouth of the Periyar River at sunset is an unforgettable sight.",
            photo: "img/tourism/munambam.jpg",
            photosmall: "img/tourism/munambam_small.jpg"
        },
        {
            id: "3",
            name: "Kuzhuppilly Beach",
            name_ml: "കുഴുപ്പിള്ളി ബീച്ച്",
            category: "Beaches & Backwaters",
            distance: "9.4 KM",
            featured: false,
            badge: "Serene Coast",
            about: "Just 3.5 km south of Cherai, Kuzhuppilly Beach offers a peaceful pine-fringed shoreline and backwater drive.",
            description: "Lined with granite rocks and casuarina trees along the shore, Kuzhuppilly is famous for international kite festivals, floating bridge water sports, and quiet sunset views.",
            photo: "img/tourism/kuzhuppilly.jpg",
            photosmall: "img/tourism/kuzhuppilly_small.jpg"
        },
        {
            id: "4",
            name: "Paliam Palace (Kovilakom)",
            name_ml: "പാലിയം കൊട്ടാരം (കോവിലകം)",
            category: "Muziris Heritage",
            distance: "4.6 KM",
            featured: true,
            badge: "Muziris Monument",
            about: "Residence of the Paliath Achans, the hereditary Prime Ministers to the former Maharajas of Cochin.",
            description: "Located in Chendamangalam, the Paliam Kovilakom blends Dutch and traditional Kerala architecture. Renovated by the Dutch in appreciation of the Paliath Achan's statesmanship, it now houses rare historical charters, weapons, and royal artifacts.",
            photo: "img/tourism/paliyam.jpg",
            photosmall: "img/tourism/paliyam_small.jpg",
            website: "www.paliam.in"
        },
        {
            id: "5",
            name: "Chendamangalam Jewish Synagogue",
            name_ml: "ചേന്ദമംഗലം ജൂത സിനഗോഗ്",
            category: "Muziris Heritage",
            distance: "5.3 KM",
            featured: true,
            badge: "1614 AD Heritage",
            about: "Constructed in the 17th century on land gifted by the Paliam family, showcasing Malabar Jewish history.",
            description: "Scientifically conserved by the Department of Archaeology, this traditional synagogue features an ornate wooden altar, a women's gallery, and a 1269 AD Hebrew tombstone—the oldest dated Jewish inscription in India.",
            photo: "img/tourism/synagogue.jpg",
            photosmall: "img/tourism/synagogue_small.jpg"
        },
        {
            id: "6",
            name: "Paliam Nalukettu Museum",
            name_ml: "പാലിയം നാലുകെട്ട് മ്യൂസിയം",
            category: "Muziris Heritage",
            distance: "4.7 KM",
            featured: false,
            badge: "Kerala Architecture",
            about: "Traditional homestead (tharavad) where generations of the matrilineal Paliam noble family lived.",
            description: "Built in 1786 by Paliath Valiya Achan, the Nalukettu features a central open courtyard (Nadumuttam), inner halls, and museum exhibits depicting the lifestyle and rituals of feudal Kerala.",
            photo: "img/tourism/paliyammuseum.jpg",
            photosmall: "img/tourism/paliyammuseum_small.jpg",
            website: "www.paliam.in"
        },
        {
            id: "7",
            name: "Kottappuram Muziris Fort",
            name_ml: "കോട്ടപ്പുറം മുസിരിസ് കോട്ട",
            category: "Muziris Heritage",
            distance: "10.5 KM",
            featured: false,
            badge: "1523 Portuguese Fort",
            about: "Built by the Portuguese in 1523 at the strategic mouth of the Periyar River to guard maritime trade.",
            description: "Historically known as Cranganore Fort, Kottappuram witnessed fierce battles between the Portuguese, Zamorin, Dutch (1663), and Travancore kingdoms. Walk along the excavated laterite ramparts and Kottappuram waterfront walkway.",
            photo: "img/tourism/kottapuram.jpg",
            photosmall: "img/tourism/kottapuram_small.jpg"
        },
        {
            id: "8",
            name: "Pallippuram Fort",
            name_ml: "പള്ളിപ്പുറം കോട്ട",
            category: "Muziris Heritage",
            distance: "7.8 KM",
            featured: true,
            badge: "Oldest European Fort (1503)",
            about: "Built by the Portuguese in 1503, Pallippuram Fort (Ayikkotta) is the oldest surviving European fort in India.",
            description: "Constructed in a unique hexagonal shape using lime, laterite, and wood, the fort was captured by the Dutch in 1661 and sold to Travancore in 1789.",
            photo: "img/tourism/pallipuram.jpg",
            photosmall: "img/tourism/pallipuram_small.jpg"
        },
        {
            id: "9",
            name: "St. Thomas Kottakkavu Pilgrim Church",
            name_ml: "കോട്ടക്കാവ് സെന്റ് തോമസ് ഫൊറോന പള്ളി",
            category: "Pilgrim & Heritage",
            distance: "1.0 KM",
            featured: false,
            badge: "Founded 52 AD",
            about: "One of the seven ancient Christian churches established in 52 AD by St. Thomas the Apostle.",
            description: "Situated in the heart of North Paravur, Kottakkavu Church preserves an ancient Persian Stone Cross dated to 880 AD and a rich museum of early Christian manuscripts and heritage.",
            photo: "img/tourism/kottakavu.jpg",
            photosmall: "img/tourism/kottakavu_small.jpg"
        },
        {
            id: "10",
            name: "Cheraman Juma Mosque",
            name_ml: "ചേരമാൻ ജുമാ മസ്ജിദ്",
            category: "Pilgrim & Heritage",
            distance: "9.7 KM",
            featured: false,
            badge: "First Mosque in India (629 AD)",
            about: "Built in 629 AD by Malik Bin Dinar, Cheraman Juma Masjid is the oldest mosque in the Indian subcontinent.",
            description: "Located along the Paravur–Kodungallur road, the mosque's historic sanctum reflects traditional Kerala timber architecture and houses an ancient oil lamp cherished by people of all faiths.",
            photo: "img/tourism/cheraman.jpg",
            photosmall: "img/tourism/cheraman_small.jpg"
        },
        {
            id: "11",
            name: "Kadamakudy Islands",
            name_ml: "കടമക്കുടി ദ്വീപുകൾ",
            category: "Backwaters & Eco-Tourism",
            distance: "14 KM",
            featured: true,
            badge: "Trending Eco-Hotspot",
            about: "A breathtaking cluster of 14 backwater islands renowned for Pokkali rice farming, kayaking, and golden sunsets.",
            description: "Known as the 'Kuttanad of Ernakulam', Kadamakudy offers narrow bund roads surrounded by shimmering backwaters, migratory birds, prawn filtration ponds, and country boat cruises.",
            photo: "img/tourism/kadamakudi.jpg",
            photosmall: "img/tourism/kadamakudi_small.jpg"
        },
        {
            id: "12",
            name: "Matsyafed Njarakkal Aqua Tourism",
            name_ml: "ഞാറയ്ക്കൽ മത്സ്യഫെഡ് ഫിഷ് ഫാം",
            category: "Backwaters & Eco-Tourism",
            distance: "17 KM",
            featured: false,
            badge: "Family Boating & Seafood",
            about: "46-acre eco-friendly aqua tourism farm offering mangrove hammocks, boating, angling, and fresh seafood.",
            description: "Famous for Indian Grey Mullet (Thirutha) and Karimeen, visitors can row through calm canals, relax under mangrove islands, and enjoy authentic Kerala fish meals.",
            photo: "img/tourism/njarakkal.JPG",
            photosmall: "img/tourism/njarakkal_small.jpg"
        }
    ],

    // 4. UNIFIED BUSINESS, HERITAGE & CIVIC DIRECTORY (111+ Verified Listings)
    directory: {
        "hospitals": [
                {
                        "name": "Govt. Taluk Headquarters Hospital",
                        "address": "Main Road, Near Private Bus Stand, North Paravur",
                        "phone": "+91 484 244 4438",
                        "photo": "img/directory/hospitals/taluk.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Don Bosco Hospital",
                        "address": "National Highway 66, North Paravur",
                        "phone": "+91 484 244 4875",
                        "email": "donboscohospital@yahoo.com",
                        "photo": "img/directory/hospitals/donbosco.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Sree Narayana Medical College Hospital (SNIMS)",
                        "address": "Manjali - Athani Rd, Chalakka, North Kuthiathode, Kunnukara",
                        "phone": "+91 484 266 1500",
                        "email": "info@snims.org",
                        "photo": "img/directory/hospitals/sn.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "K.M.K. Hospital",
                        "address": "KMK Junction, National Highway 66, North Paravur",
                        "phone": "+91 484 244 6803",
                        "photo": "img/directory/hospitals/kmk.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Govt. Ayurveda Hospital",
                        "address": "South Naluvazhi, North Paravur",
                        "phone": "+91 484 244 9868",
                        "photo": "img/directory/hospitals/ayurveda.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Govt. Homoeopathic Hospital",
                        "address": "Near East Nada, Peruvaram Temple, North Paravur",
                        "phone": "+91 484 244 2683",
                        "email": "ghhparavoor@gmail.com",
                        "photo": "img/directory/hospitals/homeo.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Shanthi Hospital",
                        "address": "Canal Road, Near Police Quarters, North Paravur",
                        "phone": "+91 484 244 2143",
                        "photo": "img/directory/hospitals/shanti.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Shaji Hospital",
                        "address": "Mookambika Road, North Paravur",
                        "phone": "+91 484 244 4904",
                        "photo": "img/directory/hospitals/shaji.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Ahalia Foundation Eye Hospital",
                        "address": "Pottan Street, Main Road, North Paravur",
                        "phone": "+91 484 244 7780",
                        "photo": "img/directory/hospitals/taluk.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Bharath Rural Hospital & Training Centre",
                        "address": "South Kuriyappilly, Moothakunnam P.O., North Paravur",
                        "phone": "+91 484 248 3395",
                        "photo": "img/directory/hospitals/kmk.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "UB Trust Hospital & Diagnostic Centre",
                        "address": "NH-66, Varapuzha, Paravur Taluk",
                        "phone": "+91 484 251 2245",
                        "photo": "img/directory/hospitals/donbosco.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Kottakkal Arya Vaidya Sala (Paravur Agency)",
                        "address": "Republic Road / Main Road, North Paravur",
                        "phone": "+91 484 244 2948",
                        "photo": "img/directory/hospitals/ayurveda.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                },
                {
                        "name": "Family Health Centre (FHC) Koonammavu / Chittattukara",
                        "address": "Koonammavu / Vadakkumpuram, North Paravur",
                        "phone": "+91 484 251 3100",
                        "photo": "img/directory/hospitals/taluk.jpg",
                        "category": "Hospitals",
                        "badge": "Hospitals"
                }
        ],
        "hotels": [
                {
                        "name": "Cherai Beach Resorts",
                        "type": "Beach & Backwater Resort",
                        "star": "&#9733;&#9733;&#9733;&#9733;",
                        "phone": "+91 484 248 1818",
                        "distance": "7.6 KM",
                        "web": "cheraibeachresorts.com",
                        "photo": "img/directory/hotels/cheraibeachresort.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Beach & Backwater Resort"
                },
                {
                        "name": "Club Mahindra Cherai Beach",
                        "type": "Luxury Resort",
                        "star": "&#9733;&#9733;&#9733;&#9733;",
                        "phone": "+91 484 286 1500",
                        "distance": "7.6 KM",
                        "web": "clubmahindra.com",
                        "photo": "img/directory/hotels/clubmahindra.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Luxury Resort"
                },
                {
                        "name": "Indriya Sands Resort",
                        "type": "Beachfront & Backwater Resort",
                        "star": "&#9733;&#9733;&#9733;&#9733;",
                        "phone": "+91 95262 28899",
                        "distance": "8.0 KM",
                        "web": "indriyaresorts.com",
                        "photo": "img/directory/hotels/indriya.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Beachfront & Backwater Resort"
                },
                {
                        "name": "Les 3 Elephants Eco-Boutique Resort",
                        "type": "Backwater Boutique Resort (Cherai)",
                        "star": "&#9733;&#9733;&#9733;&#9733;",
                        "phone": "+91 484 241 6963",
                        "distance": "6.8 KM",
                        "web": "www.3elephants.in",
                        "photo": "img/directory/hotels/cheraibeachresort.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Backwater Boutique Resort (Cherai)"
                },
                {
                        "name": "Hotel Cee Cee Tower, N.Paravur",
                        "type": "Business & Family Hotel / Bar",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 244 5885",
                        "distance": "500 M",
                        "web": "hotelceeceetower.com",
                        "photo": "img/directory/hotels/ceecee.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Business & Family Hotel / Bar"
                },
                {
                        "name": "Hotel White City (Bar & Restaurant), N.Paravur",
                        "type": "Bar Hotel & Restaurant",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 244 7893",
                        "distance": "500 M",
                        "photo": "img/directory/hotels/whitecity.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Bar Hotel & Restaurant"
                },
                {
                        "name": "Paravur Galaxy Hotel (Signature & Elexir Bar)",
                        "type": "Bar Hotel & Multi-Cuisine Restaurant",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 244 3344",
                        "distance": "600 M",
                        "photo": "img/directory/hotels/ceecee.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Bar Hotel & Multi-Cuisine Restaurant"
                },
                {
                        "name": "Paravur Tourist Home (PTH Bar & Hotel)",
                        "type": "Bar Hotel & Lodging",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 244 2185",
                        "distance": "300 M",
                        "photo": "img/directory/hotels/whitecity.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Bar Hotel & Lodging"
                },
                {
                        "name": "Cherai Tourist Home (CTH Bar & Restaurant)",
                        "type": "Bar Hotel & Restaurant (Cherai Jn)",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 241 6450",
                        "distance": "6.0 KM",
                        "photo": "img/directory/hotels/whitecity.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Bar Hotel & Restaurant (Cherai Jn)"
                },
                {
                        "name": "Grand Muziris Hotel, N.Paravur",
                        "type": "Town Hotel & Restaurant",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 244 8800",
                        "distance": "1.0 KM",
                        "photo": "img/directory/hotels/ceecee.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Town Hotel & Restaurant"
                },
                {
                        "name": "Gopika Residency, North Paravur",
                        "type": "Hotel & Lodging",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 244 6111",
                        "distance": "800 M",
                        "photo": "img/directory/hotels/ceecee.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Hotel & Lodging"
                },
                {
                        "name": "Smitha Tourist Home, North Paravur",
                        "type": "Budget Hotel & Lodging",
                        "star": "&#9733;&#9733;",
                        "phone": "+91 484 244 2786",
                        "distance": "400 M",
                        "photo": "img/directory/hotels/whitecity.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Budget Hotel & Lodging"
                },
                {
                        "name": "Camper By The Bay, Cherai",
                        "type": "Beach Resort",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 98460 55440",
                        "distance": "7.2 KM",
                        "web": "camperbythebay.com",
                        "photo": "img/directory/hotels/indriya.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Beach Resort"
                },
                {
                        "name": "Baywatch Beach Homes, Cherai",
                        "type": "Beachside Stay & Restaurant",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 484 248 0399",
                        "distance": "7.0 KM",
                        "photo": "img/directory/hotels/cheraibeachresort.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Beachside Stay & Restaurant"
                },
                {
                        "name": "Oyster Bay Homestay, Cherai",
                        "type": "Heritage Homestay",
                        "star": "&#9733;&#9733;&#9733;",
                        "phone": "+91 94473 90366",
                        "distance": "6.5 KM",
                        "photo": "img/directory/hotels/indriya.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Heritage Homestay"
                },
                {
                        "name": "PWD Rest House, North Paravur",
                        "type": "Govt. Guest House",
                        "star": "Govt",
                        "phone": "+91 484 244 2254",
                        "distance": "500 M",
                        "photo": "img/directory/hotels/ceecee.jpg",
                        "category": "Hotels, Resorts & Bars",
                        "badge": "Govt. Guest House"
                }
        ],
        "colleges": [
                {
                        "name": "Sree Narayana Institute of Medical Sciences (SNIMS)",
                        "address": "Chalakka, P.O. North Kuthiyathodu, PIN- 683594",
                        "phone": "+91 484 266 1500",
                        "email": "info@snims.org",
                        "website": "www.snims.org",
                        "photo": "img/directory/colleges/medicalcollege.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "SNM College Maliankara",
                        "address": "Maliankara P.O, Moothakunnam, N.Paravur, PIN- 683516",
                        "phone": "+91 484 248 3600",
                        "email": "principalsnmc@gmail.com",
                        "website": "www.snmcollege.in",
                        "photo": "img/directory/colleges/maliankara.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "SNM Institute of Management and Technology (SNMIMT)",
                        "address": "Maliankara P.O, Moothakunnam, N.Paravur, PIN- 683516",
                        "phone": "+91 484 248 4142",
                        "email": "info@snmimt.edu.in",
                        "website": "www.snmimt.edu.in",
                        "photo": "img/directory/colleges/snm.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "Sri Narayana Guru Institute of Science & Technology (SNGIST)",
                        "address": "Thekkethazham, Mannam P.O., N.Paravur, PIN- 683520",
                        "phone": "+91 484 288 7000",
                        "email": "sngist@sngist.org",
                        "website": "www.sngist.org",
                        "photo": "img/directory/colleges/sngist.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "MES College of Engineering and Technology",
                        "address": "Kunnukara P.O, N. Paravur, PIN- 683578",
                        "phone": "+91 484 257 3661",
                        "email": "mescet.kunnukara@gmail.com",
                        "website": "mescet.ac.in",
                        "photo": "img/directory/colleges/mes.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "SNGIST Arts & Science College",
                        "address": "Manakkapady, Karumalloor (P.O), North Paravur, PIN- 683511",
                        "phone": "+91 484 282 0078",
                        "website": "www.sngistasc.org",
                        "photo": "img/directory/colleges/sngistartscollege.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "SN Arts & Science College (SNAS)",
                        "address": "Kedamangalam, N.Paravur, PIN- 683513",
                        "phone": "+91 484 250 9113",
                        "email": "snascollege@sify.com",
                        "photo": "img/directory/colleges/snas.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "Kesari Government Arts & Science College",
                        "address": "Near Municipal Bus Stand, Kesari Balakrishna Pillai Rd, North Paravur, 683513",
                        "phone": "+91 484 244 0225",
                        "photo": "img/directory/colleges/snas.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "IHRD College of Applied Science (CAS), North Paravur",
                        "address": "Puthenvelikkara / Vazhikulangara, North Paravur",
                        "phone": "+91 484 244 4954",
                        "website": "casparavur.ihrd.ac.in",
                        "photo": "img/directory/colleges/sngistartscollege.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "Mar Gregorios Abdul Jaleel Arts & Science College",
                        "address": "Neericode, Alangad, North Paravur, PIN- 683511",
                        "phone": "+91 484 267 1551",
                        "photo": "img/directory/colleges/maliankara.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "Matha College of Technology",
                        "address": "Manakkapadi, Karumalloor P.O., North Paravur, 683511",
                        "phone": "+91 484 267 0212",
                        "photo": "img/directory/colleges/mes.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "Presentation College of Applied Sciences",
                        "address": "Manancherikunnu, Puthenvelikkara, Paravur Taluk, 683594",
                        "phone": "+91 484 248 5400",
                        "website": "presentationcollege.ac.in",
                        "photo": "img/directory/colleges/snm.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "MES T.O. Abdulla Memorial College",
                        "address": "Kunnukara, North Paravur, PIN- 683578",
                        "phone": "+91 484 257 4957",
                        "photo": "img/directory/colleges/mes.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "SNM Training College (B.Ed & M.Ed), Moothakunnam",
                        "address": "Moothakunnam P.O., North Paravur, PIN- 683516",
                        "phone": "+91 484 248 2115",
                        "website": "snmtrainingcollege.org",
                        "photo": "img/directory/colleges/maliankara.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "Rural Academy for Management Studies (RAMS)",
                        "address": "Kuzhuppilly, Ayyampilly P.O., Cherai - Vypin",
                        "phone": "+91 484 241 7444",
                        "photo": "img/directory/colleges/sngist.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                },
                {
                        "name": "Lakshmi College (Parallel)",
                        "address": "Amman Kovil Road, N.Paravur, PIN- 683513",
                        "phone": "+91 484 266 5940",
                        "email": "lakshmicollege.npr@gmail.com",
                        "photo": "img/directory/colleges/lakshmi.jpg",
                        "category": "Colleges",
                        "badge": "Colleges"
                }
        ],
        "schools": [
                {
                        "name": "Govt. Girls Higher Secondary School",
                        "address": "Municipal Jn., North Paravur, 683513",
                        "class": "Std. V to XII",
                        "phone": "+91 484 244 6650",
                        "syllabus": "State",
                        "photo": "img/directory/schools/girls.JPG",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "Govt. Boys Higher Secondary School",
                        "address": "Municipal Jn., North Paravur, 683513",
                        "class": "Std. V to XII",
                        "phone": "+91 484 244 6650",
                        "syllabus": "State",
                        "photo": "img/directory/schools/boys.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "Samooham High School",
                        "address": "Cherai Rd, North Paravur, 683513",
                        "class": "Std. V to X",
                        "phone": "+91 484 244 3588",
                        "syllabus": "State",
                        "photo": "img/directory/schools/samooham.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "SNV Sanskrit Higher Secondary School",
                        "address": "Nanthiattukunnam, North Paravur, 683513",
                        "class": "Std. V to XII",
                        "phone": "+91 484 244 7844",
                        "syllabus": "State",
                        "photo": "img/directory/schools/snv.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "Sree Narayana HSS (SNHSS) Pullamkulam",
                        "address": "Near KSRTC Bus Station, North Paravur, 683513",
                        "class": "Std. V to XII",
                        "phone": "+91 484 244 2196",
                        "syllabus": "State",
                        "photo": "img/directory/schools/snhss.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "St. Aloysius High School",
                        "address": "Kannankulangara, North Paravur, 683513",
                        "class": "Std. V to X",
                        "phone": "+91 484 244 3341",
                        "syllabus": "State",
                        "photo": "img/directory/schools/Alosius.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "Paliyam Govt. Higher Secondary School",
                        "address": "Chendamangalam, North Paravur, 683512",
                        "class": "Std. V to XII",
                        "phone": "+91 484 244 8210",
                        "syllabus": "State",
                        "photo": "img/directory/schools/boys.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "SNM Higher Secondary School, Moothakunnam",
                        "address": "Moothakunnam P.O., North Paravur, 683516",
                        "class": "Std. V to XII",
                        "phone": "+91 484 248 2050",
                        "syllabus": "State",
                        "photo": "img/directory/schools/snhss.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "HMYS Higher Secondary School, Kottuvallikkad",
                        "address": "Kottuvallikkad, Moothakunnam, North Paravur",
                        "class": "Std. V to XII",
                        "phone": "+91 484 248 3120",
                        "syllabus": "State",
                        "photo": "img/directory/schools/snv.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "St. Philomena's HSS, Koonammavu",
                        "address": "Koonammavu, North Paravur, 683518",
                        "class": "Std. V to XII",
                        "phone": "+91 484 251 1240",
                        "syllabus": "State",
                        "photo": "img/directory/schools/Alosius.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "Gothuruth St. Sebastian's Higher Secondary School",
                        "address": "Gothuruth, North Paravur, 683516",
                        "class": "Std. V to XII",
                        "phone": "+91 484 244 5920",
                        "syllabus": "State",
                        "photo": "img/directory/schools/boys.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "rama Varma Union HSS (RVUHSS), Cherai",
                        "address": "Cherai, North Paravur, 683514",
                        "class": "Std. V to XII",
                        "phone": "+91 484 248 8340",
                        "syllabus": "State",
                        "photo": "img/directory/schools/snhss.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "Kizhakkepram Govt. UPS",
                        "address": "Kizhakkepram, North Paravur, 683513",
                        "class": "Std. I to VII",
                        "phone": "NA",
                        "syllabus": "State",
                        "photo": "img/directory/schools/kizhakkepuram.jpg",
                        "category": "Schools",
                        "badge": "State Syllabus"
                },
                {
                        "name": "Little Hearts School",
                        "address": "Kizhakkepram, North Paravur, 683513",
                        "class": "Pre-KG to XII",
                        "phone": "+91 484 244 3313",
                        "syllabus": "CBSE",
                        "website": "www.littleheartsschoolnparavur.com",
                        "photo": "img/directory/schools/littlehearts.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                },
                {
                        "name": "Infant Jesus Public School",
                        "address": "Perumpadanna, North Paravur P.O., 683513",
                        "class": "Std. I to XII",
                        "phone": "+91 484 244 2677",
                        "syllabus": "CBSE",
                        "website": "infantjesusschool.ac.in",
                        "photo": "img/directory/schools/infant.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                },
                {
                        "name": "Maria Teresa Scrilli Public School",
                        "address": "T B Road, North Paravur, 683513",
                        "class": "Std. I to X",
                        "phone": "+91 484 244 7613",
                        "syllabus": "CBSE",
                        "website": "www.mariateresascrillipublicschool.com",
                        "photo": "img/directory/schools/scrilli.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                },
                {
                        "name": "Dr. N. International School",
                        "address": "Aiswarya Nagar, North Paravur P.O., 683513",
                        "class": "Pre-KG to XII",
                        "phone": "+91 484 244 5422",
                        "syllabus": "CBSE",
                        "website": "www.drninternationalschool.com",
                        "photo": "img/directory/schools/drn.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                },
                {
                        "name": "Chavara Darsan CMI Public School",
                        "address": "Koonammavu, North Paravur, 683518",
                        "class": "Pre-KG to XII",
                        "phone": "+91 484 251 1162",
                        "syllabus": "CBSE",
                        "website": "www.chavaradarsan.com",
                        "photo": "img/directory/schools/chavara.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                },
                {
                        "name": "Adarsha Vidyabhavan",
                        "address": "Nanthiattukunnam, North Paravur, 683513",
                        "class": "Pre-KG to XII",
                        "phone": "+91 484 244 0270",
                        "syllabus": "CBSE",
                        "website": "www.adarshavidyabhavan.com",
                        "photo": "img/directory/schools/adarsha.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                },
                {
                        "name": "Mary Ward English Medium School (CBSE)",
                        "address": "Kottakkavu, North Paravur, 683513",
                        "class": "Pre-KG to X",
                        "phone": "+91 484 244 6352",
                        "syllabus": "CBSE",
                        "photo": "img/directory/schools/scrilli.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                },
                {
                        "name": "Isabella De Rosis Public School (CBSE)",
                        "address": "Gothuruth / Vadakkekara, North Paravur, 683516",
                        "class": "Pre-KG to X",
                        "phone": "+91 484 248 6120",
                        "syllabus": "CBSE",
                        "photo": "img/directory/schools/infant.jpg",
                        "category": "Schools",
                        "badge": "CBSE Syllabus"
                }
        ],
        "offices": [
                {
                        "name": "North Paravur Police Station (SHO / Circle Inspector)",
                        "address": "Police Station Road, Near Sub Court, North Paravur",
                        "phone": "+91 484 244 5525",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Fire and Rescue Station, North Paravur",
                        "address": "Perumpadanna, NH-66, North Paravur",
                        "phone": "+91 484 244 3101",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Vadakkekara Police Station",
                        "address": "Moothakunnam / Vadakkekara, North Paravur",
                        "phone": "+91 484 248 2028",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Varapuzha Police Station",
                        "address": "Varapuzha, Paravur Taluk",
                        "phone": "+91 484 251 3073",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Munambam Police Station",
                        "address": "Pallippuram / Munambam, Vypin",
                        "phone": "+91 484 248 8230",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "North Paravur Municipality Office",
                        "address": "Municipal Junction, Main Road, North Paravur",
                        "phone": "+91 484 244 2327",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Taluk Office North Paravur (Tahsildar)",
                        "address": "First Floor, Mini Civil Station / Police Station Rd, North Paravur",
                        "phone": "+91 484 244 2326",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "RTO North Paravur (KL-42 Sub Regional Transport Office)",
                        "address": "Republic Road, Perumpadanna, North Paravur",
                        "phone": "+91 484 266 2522",
                        "email": "kl42@keralamvd.gov.in",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "KSEB Electrical Section North Paravur",
                        "address": "Court Road, North Paravur",
                        "phone": "+91 484 244 2322",
                        "photo": "img/directory/office/kseb.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "KSRTC Bus Station (Enquiry Office), North Paravur",
                        "address": "KSRTC Stand Road, Near Pullamkulam, North Paravur",
                        "phone": "+91 484 244 4439",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Kerala Water Authority (KWA) Sub Division, Paravur",
                        "address": "Near Municipal Junction, North Paravur",
                        "phone": "+91 484 244 2615",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Excise Range Office, North Paravur",
                        "address": "KMK Junction / Perumpadanna, North Paravur",
                        "phone": "+91 484 244 1280",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Sub Treasury North Paravur",
                        "address": "Near Sub Court, North Paravur",
                        "phone": "+91 484 244 2662",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Employment Exchange Office",
                        "address": "Near Private Bus Stand, Mini Civil Station, North Paravur",
                        "phone": "+91 484 244 0066",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Taluk Civil Supply Office",
                        "address": "Municipal Shopping Complex, Near Private Bus Stand, North Paravur",
                        "phone": "+91 484 244 2248",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Chendamangalam Grama Panchayat Office",
                        "address": "Gothuruth \u2013 Vadakkumpuram Road, Chendamangalam",
                        "phone": "+91 484 251 8568",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "Chendamangalam Village Office",
                        "address": "Chendamangalam, North Paravur Taluk",
                        "phone": "+91 94960 45703",
                        "photo": "img/directory/office/office.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "LIC North Paravur Branch",
                        "address": "P.B.No.16, Gurudarsan Bldg., Main Road, North Paravur",
                        "phone": "+91 484 244 3298",
                        "photo": "img/directory/office/lic.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                },
                {
                        "name": "North Paravur Head Post Office (683513)",
                        "address": "Opp. Pvt. Bus Station, Main Road, North Paravur",
                        "phone": "+91 484 244 2330",
                        "photo": "img/directory/office/post.jpg",
                        "category": "Govt. Offices",
                        "badge": "Govt. Offices"
                }
        ],
        "worship": [
                {
                        "name": "Dakshina Mookambika Temple, North Paravur",
                        "religion": "Temple",
                        "deity": "Goddess Saraswathi (Bala Parameswari)",
                        "address": "Mookambika Road, Near Municipal Junction, North Paravur 683513",
                        "phone": "+91 484 244 2186",
                        "timings": "4:00 AM \u2013 11:00 AM, 5:00 PM \u2013 8:00 PM",
                        "highlights": "Renowned as the 'Mookambika of the South'; sanctum surrounded by a sacred lotus pond. Famous for Vidyarambham (initiation into learning) and Navarathri Sangeethotsavam.",
                        "photo": "img/tourism/paliyam_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Peruvaram Mahadeva Temple",
                        "religion": "Temple",
                        "deity": "Lord Shiva & Goddess Parvathi (Twin Sanctum)",
                        "address": "Peruvaram, Mannam P.O., North Paravur 683520",
                        "phone": "+91 484 244 5210",
                        "timings": "4:30 AM \u2013 11:00 AM, 5:00 PM \u2013 8:00 PM",
                        "highlights": "Ancient Travancore Devaswom Board Mahakshetram featuring a rare two-tiered circular Sreekovil where Lord Shiva faces East and Goddess Parvathi faces West.",
                        "photo": "img/tourism/paliyam_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Kannankulangara Maha Vishnu Temple",
                        "religion": "Temple",
                        "deity": "Lord Maha Vishnu",
                        "address": "Kannankulangara, Main Road South, North Paravur 683513",
                        "phone": "+91 484 244 3145",
                        "timings": "5:00 AM \u2013 10:30 AM, 5:00 PM \u2013 8:00 PM",
                        "highlights": "Historic temple in the heart of North Paravur surrounded by a large temple pond (Chira) and traditionalagraharam heritage.",
                        "photo": "img/tourism/paliyam_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Gowreeswara Temple (Cherai Subramanya Temple)",
                        "religion": "Temple",
                        "deity": "Lord Subramanya",
                        "address": "Cherai, Vypin Island, North Paravur Taluk 683514",
                        "phone": "+91 484 248 0234",
                        "timings": "5:00 AM \u2013 11:00 AM, 5:00 PM \u2013 8:00 PM",
                        "highlights": "Consecrated with the blessings of Sree Narayana Guru (1912) and managed by Vijnana Vardhini Sabha. Famous as the 'Palani of Kerala' for its grand Thaipooyam Utsavam and elephant pageantry.",
                        "photo": "img/tourism/cherai_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Azheekkal Sree Varaha Venkitachalapathy Temple",
                        "religion": "Temple",
                        "deity": "Lord Varaha & Lord Venkateswara",
                        "address": "Azheekkal, Cherai, North Paravur Taluk 683514",
                        "phone": "+91 484 248 0327",
                        "timings": "5:30 AM \u2013 11:30 AM, 5:30 PM \u2013 8:00 PM",
                        "highlights": "19th-century GSB (Gowda Saraswat Brahmin) temple famous for its ornate golden Ratholsavam (Chariot Festival) featuring a massive hemispherical dome chariot.",
                        "photo": "img/tourism/cherai_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Venketachalapathi Temple, Paravur Town",
                        "religion": "Temple",
                        "deity": "Lord Venkateswara (Thirumala Devaswom)",
                        "address": "Near Samooham High School, North Paravur 683513",
                        "phone": "NA",
                        "timings": "5:30 AM \u2013 11:00 AM, 5:30 PM \u2013 8:00 PM",
                        "highlights": "Historic Gowda Saraswat Brahmin temple located along the old Paravur merchant quarter.",
                        "photo": "img/tourism/paliyam_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Thonniyakavu Bhadrakali Temple",
                        "religion": "Temple",
                        "deity": "Goddess Bhadrakali",
                        "address": "Thonniyakavu, Puthenvelikkara Road, North Paravur 683513",
                        "phone": "+91 484 244 6212",
                        "timings": "5:00 AM \u2013 11:00 AM, 5:00 PM \u2013 8:00 PM",
                        "highlights": "Famous sacred grove (Kavu) temple just outside Paravur town, renowned for its annual Kalamezhuthu Pattu and Thalapoli festival.",
                        "photo": "img/tourism/paliyam_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Kottayil Kovilakom Sree Krishna Temple",
                        "religion": "Temple",
                        "deity": "Lord Sree Krishna (Santana Gopala Moorthy)",
                        "address": "Kottayil Kovilakom, Chendamangalam, North Paravur 683512",
                        "phone": "NA",
                        "timings": "5:00 AM \u2013 10:30 AM, 5:30 PM \u2013 7:30 PM",
                        "highlights": "Royal family deity shrine of the Villarvattom Kshetriya dynasty and Paliath Achans; stands atop the Kottayil Kovilakom hillock alongside a Church, Mosque, and Synagogue.",
                        "photo": "img/tourism/paliyammuseum_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Mannam Subramanya Swamy Temple",
                        "religion": "Temple",
                        "deity": "Lord Subramanya",
                        "address": "Mannam P.O., North Paravur 683520",
                        "phone": "NA",
                        "timings": "5:00 AM \u2013 10:30 AM, 5:00 PM \u2013 8:00 PM",
                        "highlights": "Major Subramanya shrine in Mannam known for Thaipooyam Kavadiyattam processions.",
                        "photo": "img/tourism/paliyam_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Moothakunnam Sree Narayana Mangalam (SNM) Temple",
                        "religion": "Temple",
                        "deity": "Lord Shiva (Sree Narayana Guru Prathishta)",
                        "address": "Moothakunnam, Vadakkekara P.O., North Paravur 683516",
                        "phone": "+91 484 248 2160",
                        "timings": "5:00 AM \u2013 11:00 AM, 5:00 PM \u2013 8:00 PM",
                        "highlights": "Consecrated by Sree Narayana Guru in 1903 and managed by HMDP Sabha Moothakunnam.",
                        "photo": "img/tourism/paliyam_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Temple"
                },
                {
                        "name": "Kottakkavu Mar Thoma Syro-Malabar Pilgrim Church",
                        "religion": "Church",
                        "deity": "St. Thomas the Apostle (Founded 52 AD)",
                        "address": "Kottakkavu, North Paravur 683513",
                        "phone": "+91 484 244 2261",
                        "website": "www.kottakkavuchurch.org",
                        "timings": "5:30 AM \u2013 8:00 PM",
                        "highlights": "One of the seven ancient churches (Ezharappallikal) established by St. Thomas the Apostle in 52 AD. Preserves a 9th-century Persian Stone Cross and heritage museum.",
                        "photo": "img/tourism/kottakavu_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "St. Thomas Jacobite Syrian Cathedral (Mar Thoman Cheriyapally)",
                        "religion": "Church",
                        "deity": "St. Thomas & Tomb of St. Gregorios Abdul Jaleel (1681 AD)",
                        "address": "Cheriapally Road, Near Municipal Jn., North Paravur 683513",
                        "phone": "+91 484 244 2354",
                        "timings": "6:00 AM \u2013 7:30 PM",
                        "highlights": "Constructed in 1566 AD; houses the sacred tomb of Mor Gregorios Abdul Jaleel Bawa (Syriac Orthodox Archbishop of Jerusalem who passed away in North Paravur in 1681 AD).",
                        "photo": "img/tourism/kottakavu_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "St. Don Bosco Roman Catholic Latin Church",
                        "religion": "Church",
                        "deity": "St. John Bosco",
                        "address": "KMK Junction, NH-66, North Paravur 683513",
                        "phone": "+91 484 244 2675",
                        "timings": "6:00 AM \u2013 7:30 PM",
                        "highlights": "Major Latin Catholic parish church located right at KMK Junction adjacent to Don Bosco Hospital.",
                        "photo": "img/tourism/kottakavu_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "Holy Cross Church (Mar Sleeva Church), Kottayil Kovilakom",
                        "religion": "Church",
                        "deity": "Holy Cross",
                        "address": "Kottayil Kovilakom, Chendamangalam, North Paravur 683512",
                        "phone": "NA",
                        "timings": "6:00 AM \u2013 7:00 PM",
                        "highlights": "Historic church established in 1075 AD at the foot of the Kottayil Kovilakom hillock in Chendamangalam.",
                        "photo": "img/tourism/kottakavu_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "Our Lady of Snows Basilica (Manjumatha Church), Pallippuram",
                        "religion": "Church",
                        "deity": "Our Lady of Snows (Manjumatha)",
                        "address": "Pallippuram, Cherai\u2013Munambam Road, North Paravur Taluk 683515",
                        "phone": "+91 484 248 8154",
                        "timings": "5:30 AM \u2013 8:00 PM",
                        "highlights": "Built by the Portuguese in 1503 AD near Pallippuram Fort; elevated to Minor Basilica status and famed for its miraculous protection during Tipu Sultan's campaign.",
                        "photo": "img/tourism/pallipuram_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "St. Philomena's Forane Church & Chavara Pilgrim Centre, Koonammavu",
                        "religion": "Church",
                        "deity": "St. Philomena & St. Kuriakose Elias Chavara",
                        "address": "Koonammavu, NH-66, North Paravur Taluk 683518",
                        "phone": "+91 484 251 3246",
                        "timings": "5:30 AM \u2013 8:00 PM",
                        "highlights": "Founded in 1837; final resting place for many years and karma bhoomi of St. Kuriakose Elias Chavara and St. Euphrasia.",
                        "photo": "img/tourism/kottakavu_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "St. Antony's Pilgrim Shrine, Chettikkad (Moothakunnam)",
                        "religion": "Church",
                        "deity": "St. Antony of Padua",
                        "address": "Chettikkad, Moothakunnam, North Paravur 683516",
                        "phone": "+91 484 248 3315",
                        "timings": "6:00 AM \u2013 7:30 PM",
                        "highlights": "Renowned Tuesday Novena pilgrim shrine attracting devotees from across Ernakulam and Thrissur districts.",
                        "photo": "img/tourism/kottakavu_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "St. Sebastian's Church, Gothuruth",
                        "religion": "Church",
                        "deity": "St. Sebastian",
                        "address": "Gothuruth Island, Chendamangalam P.O., North Paravur 683516",
                        "phone": "+91 484 248 3270",
                        "timings": "6:00 AM \u2013 7:30 PM",
                        "highlights": "Historic island parish (1811 AD) renowned as the cradle of Chavittunadakam (traditional Indo-Portuguese Christian opera dance).",
                        "photo": "img/tourism/kottakavu_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Church"
                },
                {
                        "name": "Cheraman Juma Masjid (629 AD)",
                        "religion": "Mosque",
                        "deity": "Oldest Mosque in India (Founded by Malik Bin Dinar)",
                        "address": "Cheraman Malik Manzil, NH-66, Kodungallur\u2013Paravur Corridor 680664",
                        "phone": "+91 480 280 3770",
                        "timings": "5:00 AM \u2013 9:00 PM",
                        "highlights": "Built in 629 AD during the lifetime of Prophet Muhammad; features traditional Kerala wood architecture and an ancient oil lamp.",
                        "photo": "img/tourism/cheraman_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Mosque"
                },
                {
                        "name": "Paravur Town Juma Masjid",
                        "religion": "Mosque",
                        "deity": "Sunni Juma Masjid",
                        "address": "Main Road, Market Junction, North Paravur 683513",
                        "phone": "+91 484 244 2810",
                        "timings": "4:45 AM \u2013 9:30 PM",
                        "highlights": "Central congregational mosque located in the heart of North Paravur town.",
                        "photo": "img/tourism/cheraman_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Mosque"
                },
                {
                        "name": "Kottayil Kovilakom Juma Masjid, Chendamangalam",
                        "religion": "Mosque",
                        "deity": "Historic Mosque & Sufi Dargah",
                        "address": "Kottayil Kovilakom Hill, Chendamangalam, North Paravur 683512",
                        "phone": "NA",
                        "timings": "5:00 AM \u2013 8:30 PM",
                        "highlights": "Built on land granted by the Paliath Achan atop Kottayil Kovilakom hillock, completing the four-faith harmony ensemble.",
                        "photo": "img/tourism/cheraman_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Mosque"
                },
                {
                        "name": "Manjaly Makham & Juma Masjid",
                        "religion": "Mosque",
                        "deity": "Juma Masjid & Makham",
                        "address": "Manjaly, Mannam P.O., North Paravur 683520",
                        "phone": "NA",
                        "timings": "5:00 AM \u2013 9:00 PM",
                        "highlights": "Historic mosque along the Periyar riverbank in Manjaly, famous for the annual Manjaly Nercha and Halwa heritage.",
                        "photo": "img/tourism/cheraman_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Mosque"
                },
                {
                        "name": "Vaniyakkadu Juma Masjid",
                        "religion": "Mosque",
                        "deity": "Juma Masjid",
                        "address": "Vaniyakkadu, Mannam P.O., NH-66, North Paravur 683520",
                        "phone": "NA",
                        "timings": "5:00 AM \u2013 9:00 PM",
                        "highlights": "Major mosque serving the Vaniyakkadu and Vedimara area along the Paravur\u2013Varapuzha route.",
                        "photo": "img/tourism/cheraman_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Mosque"
                },
                {
                        "name": "Vadakkumpuram Juma Masjid",
                        "religion": "Mosque",
                        "deity": "Juma Masjid",
                        "address": "Vadakkumpuram P.O., Chendamangalam, North Paravur 683521",
                        "phone": "NA",
                        "timings": "5:00 AM \u2013 9:00 PM",
                        "highlights": "Congregational mosque serving Vadakkumpuram and Kuttikkattukara.",
                        "photo": "img/tourism/cheraman_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Mosque"
                },
                {
                        "name": "Paravur Jewish Synagogue (Kerala Jews History Museum)",
                        "religion": "Synagogue",
                        "deity": "Built 1164 AD \u2022 Reconstructed 1615\u20131616 AD by David Yaakov Castiel",
                        "address": "Jew Street (Joothatheruvu), Near Old Market, North Paravur 683513",
                        "phone": "+91 484 244 0808",
                        "timings": "9:30 AM \u2013 5:00 PM (Closed Mondays)",
                        "highlights": "One of the largest and most architecturally complete synagogues in Kerala, featuring a traditional Padippura gateway, colonnaded walkway, and museum exhibits on Cochin Jewish life.",
                        "photo": "img/tourism/synagogue_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Synagogue"
                },
                {
                        "name": "Chendamangalam Jewish Synagogue (1614 AD)",
                        "religion": "Synagogue",
                        "deity": "Malabar Yehudan Synagogue & 1269 AD Hebrew Tombstone",
                        "address": "Kottayil Kovilakom, Chendamangalam, North Paravur 683512",
                        "phone": "+91 484 244 0808",
                        "timings": "9:30 AM \u2013 5:00 PM (Closed Mondays)",
                        "highlights": "Built in 1614 AD on land gifted by the Paliath Achan; houses the 1269 AD tombstone of Sarah Bat Israel\u2014the oldest dated Hebrew inscription in India.",
                        "photo": "img/tourism/synagogue_small.jpg",
                        "category": "Places of Worship",
                        "badge": "Synagogue"
                }
        ],
        "events": [
                {
                        "id": "1",
                        "name": "O FOUR SPORTS (Indoor Rooftop Turf)",
                        "website": "ofoursports.com",
                        "category": "SPORTS & LEISURE",
                        "badge": "Featured Partner",
                        "about": "Play 7's turf football and turf cricket in an indoor rooftop turf just 6 KM away from North Paravur town.",
                        "location": "HM Building, Near Matha College of Technology, Manakkapadi-Manjaly Road, Karumalloor P.O., North Paravur 683513",
                        "description": "Play 7's turf football and turf cricket in an all-weather indoor rooftop turf. Operating from 5:00 A.M to 10:00 P.M daily.",
                        "phone": "+919846437740",
                        "email": "midhun@ofoursports.com",
                        "photo": "img/events/turf.jpg",
                        "photosmall": "img/events/turf_small.jpg",
                        "date": "Featured Venue"
                },
                {
                        "id": "2",
                        "name": "Chendamangalam GI Handloom Weavers Societies",
                        "website": "muzirisheritage.org",
                        "category": "HERITAGE CRAFT & SHOPPING",
                        "badge": "GI Tagged Craft",
                        "about": "Support local artisans by shopping authentic Geographical Indication (GI) tagged Chendamangalam Kasavu sarees, mundus, and fabrics.",
                        "location": "Chendamangalam & Karimpadam Handloom Weavers Co-operative Societies, North Paravur Taluk",
                        "description": "Renowned for centuries under the patronage of the Paliath Achans, Chendamangalam handloom is celebrated for its fine count cotton texture and traditional puliyilakara borders.",
                        "phone": "+914842442327",
                        "email": "contact@northparavur.in",
                        "photo": "img/gallery/samooham.jpg",
                        "photosmall": "img/gallery/samooham_small.jpg",
                        "date": "Local Craft Highlight"
                }
        ]
},

    // 5. BUS STATION TIMINGS (KSRTC & PRIVATE BUSES)
    busTimings: {
        "ksrtcEnquiry": "+91 484 244 4439",
        "privateStandLocation": "Municipal Private Bus Stand, Main Road, North Paravur",
        "ksrtcStandLocation": "KSRTC Sub-Depot, Near SNHSS, Main Road, North Paravur",
        "routes": [
                {
                        "route": "North Paravur \u2194 Ernakulam (Kaloor / High Court / Vyttila Hub)",
                        "operator": "Private & KSRTC",
                        "via": "mannam, Koonammavu, Varapuzha Bridge, Cheranalloor / Edappally",
                        "firstBus": "05:00 AM",
                        "lastBus": "10:15 PM",
                        "frequency": "Every 5 \u2013 8 mins (Peak) / 15 mins (Off-peak)",
                        "highlights": "Direct green city buses & KSRTC services connecting Paravur to Edappally Luhlu Mall, Kaloor, High Court, and Vyttila Mobility Hub."
                },
                {
                        "route": "North Paravur \u2194 Aluva Railway Station & Metro",
                        "operator": "Private & KSRTC",
                        "via": "Manjaly, Mannam, Vedimara, UC College, Aluva",
                        "firstBus": "05:15 AM",
                        "lastBus": "09:45 PM",
                        "frequency": "Every 6 \u2013 10 mins",
                        "highlights": "Fastest feeder route to Aluva Railway Station and Kochi Metro Terminal via Manjaly Bridge."
                },
                {
                        "route": "North Paravur \u2194 Cherai Beach / Munambam / Vypin",
                        "operator": "Private & KSRTC",
                        "via": "Perumpadanna, Cherai Jn, Pallippuram, Kuzhuppilly / Munambam",
                        "firstBus": "05:30 AM",
                        "lastBus": "09:30 PM",
                        "frequency": "Every 10 \u2013 12 mins",
                        "highlights": "Connects North Paravur town directly to Cherai Beach, Munambam Harbour, and Vypin-Goshree corridor."
                },
                {
                        "route": "North Paravur \u2194 Kodungallur / Guruvayur / Thrissur",
                        "operator": "KSRTC & Private (NH-66)",
                        "via": "Moothakunnam, Kottappuram, Kodungallur, Thriprayar / Irinjalakuda",
                        "firstBus": "04:45 AM",
                        "lastBus": "11:00 PM",
                        "frequency": "Every 8 \u2013 12 mins (Kodungallur) / 25 mins (Guruvayur & Thrissur)",
                        "highlights": "High-frequency NH-66 corridor buses + KSRTC Fast Passenger & Superfast services to Guruvayur, Thrissur, and Kozhikode."
                },
                {
                        "route": "North Paravur \u2194 Angamaly / Nedumbassery Airport (CIAL) / Chalakudy",
                        "operator": "Private & KSRTC",
                        "via": "Puthenvelikkara / Manjaly \u2013 Chengamanad \u2013 Athani / Angamaly",
                        "firstBus": "05:45 AM",
                        "lastBus": "08:45 PM",
                        "frequency": "Every 15 \u2013 20 mins",
                        "highlights": "Connects Paravur to Athani (CIAL Airport Jn), Angamaly, and Mala/Chalakudy via Puthenvelikkara & Stationkadavu."
                },
                {
                        "route": "KSRTC Long-Distance (Trivandrum, Kottayam, Munnar, Palakkad, Kozhikode)",
                        "operator": "KSRTC Swift / Superfast / Fast Passenger",
                        "via": "North Paravur KSRTC Sub-Depot",
                        "firstBus": "04:30 AM",
                        "lastBus": "11:30 PM",
                        "frequency": "Scheduled Departures (Every 30 \u2013 60 mins)",
                        "highlights": "Direct KSRTC reservations available at onlineksrtcswift.com (Stop Code: North Paravur)."
                }
        ]
},

    // 6. NH-66 (EDAPPALLY – NORTH PARAVUR – MOOTHAKUNNAM) WORK PROGRESS TRACKER
    nh66Progress: {
        "packageTitle": "NH-66 Six-Lane Widening: Kodungallur (Moothakunnam) \u2013 Edappally (26.06 KM)",
        "contractor": "Oriental Structural Engineers Pvt. Ltd. (NHAI Bharatmala Pariyojana)",
        "overallCompletion": 78,
        "statusSummary_en": "Major bridges at Varapuzha and Moothakunnam are structurally complete, with Varapuzha New Parallel Bridge open to traffic. Flyover, underpass, and service road works across Koonammavu, Paravur Bypass (KMK Jn), and Edappally are in advanced stages.",
        "statusSummary_ml": "\u0d07\u0d1f\u0d2a\u0d4d\u0d2a\u0d33\u0d4d\u0d33\u0d3f - \u0d2e\u0d42\u0d24\u0d4d\u0d24\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d02 NH-66 \u0d06\u0d31\u0d41\u0d35\u0d30\u0d3f\u0d2a\u0d4d\u0d2a\u0d3e\u0d24 \u0d28\u0d3f\u0d7c\u0d2e\u0d4d\u0d2e\u0d3e\u0d23\u0d02 78% \u0d2a\u0d42\u0d7c\u0d24\u0d4d\u0d24\u0d3f\u0d2f\u0d3e\u0d2f\u0d3f. \u0d35\u0d30\u0d3e\u0d2a\u0d4d\u0d2a\u0d41\u0d34 \u0d2a\u0d41\u0d24\u0d3f\u0d2f \u0d2a\u0d3e\u0d32\u0d02 \u0d17\u0d24\u0d3e\u0d17\u0d24\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d4d \u0d24\u0d41\u0d31\u0d28\u0d4d\u0d28\u0d41\u0d28\u0d7d\u0d15\u0d3f. \u0d2e\u0d42\u0d24\u0d4d\u0d24\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d02 \u0d2a\u0d3e\u0d32\u0d02, \u0d2a\u0d31\u0d35\u0d42\u0d7c \u0d2c\u0d48\u0d2a\u0d4d\u0d2a\u0d3e\u0d38\u0d4d, \u0d15\u0d42\u0d28\u0d2e\u0d4d\u0d2e\u0d3e\u0d35\u0d4d, \u0d07\u0d1f\u0d2a\u0d4d\u0d2a\u0d33\u0d4d\u0d33\u0d3f \u0d2b\u0d4d\u0d32\u0d48\u0d13\u0d35\u0d7c \u0d28\u0d3f\u0d7c\u0d2e\u0d4d\u0d2e\u0d3e\u0d23\u0d19\u0d4d\u0d19\u0d7e \u0d05\u0d35\u0d38\u0d3e\u0d28 \u0d18\u0d1f\u0d4d\u0d1f\u0d24\u0d4d\u0d24\u0d3f\u0d32\u0d3e\u0d23\u0d4d.",
        "segments": [
                {
                        "segment": "Varapuzha New Parallel Six-Lane Bridge & Approaches",
                        "status": "Opened to Traffic",
                        "percent": 96,
                        "detail": "New parallel bridge across Periyar backwaters completed and opened, dramatically easing the historic Varapuzha bottleneck."
                },
                {
                        "segment": "Moothakunnam Bridge & Kottappuram Approach",
                        "status": "Bridge Structure Ready",
                        "percent": 85,
                        "detail": "Major bridge spans across the Periyar river mouth completed; approach road blacktopping and retaining wall works underway."
                },
                {
                        "segment": "North Paravur Town Bypass & KMK Junction",
                        "status": "Active Construction",
                        "percent": 72,
                        "detail": "Hybrid 45m alignment straightening sharp curves; 14 km old highway stretch through Paravur & Koonammavu to be handed over to PWD as State Highway."
                },
                {
                        "segment": "Koonammavu \u2013 Cheranalloor Elevated / Underpass Section",
                        "status": "Advanced Stage",
                        "percent": 76,
                        "detail": "Vehicular underpasses (VUP), drainage culverts, and 6-lane main carriageway paving progressing rapidly."
                },
                {
                        "segment": "Kunnumpuram & Edappally ROB / Flyover",
                        "status": "Girder & Approach Works",
                        "percent": 70,
                        "detail": "3-lane Railway Overbridge (ROB) and Kunnumpuram junction flyover works in advanced stage ahead of final commissioning."
                }
        ]
}
};
