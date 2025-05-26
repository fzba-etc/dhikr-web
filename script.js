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
    }
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


