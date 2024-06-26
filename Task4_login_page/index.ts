async function importCardData() {
  const response = await fetch("./card_data.json");
  const data = await response.json();
  return data;
}

interface card {
  expire: boolean;
  image: string;
  title: string;
  starImage: string;
  subject: string;
  grade: number;
  extragrade: number;
  units: number;
  lessons: number;
  topics: number;
  classname: string;
  students: number;
  date: string;
  unavailable: boolean;
}

async function printCardData() {
  const cardData: card[] = await importCardData();

  const cardContainer: any = document.querySelector(".cardContainer");

  for (let i = 0; i < cardData.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);

    if (cardData[i].expire) {
      const expired = document.createElement("div");
      expired.classList.add("expired");
      expired.innerHTML = "Expired";
      card.appendChild(expired);
    }

    // -----------------------box-1------------------------
    const box1 = document.createElement("div");
    box1.classList.add("box1");
    card.appendChild(box1);

    // -----------------------subbox-1------------------------
    const subbox1 = document.createElement("div");
    subbox1.classList.add("subbox1");
    box1.appendChild(subbox1);

    const image = document.createElement("img");
    image.setAttribute("src", cardData[i].image);
    subbox1.appendChild(image);

    // -----------------------subbox-2------------------------

    // ------------------------Title-------------------------
    const subbox2 = document.createElement("div");
    subbox2.classList.add("subbox2");
    box1.appendChild(subbox2);

    const cardHead = document.createElement("div");
    cardHead.classList.add("cardHead");
    subbox2.appendChild(cardHead);

    const h3 = document.createElement("h3");
    h3.innerText = cardData[i].title;
    const starImage = document.createElement("img");
    starImage.setAttribute("src", cardData[i].starImage);
    starImage.classList.add("star");
    cardHead.appendChild(h3);
    cardHead.appendChild(starImage);

    // -------------------Subject Div--------------------
    const subjectDiv = document.createElement("div");
    subjectDiv.classList.add("subjectDiv");
    subbox2.appendChild(subjectDiv);

    subjectDiv.innerHTML =
      cardData[i].subject +
      '<span class="devider"></span>' +
      "Grade " +
      cardData[i].grade;
    const extraGrade = document.createElement("span");
    extraGrade.classList.add("gradeAdd");
    extraGrade.innerText = " +" + cardData[i].extragrade;
    subjectDiv.appendChild(extraGrade);

    // ------------------Lessons Div----------------------
    if (cardData[i].units != null) {
      const lessonsDiv = document.createElement("div");
      lessonsDiv.classList.add("lessonsDiv");
      subbox2.appendChild(lessonsDiv);

      lessonsDiv.innerHTML = `<span class="number">${cardData[i].units}</span>
            <span class="gap">Units</span>
            <span class="number">${cardData[i].lessons}</span>
            <span class="gap">Lessons</span>
            <span class="number">${cardData[i].topics}</span>
            <span class="gap">Topics</span>`;
    }

    // -----------------Select Class-------------------
    const classSelect = document.createElement("select");
    classSelect.classList.add("classSelect");
    subbox2.appendChild(classSelect);

    const option = document.createElement("option");
    option.innerHTML = cardData[i].classname;
    if (cardData[i].unavailable) {
      classSelect.classList.add("unavailable");
    }
    classSelect.appendChild(option);

    // -------------Students Div------------
    if (cardData[i].students != null && cardData[i].date != null) {
      const student = document.createElement("div");
      student.classList.add("subjectDiv");
      student.innerHTML =
        cardData[i].students +
        " Students" +
        '<span class="devider"></span>' +
        cardData[i].date;
      subbox2.appendChild(student);
    } else if (cardData[i].students != null && cardData[i].date == null) {
      const student = document.createElement("div");
      student.classList.add("subjectDiv");
      student.innerHTML = cardData[i].students + " Students";
      subbox2.appendChild(student);
    }

    // --------------Box 2-------------------
    const box2 = document.createElement("div");
    box2.classList.add("box2");

    const previewIcon = document.createElement("img");
    previewIcon.setAttribute("src", "icons/preview.svg");
    box2.appendChild(previewIcon);

    const manageIcon = document.createElement("img");
    manageIcon.setAttribute("src", "icons/manage course.svg");
    box2.appendChild(manageIcon);

    const submissionIcon = document.createElement("img");
    submissionIcon.setAttribute("src", "icons/grade submissions.svg");
    box2.appendChild(submissionIcon);

    const reportIcon = document.createElement("img");
    reportIcon.setAttribute("src", "icons/reports.svg");
    box2.appendChild(reportIcon);
    card.appendChild(box2);
  }
}

printCardData();

// ------------------Alert Hover------------------------

async function importAlertData() {
  const response = await fetch("./alert_data.json");
  const data = await response.json();
  return data;
}

interface alert {
  title: string;
  class: any;
  course: any;
  date: string;
}

