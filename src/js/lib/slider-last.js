/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use strict";

function lastChance() {
  const swiper = new Swiper(".last-chance__slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      319: {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: ".last-chance__slider-pagination",
          type: "fraction",
        },
        scrollbar: {
          el: ".last-chance__slider-scrollbar",
        },
      },
      424: {
        slidesPerView: 2,
        spaceBetween: 16,
        pagination: {
          el: ".last-chance__slider-pagination",
          type: "fraction",
        },
        scrollbar: {
          el: ".last-chance__slider-scrollbar",
        },
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".last-chance__slider-pagination",
          type: "fraction",
        },
        scrollbar: {
          el: ".last-chance__slider-scrollbar",
        },
      },
      1023: {
        slidesPerView: 4,
        spaceBetween: 32,
        pagination: {
          el: ".last-chance__slider-pagination",
          type: "fraction",
        },
        scrollbar: {
          el: ".last-chance__slider-scrollbar",
        },
      },
      1439: {
        slidesPerView: 5,
        spaceBetween: 32,
        scrollbar: {
          el: ".last-chance__slider-scrollbar",
        },
      },
    },
  });
}

lastChance();
