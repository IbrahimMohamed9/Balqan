document.addEventListener("DOMContentLoaded", () => {
  //share icon in article
  const shareIcons = document.querySelectorAll(".share-btn"),
    body = document.body,
    shareLists = document.querySelectorAll(".icons .font-share-icons");

  shareIcons.forEach((shareIcon, index) => {
    shareIcon.addEventListener("click", () => {
      if (shareLists[index].style.display != "grid") {
        shareLists[index].style.display = "grid";
        shareLists[index].style.animation = "appear 0.2s linear forwards";
      } else {
        shareLists[index].style.animation =
          "hidden var(--main-transition) linear forwards";
        setTimeout(() => {
          shareLists[index].style.display = "none";
        }, 300);
      }
    });
    shareIcon.addEventListener("blur", () => {
      shareLists[index].style.animation =
        "hidden var(--main-transition) linear forwards";
      setTimeout(() => {
        shareLists[index].style.display = "none";
      }, 300);
    });
  });

  //images in example
  const scrollers = document.querySelectorAll(".scroller");
  addAnimation();
  function addAnimation() {
    scrollers.forEach((scroller) => {
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerConternt = Array.from(scrollerInner.children);

      scrollerConternt.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  //expand the content in info
  const buttons = document.querySelectorAll(".info .row .content button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let span = this.querySelector("span");
      let paragraph = this.nextElementSibling;

      paragraph.classList.toggle("show");

      if (paragraph.classList.contains("show")) {
        span.textContent = "";
      } else {
        span.textContent = "More";
      }
      removeOpen(index);
    });
  });

  function removeOpen(clickedIndex) {
    buttons.forEach((button, index) => {
      if (index !== clickedIndex) {
        let paragraph = button.nextElementSibling;
        let span = button.querySelector("span");

        paragraph.classList.remove("show");
        span.textContent = "More";
      }
    });
  }

  //change main video
  mainVideoSrc = (src) => {
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.querySelector(".video-wraper .video video").innerHTML = `
        <source
            src="${data.src}"
            type="video/mp4"
          />`;
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  mainVideoSrc("assets/json/video.json");

  //New Packages
  const modal = document.getElementById("myModal"),
    addItemAlert = document.querySelector(".alert.alert-success.add-item"),
    modalTitle = modal.querySelector(".item-name"),
    modalImage = modal.querySelector(".modal-img"),
    modalPrice = modal.querySelector(".price.small");

  function addItemModal(title, imgSrc, name, price) {
    modalTitle.textContent = title;
    modalImage.src = imgSrc;
    modalPrice.textContent = `${price} KM`;

    modal.classList.add("d-block");
    setTimeout(() => {
      modal.classList.add("active");
      body.classList.add("fix");
    }, 1);
  }
  function removeItemModal() {
    modal.classList.remove("active");
    body.classList.remove("fix");
    setTimeout(() => {
      modal.classList.remove("d-block");
    }, 300);
  }

  document.querySelector(".x").addEventListener("click", removeItemModal);

  document.querySelector(".checkout-btn").addEventListener("click", () => {
    removeItemModal();

    addItemAlert.classList.remove("d-none");
    addItemAlert.style.animation = "alert 1.7s linear forwards";
    setTimeout(() => {
      addItemAlert.classList.add("d-none");
    }, 1700);
  });

  newPackages = (src) => {
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const newPackages = document.querySelector(
          ".new-packages .container.holder"
        );
        data.map((packageData) => {
          const package = `
        <div class="package">
          <div class="box">
            <div class="back face">
              <button class="button" id="${packageData.id}-1">plan 1</button>
              <button class="button" id="${packageData.id}-2">plan 2</button>
              <button class="button" id="${packageData.id}-3">plan 3</button>
              <button class="button" id="${packageData.id}-4">plan 4</button>
            </div>
            <div class="image face">
              <img src="${packageData.imgSrc}" alt="package image" />
            </div>
          </div>
          <div class="text">
            <h3>${packageData.title}</h3>
            <p>Price: ${packageData.price} KM</p>
          </div>
          <button class="pckbtn"></button>
        </div>`;
          newPackages.innerHTML += package;
        });

        document.querySelectorAll(".pckbtn").forEach((button, index) =>
          button.addEventListener("click", () => {
            const packageData = data[index];
            addItemModal(
              packageData.title,
              packageData.imgSrc,
              packageData.name,
              packageData.price
            );
          })
        );

        //redirect
        document
          .querySelectorAll(".package .back .button")
          .forEach((button, index) => {
            button.addEventListener("click", redirect);
          });

        function redirect() {
          window.location = "assets/html/item.html";
        }
      });
  };

  newPackages("assets/json/newPackages.json");
});
