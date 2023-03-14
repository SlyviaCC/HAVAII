let header = document.querySelector("header");
let headerA = document.querySelectorAll("header ul li a");
let img1 = document.querySelector("header img");
window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    header.style.backgroundColor = "rgba(0,0,0,0.8)";
    header.style.color = "white";
    headerA.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    headerA.forEach((a) => {
      a.style.color = "#227eb3"; //注意这里也要改回来不然这里没有颜色
      a.style.fontWeight = "bolder";
    });
  }
});
