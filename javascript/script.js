//toggle kelas active
const navbarContent = document.querySelector(".navbar-content");
const searchForm = document.querySelector(".search-form");

// ketika humberger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarContent.classList.toggle("active");
};

// click di luar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarContent.contains(e.target)) {
    navbarContent.classList.remove("active");
  }
});

// ketika tombol search di klik
document.querySelector("#search-button").onclick = () => {
  searchForm.classList.toggle("active");
};

// click di luar search form untuk menghilangkan searchform
const search = document.querySelector("#search-menu");

document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
