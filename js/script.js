const menu = document.querySelector(".menu");
const menubars = document.querySelector(".menu-bars");
const menuclose = document.querySelector(".close");
const navbar = document.querySelector(".nav-bar");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  navbar.classList.toggle("show-navbar");
  menubars.classList.toggle("hide-menu");
  menuclose.classList.toggle("hide-menu");
});
