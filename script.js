let menuToggle = document.querySelector(".menu-toggle input");
let nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("hidden", window.scrollY > 0);
});
