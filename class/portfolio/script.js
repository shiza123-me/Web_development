const toggler = document.querySelector(".toggler");
const navLinks = document.querySelector(".nav-links");
const header = document.getElementById("navbar");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("nav-scrolled", window.scrollY > 100);
});

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent — thank you!");
});
