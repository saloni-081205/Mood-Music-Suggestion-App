const suggestions = {
  happy: [
    { name: "Malang Sajna", link: "https://youtu.be/UbMgcdmYC70?si=4CivEH_h7jUQjIjQ" },
    { name: "Love You Zindagi", link: "https://youtu.be/bw7bVpI5VcM?si=u322XafLSs_4amRY" },
    { name: "Seonrita", link: "https://youtu.be/2Z0Put0teCM?si=KrOYQgdhzgyKum8U" },
    { name: "Sooraj Dooba Hain", link: "https://youtu.be/nJZcbidTutE?si=iOAOxpVN_HZ_Y95a" },
    { name: "Tenu Khabar Nahi", link: "https://youtu.be/9QpmsrYO4cc?si=z4B4URMTjybfcB0u" },
    { name: "Shape of You - Ed Sheeran", link: "https://youtu.be/JGwWNGJdvx8?si=p80pOxvl4R-1PudU" }
  ],
  sad: [
    { name: "Husn", link: "https://youtu.be/gJLVTKhTnog?si=Go-_rDW7ZmBfaLrJ" },
    { name: "Tera Yaar Hoon Main", link: "https://youtu.be/EatzcaVJRMs?si=u1mpU3_UQZ0yzvCi" },
    { name: "Raanjhan", link: "https://youtu.be/lBvbNxiVmZA?si=GZbwz7RyryIluvFW" },
    { name: "Jaan Nisaar", link: "https://youtu.be/vdbP_3o73qI?si=FjqEbrEeLD7-YFxe" },
    { name: "Tera Zikr", link: "https://youtu.be/eK0IIyBlYew?si=APDX3ggXA1LWmLdn" },
    { name: "Phir Bhi Tumko Chahunga", link: "https://youtu.be/_iktURk0X-A?si=7EgT5nkNFSKFuLPJ" }
  ],
  energetic: [
    { name: "Abhi Toh Party Shuru Hui Hai", link: "https://youtu.be/8LZgzAZ2lpQ?si=K7cpKVKPbm46C8VK" },
    { name: "Jugnu", link: "https://youtu.be/ksY3wb4vtlA?si=rhlB8YH9mmtTX7zB" },
    { name: "Aaj ki Raat", link: "https://youtu.be/hxMNYkLN7tI?si=Tu0nHugyRqhaVAqQ" },
    { name: "Nacho Nacho", link: "https://youtu.be/sAzlWScHTc4?si=mgH69LGtaan_IALP" },
    { name: "Tu Meri (from Bang Bang)", link: "https://youtu.be/YAOIbHBEvi0?si=9HZ9Ie8OQkZBHfK_" },
    { name: "Aayi Nai", link: "https://youtu.be/nFgsBxw-zWQ?si=dKcot3RgL47j_-pm" }
  ],
  romantic: [
    { name: "Tum Se Hi", link: "https://youtu.be/mt9xg0mmt28?si=e1fyiw-5CXYqS6PK" },
    { name: "Perfect - Ed Sheeran", link: "https://youtu.be/2Vv-BfVoq4g?si=OgVvjKM0r7vY7Rmb" },
    { name: "Kaun Tujhe", link: "https://youtu.be/atVof3pjT-I?si=nZEgBfov5bnfrY_P" },
    { name: "Aankhon Mein Teri", link: "https://youtu.be/7KKVb0_IdD4?si=WbitXITrlZVe7aFN" },
    { name: "Tera Hone Laga Hoon", link: "https://youtu.be/useznoRhrWU?si=CNA3B23oOylwK5gJ" },
    { name: "Phela Pyaar", link: "https://youtu.be/B7SkAq_94J8?si=k4xIPoXzO8cs2V6k" },
  ]
};

const colors = {
  happy: "#ffe066",
  sad: "#9ecae1",
  energetic: "#f8a764",
  romantic: "#fc88bc"
};

const moodButtons = document.querySelectorAll(".mood-buttons button");
const suggestionDiv = document.getElementById("suggestions");

moodButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.dataset.mood;
    localStorage.setItem("lastMood", mood);
    updateMood(mood);
  });
});

function updateMood(mood) {
  document.body.style.backgroundColor = colors[mood];
  const list = suggestions[mood]
    .map(song => `<li><a href="${song.link}" target="_blank">${song.name}</a></li>`)
    .join("");
  suggestionDiv.innerHTML = `
    <h2>${mood.charAt(0).toUpperCase() + mood.slice(1)} Vibes</h2>
    <ul>${list}</ul>
  `;
}

// Load last selected mood on page load
const lastMood = localStorage.getItem("lastMood");
if (lastMood) {
  updateMood(lastMood);
}
