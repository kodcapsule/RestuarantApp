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

// var swiper = new Swiper(".home-swiper", {
//   slidesPerView: 3,
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   loop: true,
// });
