const trigger = document.querySelector('.trigger');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function openModal() {
    modal.classList.add('open');
}

function closeModal(e) {
    if (e.target == modal || e.target.parentNode == close) modal.classList.remove('open');

    e.keyCode === 27 ? modal.classList.remove('open') : '';
}

function main() {
    trigger.addEventListener('click', openModal);
    close.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModal);
}

main();