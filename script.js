const adhkar = [
    {
        arabic: "لَا إِلٰهَ إِلَّا اللّٰهُ.",
        transliteration: "Lā ilāha illā-Allāh",
        translation: "There is no god but Allah.",
        source: "The Messenger of Allah ﷺ said: “The best dhikr is [above]” (Nasā’ī)"
    }, 

    {
        arabic: "سُبْحَانَ اللّٰهِ ، اَلْحَمْدُ لِلّٰهِ ، اَللّٰهُ أَكْبَرُ",
        transliteration: "Subḥāna-llāh. Alḥamdu li-llāh, Allāhu akbar.",
        translation: "Allah is free from imperfection. All praise be to Allah. Allah is the Greatest.",
        source: "The Messenger of Allah ﷺ said: “The most beloved statements to Allah are four: سُبْحَانَ اللهِ ، وَالْحَمْدُ لِلهِ ، وَلَا إِلهَ إِلَّا اللهُ ، وَاللهُ أَكْبَر.” (Muslim)"
    },

    {
        arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ",
        transliteration: "Lā ḥawla wa lā quwwata illā bi-llāh.",
        translation: "There is no power (in averting evil) or strength (in attaining good) except through Allah.",
        source: "The Messenger of Allah ﷺ said: “Shall I not teach you a statement which lies beneath the Throne and is from the treasures of Paradise? Say لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِالله upon which Allah says: ‘My slave has submitted and surrendered himself.’” (Hākim)"
    },

    {
        arabic: "اَللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيْمَ وَعَلَىٰ آلِ إِبْرَاهِيْمَ ، إِنَّكَ حَمِيْدٌ مَّجِيْدٌ ، اَللّٰهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيْمَ وَعَلَىٰ آلِ إِبْرَاهِيْمَ ، إِنَّكَ حَمِيْدٌ مَّجِيْدٌ",
        transliteration: "Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdu-m-Majīd, Allāhumma bārik ʿalā Muḥammad, wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka Ḥamīdu-m-Majīd.",
        translation: "O Allah, honour and have mercy upon Muhammad and the family of Muhammad as You have honoured and had mercy upon Ibrāhīm and the family of Ibrāhīm. Indeed, You are the Most Praiseworthy, the Most Glorious. O Allah, bless Muhammad and the family of Muhammad as You have blessed Ibrāhīm and the family of Ibrāhīm. Indeed, You are the Most Praiseworthy, the Most Glorious.",
        source: "ʿAbd al-Raḥmān ibn Abī Laylā (raḥimahullāh) said: “Kaʿb ibn ʿUjrah (raḍiy Allāhu ʿanhu) met me and said: ‘Shall I not give you a gift I received from the Messenger of Allah ﷺ?’ I replied: ‘Yes of course, gift it to me.’ So he said: ‘We asked the Messenger of Allah ﷺ: “O Messenger of Allah ﷺ, how should we invoke ṣalāh upon you, the members of the family, for Allah has taught us how to send salām upon you?” He ﷺ replied: “Say: [the above].” (Bukhārī 3370)"
    },

    {
        arabic: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ",
        transliteration: "Lā ilāha illā-Allāh, waḥdahū lā sharīka lah, lahu-l-mulk, wa lahu-l-ḥamd, wa Huwa ʿalā kulli shay’in Qadīr.",
        translation: "There is no god but Allah. He is Alone and He has no partner whatsoever. To Him Alone belong all sovereignty and all praise. He is over all things All-Powerful.",
        source: "Ibn ‘Amr (radiy Allāhū ‘anhumā) narrates that the Messenger of Allah ﷺ said: “The best duʿā’ is the duʿā’ of the day of ʿArafah. The best of what I and the Prophets before me have said is [the above].” (Tirmidhī 3585)"
    },
];

const quoteBox = document.getElementById("ajr");
const button = document.getElementById("generate");

button.addEventListener("click", function () {
  const random = adhkar[Math.floor(Math.random() * adhkar.length)];

  quoteBox.innerHTML = `
    <p style="font-size: 24px;">${random.arabic}</p>
    <p><em>${random.transliteration}</em></p>
    <p>${random.translation}</p>
    <p><small><strong>${random.source}</strong></small></p>
  `;
});


