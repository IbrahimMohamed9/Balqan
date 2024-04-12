var ItemService = {
  loadTable: function (id, from) {
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const tableBody = document.querySelector("#" + id + " tbody");
        data.map((itemData) => {
          id === "tbl_packages"
            ? packageContent(tableBody, itemData)
            : id === "tbl_cars"
            ? carsContent(tableBody, itemData)
            : id === "tbl_hotels"
            ? hotelsContent(tableBody, itemData)
            : alert("ceck the id");
        });
      });
  },
  packageContent: function (tableBody, itemData) {
    tableBody.innerHTML += `
              <tr>
                <td class="item-image">
                  <img
                    src="${itemData.imgSrc}"
                    alt="Package Image"
                  />
                </td>
                <td>${itemData.name}</td>
                <td>${itemData.days}</td>
                <td>${itemData.min_persons}</td>
                <td>${itemData.max_persons}</td>
                <td>$${itemData.price}</td>
                <td>${itemData.status}</td>
                <td>
                  <button
                    class="txt-c d-block fs-15 rad-6 bg-blue c-white w-81 btn-shape"
                  >
                    Edit
                  </button>
                  <button
                    class="txt-c mt-10 d-block fs-15 rad-6 bg-red c-white w-81 btn-shape"
                  >
                    Remove
                  </button>
                </td>
              </tr>
              `;
  },
  carsContent: function (tableBody, itemData) {
    tableBody.innerHTML += `
      <tr>
        <td class="item-image">
          <img src="${itemData.imgSrc}" alt="Car Image" />
        </td>
        <td>${itemData.name}</td>
        <td>${itemData.min_days}</td>
        <td>${itemData.max_days}</td>
        <td>${itemData.persons}</td>
        <td>$${itemData.price}</td>
        <td>${itemData.status}</td>
        <td>
          <button
            class="txt-c d-block fs-15 rad-6 bg-blue c-white w-81 btn-shape"
          >
            Edit
          </button>
          <button
            class="txt-c mt-10 d-block fs-15 rad-6 bg-red c-white w-81 btn-shape"
          >
            Remove
          </button>
        </td>
      </tr>
    `;
  },
  hotelsContent: function (tableBody, itemData) {
    tableBody.innerHTML += `
      <tr>
        <td class="item-image">
        <img src="${itemData.imgSrc}" alt="Car Image" />
        <td>${itemData.name}</td>
          <td>${itemData.min_days}</td>
          <td>${itemData.max_days}</td>
          <td>${itemData.min_persons}</td>
          <td>${itemData.max_persons}</td>
          <td>$${itemData.price}</td>
          <td>${itemData.status}</td>
        <td>
          <button
            class="txt-c d-block fs-15 rad-6 bg-blue c-white w-81 btn-shape"
          >
            Edit
          </button>
          <button
            class="txt-c mt-10 d-block fs-15 rad-6 bg-red c-white w-81 btn-shape"
          >
            Remove
          </button>
        </td>
      </tr>
    `;
  },
};
