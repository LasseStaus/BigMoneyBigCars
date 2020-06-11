"use strict";

import "@babel/polyfill";

window.addEventListener("DOMContentLoaded", start);

import { gallery, scrolling, projectElement, gallery2 } from "./modules/functions";

function start() {
  document.querySelector(".the-container").addEventListener("scroll", scrolling);
  //document.querySelector(".next").addEventListener("click", plusSlides);
  fetchJson();
  // observerF();
}

/* let optionsObserver;

function observerF() {
  optionsObserver = {
    root: null,
    rootMargin: "100%",
    threshold: 0.9,
  };
  let observer = new IntersectionObserver(beTouching, optionsObserver);
  document.querySelectorAll(".the-container section").forEach((section) => {
    observer.observe(section);
  });
}
let tester = document.querySelector(".tester");
function beTouching(entries, ob) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      tester.textContent = entry.target.id;

      console.log(dAtags);
      dAtags.forEach((e) => {
        e.classList.remove("marked");
      });
      mAtags.forEach((e) => {
        e.classList.remove("marked");
      });

      nAtags.forEach((e) => {
        console.log(e);
        e.classList.remove("fa");
      });

      if (entry.target.id == "home") {
        document.querySelector("#desktop-menu a").classList.add("marked");
        document.querySelector("#mobile-menu a").classList.add("marked");
        document.querySelector(".navigation a").classList.add("fa");
        document.querySelector(".navigation a").classList.add("fa-square");
      } else if (entry.target.id == "skills") {
        document.querySelector("#desktop-menu a + a").classList.add("marked");
        document.querySelector("#mobile-menu a + a").classList.add("marked");
        document.querySelector(".navigation a + a").classList.add("fa");
        document.querySelector(".navigation a + a").classList.add("fa-square");
      } else if (entry.target.id == "projects") {
        document.querySelector("#desktop-menu a + a + a").classList.add("marked");
        document.querySelector("#mobile-menu a + a + a").classList.add("marked");
        document.querySelector(".navigation a + a + a").classList.add("fa");
        document.querySelector(".navigation a + a + a").classList.add("fa-square");
      } else if (entry.target.id == "contact") {
        document.querySelector("#desktop-menu a + a + a + a").classList.add("marked");
        document.querySelector("#mobile-menu a + a + a + a").classList.add("marked");
        document.querySelector(".navigation a + a + a + a").classList.add("fa");
        document.querySelector(".navigation a + a +a + a").classList.add("fa-square");
      }

      entry.target;
      console.log("intersecting");

      entry.target.classList.remove("hide");

      entry.target.classList.add("current");
      entry.target.classList.add("animated", "zoomIn");
    } else {
      entry.target.classList.add("hide");
      entry.target.classList.remove("current");
      entry.target.classList.remove("animated", "zoomIn");
    }
  });
} */

async function fetchJson() {
  let response = await fetch("test.json");
  let jsonData = await response.json();
  tis(jsonData);
}

function tis(jsonData) {
  console.log(jsonData);

  p1 = jsonData.projects.project1;
  p2 = jsonData.projects.project2;
  p3 = jsonData.projects.project3;
  p4 = jsonData.projects.project4;
  p5 = jsonData.projects.project5;
  p6 = jsonData.projects.project6;
  p7 = jsonData.projects.project7;

  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
  printJson();
}

