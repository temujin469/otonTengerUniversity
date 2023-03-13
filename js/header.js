const body = document.querySelector("body");
const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  header.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  header.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");

  // var prevScrollpos = window.pageYOffset;
  // var currentScrollPos = window.pageYOffset;
  // if (prevScrollpos > currentScrollPos) {
  //   header.style.top = "0";
  // } else {
  //   header.style.top = "-100%";
  // }
  // prevScrollpos = currentScrollPos;
};
