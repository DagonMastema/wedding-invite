// 1. Existing Guest Name Logic
const params = new URLSearchParams(window.location.search);
const rawName = params.get('name');
const guestName = rawName ? rawName.replace(/_/g, ' ') : "Our Dear Friends";
// document.getElementById('guest-greeting').innerText = "Hello" + guestName + "!";
document.getElementById('guest-name').innerText = guestName;

// 2. THE SAFETY TIMER (Auto-reveal after 5 seconds)
// Ensure this part matches your timer
// setTimeout(() => {
//     if (!document.body.classList.contains('force-landscape')) {
//         console.log("5 seconds passed: Auto-revealing invitation.");
//         document.body.classList.add('force-landscape');
//     }
// }, 5000);

// 3. Physical Tilt Detection (Remains the same)
window.addEventListener("deviceorientation", (event) => {
    const sideTilt = Math.abs(event.gamma);
    if (sideTilt > 65) {
        console.log('ehllo');
        
        document.body.classList.add('force-landscape');
    }
}, true);

// 4. Desktop Check (Immediate reveal for non-mobile)
if (!/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.classList.add('force-landscape');
}

// 5. Play Button Logic (Remains the same)
const playBtn = document.getElementById('play-btn');
const video = document.getElementById('wedding-video');
const overlay = document.getElementById('video-controls');

playBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    video.muted = false;
    video.play();
});