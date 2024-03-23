document.addEventListener("DOMContentLoaded", () => {
  // check overflow
  function checkOverf(el) {
    const elOverf = el.style.overflow;
    if (!elOverf || elOverf === "visible") el.style.overflow = "hidden";
    const isOverflowing =
      el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    el.style.overflow = elOverf;
    return isOverflowing;
  }

  //arrows design
  const carousel = document.querySelector(".wrapper .carousel"),
    arrows = document.querySelectorAll(".wrapper button.arrow"),
    firstColWidth = carousel.querySelector(".col").offsetWidth;

  if (checkOverf(carousel)) {
    arrows[0].parentNode.style.setProperty("--display", "block");
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: carousel.offsetWidth / firstColWidth,
    spaceBetween: 0,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  arrows.forEach((arrow, index) => {
    arrow.addEventListener("focus", () => {
      arrow.classList.add("active");
    });
    arrow.addEventListener("blur", () => {
      arrow.classList.remove("active");
    });
  });
});
