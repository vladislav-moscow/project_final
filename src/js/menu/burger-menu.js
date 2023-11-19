const burger = document.querySelector(".nav__button");
const navBurger = document.querySelector(".nav");

burger.addEventListener("click", () => {
  if (burger.classList.contains("nav__button-burger")) {
    burger.classList.remove("nav__button-burger");
    burger.classList.add("nav__button-cross");
    navBurger.classList.replace("nav__closed", "nav__opened");
    document.body.style.setProperty("overflow-y", "hidden");
  } else {
    burger.classList.remove("nav__button-cross");
    burger.classList.add("nav__button-burger");
    navBurger.classList.replace("nav__opened", "nav__closed");
    document.body.style.removeProperty("overflow-y");
  }
});
