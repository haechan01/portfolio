function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const logo = document.querySelector('.logo');

function handleLogoEnter () {
  logo.innerText = "Hi! Welcome to my page!"
  logo.style.backgroundColor = 'yellow'
};

logo.addEventListener("mouseenter")