async function printAlertData() {
  const alertData: alert[] = await importAlertData();

  const alertDiv: any = document.querySelector(".alertDiv");

  for (let i = 0; i < alertData.length; i++) {
    const alertMessage = document.createElement("div");
    alertMessage.classList.add("alertMessage", "incompleted");
    alertDiv.appendChild(alertMessage);

    const alertHead = document.createElement("div");
    alertHead.classList.add("alertHead");
    const title = document.createElement("h5");
    title.innerHTML = alertData[i].title;
    const status = document.createElement("span");
    status.classList.add("material-symbols-outlined", "md-18");
    status.innerText = "do_not_disturb_on";
    alertHead.appendChild(title);
    alertHead.appendChild(status);
    alertMessage.appendChild(alertHead);

    if (alertData[i].class != null) {
      const alertTopic = document.createElement("div");
      alertTopic.classList.add("alertTopic");
      alertTopic.innerHTML = `Class:<span>${alertData[i].class}</span>`;
      alertMessage.appendChild(alertTopic);
    } else if (alertData[i].course != null) {
      const alertTopic = document.createElement("div");
      alertTopic.classList.add("alertTopic");
      alertTopic.innerHTML = `Course:<span>${alertData[i].course}</span>`;
      alertMessage.appendChild(alertTopic);
    }

    const alertDate = document.createElement("div");
    alertDate.classList.add("alertDate");
    alertDate.innerText = alertData[i].date;
    alertMessage.appendChild(alertDate);
  }

  const alertButton = document.createElement("button");
  alertButton.classList.add("alertButton");
  alertButton.innerText = "SHOW ALL";
  alertDiv.appendChild(alertButton);

  var alertClick = document.querySelectorAll(".alertMessage");

  alertClick.forEach((item: any) => {
    item.addEventListener("click", () => {
      item.classList.remove("incompleted");
      item.classList.add("completed");
      var icon = item.querySelector('.alertMessage .material-symbols-outlined');
      icon.classList.remove('material-symbols-outlined','md-18');
      icon.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
    });
  });
}

printAlertData();

// ------------------Announcement Hover----------------------

async function importAnnouncementData() {
  const response = await fetch("./announcement_data.json");
  const data = await response.json();
  return data;
}

interface announcement {
  name: string;
  title: string;
  attachements: any;
  course: any;
  class: any;
  date: string;
}

async function printAnnouncementData() {
  const announcementData: announcement[] = await importAnnouncementData();

  const announcementDiv: any = document.querySelector(".announcementDiv");

  for (let i = 0; i < announcementData.length; i++) {
    const announcementMessage = document.createElement("div");
    announcementMessage.classList.add("announcementMessage", "incompleted");
    announcementDiv.appendChild(announcementMessage);

    const announcementName = document.createElement("div");
    announcementName.classList.add("announcementName");
    announcementName.innerText = "PA:";
    const name = document.createElement("span");
    name.innerText = announcementData[i].name;
    const status = document.createElement("span");
    status.classList.add("material-symbols-outlined", "md-18");
    status.innerText = "do_not_disturb_on";
    announcementName.appendChild(name);
    announcementName.appendChild(status);
    announcementMessage.appendChild(announcementName);

    const announcementHead = document.createElement("div");
    announcementHead.classList.add("announcementHead");
    const title = document.createElement("h5");
    title.innerHTML = announcementData[i].title;
    announcementHead.appendChild(title);
    announcementMessage.appendChild(announcementHead);

    if (announcementData[i].class != null) {
      const announcementTopic = document.createElement("div");
      announcementTopic.classList.add("announcementTopic");
      announcementTopic.innerHTML = `Class:<span>${announcementData[i].class}</span>`;
      announcementMessage.appendChild(announcementTopic);
    } else if (announcementData[i].course != null) {
      const announcementTopic = document.createElement("div");
      announcementTopic.classList.add("announcementTopic");
      announcementTopic.innerHTML = `Course:<span>${announcementData[i].course}</span>`;
      announcementMessage.appendChild(announcementTopic);
    }

    if (announcementData[i].attachements != null) {
      const announcementDate = document.createElement("div");
      announcementDate.classList.add("announcementDate");
      const attachFile = document.createElement("div");
      attachFile.innerHTML = `<span class="material-symbols-outlined md-12">attach_file</span>${announcementData[i].attachements}`;
      announcementDate.appendChild(attachFile);
      const date = document.createElement("div");
      date.innerText = announcementData[i].date;
      announcementDate.appendChild(date);
      announcementMessage.appendChild(announcementDate);
    } else {
      const announceDate = document.createElement("div");
      announceDate.classList.add("announceDate");
      announceDate.innerText = announcementData[i].date;
      announcementMessage.appendChild(announceDate);
    }
  }

  const announcementButton = document.createElement("div");
  announcementButton.classList.add("announcementButton");
  const showAllBtn = document.createElement("button");
  showAllBtn.innerText = "SHOW ALL";
  const announceDivider = document.createElement("span");
  announceDivider.classList.add("announceDevider");
  const createNewBtn = document.createElement("button");
  createNewBtn.innerText = "CREATE NEW";
  announcementButton.appendChild(showAllBtn);
  announcementButton.appendChild(announceDivider);
  announcementButton.appendChild(createNewBtn);
  announcementDiv.appendChild(announcementButton);

  let announcementClick = document.querySelectorAll(".announcementMessage");

  announcementClick.forEach((item: any) => {
    item.addEventListener("click", () => {
      item.classList.remove("incompleted");
      item.classList.add("completed");
      var icon = item.querySelector('.announcementMessage .md-18');
      icon.classList.remove('material-symbols-outlined','md-18');
      icon.innerHTML=`<i class="fa-solid fa-circle-check fa-lg"></i>`;
    });
  });
}
printAnnouncementData();
