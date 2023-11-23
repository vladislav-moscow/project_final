import { reviewsSlider } from "./lib/reviews-slider.js";
import { lastChance } from "./lib/slider-last.js";
import { mainSlider } from "./lib/slider-main.js";

const tabs = document.querySelector(".last-chance");
const tabButton = document.querySelectorAll(".last-chance__tab-item");
const contents = document.querySelectorAll(".last-chance__tab");
const burger = document.querySelector(".nav__button");
const navBurger = document.querySelector(".nav");
const search = document.getElementById("search");
const inputSearch = document.getElementById("inputSearch");

mainSlider();
reviewsSlider();
lastChance();

tabs.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

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

search.addEventListener("click", () => {
  if (inputSearch.classList.contains("hidden")) {
    // Если есть, удаляем
    inputSearch.classList.remove("hidden");
  } else {
    // Если нет, добавляем
    inputSearch.classList.add("hidden");
  }
});
