new WOW().init();

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu'); 
const body = document.querySelector('body'); 

burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})