let burger = document.querySelector(".burger");
let menu = document.querySelector(".header-menu");
let body = document.querySelector("body");
let next = document.querySelector(".section-1-btn");
let header = document.querySelector(".header");

let section_2_coord = document
  .querySelector(".section-2")
  .getBoundingClientRect();

burger.addEventListener("click", (e) => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("active");
    menu.addEventListener('click', (e) => {
        burger.classList.remove("active");
        menu.classList.remove("active");
        body.classList.remove("active");
    })
});

let scrollPos = 0;
window.addEventListener('scroll', function(){
    let st = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (st > scrollPos){
        // Листает вниз
        header.classList.remove('up')
        header.classList.add('down')
    } else {
        // Листает вверх
        header.classList.remove('down')
        header.classList.add('up')
    }
    scrollPos = st;
});