export const modal = document.getElementById("myModal"),
  addItemAlert = document.querySelector(".alert.alert-success.add-item"),
  quantityAlert = document.querySelector(".alert.alert-danger.decrease"),
  modalTitle = modal.querySelector(".item-name"),
  modalImage = modal.querySelector(".modal-img"),
  modalPrice = modal.querySelector(".price.small"),
  body = document.body,
  quantity = modal.querySelector(".cart .quantity");

//appear the modal
var quantityNumber, quantityBtns;

export function itemModal(title, imgSrc, min, max, price) {
  quantityBtns = Array.from(quantity.children);
  quantityNumber = quantityBtns[1];
  modalTitle.textContent = title;
  modalImage.src = imgSrc;
  modalPrice.textContent = `${price} KM`;
  quantityNumber.textContent = min;

  quantityBtns[0].addEventListener("click", () => {
    modalButton(0, min, max);
  });
  quantityBtns[2].addEventListener("click", () => {
    modalButton(2, min, max);
  });

  modal.classList.add("d-block");
  body.classList.add("fix");
  setTimeout(() => {
    modal.classList.add("active");
  }, 1);
}

//increse and decrease the quantity
export function modalButton(index, min, max) {
  if (index === 0) {
    if (parseInt(quantityNumber.textContent) - min)
      quantityNumber.textContent = parseInt(quantityNumber.textContent) - 1;
    else {
      appearQuantityAlert("This is the minimum number");
    }
  } else {
    if (parseInt(quantityNumber.textContent) < max)
      quantityNumber.textContent = parseInt(quantityNumber.textContent) + 1;
    else {
      appearQuantityAlert("This is the maximum number");
    }
  }
}

function appearQuantityAlert(message) {
  quantityAlert.classList.remove("d-none");
  quantityAlert.textContent = message;
  quantityAlert.style.animation = "alert 1.7s linear forwards";
  quantityAlert.addEventListener("animationend", () => {
    quantityAlert.classList.add("d-none");
  });
}

//remove the modal
export function removeItemModal() {
  removeAllEventListeners(quantityBtns[0]);
  removeAllEventListeners(quantityBtns[2]);

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

function removeAllEventListeners(element) {
  const clone = element.cloneNode(true);
  element.parentNode.replaceChild(clone, element);
}
