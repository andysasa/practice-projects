const rollButton = document.querySelector('.dice__button');
const diceImg = document.querySelector('.dice__img');


function handleClick() {
    const randomNum = Math.floor(Math.random()*6 + 1);
    
    diceImg.classList.toggle('roll');

    setTimeout(() => diceImg.src = `images/dice${randomNum}.png`, 550); 

    
}

rollButton.addEventListener('click', handleClick);