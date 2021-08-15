new WOW().init();

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");
const next = document.querySelector(".section-1-btn");
const header = document.querySelector(".header");
const arr = document.querySelector(".arrow");

const ww = window.innerWidth;

let section_2_coord = document
  .querySelector(".section-2")
  .getBoundingClientRect();

burger.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("active");
  menu.addEventListener("click", (e) => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("active");
  });
});

let scrollPos = 0;
window.addEventListener("scroll", function () {
  let st =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  if (st > scrollPos) {
    // Листает вниз
    header.classList.remove("up");
    header.classList.add("down");
  } else {
    // Листает вверх
    header.classList.remove("down");
    header.classList.add("up");
  }
  scrollPos = st;
});

if(ww < 993) {
    document.querySelector('.second-block').dataset.wowDelay = "0";
} 

arr.addEventListener('click', (e) => {
    document.querySelector('.section-2').scrollIntoView({
        behavior: 'smooth'
    })
})