function printJson() {
  document.querySelector(".project1 h2").textContent = p1.title;
  document.querySelector(".project1 .manchet").textContent = p1.manchet;
  document.querySelector(".project1 .link").href = p1.href;
  document.querySelector(".project1 .projectImg").src = p1.image;

  document.querySelector(".project2 h2").textContent = p2.title;
  document.querySelector(".project2 .manchet").textContent = p2.manchet;
  document.querySelector(".project2 .link").href = p2.href;
  document.querySelector(".project2 .projectImg").src = p2.image;

  document.querySelector(".project3 h2").textContent = p3.title;
  document.querySelector(".project3 .manchet").textContent = p3.manchet;
  document.querySelector(".project3 .link").href = p3.href;
  document.querySelector(".project3 .projectImg").src = p3.image;

  document.querySelector(".project4 h2").textContent = p4.title;
  document.querySelector(".project4 .manchet").textContent = p4.manchet;
  document.querySelector(".project4 .link").href = p4.href;
  document.querySelector(".project4 .projectImg").src = p4.image;

  document.querySelector(".project5 h2").textContent = p5.title;
  document.querySelector(".project5 .manchet").textContent = p5.manchet;
  document.querySelector(".project5 .link").href = p5.href;
  document.querySelector(".project5 .projectImg").src = p5.image;

  document.querySelector(".project6 h2").textContent = p6.title;
  document.querySelector(".project6 .manchet").textContent = p6.manchet;
  document.querySelector(".project6 .link").href = p6.href;
  document.querySelector(".project6 .projectImg").src = p6.image;

  document.querySelector(".project7 h2").textContent = p7.title;
  document.querySelector(".project7 .manchet").textContent = p7.manchet;
  document.querySelector(".project7 .link").href = p7.href;
  document.querySelector(".project7 .projectImg").src = p7.image;

  // the first & last of html for slider

  document.querySelector(".projectFirst h2").textContent = p1.title;
  document.querySelector(".projectFirst .manchet").textContent = p1.manchet;
  document.querySelector(".projectFirst .tekst").textContent = p1.tekst1;
  document.querySelector(".projectFirst .link").href = p1.href;
  document.querySelector(".projectFirst .projectImg").src = p1.image;

  document.querySelector(".projectLast h2").textContent = p5.title;
  document.querySelector(".projectLast .manchet").textContent = p5.manchet;
  document.querySelector(".projectLast .tekst").textContent = p5.tekst1;
  document.querySelector(".projectLast .link").href = p5.href;
  document.querySelector(".projectLast .projectImg").src = p1.image;
}
const slider = document.querySelector(".slider");
const buttons = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".option");
const slides = document.querySelectorAll(".img");

let p1;
let p2;
let p3;
let p4;
let p5;
let p6;
let p7;

let index = 1;
let op_index = 0;
let size;
console.log(size);

update();
function update() {
  size = slides[index].clientWidth;

  slider.style.transform = "translateX(" + -size * index + "px)";
  options.forEach((op) => op.classList.remove("colored"));
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
    if (op_index == 0) {
      op_index = 6;
    } else {
      op_index--;
    }
    console.log(index);
  } else if (this.id === "next") {
    console.log(index);
    index++;
    if (op_index == 6) {
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

buttons.forEach((btn) => btn.addEventListener("click", btnCheck));
options.forEach((option) => option.addEventListener("click", optionFunc));
const nAtags = document.querySelectorAll(".navigation > a");
const dAtags = document.querySelectorAll("#desktop-menu > a");
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

mAtags.forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".the-container").classList.remove("blurred");

    atags.classList.toggle("fade-in-left");
    toggler.classList.toggle("active");
    menu.classList.toggle("active");
    menu.classList.remove("shadow");
  });
});

//when scrolling happens, call scrolling()

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

(function ($) {
  "use strict";
  var form = $(".contact__form"),
    message = $(".contact__msg"),
    form_data;
  // Success function
  function done_func(response) {
    message.fadeIn().removeClass("alert-danger").addClass("alert-success");
    message.text(response);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
    form.find('input:not([type="submit"]), textarea').val("");
  }
  // fail function
  function fail_func(data) {
    message.fadeIn().removeClass("alert-success").addClass("alert-success");
    message.text(data.responseText);
    setTimeout(function () {
      message.fadeOut();
    }, 2000);
  }

  form.submit(function (e) {
    e.preventDefault();
    form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form_data,
    })
      .done(done_func)
      .fail(fail_func);
  });
})(jQuery);
