const cInput = document.querySelector('#c > input');
const fInput = document.querySelector('#f > input');
const kInput = document.querySelector('#k > input');

function cToFandK() {
    cTemp = parseFloat(cInput.value);
    fTemp = cTemp * (9/5) + 32;
    kTemp = fTemp + 273;

    fInput.value = fTemp;
    kInput.value = kTemp;
}

cInput.addEventListener('input', cToFandK);