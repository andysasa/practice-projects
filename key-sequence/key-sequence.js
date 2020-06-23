const pressed  = [];
const secretCode = 'andrewchao'

function cornify(e) {
    pressed.push(e.key);
    pressed.splice(-secretCode.lengh - 1, pressed.length  - secretCode.length);
    console.log(pressed);

    if (pressed.join('').includes('andrewchao')) {
        cornify_add();
    }
}

window.addEventListener('keyup', cornify);