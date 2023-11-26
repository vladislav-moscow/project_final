/* eslint-disable no-undef */
"use strict";

export function reviewsSlider() {
  let mySwiper = "";
  const breakpoint = window.matchMedia("(max-width: 767px)");
  const breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper(".reviews__slider", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".reviews__slider-pagination",
          clickable: true,
          mousewheel: true,
          keyboard: true,
        },
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}
