const hourHand = document.querySelector('#hour-hand');
const minHand = document.querySelector('#min-hand');
const secHand = document.querySelector('#sec-hand');

function setDate() {
    const date = new Date();

    let hour = date.getHours();
    const hourHandDeg = (hour/12) * 360 + 90;

    let min = date.getMinutes();
    const minHandDeg = (min/60) * 360 + 90;

    let sec = date.getSeconds();
    const secHandDeg = (sec/60) * 360 + 90;

    let amPm = hour > 12 ? "PM" : "AM";

    hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
    minHand.style.transform = `rotate(${minHandDeg}deg)`;
    secHand.style.transform = `rotate(${secHandDeg}deg)`;

    if (hour == 0) {
        hour = 12;
        amPm = "AM";
    } else if (hour > 12) {
        hour = "0" + (hour - 12);
    } else if (hour < 10) {
        hour = "0" + hours;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    document.getElementById('digital-hour').innerHTML = hour;
    document.getElementById('digital-min').innerHTML = min;
    document.getElementById('digital-sec').innerHTML = sec;
    document.getElementById('am-pm').innerHTML = amPm;
}

setInterval(setDate, 1000);