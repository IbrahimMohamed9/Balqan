var CartService = {
  addToCart: (cart_id, item_id, persons = -1, days = -1) => {
    const data = {
      cart_id: cart_id,
      item_id: item_id,
      persons: persons,
      days: days,
    };

    CartService.submit(
      "carts/add_item_cart.php",
      data,
      "Item added successfully",
      "#myModal .checkout .checkout-btn"
    );
  },

  submit: (to, data, success_mge, block_selector, modal) => {
    const block = $(block_selector);
    Utils.block_ui(block);
    modal = $("#myModal")[0];
    $.post(Constants.API_BASE_URL + to, data)
      .done((data) => {
        Utils.unblock_ui(block);
        if (modal) Utils.removeModal(true, modal);

        Utils.appearSuccAlert(success_mge);
      })
      .fail((xhr) => {
        Utils.unblock_ui(block);

        if (modal) Utils.removeModal(true, modal);

        Utils.appearFailAlert(xhr.responseText);
      });
  },
};
