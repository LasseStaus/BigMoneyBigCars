export function gallery(data, parent) {
  data.forEach(d => {
    const t = document.createElement("img");
    t.src = "imgs/" + d.i;
    parent.appendChild(t);
  });
}

function createElement(type) {
  return document.createElement(type);
}

export function scrolling() {
  console.log("scrolling");
  let cnt = document.querySelector(".the-container");
  let ratio = cnt.scrollTop / (cnt.scrollHeight - cnt.clientHeight);
  let scrollinfo = document.querySelector("#scrollinfo");
  // console.log(scrollinfo);

  scrollinfo.style.setProperty("--ratio", ratio);

  //console.log(ratio);
}
