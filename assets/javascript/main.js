const mainTitles = document.querySelectorAll(".main-title");

mainTitles.forEach((mainTitle) => {
  mainTitle.addEventListener("mouseenter", () => {
    mainTitle.style.setProperty(
      "--left-animation",
      "left-move-reverse var(--animation-duration) linear forwards"
    );
    mainTitle.style.setProperty(
      "--right-animation",
      "right-move-reverse var(--animation-duration) linear forwards"
    );
  });
  mainTitle.addEventListener("mouseleave", () => {
    // Example: Reset color of ::before pseudo-element
    mainTitle.style.removeProperty("--before-color");
  });
});

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerConternt = Array.from(scrollerInner.children);

    scrollerConternt.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

let buttons = document.querySelectorAll(".info .row .content button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let span = this.querySelector("span");
    let paragraph = this.nextElementSibling;

    paragraph.classList.toggle("show");

    if (paragraph.classList.contains("show")) {
      span.textContent = "";
    } else {
      span.textContent = "More";
    }
  });
});

const heartIcon = document.querySelector(".heart.fa-regular");

heartIcon.addEventListener("mouseenter", () => {
  heartIcon.classList.remove("fa-regular");
  heartIcon.classList.add("fa-solid");
});

heartIcon.addEventListener("mouseleave", () => {
  heartIcon.classList.remove("fa-solid");
  heartIcon.classList.add("fa-regular");
});

const icon = document.getElementById("switch");
if (icon) {
  icon.addEventListener("click", function () {
    const body = document.body;
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
    }
  });
} else {
  console.error("The element with ID 'switch' was not found.");
}
