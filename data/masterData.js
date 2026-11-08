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

    // 4. UNIFIED BUSINESS & CIVIC DIRECTORY
    directory: {
        hospitals: [
            {
                name: "Govt. Taluk Headquarters Hospital",
                category: "Hospitals",
                badge: "24x7 Govt Emergency",
                featured: true,
                address: "Main Road, Near Private Bus Stand, North Paravur",
                phone: "+91 484 244 4438",
                photo: "img/directory/hospitals/taluk.jpg"
            },
            {
                name: "Don Bosco Hospital",
                category: "Hospitals",
                badge: "Multi-Specialty",
                featured: true,
                address: "National Highway 66, North Paravur",
                phone: "+91 484 244 4875",
                email: "donboscohospital@yahoo.com",
                photo: "img/directory/hospitals/donbosco.jpg"
            },
            {
                name: "Sree Narayana Medical College Hospital (SNIMS)",
                category: "Hospitals",
                badge: "Medical College & Teaching Hospital",
                featured: true,
                address: "Manjali - Athani Rd, Chalakka, North Kuthiathode, Kunnukara",
                phone: "+91 484 266 1500",
                email: "info@snims.org",
                website: "www.snims.org",
                photo: "img/directory/hospitals/sn.jpg"
            },
            {
                name: "K.M.K. Hospital",
                category: "Hospitals",
                badge: "General Hospital",
                featured: false,
                address: "KMK Junction, NH-66, North Paravur",
                phone: "+91 484 244 6803",
                photo: "img/directory/hospitals/kmk.jpg"
            },
            {
                name: "Govt. Ayurveda Hospital",
                category: "Hospitals",
                badge: "Govt Ayurveda",
                featured: false,
                address: "South Naluvazhi, North Paravur",
                phone: "+91 484 244 9868",
                photo: "img/directory/hospitals/ayurveda.jpg"
            },
            {
                name: "Govt. Homoeopathic Hospital",
                category: "Hospitals",
                badge: "Govt Homoeo",
                featured: false,
                address: "Near East Nada, Peruvaram Temple, North Paravur",
                phone: "+91 484 244 2683",
                email: "ghhparavoor@gmail.com",
                photo: "img/directory/hospitals/homeo.jpg"
            },
            {
                name: "Shanthi Hospital",
                category: "Hospitals",
                badge: "Clinic & Hospital",
                featured: false,
                address: "Canal Road, North Paravur",
                phone: "+91 484 244 2143",
                photo: "img/directory/hospitals/shanti.jpg"
            },
            {
                name: "Shaji Hospital",
                category: "Hospitals",
                badge: "Clinic & Hospital",
                featured: false,
                address: "Mookambika Road, North Paravur",
                phone: "+91 484 244 4904",
                photo: "img/directory/hospitals/shaji.jpg"
            }
        ],

        hotels: [
            {
                name: "Cherai Beach Resorts",
                category: "Hotels & Resorts",
                type: "Beach & Backwater Resort",
                star: "4-Star Resort",
                featured: true,
                badge: "Featured Beach Resort",
                phone: "+91 484 248 1818",
                distance: "7.6 KM from Town",
                web: "cheraibeachresorts.com",
                photo: "img/directory/hotels/cheraibeachresort.jpg"
            },
            {
                name: "Club Mahindra Cherai Beach",
                category: "Hotels & Resorts",
                type: "Luxury Resort",
                star: "4-Star Resort",
                featured: true,
                badge: "Premium Stay",
                phone: "+91 484 286 1500",
                distance: "7.6 KM from Town",
                web: "clubmahindra.com",
                photo: "img/directory/hotels/clubmahindra.jpg"
            },
            {
                name: "Indriya Sands Resort",
                category: "Hotels & Resorts",
                type: "Beachfront & Backwater Resort",
                star: "4-Star Resort",
                featured: true,
                badge: "Kuzhuppilly / Cherai",
                phone: "+91 95262 28899",
                distance: "8.0 KM from Town",
                web: "indriyaresorts.com",
                photo: "img/directory/hotels/indriya.jpg"
            },
            {
                name: "Hotel Cee Cee Tower",
                category: "Hotels & Resorts",
                type: "Business & Family Hotel",
                star: "3-Star Hotel",
                featured: false,
                badge: "Town Centre",
                phone: "+91 484 244 5885",
                distance: "500 M from Town",
                web: "hotelceeceetower.com",
                photo: "img/directory/hotels/ceecee.jpg"
            },
            {
                name: "Hotel White City",
                category: "Hotels & Resorts",
                type: "Town Hotel",
                star: "3-Star Hotel",
                featured: false,
                badge: "Town Centre",
                phone: "+91 484 244 7893",
                distance: "500 M from Town",
                photo: "img/directory/hotels/whitecity.jpg"
            }
        ],

        colleges: [
            {
                name: "Sree Narayana Institute of Medical Sciences (SNIMS)",
                category: "Colleges",
                badge: "Medical College",
                featured: true,
                address: "Chalakka, P.O. North Kuthiyathodu, PIN- 683594",
                phone: "+91 484 266 1500",
                email: "info@snims.org",
                website: "www.snims.org",
                photo: "img/directory/colleges/medicalcollege.jpg"
            },
            {
                name: "SNM College Maliankara",
                category: "Colleges",
                badge: "Arts & Science (Aided)",
                featured: true,
                address: "Maliankara P.O, Moothakunnam, N.Paravur, PIN- 683516",
                phone: "+91 484 248 3600",
                email: "principalsnmc@gmail.com",
                website: "www.snmcollege.in",
                photo: "img/directory/colleges/maliankara.jpg"
            },
            {
                name: "SNM Institute of Management and Technology (SNMIMT)",
                category: "Colleges",
                badge: "Engineering & Polytechnic",
                featured: false,
                address: "Maliankara P.O, Moothakunnam, N.Paravur, PIN- 683516",
                phone: "+91 484 248 4142",
                email: "info@snmimt.edu.in",
                website: "www.snmimt.edu.in",
                photo: "img/directory/colleges/snm.jpg"
            },
            {
                name: "Sri Narayana Guru Institute of Science & Technology (SNGIST)",
                category: "Colleges",
                badge: "Engineering & Management",
                featured: false,
                address: "Thekkethazham, Mannam P.O., N.Paravur, PIN- 683520",
                phone: "+91 484 288 7000",
                email: "sngist@sngist.org",
                website: "www.sngist.org",
                photo: "img/directory/colleges/sngist.jpg"
            },
            {
                name: "MES College of Engineering and Technology",
                category: "Colleges",
                badge: "Engineering",
                featured: false,
                address: "Kunnukara P.O, N. Paravur, PIN- 683578",
                phone: "+91 484 257 3661",
                email: "mescet.kunnukara@gmail.com",
                website: "mescet.ac.in",
                photo: "img/directory/colleges/mes.jpg"
            },
            {
                name: "SNGIST Arts & Science College",
                category: "Colleges",
                badge: "Arts & Science",
                featured: false,
                address: "Manakkapady, Karumalloor P.O, North Paravur, PIN- 683511",
                phone: "+91 484 282 0078",
                website: "www.sngistasc.org",
                photo: "img/directory/colleges/sngistartscollege.jpg"
            },
            {
                name: "SN Arts & Science College (SNAS)",
                category: "Colleges",
                badge: "Arts & Science",
                featured: false,
                address: "Kedamangalam, N.Paravur, PIN- 683513",
                phone: "+91 484 250 9113",
                email: "snascollege@sify.com",
                photo: "img/directory/colleges/snas.jpg"
            },
            {
                name: "Lakshmi College",
                category: "Colleges",
                badge: "Parallel College",
                featured: false,
                address: "Amman Kovil Road, N.Paravur, PIN- 683513",
                phone: "+91 484 266 5940",
                email: "lakshmicollege.npr@gmail.com",
                photo: "img/directory/colleges/lakshmi.jpg"
            }
        ],

        schools: [
            {
                name: "Govt. Boys Higher Secondary School",
                category: "Schools",
                address: "Municipal Jn., North Paravur, 683513",
                class: "Std. V to XII",
                phone: "+91 484 244 6650",
                syllabus: "State",
                photo: "img/directory/schools/boys.jpg"
            },
            {
                name: "Govt. Girls Higher Secondary School",
                category: "Schools",
                address: "Municipal Jn., North Paravur, 683513",
                class: "Std. V to XII",
                phone: "+91 484 244 6650",
                syllabus: "State",
                photo: "img/directory/schools/girls.JPG"
            },
            {
                name: "Samooham High School",
                category: "Schools",
                address: "Cherai Rd, North Paravur, 683513",
                class: "Std. V to X",
                phone: "+91 484 244 3588",
                syllabus: "State",
                photo: "img/directory/schools/samooham.jpg"
            },
            {
                name: "SNV Sanskrit Higher Secondary School",
                category: "Schools",
                address: "Nanthiattukunnam, North Paravur, 683513",
                class: "Std. V to XII",
                phone: "+91 484 244 7844",
                syllabus: "State",
                photo: "img/directory/schools/snv.jpg"
            },
            {
                name: "Sree Narayana HSS (SNHSS)",
                category: "Schools",
                address: "Near KSRTC Bus Station, North Paravur, 683513",
                class: "Std. V to XII",
                phone: "+91 484 244 2196",
                syllabus: "State",
                photo: "img/directory/schools/snhss.jpg"
            },
            {
                name: "St. Aloysius High School",
                category: "Schools",
                address: "Kannankulangara, North Paravur, 683513",
                class: "Std. V to X",
                phone: "+91 484 244 3341",
                syllabus: "State",
                photo: "img/directory/schools/Alosius.jpg"
            },
            {
                name: "Kizhakkepram Govt. UPS",
                category: "Schools",
                address: "Kizhakkepram, North Paravur, 683513",
                class: "Std. I to VII",
                phone: "NA",
                syllabus: "State",
                photo: "img/directory/schools/kizhakkepuram.jpg"
            },
            {
                name: "Little Hearts School",
                category: "Schools",
                address: "Kizhakkepram, North Paravur, 683513",
                class: "Pre-KG to XII",
                phone: "+91 484 244 3313",
                syllabus: "CBSE",
                website: "www.littleheartsschoolnparavur.com",
                photo: "img/directory/schools/littlehearts.jpg"
            },
            {
                name: "Infant Jesus Public School",
                category: "Schools",
                address: "Perumpadanna, North Paravur P.O., 683513",
                class: "Std. I to XII",
                phone: "+91 484 244 2677",
                syllabus: "CBSE",
                website: "infantjesusschool.ac.in",
                photo: "img/directory/schools/infant.jpg"
            },
            {
                name: "Maria Teresa Scrilli Public School",
                category: "Schools",
                address: "T B Road, North Paravur, 683513",
                class: "Std. I to X",
                phone: "+91 484 244 7613",
                syllabus: "CBSE",
                website: "www.mariateresascrillipublicschool.com",
                photo: "img/directory/schools/scrilli.jpg"
            },
            {
                name: "Dr. N. International School",
                category: "Schools",
                address: "Aiswarya Nagar, North Paravur P.O., 683513",
                class: "Pre-KG to XII",
                phone: "+91 484 244 5422",
                syllabus: "CBSE",
                website: "www.drninternationalschool.com",
                photo: "img/directory/schools/drn.jpg"
            },
            {
                name: "Chavara Darsan CMI Public School",
                category: "Schools",
                address: "Koonammavu, North Paravur, 683518",
                class: "Pre-KG to XII",
                phone: "+91 484 251 1162",
                syllabus: "CBSE",
                website: "www.chavaradarsan.com",
                photo: "img/directory/schools/chavara.jpg"
            },
            {
                name: "Adarsha Vidyabhavan",
                category: "Schools",
                address: "Nanthiattukunnam, North Paravur, 683513",
                class: "Pre-KG to XII",
                phone: "+91 484 244 0270",
                syllabus: "CBSE",
                website: "www.adarshavidyabhavan.com",
                photo: "img/directory/schools/adarsha.jpg"
            }
        ],

        offices: [
            {
                name: "North Paravur Municipality",
                category: "Govt. Offices",
                badge: "Municipal Office",
                address: "Municipal Junction, Main Road, North Paravur",
                phone: "+91 484 244 2327",
                photo: "img/directory/office/office.jpg"
            },
            {
                name: "Taluk Office North Paravur",
                category: "Govt. Offices",
                badge: "Revenue & Taluk HQ",
                address: "First Floor, Police Station Rd, above Sub Registrar Office, North Paravur",
                phone: "+91 484 244 2326",
                photo: "img/directory/office/office.jpg"
            },
            {
                name: "RTO North Paravur (KL-42)",
                category: "Govt. Offices",
                badge: "Motor Vehicles Dept",
                address: "Republic Road, Perumpadanna, North Paravur",
                phone: "+91 484 266 2522",
                email: "kl42@keralamvd.gov.in",
                photo: "img/directory/office/office.jpg"
            },
            {
                name: "KSEB Electrical Section North Paravur",
                category: "Govt. Offices",
                badge: "Electricity Board",
                address: "Court Road, North Paravur",
                phone: "+91 484 244 2322",
                photo: "img/directory/office/kseb.jpg"
            },
            {
                name: "Sub Treasury North Paravur",
                category: "Govt. Offices",
                badge: "Treasury",
                address: "Near Sub Court, North Paravur",
                phone: "+91 484 244 2662",
                photo: "img/directory/office/office.jpg"
            },
            {
                name: "Employment Exchange Office",
                category: "Govt. Offices",
                badge: "Mini Civil Station",
                address: "Near Private Bus Stand, Mini Civil Station, North Paravur",
                phone: "+91 484 244 0066",
                photo: "img/directory/office/office.jpg"
            },
            {
                name: "Taluk Civil Supplies Office",
                category: "Govt. Offices",
                badge: "Civil Supplies",
                address: "Municipal Shopping Complex, Near Private Bus Stand, North Paravur",
                phone: "+91 484 244 4438",
                photo: "img/directory/office/office.jpg"
            },
            {
                name: "LIC of India — North Paravur Branch",
                category: "Govt. Offices",
                badge: "Insurance",
                address: "P.B.No.16, Gurudarsan Bldg., Main Road, North Paravur",
                phone: "+91 484 244 3298",
                photo: "img/directory/office/lic.jpg"
            },
            {
                name: "North Paravur Head Post Office (683513)",
                category: "Govt. Offices",
                badge: "India Post",
                address: "Opp. Private Bus Stand, Main Road, North Paravur",
                phone: "+91 484 244 2330",
                photo: "img/directory/office/post.jpg"
            }
        ],

        events: [
            {
                id: "1",
                name: "O FOUR SPORTS (Indoor Rooftop Turf)",
                website: "ofoursports.com",
                category: "SPORTS & LEISURE",
                badge: "Featured Partner",
                about: "Play 7's turf football and turf cricket in an indoor rooftop turf just 6 KM away from North Paravur town.",
                location: "HM Building, Near Matha College of Technology, Manakkapadi-Manjaly Road, Karumalloor P.O., North Paravur 683513",
                description: "Play 7's turf football and turf cricket in an all-weather indoor rooftop turf. Operating from 5:00 A.M to 10:00 P.M daily.",
                phone: "+919846437740",
                email: "midhun@ofoursports.com",
                photo: "img/events/turf.jpg",
                photosmall: "img/events/turf_small.jpg",
                date: "Featured Venue"
            },
            {
                id: "2",
                name: "Chendamangalam GI Handloom Weavers Societies",
                website: "muzirisheritage.org",
                category: "HERITAGE CRAFT & SHOPPING",
                badge: "GI Tagged Craft",
                about: "Support local artisans by shopping authentic Geographical Indication (GI) tagged Chendamangalam Kasavu sarees, mundus, and fabrics.",
                location: "Chendamangalam & Karimpadam Handloom Weavers Co-operative Societies, North Paravur Taluk",
                description: "Renowned for centuries under the patronage of the Paliath Achans, Chendamangalam handloom is celebrated for its fine count cotton texture and traditional puliyilakara borders.",
                phone: "+914842442327",
                email: "contact@northparavur.in",
                photo: "img/gallery/samooham.jpg",
                photosmall: "img/gallery/samooham_small.jpg",
                date: "Local Craft Highlight"
            }
        ]
    }
};
