const burger = document.querySelector('.burger');
const burgerBars = burger.querySelectorAll('span');
const navBar = document.querySelector('.nav');
const content = document.querySelector('.content');


function handleClick() {
    navBar.classList.toggle('open');
    burgerBars.forEach(burger =>{ 
        console.log(burger);
        burger.classList.toggle('change')});
    content.classList.toggle('shift');
}

burger.addEventListener('click', handleClick);