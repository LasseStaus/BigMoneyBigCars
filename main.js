"use strict";

import "@babel/polyfill";
window.addEventListener("DOMContentLoaded", start);

import { gallery, scrolling, projectElement, gallery2 } from "./modules/functions";

function start() {
  scrolling();
  document.querySelector(".the-container").addEventListener("scroll", scrolling);
  //document.querySelector(".next").addEventListener("click", plusSlides);
  fetchJson();
}

const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".mobile-menu-dropdown");
const atags = document.querySelector(".atags-mobile-menu");
const mAtags = document.querySelectorAll(".atags-mobile-menu > a");

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

    atags.classList.toggle("fade-in-left");
    toggler.classList.toggle("active");
    menu.classList.toggle("active");
    menu.classList.remove("shadow");
  });
});

//when scrolling happens, call scrolling()

async function fetchJson() {
  let response = await fetch("test.json");
  let jsonData = await response.json();

  tis(jsonData);
}

function tis(jsonData) {
  console.log(jsonData);
  let p1 = jsonData.projects.project1;
  let p2 = jsonData.projects.project2;
  let p3 = jsonData.projects.project3;
  let p4 = jsonData.projects.project4;

  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
}

//max scroll : scrollheight - clientheight

/* const data2 = [
  {
    i: "download.png"
  },
  {
    i: "download.png"
  },
  {
    i: "download.png"
  },
  {
    i: "download.png"
  }
];

let p = document.querySelector("#projects .container");
console.log(p);

projectElement(data2, p); */

/* test.forEach(t => {
  const e = document.createElement("div");
  gallery(data2, e);
}); */
