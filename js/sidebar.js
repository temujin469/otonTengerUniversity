/*============ EXPANDER MENU ==========*/
const showMenu = (toggleId, navbarId, bodyid) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId);
  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("expander");
    });
  }
};
showMenu("nav-toggle", "nav-bar", "body-p");
//============ ACTIVE LINLK ============//
const colorLink = document.querySelectorAll(".nav-link");
function linkColor() {
  colorLink.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
colorLink.forEach((l) => l.addEventListener("click", linkColor));
//============== COLLAPSE ============//
const collapseLink = document.getElementsByClassName("collapse-link");
for (let i = 0; i < collapseLink.length; i++) {
  collapseLink[i].addEventListener("click", function () {
    const collapseMenu = this.nextElementSibling;
    collapseMenu.classList.toggle("show-collapse");
    const ratote = collapseMenu.previousElementSibling;
    ratote.classList.toggle("ratote");
  });
}
