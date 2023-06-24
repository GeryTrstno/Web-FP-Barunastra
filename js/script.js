// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Saat Menu Diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const hammenu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hammenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
