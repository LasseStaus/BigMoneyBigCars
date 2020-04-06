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

const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".option");
const slides = document.querySelectorAll(".img");

let index = 1;
let op_index = 0;
let size = slides[index].clientWidth;

update();
function update() {
  slider.style.transform = "translateX(" + -size * index + "px)";
  options.forEach(op => op.classList.remove("colored"));
  options[op_index].classList.add("colored");
}

function slide() {
  slider.style.transition = "transform .5s ease-in-out";
  update();
}

function btnCheck() {
  console.log(index);
  if (this.id === "prev") {
    index--;
    if (op_index == 4) {
      op_index = 4;
    } else {
      op_index--;
    }
    console.log(index);
  } else if (this.id === "next") {
    console.log(index);
    index++;
    if (op_index == 4) {
      op_index = 0;
    } else {
      op_index++;
    }
  }
  slide();
}
function optionFunc() {
  let i = Number(this.getAttribute("option-index"));
  index = i + 1;
  op_index = i;
  slide();
}

slider.addEventListener("transitionend", () => {
  if (slides[index].id === "last") {
    slider.style.transition = "none";
    index = slides.length - 2;
    slider.style.transform = "translateX(" + -size * index + "px)";
  } else if (slides[index].id === "first") {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = "translateX(" + -size * index + "px)";
  }
});

buttons.forEach(btn => btn.addEventListener("click", btnCheck));
options.forEach(option => option.addEventListener("click", optionFunc));

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
