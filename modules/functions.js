export function gallery(data, parent) {
  data.forEach(d => {
    const t = createElement("img");
    t.src = "imgs/" + d.i;
    console.log(d.i);
    parent.appendChild(t);
  });
}
function createElement(type) {
  return document.createElement(type);
}
/* 
export function gallery2(data2, e) {
  data2.forEach(d => {
    const t = createElement("img");
    t.src = "imgs/" + d.i;
    console.log(d.i);
    return e.appendChild(t);
  });
}



export function projectElement(data2, p) {
  data2.forEach(d => {
    const e = createElement("div");
    p.appendChild(e);
    e.classList.add("project");
    console.log(e);
    gallery2(data2, e);
    console.log(p);
  });
} */

/* export function projectElement(data, parent, type, clas) {
  console.log(clas);

  data.forEach(d => {
    console.log("project element");
    const e = createElement("div");
    e.classlist.add("${clas}");

    parent.appendChild(e);
  });
} */
/* 
export function scrolling() {
  //  console.log("scrolling");
  let cnt = document.querySelector(".the-container");
  let ratio = cnt.scrollTop / (cnt.scrollHeight - cnt.clientHeight);
  let scrollinfo = document.querySelector("#scrollinfo");
  //console.log(scrollinfo);

  scrollinfo.style.setProperty("--ratio", ratio);

  //console.log(ratio);
}
 */
