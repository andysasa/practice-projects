const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    console.log(key);
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;

    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);