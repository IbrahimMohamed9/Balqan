export const modal = document.getElementById("myModal"),
  addItemAlert = document.querySelector(".alert.alert-success.add-item"),
  decreaseAlert = document.querySelector(".alert.alert-danger.decrease"),
  modalTitle = modal.querySelector(".item-name"),
  modalImage = modal.querySelector(".modal-img"),
  modalPrice = modal.querySelector(".price.small"),
  body = document.body,
  quantity = Array.from(document.querySelector(".cart .quantity").children),
  QuantityNumber = quantity[1];

quantity.splice(1, 1);

//appear the modal
export function itemModal(title, imgSrc, min, max, price) {
  modalTitle.textContent = title;
  modalImage.src = imgSrc;
  modalPrice.textContent = `${price} KM`;
  QuantityNumber.textContent = min;

  quantity.forEach((el, index) => {
    el.addEventListener("click", () => {
      modalButton(index, min, max);
    });
  });

  modal.classList.add("d-block");
  setTimeout(() => {
    modal.classList.add("active");
    body.classList.add("fix");
  }, 1);
}

//increse and decrease the quantity
export function modalButton(index, min, max) {
  if (index === 0) {
    if (parseInt(QuantityNumber.textContent) - min)
      QuantityNumber.textContent = parseInt(QuantityNumber.textContent) - 1;
    else {
      decreaseAlert.classList.remove("d-none");
      decreaseAlert.textContent = "This is the minimum number";
      decreaseAlert.style.animation = "alert 1.7s linear forwards";
      decreaseAlert.addEventListener("animationend", () => {
        decreaseAlert.classList.add("d-none");
      });
    }
  } else {
    if (parseInt(QuantityNumber.textContent) < max)
      QuantityNumber.textContent = parseInt(QuantityNumber.textContent) + 1;
    else {
      decreaseAlert.classList.remove("d-none");
      decreaseAlert.textContent = "This is the maximum number";
      decreaseAlert.style.animation = "alert 1.7s linear forwards";
      decreaseAlert.addEventListener("animationend", () => {
        decreaseAlert.classList.add("d-none");
      });
    }
  }
}

//remove the modal
export function removeItemModal() {
  modal.classList.remove("active");
  body.classList.remove("fix");
  setTimeout(() => {
    modal.classList.remove("d-block");
  }, 300);
}

//add the functionality of modal buttons
export function setupModalActions() {
  document.querySelector(".x").addEventListener("click", removeItemModal);

  document.querySelector(".checkout-btn").addEventListener("click", () => {
    removeItemModal();

    addItemAlert.classList.remove("d-none");
    addItemAlert.style.animation = "alert 1.7s linear forwards";
    addItemAlert.addEventListener("animationend", () => {
      addItemAlert.classList.add("d-none");
    });
  });
}
