"use strict";
window.addEventListener("DOMContentLoaded", start);

import { gallery, scrolling } from "./modules/functions";

const data = [
  {
    i: "download.png"
  },
  {
    i: "download.png"
  }
];

const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".mobile-menu-dropdown");
const atags = document.querySelector(".atags-mobile-menu");
const mAtags = document.querySelectorAll(".atags-mobile-menu > a");

console.log(mAtags);
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  document.querySelector(".the-container").classList.toggle("blurred");
  atags.classList.toggle("fade-in-left");
  menu.classList.toggle("active");
  menu.classList.toggle("shadow");
});

mAtags.forEach(a => {
  a.addEventListener("click", () => {
    document.querySelector(".the-container").classList.remove("blurred");
    menu.classList.remove("shadow");
    atags.classList.toggle("fade-in-left");
    toggler.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

gallery(data, document.querySelector("#section_2"));

//when scrolling happens, call scrolling()

function start() {
  scrolling();
  document.querySelector(".the-container").addEventListener("scroll", scrolling);
}

//max scroll : scrollheight - clientheight
