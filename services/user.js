var UserService = {
  fetchUserInfo: async (user_id) => {
    try {
      const response = await fetch(
        Constants.API_BASE_URL + "users/get_user_by_id.php?user_id=" + user_id
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      console.error("Error fetching Profile data:", error);
      throw error;
    }
  },
  deleteUserInfo: () => {
    localStorage.removeItem("userInfo");
  },
  loadProfile: async (user_id) => {
    UserService.deleteUserInfo();
    try {
      let data = localStorage.getItem("userInfo");
      if (data === null) {
        data = await UserService.fetchUserInfo(user_id);
      } else {
        data = JSON.parse(data);
      }
      const ratingsArray = data.ratings.split(" ");
      const content = `
            <div class="avatar-box txt-c p-20">
              <img class="rad-half mb-10" src="${data.img}" alt="Profile Img" />
              <h3 class="m-0">${data.name}</h3>
              <p class="c-grey mt-10">Level ${data.level}</p>
              <div class="level rad-6 bg-eee p-relative">
                <span style="width: ${data.level}%"></span>
              </div>
              <div class="rating mt-10 mb-10">
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
                <i class="fa-solid fa-star c-orange fs-13"></i>
              </div>
              <p class="c-grey m-0 fs-13">${ratingsArray.length} Rating</p>
            </div>
            <div class="info-box w-full txt-c-mobile">
              <!-- Start Information Row -->
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey fs-15 m-0 w-full">General Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Full Name</span>
                  <span>${data.name}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Gender:</span>
                  <span>${data.gender}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Nationality:</span>
                  <span>${data.nationality}</span>
                </div>
              </div>
              <!-- End Information Row -->
              <!-- Start Information Row -->
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Personal Information</h4>
                <div class="fs-14 d-flex align-center center-mobile">
                  <span class="c-grey">Email:</span>
                  <span class="email">&nbsp;${data.email}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Phone:</span>
                  <span>${data.phone}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Date Of Birth:</span>
                  <span>${data.DOB}</span>
                </div>
                <div class="fs-14"></div>
              </div>
              <!-- End Information Row -->
              <!-- Start Information Row -->
              <div class="box p-20 d-flex align-center">
                <h4 class="c-grey w-full fs-15 m-0">Job Information</h4>
                <div class="fs-14">
                  <span class="c-grey">Title:</span>
                  <span>${data.jobTitle}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Country:</span>
                  <span>${data.country}</span>
                </div>
                <div class="fs-14">
                  <span class="c-grey">Years Of Experience:</span>
                  <span>${data.YOE}</span>
                </div>
                <div class="fs-14"></div>
              </div>
              <!-- End Information Row -->
            </div>
          `;
      const skills = data.skills.split(" ");
      let skillsList = "";
      for (let i = 0; i < skills.length; i += 3) {
        skillsList += "<li>";
        for (let j = 0; j < 3 && i + j < skills.length; j++) {
          skillsList += `<span>${skills[i + j]}</span>`;
        }
        skillsList += "</li>";
      }
      UserService.loadLatestActivity(user_id);
      document.querySelector(".other-data .skills-card ul").innerHTML +=
        skillsList;

      document.querySelector(".screen .overview").innerHTML = content;
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  },
  loadLatestActivity: (user_id) => {
    RestClient.get(
      "users/get_user_latest_activity.php?user_id=" +
        user_id +
        "&limit=" +
        Constants.latestActivitiesLimit,
      (data) => {
        const activitiesList = data
          .map(
            (activity) => `
              <div class="activity d-flex align-center txt-c-mobile">
                <img src="${activity.img_src}" alt="Activity Image" />
                <div class="info">
                  <span class="d-block mb-10">${activity.name}</span>
                  <span class="c-grey">${activity.description}</span>
                </div>
                <div class="date">
                  <span class="d-block mb-10">${activity.time}</span>
                  <span class="c-grey">${activity.date}</span>
                </div>
              </div>
            `
          )
          .join("");

        document.querySelector(".other-data .activities").innerHTML +=
          activitiesList;
      }
    );
  },
  loadDashboard: async (user_id) => {
    UserService.deleteUserInfo();
    try {
      let data = localStorage.getItem("userInfo");
      if (data === null) {
        data = await UserService.fetchUserInfo(user_id);
      } else {
        data = JSON.parse(data);
      }
      const welcomWidget = `
              <div class="intro p-20 d-flex space-between bg-third pl-10-f pr-10-f">
                <div>
                  <h2 class="m-0">Welcom</h2>
                  <p class="c-grey mt-5 txt-c-f">${data.name}</p>
                </div>
                <img src="../assets/images/profile/welcome.png" alt="" />
              </div>
              <img src="${data.img}" alt="Profile image" class="avatar" />
              <div class="body txt-c d-flex p-20 mt-20 mb-20 bg-fourth pl-10-f pr-10-f">
                <div class="fs-13-f">
                  ${data.name}
                  <span class="d-block c-grey fs-14 mt-10 fs-10-f">${
                    data.jobTitle
                  }</span>
                </div>
                <div class="fs-13-f">
                  ${data.projects}
                  <span class="d-block c-grey fs-14 fs-10-f mt-10">Projects</span>
                </div>
                <div class="fs-13-f">
                  KM ${Utils.checkDecWithInt(data.earned)}
                  <span class="d-block c-grey fs-14 fs-10-f mt-10">Earned</span>
                </div>
              </div>
              <a
                href="#profile"
                id="profile-btn"
                class="d-block fs-15 rad-6 bg-main-color c-white btn-position w-fit btn-shape"
              >
                Profile
              </a>
            `;
      let targetsWidget = "",
        ticketsWidget = "",
        progressWidget = "",
        remindersWidget = "";

      // data.targets.forEach((target) => {
      //   const achieved = Number(target.achieved.replace(/,/g, "")),
      //     goal = Number(target.goal.replace(/,/g, "")),
      //     percentageAchieved = ((achieved / goal) * 100).toFixed(0);

      //   targetsWidget += `
      //           <div class="target-row mb-20 mb-25-f d-flex align-center">
      //             <div class="icon center-flex">
      //               <i class="fa-solid ${target.icon} fa-lg"></i>
      //             </div>
      //             <div class="details">
      //               <span class="fs-14 c-grey">${target.name}</span>
      //               <span class="d-block p-relative mb-10 fw-bold">${target.goal}</span>
      //               <div class="progress rad-10 p-relative">
      //                 <span style="width: ${percentageAchieved}%" class="rad-10">
      //                   <span class="rad-6 fs-13 c-white fw-bold">${percentageAchieved}%</span></span
      //                 >
      //               </div>
      //             </div>
      //           </div>
      //         `;
      // });

      // data.tickets.forEach((ticket) => {
      //   ticketsWidget += `
      //           <div class="box border-ccc p-20 p-10-f pr-10-f fs-13 c-grey">
      //             <i class="fa-solid ${ticket.icon} fa-2x mb-10"></i>
      //             <span class="d-block c-main-font fw-bold fs-25 mb-5">${ticket.achieved}</span>
      //             ${ticket.name}
      //           </div>
      //         `;
      // });

      // data.progrProjs.forEach((progrProj) => {
      //   progressWidget += `
      //         <li class="mt-25 d-flex align-center ${progrProj.status}">${progrProj.part}</li>
      //         `;
      // });

      // data.reminders.forEach((reminder) => {
      //   remindersWidget += `
      //           <li class="d-flex align-center mt-15">
      //             <span class="key mr-15 d-block rad-half"></span>
      //             <div class="pl-15">
      //               <p class="fs-14 fw-bold mt-0 mb-5">${reminder.title}</p>
      //               <span class="fs-13 c-grey">${reminder.date} - ${reminder.time}</span>
      //             </div>
      //           </li>
      //         `;
      // });

      document.querySelector(".screen.wrapper .welcome").innerHTML =
        welcomWidget;
      document.querySelector(".screen.wrapper .targets").innerHTML +=
        targetsWidget;
      document.querySelector(
        ".screen.wrapper .tickets .tickets-wrapper"
      ).innerHTML = ticketsWidget;
      document.querySelector(".screen.wrapper .last-project ul").innerHTML =
        progressWidget;
      document.querySelector(".screen.wrapper .reminders ul").innerHTML =
        remindersWidget;

      document.getElementById("profile-btn").addEventListener("click", () => {
        switchButton(0);
      });
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  },
  signIn: (form_id) => {
    const form = $("#" + form_id),
      block = form;

    FormValidation.validate(form, {}, (data) => {
      Utils.block_ui(block);
      RestClient.get(
        "users/user_login.php?sign_email=" +
          data.sign_email +
          "&signin_password=" +
          data.signin_password,
        (data) => {
          Utils.unblock_ui(block);
          if (data["counter"]) {
            window.location.pathname =
              "/IT-207-Introduction-to-Web-Programming";
            Utils.appearFailAlert("Done.");
          } else {
            Utils.appearFailAlert(
              "Invalid email or password. Please try again."
            );
          }
        },
        (xhr) => {
          Utils.unblock_ui(block);
          Utils.appearFailAlert(xhr.responseText);
        }
      );
    });
  },
};
