document.addEventListener("DOMContentLoaded", function () {
  const barIcon = document.querySelector(".dash .main-header .bar .bar-icon");
  const body = document.body;
  const hideMobileSpans = document.querySelectorAll(
    ".page .sidebar ul li a i + span.hide-mobile"
  );

  barIcon.addEventListener("click", function () {
    if (body.classList.contains("sidebar-250")) {
      body.classList.remove("sidebar-250");
      body.classList.add("sidebar-58");
      hideMobileSpans.forEach((span) => {
        span.style.display = "none";
      });
    } else {
      body.classList.remove("sidebar-58");
      body.classList.add("sidebar-250");
      hideMobileSpans.forEach((span) => {
        span.style.display = "";
      });
    }
  });

  // Change .page .sidebar.p-20 to .page .sidebar.p-10
  const sidebarElements = document.querySelectorAll(".page .sidebar.p-20");
  sidebarElements.forEach((element) => {
    element.classList.remove("p-20");
    element.classList.add("p-10");
  });
});