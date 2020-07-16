const numbers = document.querySelector('.number-input');
const submit = document.querySelector('.submit-button');
const roman = document.querySelector('.roman');
const test = document.querySelector('test');

function romanize() {
    const deciNumberals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumerals = ['M', 'CM', 'C', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let romanized = [];
    for (let i = 0; i < deciNumberals.length; i++) {
        while (numbers.value >= deciNumberals[i]) {
            romanized.push(romanNumerals[i]);
            numbers.value -= deciNumberals[i];
        } 
    }

    return romanized.join('');
}

function handleSubmit(e) {
    e.preventDefault();
    roman.value = romanize();
    numbers.value = '';
}

function fadeOn(e) {
    this.classList.toggle('click');
    if (e.keyCode != 13) return;
        else submit.classList.toggle('click');

}

function fadeOff(e) {
    this.classList.toggle('click');
    if (e.keyCode != 13) return;
        else submit.classList.toggle('click');
 
}

submit.addEventListener('click', handleSubmit);
submit.addEventListener('mousedown', fadeOn);
submit.addEventListener('mouseup', fadeOff);
numbers.addEventListener('keydown', fadeOn);
numbers.addEventListener('keyup', fadeOff);

