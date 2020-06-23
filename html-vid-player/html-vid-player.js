// select elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_filled');
const sliders = document.querySelectorAll('.player_slider');
const skipButtons = document.querySelectorAll('.player_button');
const fullScreen = document.querySelector('.full_screen');

// build functions
// play video and udpate play buttons
function togglePlay() {
    if (video.paused) video.play();
        else video.pause();
}

function updatePlayButton() {
    toggle.textContent = this.paused? '►' : '||';
}

// skip video
function handleSkip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// handle range update
function handleSlider() {
    video[this.name] = this.value;
}

// handle progress bar
function handleProgress() {
    const videoProgress = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${videoProgress}%`;
}

// scrub
function scrub(e) {
    video.currentTime = video.duration * (e.offsetX / progress.offsetWidth);
;
}

// full screen
function handleScreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
}

// hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skip => skip.addEventListener('click', handleSkip));

sliders.forEach(slider => slider.addEventListener('change', handleSlider));
sliders.forEach(slider => slider.addEventListener('mousemove', handleSlider));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', handleScreen);





