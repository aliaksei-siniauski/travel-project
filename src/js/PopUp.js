export {
  showLoginPopUp,
  closeLoginPopUp,
  closePopUpOverlay,
  showSignPopUp,
  closeSingPopUp,
  showAccountPopUp,
};

const showLoginPopUp = () => {
  const activeButton = document.querySelector(".button-login");
  activeButton.addEventListener("click", function () {
    const loginPopUp = document.querySelector(".login-pop-up");
    loginPopUp.classList.add("active");
    overlay.classList.add("overlay");
  });
};

const closeLoginPopUp = () => {
  const modalClose = document.querySelector(".login-close");
  modalClose.addEventListener("click", function () {
    const loginPopUp = document.querySelector(".login-pop-up");
    loginPopUp.classList.remove("active");
    overlay.classList.remove("overlay");
  });
};

const closePopUpOverlay = () => {
  const loginPopUp = document.querySelector(".login-pop-up");
  loginPopUp.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      loginPopUp.classList.remove("active");
      overlay.classList.remove("overlay");
    }
  });
};

const showSignPopUp = () => {
  const signPopUp = document.querySelector(".sign-pop-up");
  const loginPopUp = document.querySelector(".login-pop-up");
  const register = document.querySelector(".register");
  register.addEventListener("click", function () {
    loginPopUp.classList.remove("active");
    signPopUp.classList.add("active");
  });
};

const closeSingPopUp = () => {
  const accountClose = document.querySelector(".account-close");
  const signPopUp = document.querySelector(".sign-pop-up");
  const loginPopUp = document.querySelector(".login-pop-up");
  const loginToAccount = document.querySelector(".account-login");

  loginToAccount.addEventListener("click", function () {
    signPopUp.classList.remove("active");
    loginPopUp.classList.add("active");
  });

  accountClose.addEventListener("click", function () {
    signPopUp.classList.remove("active");
    loginPopUp.classList.add("active");
  });
};

const showAccountPopUp = () => {
  accountLink = document.querySelector(".account-link");
  const loginPopUp = document.querySelector(".login-pop-up");
  accountLink.addEventListener("click", function () {
    loginPopUp.classList.add("active");
    overlay.classList.add("overlay");
  });
};

window.onload = () => {
  showLoginPopUp();
  closeLoginPopUp();
  closePopUpOverlay();
  showSignPopUp();
  closeSingPopUp();
  showAccountPopUp();
  addClickBulleteHander();
};
