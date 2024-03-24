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

  //carousel
  const carousel = document.querySelector(".wrapper > .carousel"),
    arrows = document.querySelectorAll(".wrapper button.arrow"),
    firstCardWidth = carousel.querySelector(".col").offsetWidth;

  if (checkOverf(carousel)) {
    arrows[0].parentNode.style.setProperty("--display", "block");
  } else {
    carousel.style.justifyContent = "center";
  }

  let isDragging = false,
    startX,
    startScrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  });
  document.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  });

  arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
      carousel.scrollLeft +=
        index == 0 ? -(firstCardWidth + 26) : firstCardWidth + 24;
    });
    arrow.addEventListener("focus", () => {
      arrow.classList.add("active");
    });
    arrow.addEventListener("blur", () => {
      arrow.classList.remove("active");
    });
  });
});
