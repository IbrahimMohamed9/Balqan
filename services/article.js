var ArticleService = {
  loadTable: function (id) {
    fetch(Constants.API_BASE_URL + "get_articles.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const tableBody = document.querySelector("#" + id + " tbody");

        tableBody.innerHTML = "";
        data.map((articleData) => {
          ArticleService.loadTableRow(tableBody, articleData);
        });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  },
  loadTableRow: function (tableBody, articleData) {
    tableBody.innerHTML += `
    <tr>
    <td class="article-image">
      <img
        src="https${articleData.imgs_src}"
        alt="Package Image"
      />
    </td>
    <td>${articleData.title}</td>
    <td>${articleData.description}</td>
    <td>${articleData.content}</td>
    <td>${articleData.img_desc}</td>
    <td>${articleData.category}</td>
    <td>${articleData.added_time}</td>
    <td>${articleData.status}</td>
    <td>
      <button
        class="txt-c d-block fs-15 rad-6 bg-blue c-white w-81 btn-shape"
        onClick="ArticleService.openEditItemModal(${articleData.article_id}, '${articleData.category}')"
      >
        Edit
      </button>
      <button
        class="txt-c mt-10 d-block fs-15 rad-6 bg-red c-white w-81 btn-shape"
        onClick="ArticleService.removeItem(${articleData.article_id}, '${articleData.category}')"
      >
        Remove
      </button>
    </td>
  </tr>
    `;
  },
  // loadCards: function (category) {
  //   fetch(Constants.API_BASE_URL + "get_articles.php?category=" + category)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       data.map((articleData) => {
  //         category === "car" || category === "hotel" || category === "package"
  //           ? ArticleService.loadCard(articleData)
  //           : alert("check the category");
  //       });
  //       Utils.carouselSplide(`.splide.${category}s-carousel`, 20);
  //     });
  // },
  // loadCard: function (articleData) {
  //   // Package design
  //   // `
  //   //     <div class="article splide__slide">
  //   //     <div class="box">
  //   //       <div class="back face">
  //   //         <button class="button" id="${articleData.id}-1">plan 1</button>
  //   //         <button class="button" id="${articleData.id}-2">plan 2</button>
  //   //         <button class="button" id="${articleData.id}-3">plan 3</button>
  //   //         <button class="button" id="${articleData.id}-4">plan 4</button>
  //   //       </div>
  //   //       <div class="image face">
  //   //         <img src="https${
  //   //           articleData.imgs_srcs.trim().split("https")[1]
  //   //         }" alt="${articleData.category} Image" /></div>
  //   //       </div>
  //   //     </div>
  //   //     <div class="text">
  //   //       <h3>${articleData.name}</h3>
  //   //       <p>Price: ${intP}${decP} KM/day</p>
  //   //     </div>
  //   //     <button class="pckbtn"></button>
  //   //   </div>
  //   //   `;
  //   const intP = String(articleData.price).substring(
  //       0,
  //       String(articleData.price).indexOf(".")
  //     ),
  //     decP = Utils.checkDec(articleData.price);
  //   const content = `
  //     <div class="article splide__slide">
  //       <a href="pages/article.html"
  //         ><div class="image article-img">
  //           <img src="https${
  //             articleData.imgs_srcs.trim().split("https")[1]
  //           }" alt="${articleData.category} Image" /></div
  //       ></a>
  //       <div class="text">
  //         <h3>${articleData.name}</h3>
  //         <p>Price: ${intP}${decP} KM/day</p>
  //       </div>
  //       <button class="pckbtn"></button>
  //     </div>
  //   `;
  //   const articles = document.querySelector(
  //     `.articles.${articleData.category}s .container`
  //   );
  //   articles.innerHTML += content;

  //   // document
  //   //   .querySelectorAll(`.articles.${modalTitle} .container .pckbtn`)
  //   //   .forEach((button, index) =>
  //   //     button.addEventListener("click", () => {
  //   //       const articleData = data[index];
  //   //       Utils.articleModal(
  //   //         modalTitle,
  //   //         articleData.name,
  //   //         articleData.imgSrc,
  //   //         articleData.min,
  //   //         articleData.max,
  //   //         articleData.price,
  //   //         articleData.quantity,
  //   //         false
  //   //       );
  //   //     })
  //   //   );
  // },
  addArticleModal: function (category) {
    const modal = document.getElementById("myModal");
    modal.innerHTML = `
    <div class="master-container">
      <div class="card cart">
        <div class="top-title">
          <span class="title">Add Article</span>
          <i class="fa-solid fa-xmark x"></i>
        </div>
        <div class="form">
          <form id="article-form">
            <div class="inputs">
              <div class="form-control">
              <input
                  type="hidden"
                  id="article_id"
                  name="article_id"
                />
                <input
                  type="text"
                  class="field"
                  required
                  id="title"
                  name="title"
                />
                <label for="title">
                  <span>T</span>
                  <span>i</span>
                  <span>t</span>
                  <span>l</span>
                  <span>e</span>
                </label>
              </div>
              <div class="form-control">
                <input
                  type="text"
                  id="img_src"
                  name="img_src"
                  class="field"
                  required
                />
                <label for="img_src">
                  <span>I</span>
                  <span>m</span>
                  <span>a</span>
                  <span>g</span>
                  <span>e</span>
                  <span>&nbsp;</span>
                  <span>S</span>
                  <span>o</span>
                  <span>u</span>
                  <span>r</span>
                  <span>c</span>
                  <span>e</span>
                </label>
              </div>
            <div class="form-control">
              <input
                type="text"
                id="country"
                name="country"
                class="field"
                required
              />
              <label for="country">
                <span>C</span>
                <span>o</span>
                <span>u</span>
                <span>n</span>
                <span>t</span>
                <span>r</span>
                <span>y</span>
              </label>
            </div>
              <div class="form-control">
                <input
                  type="text"
                  class="field"
                  required
                  id="category"
                  name="category"
                />
                <label for="category">
                  <span>C</span>
                  <span>a</span>
                  <span>t</span>
                  <span>e</span>
                  <span>g</span>
                  <span>o</span>
                  <span>r</span>
                  <span>y</span>
                </label>
              </div>
              <div class="form-control">
                <input
                  type="text"
                  class="field"
                  required
                  id="status"
                  name="status"
                />
                <label for="status">
                  <span>S</span>
                  <span>t</span>
                  <span>a</span>
                  <span>t</span>
                  <span>u</span>
                  <span>s</span>
                </label>
              </div>
              <div class="form-control full">
                <input type="datetime-local" id="added_time" name="added_time" />
              </div>
            </div>
            <div class="textareas">
              <div class="form-control">
                <div class="textarea">
                  <textarea
                    id="content"
                    name="content"
                    required
                    class="field"
                  ></textarea>
                </div>
                <label for="content" class="txtar-la">
                  <span>C</span>
                  <span>o</span>
                  <span>n</span>
                  <span>t</span>
                  <span>e</span>
                  <span>n</span>
                  <span>t</span>
                </label>
              </div>
              <div class="form-control">
                <div class="textarea">
                  <textarea
                    id="description"
                    name="description"
                    required
                    class="field"
                  ></textarea>
                </div>
                <label for="description" class="txtar-la">
                  <span>D</span>
                  <span>e</span>
                  <span>s</span>
                  <span>c</span>
                  <span>r</span>
                  <span>i</span>
                  <span>p</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                </label>
              </div>
              <div class="form-control">
                <div class="textarea">
                  <textarea
                    id="img_desc"
                    name="img_desc"
                    required
                    class="field"
                  ></textarea>
                </div>
                <label for="img_desc" class="txtar-la">
                  <span>I</span>
                  <span>m</span>
                  <span>g</span>
                  <span>&nbsp;</span>
                  <span>D</span>
                  <span>e</span>
                  <span>s</span>
                  <span>c</span>
                  <span>r</span>
                  <span>i</span>
                  <span>p</span>
                  <span>t</span>
                  <span>i</span>
                  <span>o</span>
                  <span>n</span>
                </label>
              </div>
            </div>
            <input type="submit" class="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    `;
    Utils.formAnimation();
    modal.querySelector(".x").addEventListener("click", () => {
      Utils.removeItemModal(false, modal);
    });
    Utils.appearModal(false);
    ArticleService.submit(
      "article-form",
      "add_article.php",
      "tbl_articles",
      modal
    );
  },
  submit: function (id, to, tableId, modal) {
    FormValidation.validate("#" + id, {}, (data) => {
      Utils.block_ui("#myModal");
      $("#myModal .x").trigger("click");
      $.post(Constants.API_BASE_URL + to, data)
        .done(function (data) {
          Utils.unblock_ui("#myModal");
          Utils.removeItemModal(false, modal);
          Utils.appearSuccAlert("Article added successfully");
          ArticleService.loadTable(tableId);
        })
        .fail(function (xhr) {
          Utils.removeItemModal(false, modal);
          Utils.appearFailAlert(xhr.responseText);
        });
    });
  },
  openEditItemModal: function (id) {
    RestClient.get("get_article.php?article_id=" + id, function (data) {
      ArticleService.addArticleModal(data.category, true);

      $("#myModal input[name='article_id']").val(data.article_id);
      $("#myModal input[name='img_src']").val(data.img_src);
      $("#myModal input[name='title']").val(data.title);
      $("#myModal input[name='status']").val(data.status);
      $("#myModal input[name='category']").val(data.category);
      $("#myModal input[name='country']").val(data.country);
      $("#myModal input[name='added_time']").val(data.added_time);
      $("#myModal textarea[name='img_desc']").val(data.img_desc);
      $("#myModal textarea[name='description']").val(data.description);
      $("#myModal textarea[name='content']").val(data.content);
      Utils.formAnimation();
    });
  },
  removeItem: function (id) {
    if (
      confirm("Do you want to delete article with the id " + id + "?") == true
    ) {
      RestClient.delete("delete_article.php?article_id=" + id, {}, () => {
        ArticleService.loadTable("tbl_articles");
      });
    }
  },
};
