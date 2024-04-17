// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const darkTog = document.querySelector("#dark-tog");
const darkTog1 = document.querySelector("#dark-tog1");
const darkToggle = document.querySelector("#dark-toggle");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger

window.addEventListener("click", function (e) {
  if (
    e.target != hamburger &&
    e.target != navMenu &&
    e.target != darkTog &&
    e.target != darkTog1 &&
    e.target != darkToggle
  ) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode toggle
const html = document.querySelector("html");
const dark = document.querySelector("#dark");
const light = document.querySelector("#light");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    dark.classList.toggle("hidden");
    light.classList.toggle("hidden");
    localStorage.setItem("theme", "light");
  }
});

// pindahkan posisi toggle sesuai tema
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
  dark.classList.toggle("hidden");
  light.classList.toggle("hidden");
} else {
  darkToggle.checked = false;
  dark.classList.toggle("hidden");
  light.classList.toggle("hidden");
}
