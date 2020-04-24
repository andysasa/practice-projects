// get input from input field
const cInput = document.querySelector('#c > input');
const fInput = document.querySelector('#f > input');
const kInput = document.querySelector('#k > input');

// function to round temp numbers
function roundNum (num) {
    // round number to two decimal places
    return Math.round(num*100)/100;
}

function cToFahrenheitAndKelvin() {
    // cTemp is a string, parseFloat will convert to float decimal number
    const cTemp = parseFloat(cInput.value);
    const fTemp = cTemp * (9/5) + 32;
    const kTemp = cTemp + 273.15;

    // end '0' added for F to appear two decimal places
    fInput.value = roundNum(fTemp) + '0';
    kInput.value = roundNum(kTemp);
}

function fToCelsiusAndKelvin() {
    const fTemp = parseFloat(fInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);

    cInput.value = roundNum(cTemp);
    kInput.value = roundNum(kTemp);
}

function kToCelsiusAndFahrenheight() {
    const kTemp = parseFloat(kInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp * (9/5)) - 459.67;

    cInput.value = roundNum(cTemp);
    fInput.value = roundNum(fTemp);

}

function main() {
    // listens to input event
    // convert input temperature
    cInput.addEventListener("input", cToFahrenheitAndKelvin);
    fInput.addEventListener("input", fToCelsiusAndKelvin);
    kInput.addEventListener("input", kToCelsiusAndFahrenheight);
}

main();