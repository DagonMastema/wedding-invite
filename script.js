// 1. Handle Guest Name
const params = new URLSearchParams(window.location.search);
const nameVal = params.get('name');
const guestElement = document.getElementById('guest-name');

if (nameVal) {
    guestElement.innerText = nameVal.replace(/_/g, ' ');
}

// 2. Video Logic
const video = document.getElementById('wedding-video');
const playBtn = document.getElementById('play-btn');
const overlay = document.getElementById('video-controls');

playBtn.addEventListener('click', () => {
    // Reveal the video by hiding the overlay
    overlay.classList.add('hidden');
    
    // Play with sound
    video.muted = false;
    video.play();
});

// 3. Freeze at the end
// Instead of looping, we let it finish naturally
video.loop = false; 

video.onended = function() {
    console.log("Video finished and stayed on the last frame.");
};