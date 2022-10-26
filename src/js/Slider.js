//Slider fot table

export { matchesFunction };

/* Slider to the desktop */

const slidesWrapper = document.querySelector(".slider-items");
const bullets = document.querySelectorAll(".slider-bullet");

const slides = document.querySelectorAll(".slider-item");
const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");
let index = 0;

const addHandlerToBullets = () => {
  let activeBullet = 1;
  let offset = 0;
  bullets.forEach((bullet, index) => {
    bullet.setAttribute("data-num", index);
    bullet.addEventListener("click", (e) => {
      let clickedBullet = e.target.dataset.num;
      if (clickedBullet === activeBullet) return;
      if (clickedBullet === "0") {
        moveLeft();
        bullets[activeBullet].classList.remove("bullet-active");
        bullets[clickedBullet].classList.add("bullet-active");
        activeBullet = clickedBullet;
      } else {
        moveRight();
        bullets[activeBullet].classList.remove("bullet-active");
        bullets[clickedBullet].classList.add("bullet-active");
        activeBullet = clickedBullet;
      }
    });
  });

  function moveRight() {
    offset = offset + 860;
    if (offset > 860) {
      offset = 0;
    }
    slidesWrapper.style.left = -offset + "px";
  }

  function moveLeft() {
    offset = offset - 860;
    if (offset < 0) {
      offset = 860;
    }
    slidesWrapper.style.left = offset + "px";
  }
};

/* Slider to the mobile */

const activeSlide = (n) => {
  for (let slide of slides) {
    slide.style.display = "none";
    slide.classList.add("transition-slider");
  }
  slides[n].style.display = "block";
};

const activeBullet = (n) => {
  bullets.forEach((bullet) => bullet.classList.remove("bullet-active--mb"));
  bullets[n].classList.add("bullet-active--mb");
};

const prepareActiveSlide = (ind) => {
  activeSlide(ind);
  activeBullet(ind);
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareActiveSlide(index);
    prepareActiveSlide(index);
  } else {
    index++;
    prepareActiveSlide(index);
    prepareActiveSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareActiveSlide(index);
    prepareActiveSlide(index);
  } else {
    index--;
    prepareActiveSlide(index);
    prepareActiveSlide(index);
  }
};

const addHandlerToAroows = () => {
  arrowNext.addEventListener("click", nextSlide);
  arrowPrev.addEventListener("click", prevSlide);
};

/* MatchesFunction */

const matchesFunction = () => {
  if (window.matchMedia("(min-width: 391px)").matches) {
    addHandlerToBullets();
  }
  if (window.matchMedia("(max-width: 390px)").matches) {
    addHandlerToAroows();
  }
};
matchesFunction();
