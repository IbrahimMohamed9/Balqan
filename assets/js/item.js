document.addEventListener("DOMContentLoaded", () => {
  // Main image
  var previous = 0;

  const mainImage = document.querySelector(".item-container .images .main img"),
    imageList = document.querySelectorAll(
      ".item-container .images .list-container .img-container"
    );
  imageList.forEach((image, index) => {
    const imgElement = image.querySelector("img");
    image.addEventListener("mouseover", () => {
      mainImage.src = imgElement.src;
      image.classList.add("active");
      removeActive(index);
      previous = index;
    });
  });

  function removeActive(hoverdIndex) {
    if (hoverdIndex != previous) {
      imageList[previous].classList.remove("active");
    }
  }

  //share icon
  const shareIcon = document.querySelector(".share-btn"),
    shareLists = document.querySelector(".icons .font-share-icons");

  shareIcon.addEventListener("click", () => {
    if (shareLists.style.display != "grid") {
      shareLists.style.display = "grid";
      shareLists.style.animation = "appear 0.2s linear forwards";
    } else {
      shareLists.style.animation =
        "hidden var(--main-transition) linear forwards";
      setTimeout(() => {
        shareLists.style.display = "none";
      }, 300);
    }
  });
  shareIcon.addEventListener("blur", () => {
    shareLists.style.animation =
      "hidden var(--main-transition) linear forwards";
    setTimeout(() => {
      shareLists.style.display = "none";
    }, 300);
  });
});
