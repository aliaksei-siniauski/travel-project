export { switchMenu, changePosition, closeMenu };

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
const navList = document.querySelector(".list");
const listItems = document.querySelectorAll(".list__item");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");

const switchMenu = () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  navList.classList.toggle("open");
  overlay.classList.toggle("overlay");
  body.classList.toggle("stop-scroll");
  if (nav.classList.contains("open")) {
    hamburger == changePosition();
  } else {
    hamburger.classList.remove("change-menu");
  }
};
hamburger.addEventListener("click", switchMenu);
overlay.addEventListener("click", switchMenu);
nav.addEventListener("click", closeMenu);

function changePosition() {
  setTimeout(() => {
    hamburger.classList.add("change-menu");
  }, 600);
}

function closeMenu() {
  setTimeout(() => {
    hamburger.classList.remove("change-menu");
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navList.classList.remove("open");
    overlay.classList.remove("overlay");
    body.classList.remove("stop-scroll");
  }, 1000);
}

listItems.forEach((el) => el.addEventListener("click", closeMenu));
