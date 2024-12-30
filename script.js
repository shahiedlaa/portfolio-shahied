function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function linkedinTab() {
  window.open("https://www.linkedin.com/in/shahied-salim-a47a451ba/", "_blank");
}

function githubTab() {
  window.open("https://github.com/shahiedlaa", "_blank");
}

function newTab(link) {
  window.open(link, "_blank");
}
