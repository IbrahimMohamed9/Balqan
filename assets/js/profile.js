document.addEventListener("DOMContentLoaded", () => {
  const body = document.body,
    barIcon = document.querySelector(".sidebar .sidebar-control"),
    sidebarArrow = document.querySelector(
      ".sidebar .sidebar-control .sidebar-icon"
    );
  if (barIcon) {
    barIcon.addEventListener("click", function () {
      if (body.classList.contains("sidebar-250")) {
        body.classList.remove("sidebar-250");
        body.classList.add("sidebar-58");
        sidebarSpans.forEach((span) => {
          span.classList.add("d-none");
        });
        sidebarArrow.classList.remove("fa-chevron-left");
        sidebarArrow.classList.add("fa-chevron-right");
      } else {
        body.classList.remove("sidebar-58");
        body.classList.add("sidebar-250");
        sidebarSpans.forEach((span) => {
          span.classList.remove("d-none");
        });
        sidebarArrow.classList.remove("fa-chevron-right");
        sidebarArrow.classList.add("fa-chevron-left");
      }
    });
  }

  const sidebarSpans = document.querySelectorAll(
      ".page .sidebar ul li span i + span"
    ),
    dashPages = document.querySelectorAll(".content .screen"),
    dashIcons = document.querySelectorAll(
      ".page .sidebar ul li span.dash-icon"
    ),
    profileH1 = document.getElementById("p-h1");
  dashIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => switchPage(icon, index));
  });

  var previous = 0;

  function switchPage(clickedIcon, clickedIndex) {
    if (previous !== null && clickedIndex != previous) {
      dashIcons[previous].classList.remove("active");
      dashPages[previous].classList.add("d-none");
    }

    clickedIcon.classList.add("active");
    dashPages[clickedIndex].classList.remove("d-none");
    previous = clickedIndex;
    switch (clickedIndex) {
      case 0:
        profileH1.innerHTML = "Profile";
        break;
      case 1:
        profileH1.innerHTML = "Dashbord";
        break;
      case 2:
        profileH1.innerHTML = "Settings";
        break;
      case 3:
        profileH1.innerHTML = "Projects";
        break;
      case 4:
        profileH1.innerHTML = "Friends";
        break;
      case 5:
        profileH1.innerHTML = "Files";
        break;
      default:
        profileH1.innerHTML = "Add title in switch";
    }
  }
});
