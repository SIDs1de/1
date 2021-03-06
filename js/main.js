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
if (ww < 993) {
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

$('.design').slick({
  infinite: true,
  swipe: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  touchThreshold: 30,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        swipe: false
      }
    },
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$("a[href^='#']").click(function(){
  burger.classList.remove("active");
  menu.classList.remove("active");
  body.classList.remove("active");
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

$('.first-project').on('click', function() {
  window.location.href = "https://sids1de.github.io/portfolio/";
  // window.location.replace("https://sids1de.github.io/portfolio/");
})
$('.second-project').on('click', function() {
  window.location.href = "https://sids1de.github.io/axit/";
})
$('.third-project').on('click', function() {
  window.location.href = "https://sids1de.github.io/first";
})



window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

