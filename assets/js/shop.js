import { setupModalActions, loadItems, packages } from "./component.js";

document.addEventListener("DOMContentLoaded", () => {
  setupModalActions();

  packages(
    "../json/packages.json",
    "../html/item.html",
    ".items.packages .container",
    ".splide.packages-carousel",
    20
  );
  loadItems(
    "../json/cars.json",
    '<div class="item splide__slide"><div class="image item-img "><img src="',
    '" alt="" /></div><div class="text"><h3>',
    "</h3><p>Price: ",
    ' KM/day</p></div><button class="pckbtn"></button></div>',
    "cars"
  );
  loadItems(
    "../json/hotels.json",
    '<div class="item splide__slide"><div class="image item-img "><img src="',
    '" alt="" /></div><div class="text"><h3>',
    "</h3><p>Price: ",
    ' KM/day</p></div><button class="pckbtn"></button></div>',
    "hotels"
  );
});
