new WOW().init();

var a = 0;
const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");
const next = document.querySelector(".section-1-btn");
const header = document.querySelector(".header");
const arr = document.querySelector(".arrow");
const arr_f = document.querySelector(".arrow_f");

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
    if (a == 0) {
      header.classList.remove("up");
      header.classList.add("down");
    }
  } else {
    // Листает вверх
    if (a == 0) {
      header.classList.remove("down");
      header.classList.add("up");
    }
  }
  scrollPos = st;
});

if (ww < 993) {
  document.querySelector(".second-block").dataset.wowDelay = "0";
}

arr.addEventListener("click", (e) => {
  document.querySelector(".section-2").scrollIntoView({
    behavior: "smooth",
  });
});

arr_f.addEventListener("click", (e) => {
  document.querySelector(".section-1").scrollIntoView({
    behavior: "smooth",
  });
});
if(ww < 993) {
  var initialPoint;
var finalPoint;
document.addEventListener(
  "touchstart",
  function (event) {
    initialPoint = event.changedTouches[0];
  },
  false
);
document.addEventListener(
  "touchend",
  function (event) {
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 60 || yAbs > 60) {
      if (xAbs > yAbs) {
        if (finalPoint.pageX < initialPoint.pageX) {
          burger.classList.remove("active");
          menu.classList.remove("active");
          body.classList.remove("active");
          a = 0;
        } else {
          a = 1;
          body.classList.add("active");
          header.classList.remove("down");
          burger.classList.add("active");
          menu.classList.add("active");
          menu.addEventListener("click", (e) => {
            burger.classList.remove("active");
            menu.classList.remove("active");
            body.classList.remove("active");
            a = 0;
          });
        }
      }
    }
  },
  false
);

}