// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const menu = document.querySelector(".menu");
const menubars = document.querySelector(".menu-bars");
const menuclose = document.querySelector(".close");
const navbar = document.querySelector(".nav-bar");

const searchForm = document.querySelector("#search-form");
const search = document.querySelector(".search");
const formClose = document.querySelector(".form-close");

// Menu bar toggle
menu.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("show-navbar");
  menubars.classList.toggle("hide-menu");
  menuclose.classList.toggle("hide-menu");
});

//  Search display

search.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  searchForm.classList.toggle("active");
});

formClose.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  searchForm.classList.remove("active");
});

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiper = new Swiper(".home-swiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 700,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loo: tru,
// });

// var swiper = new Swiper(".review-slider", {
//   spaceBetween: 20,
//   centeredSlides: true,
//   autoplay: {
//     delay: 700,
//     disableOnInteraction: false,
//   },

//   loop: true,
// });
