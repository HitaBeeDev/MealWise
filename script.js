"use strict";

const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".header__navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
