// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Party button
  const btn   = document.getElementById("partyBtn");
  const music = document.getElementById("partyMusic");
  if (btn && music) {
    btn.addEventListener("click", () => {
      music.currentTime = 0;
      music.play().catch(() => {});
      if (typeof confetti === "function") {
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
      }
    });
  }

  // Countdown (update text ONLY; don't touch innerHTML)
  const dd = document.getElementById("dd");
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const ss = document.getElementById("ss");
  const container = document.getElementById("countdown");

  if (!dd || !hh || !mm || !ss) return;

  const target = new Date("September 23, 2025 00:00:00").getTime();

  function pad(n) { return String(n).padStart(2, "0"); }
  function tick() {
    const now = Date.now();
    const left = target - now;

    if (left <= 0) {
      dd.textContent = "00";
      hh.textContent = "00";
      mm.textContent = "00";
      ss.textContent = "00";
      // optional: show a message WITHOUT replacing tiles
      // create once:
      if (!document.getElementById("countdown-msg")) {
        const msg = document.createElement("div");
        msg.id = "countdown-msg";
        msg.textContent = "🎉 Happy 21st Birthday! 🎂";
        msg.style.marginTop = "10px";
        container.appendChild(msg);
      }
      clearInterval(timer);
      return;
    }

    const days    = Math.floor(left / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((left % (1000 * 60)) / 1000);

    dd.textContent = days;       // days can be 1–3+ digits; no pad
    hh.textContent = pad(hours);
    mm.textContent = pad(minutes);
    ss.textContent = pad(seconds);
  }

  const timer = setInterval(tick, 1000);
  tick(); // initial render immediately
});

// Random shot game
const shotBtn = document.getElementById("shotBtn");
const shotResult = document.getElementById("shotResult");

if (shotBtn) {
  const shots = [
    "Sheriff’s Whiskey 🤠",
    "Glowstick Vodka 🎶",
    "Birthday Cake Shot 🎂",
    "Mystery Mix 🌀",
    "Tequila Sunrise 🌅",
    "Rainbow Rave 🌈"
  ];

  shotBtn.addEventListener("click", () => {
    const pick = shots[Math.floor(Math.random() * shots.length)];
    shotResult.textContent = "You got: " + pick + "!";
  });
}

// Rave Stage Vibe: start music + lights on click
(() => {
  const btn = document.getElementById('raveBtn');
  const music = document.getElementById('raveMusic');
  const section = document.getElementById('rave');

  if (!btn || !music || !section) return;

  let on = false;

  btn.addEventListener('click', () => {
    on = !on;
    if (on) {
      section.classList.add('rave-on');
      music.currentTime = 0;
      music.play().catch(() => {}); // user gesture should allow play
      btn.textContent = 'Stop the Rave';
    } else {
      section.classList.remove('rave-on');
      music.pause();
      music.currentTime = 0;
      btn.textContent = 'Start the Rave';
    }
  });
})();


// Love letter section
const openLetter = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

if (openLetter && letterContent) {
  openLetter.addEventListener("click", () => {
    letterContent.style.display = "block";
    openLetter.style.display = "none";
  });
}