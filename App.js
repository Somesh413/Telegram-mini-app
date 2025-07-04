// app.js

// ---------------- Firebase Setup ---------------- //

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"; import { getDatabase, ref, set, get, child, onValue, update } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = { apiKey: "AIzaSyCX_TM_vX75GElLpJaJenBEFo3V0YQVgGA", authDomain: "fast-paisa-1ba58.firebaseapp.com", projectId: "fast-paisa-1ba58", storageBucket: "fast-paisa-1ba58.appspot.com", messagingSenderId: "427927362131", appId: "1:427927362131:web:be4f39b336a73c77c404a6", measurementId: "G-CPD1FVWLWB", databaseURL: "https://fast-paisa-1ba58-default-rtdb.firebaseio.com/" };

const app = initializeApp(firebaseConfig); const db = getDatabase(app);

// ---------------- Variables ---------------- //

const uid = localStorage.getItem("uid") || Date.now().toString(); localStorage.setItem("uid", uid);

const walletElement = document.getElementById("walletAmount"); const dailyButtons = document.querySelectorAll(".daily-btn");

// ---------------- Functions ---------------- //

function updateWallet(amount) { const walletRef = ref(db, users/${uid}); get(walletRef).then((snapshot) => { const current = snapshot.exists() ? snapshot.val().wallet || 0 : 0; const updated = current + amount; update(walletRef, { wallet: updated }); walletElement.innerText = ₹${updated.toFixed(2)}; }); }

function loadWallet() { const walletRef = ref(db, users/${uid}); onValue(walletRef, (snapshot) => { const data = snapshot.val(); const amount = data?.wallet || 0; walletElement.innerText = ₹${amount.toFixed(2)}; }); }

// ---------------- Daily Reward ---------------- //

dailyButtons.forEach((btn) => { btn.addEventListener("click", () => { const reward = parseFloat(btn.dataset.reward); const claimed = btn.classList.contains("claimed"); if (claimed) return;

// Monetag Ad (Simulated)
alert("🔔 Ad Playing (Simulated)");

// Reward Logic
updateWallet(reward);
btn.innerText = "Claimed";
btn.classList.add("claimed");

}); });

// ---------------- Spin & Win ---------------- //

const spinBtn = document.getElementById("spinBtn"); const wheel = document.getElementById("wheel"); const segments = [0.1, 0.5, 0.65, 0.78, 1];

spinBtn.addEventListener("click", () => { const deg = 3600 + Math.floor(Math.random() * 360); wheel.style.transition = "transform 5s ease-out"; wheel.style.transform = rotate(${deg}deg);

// Simulate ad setTimeout(() => { const selectedIndex = Math.floor(Math.random() * segments.length); const selectedValue = segments[selectedIndex]; alert(🎉 You Won ₹${selectedValue}); updateWallet(selectedValue); }, 5200); });

// ---------------- Watch & Earn ---------------- //

document.getElementById("watchBtn").addEventListener("click", () => { alert("🎬 Watching Ad (Simulated)"); updateWallet(0.5); });

// ---------------- Telegram Reward ---------------- //

document.getElementById("joinTelegramBtn").addEventListener("click", () => { window.open("https://t.me/YourTelegramChannel", "_blank"); updateWallet(0.5); });

// ---------------- Start ---------------- //

loadWallet();

  
