function playSound(event) {
    // select an audio and key element
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return; // if no audio, exit function

    audio.currentTime = 0; //rewind to start of audio
    audio.play();
    key.classList.add('playing'); // add class playing for key animation
}

// remove animation
function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip if not a 'transform'
    this.classList.remove('playing'); // this is what was called against it, in this case, it's key (ln 19)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //need forEach bc unable to listen through whole array
window.addEventListener('keydown', playSound);


