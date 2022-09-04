let menuToggle = document.querySelector(".menu-toggle input");
let nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
