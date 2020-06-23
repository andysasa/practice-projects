const hourHand = document.querySelector('#hour-hand');
const minHand = document.querySelector('#min-hand');
const secHand = document.querySelector('#sec-hand');

function clock() {
    const date = new Date();

    const secs = date.getSeconds();
    const secDegree = (secs/60) * 360 + 90;

    secHand.style.transform = `rotate(${secDegree}deg)`;
}

setInterval(clock, 1000);
