/* eslint-disable no-undef */
"use strict";

function mainSlider() {
  let mySwiper = "";
  const breakpoint = window.matchMedia("(max-width: 767px)");
  const breakpointChecker = function () {
    if (breakpoint.matches) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper(".banner__slider", {
        spaceBetween: 10,
        pagination: {
          el: ".banner__slider-pagination",
          type: "fraction",
        },

        scrollbar: {
          el: ".banner__slider-scrollbar",
        },
      });
    } else {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }

      mySwiper = new Swiper(".banner__slider", {
        pagination: {
          el: ".banner__slider-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              /* '<span class="' + className + '">' + "0" + (index + 1) + "</span>"*/
              `<span class="${className}">0${index + 1}
							</span>`
            );
          },
        },
      });
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

mainSlider();
