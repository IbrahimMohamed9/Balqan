const body = document.body;

//logo animation
const logo = document.querySelector(".main-header .logoo");
const letters = Array.from(logo.children);
const letterQ = letters[4].children[0];
const leftDot = letters[3];
const rightDot = letters[5];
letters.splice(3, 3);

window.addEventListener("load", logoAnimation);
logo.addEventListener("mouseenter", logoAnimation);
logo.addEventListener("click", logoAnimation);

function logoAnimation() {
  leftDot.style.animation =
    "logo-dots var(--dot-animation-duration) linear forwards";
  rightDot.style.animation =
    "logo-dots var(--dot-animation-duration) linear forwards";
  setTimeout(() => {
    letterQ.style.animation = "q-rotate-reverse 0.5s linear forwards";
  }, 1250);
  letterQ.style.animation = "q-rotate 0.5s linear 0.6s forwards";

  letters.forEach((letter) => {
    letter.style.animation = "move-letter 0.5s linear 0.25s forwards";
    setTimeout(() => {
      letter.style.animation = "move-letter-reverse 0.5s  linear forwards";
    }, 1900);
  });

  setTimeout(() => {
    rightDot.style.animation = "logo-right-dot-reverse 0.3s linear forwards";
  }, 1800);
  setTimeout(() => {
    leftDot.style.animation = "logo-left-dot-reverse 0.3s linear forwards";
  }, 1800);
}

//dots in main-title
const mainTitles = document.querySelectorAll(".main-title");

mainTitles.forEach((mainTitle) => {
  mainTitle.addEventListener("mouseenter", () => {
    mainTitleAnimation(mainTitle);
  });
  mainTitle.addEventListener("click", () => {
    mainTitleAnimation(mainTitle);
  });
});
function mainTitleAnimation(title) {
  title.classList.remove("unhovered");
  title.classList.add("hovered");
  setTimeout(() => {
    title.classList.remove("hovered");
    title.classList.add("unhovered");
  }, 1500);
}
//change heart in hover header
const heartIcon = document.querySelector(".heart.fa-regular");

heartIcon.addEventListener("mouseenter", () => {
  heartIcon.classList.remove("fa-regular");
  heartIcon.classList.add("fa-solid");
});

heartIcon.addEventListener("mouseleave", () => {
  heartIcon.classList.remove("fa-solid");
  heartIcon.classList.add("fa-regular");
});

//dark theme
const icon = document.getElementById("switch");

function toggleTheme() {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
}

icon.addEventListener("click", toggleTheme);

function applyThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    icon.checked = true;
  }
}
applyThemeFromLocalStorage();

// header
const headerMenu = document.querySelector(
  ".main-header .container button.menu:last-of-type"
);
const headerWords = document.querySelector(".main-header .modal ul.tile-wrds");

headerMenu.addEventListener("click", () => {
  if (headerWords.style.top == "0px") {
    headerWords.style.zIndex = "-5";
    headerWords.style.top = "250px";
    headerWords.style.opacity = "0";
    headerWords.parentNode.classList.remove("active");
    document.body.classList.remove("fix");
  } else {
    headerWords.style.top = "0";
    headerWords.style.zIndex = "20";
    headerWords.style.opacity = "1";
    headerWords.parentNode.classList.add("active");
    headerWords.parentNode.style.top = "50px";
    document.body.classList.add("fix");
  }
});
headerWords.parentNode.addEventListener("click", () => {
  headerWords.style.zIndex = "-5";
  headerWords.style.top = "300px";
  headerWords.style.opacity = "0";
  headerWords.parentNode.classList.remove("active");
  document.body.classList.remove("fix");
});
