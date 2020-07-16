const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height} = hero;
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // width and height of hero

    let {offsetX: x, offsetY: y} = e;
    // x and y coordinate of mouse
    // if there are children element inside hero, it will give us x and y of the element we are hovering over

    // this is <div class="hero">
    // e.taget is the thing it triggers on
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    console.log(x, y);
    console.log(width, height);

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    console.log(xWalk, yWalk);

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue,
    ${xWalk}px ${yWalk*-1}px 0 green,
    ${yWalk * -1}px ${xWalk}px 0 yellow`;


}

hero.addEventListener('mousemove', shadow);