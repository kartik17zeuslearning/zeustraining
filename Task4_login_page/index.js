// import cardData from './card_data.json';
// console.log(cardData)
var cardData = [
    {
        "expire": false,
        "image": "images/imageMask-1.svg",
        "title": "Acceleration",
        "starImage": "icons/favourite.svg",
        "subject": "Physics",
        "grade": 7,
        "extragrade": 2,
        "units": 4,
        "lessons": 18,
        "topics": 24,
        "classname": "Mr. Frank's Class B",
        "students": 50,
        "date": "21-Jan-2020 - 21-Aug-2020",
        "unavailable": false
    },
    {
        "expire": false,
        "image": "images/imageMask-2.svg",
        "title": "Displacement, Velocity and Speed",
        "starImage": "icons/favourite.svg",
        "subject": "Physics",
        "grade": 6,
        "extragrade": 3,
        "units": 2,
        "lessons": 15,
        "topics": 20,
        "classname": "No Classes",
        "students": null,
        "date": null,
        "unavailable": true
    },
    {
        "expire": false,
        "image": "images/imageMask.svg",
        "title": "Introduction to Biology: Micro organisms and how they affect",
        "starImage": "icons/favourite.svg",
        "subject": "Biology",
        "grade": 4,
        "extragrade": 1,
        "units": 5,
        "lessons": 16,
        "topics": 22,
        "classname": "All Classes",
        "students": 300,
        "date": null,
        "unavailable": false
    },
    {
        "expire": true,
        "image": "images/imageMask-3.svg",
        "title": "Introduction to High School Mathematics",
        "starImage": "icons/favourite.svg",
        "subject": "Mathematics",
        "grade": 8,
        "extragrade": 3,
        "units": null,
        "lessons": null,
        "topics": null,
        "classname": "Mr. Frank's Class B",
        "students": 44,
        "date": "14-Oct-2019 - 20-Oct-2020",
        "unavailable": false
    }
];
var cardContainer = document.querySelector('.cardContainer');
for (var i = 0; i < cardData.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    cardContainer.appendChild(card);
    if (cardData[i].expire) {
        var expired = document.createElement('div');
        expired.classList.add('expired');
        expired.innerHTML = 'Expired';
        card.appendChild(expired);
    }
    // -----------------------box-1------------------------
    var box1 = document.createElement('div');
    box1.classList.add('box1');
    card.appendChild(box1);
    // -----------------------subbox-1------------------------
    var subbox1 = document.createElement('div');
    subbox1.classList.add('subbox1');
    box1.appendChild(subbox1);
    var image = document.createElement('img');
    image.setAttribute('src', cardData[i].image);
    subbox1.appendChild(image);
    // -----------------------subbox-2------------------------
    // ------------------------Title-------------------------
    var subbox2 = document.createElement('div');
    subbox2.classList.add('subbox2');
    box1.appendChild(subbox2);
    var cardHead = document.createElement('div');
    cardHead.classList.add('cardHead');
    subbox2.appendChild(cardHead);
    var h3 = document.createElement('h3');
    h3.innerText = cardData[i].title;
    var starImage = document.createElement('img');
    starImage.setAttribute('src', cardData[i].starImage);
    starImage.classList.add('star');
    cardHead.appendChild(h3);
    cardHead.appendChild(starImage);
    // -------------------Subject Div--------------------
    var subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subjectDiv');
    subbox2.appendChild(subjectDiv);
    subjectDiv.innerHTML = cardData[i].subject + '<span class="devider"></span>' + 'Grade ' + cardData[i].grade;
    var extraGrade = document.createElement('span');
    extraGrade.classList.add('gradeAdd');
    extraGrade.innerText = ' +' + cardData[i].extragrade;
    subjectDiv.appendChild(extraGrade);
    // ------------------Lessons Div----------------------
    if (cardData[i].units != null) {
        var lessonsDiv = document.createElement('div');
        lessonsDiv.classList.add('lessonsDiv');
        subbox2.appendChild(lessonsDiv);
        lessonsDiv.innerHTML = "<span class=\"number\">" + cardData[i].units + "</span>\n    <span class=\"gap\">Units</span>\n    <span class=\"number\">" + cardData[i].lessons + "</span>\n    <span class=\"gap\">Lessons</span>\n    <span class=\"number\">" + cardData[i].topics + "</span>\n    <span class=\"gap\">Topics</span>";
    }
    // -----------------Select Class-------------------
    var classSelect = document.createElement('select');
    classSelect.classList.add('classSelect');
    subbox2.appendChild(classSelect);
    var option = document.createElement('option');
    option.innerHTML = cardData[i].classname;
    if (cardData[i].unavailable) {
        classSelect.classList.add('unavailable');
    }
    classSelect.appendChild(option);
    // -------------Students Div------------
    if (cardData[i].students != null && cardData[i].date != null) {
        var student = document.createElement('div');
        student.classList.add('subjectDiv');
        student.innerHTML = cardData[i].students + ' Students' + '<span class="devider"></span>' + cardData[i].date;
        subbox2.appendChild(student);
    }
    else if (cardData[i].students != null && cardData[i].date == null) {
        var student = document.createElement('div');
        student.classList.add('subjectDiv');
        student.innerHTML = cardData[i].students + ' Students';
        subbox2.appendChild(student);
    }
    // --------------Box 2-------------------
    var box2 = document.createElement('div');
    box2.classList.add('box2');
    var previewIcon = document.createElement('img');
    previewIcon.setAttribute('src', "icons/preview.svg");
    box2.appendChild(previewIcon);
    var manageIcon = document.createElement('img');
    manageIcon.setAttribute('src', "icons/manage course.svg");
    box2.appendChild(manageIcon);
    var submissionIcon = document.createElement('img');
    submissionIcon.setAttribute('src', "icons/grade submissions.svg");
    box2.appendChild(submissionIcon);
    var reportIcon = document.createElement('img');
    reportIcon.setAttribute('src', "icons/reports.svg");
    box2.appendChild(reportIcon);
    card.appendChild(box2);
}
var alertData = [
    {
        "title": "License for Introduction to Algebra has been assigned to your school",
        "class": null,
        "course": null,
        "date": "15-Sep-2018 at 07:21 pm"
    },
    {
        "title": "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        "class": null,
        "course": "Advanced Mathematics",
        "date": "15-Sep-2018 at 05:21 pm"
    },
    {
        "title": "23 new students created",
        "class": null,
        "course": null,
        "date": "14-Sep-2018 at 01:21 pm"
    },
    {
        "title": "15 submissions ready for evaluation",
        "class": "Basics of Algebra",
        "course": null,
        "date": "13-Sep-2018 at 01:15 pm"
    },
    {
        "title": "License for Basic Concepts in Geometry has been assigned to your...",
        "class": null,
        "course": null,
        "date": "15-Sep-2018 at 07:21 pm"
    },
    {
        "title": "Lesson 3 Practice Worksheet overdue for Amy Santiago",
        "class": null,
        "course": "Advanced Mathematics",
        "date": "15-Sep-2018 at 05:21 pm"
    }
];
var alertDiv = document.querySelector(".alertDiv");
for (var i = 0; i < alertData.length; i++) {
    var alertMessage = document.createElement('div');
    alertMessage.classList.add('alertMessage', 'incompleted');
    alertDiv.appendChild(alertMessage);
    var alertHead = document.createElement('div');
    alertHead.classList.add('alertHead');
    var title = document.createElement('h5');
    title.innerHTML = alertData[i].title;
    var status_1 = document.createElement('span');
    status_1.classList.add('material-symbols-outlined', 'md-18');
    status_1.innerText = 'do_not_disturb_on';
    alertHead.appendChild(title);
    alertHead.appendChild(status_1);
    alertMessage.appendChild(alertHead);
    if (alertData[i]["class"] != null) {
        var alertTopic = document.createElement('div');
        alertTopic.classList.add('alertTopic');
        alertTopic.innerHTML = "Class:<span>".concat(alertData[i]["class"], "</span>");
        alertMessage.appendChild(alertTopic);
    }
    else if (alertData[i].course != null) {
        var alertTopic = document.createElement('div');
        alertTopic.classList.add('alertTopic');
        alertTopic.innerHTML = "Course:<span>".concat(alertData[i].course, "</span>");
        alertMessage.appendChild(alertTopic);
    }
    var alertDate = document.createElement('div');
    alertDate.classList.add('alertDate');
    alertDate.innerText = alertData[i].date;
    alertMessage.appendChild(alertDate);
}
var alertButton = document.createElement('button');
alertButton.classList.add('alertButton');
alertButton.innerText = 'SHOW ALL';
alertDiv.appendChild(alertButton);
var announcementData = [
    {
        "name": " Wilson Kumar",
        "title": "No classes will be held on 21st Nov",
        "attachements": "2 files are attached",
        "course": null,
        "class": null,
        "date": "15-Sep-2018 at 07:21 pm"
    },
    {
        "name": " Samson White",
        "title": "Guest lecture on Geometry on 20th September",
        "attachements": "2 files are attached",
        "course": null,
        "class": null,
        "date": "15-Sep-2018 at 07:21 pm"
    },
    {
        "name": " Wilson Kumar",
        "title": "Additional course materials available on request",
        "attachements": null,
        "class": null,
        "course": " Mathematics 101",
        "date": "15-Sep-2018 at 07:21 pm"
    },
    {
        "name": " Wilson Kumar",
        "title": "No classes will be held on 25th Dec",
        "attachements": null,
        "course": null,
        "class": null,
        "date": "15-Sep-2018 at 07:21 pm"
    },
    {
        "name": " Wilson Kumar",
        "title": "Additional course materials available on request",
        "attachements": null,
        "class": null,
        "course": " Mathematics 101",
        "date": "15-Sep-2018 at 07:21 pm"
    }
];
var announcementDiv = document.querySelector(".announcementDiv");
for (var i = 0; i < announcementData.length; i++) {
    var announcementMessage = document.createElement('div');
    announcementMessage.classList.add('announcementMessage', 'incompleted');
    announcementDiv.appendChild(announcementMessage);
    var announcementName = document.createElement('div');
    announcementName.classList.add('announcementName');
    announcementName.innerText = 'PA:';
    var name_1 = document.createElement('span');
    name_1.innerText = announcementData[i].name;
    announcementName.appendChild(name_1);
    announcementMessage.appendChild(announcementName);
    var announcementHead = document.createElement('div');
    announcementHead.classList.add('announcementHead');
    var title = document.createElement('h5');
    title.innerHTML = announcementData[i].title;
    var status_2 = document.createElement('span');
    status_2.classList.add('material-symbols-outlined', 'md-18');
    status_2.innerText = 'do_not_disturb_on';
    announcementHead.appendChild(title);
    announcementHead.appendChild(status_2);
    announcementMessage.appendChild(announcementHead);
    if (announcementData[i]["class"] != null) {
        var announcementTopic = document.createElement('div');
        announcementTopic.classList.add('announcementTopic');
        announcementTopic.innerHTML = "Class:<span>".concat(announcementData[i]["class"], "</span>");
        announcementMessage.appendChild(announcementTopic);
    }
    else if (announcementData[i].course != null) {
        var announcementTopic = document.createElement('div');
        announcementTopic.classList.add('announcementTopic');
        announcementTopic.innerHTML = "Course:<span>".concat(announcementData[i].course, "</span>");
        announcementMessage.appendChild(announcementTopic);
    }
    if (announcementData[i].attachements != null) {
        var announcementDate = document.createElement('div');
        announcementDate.classList.add('announcementDate');
        var attachFile = document.createElement('span');
        attachFile.classList.add('material-symbols-outlined', 'md-12');
        attachFile.innerText = "attach_file";
        announcementDate.appendChild(attachFile);
        announcementDate.innerText = announcementData[i].attachements;
        var date = document.createElement('div');
        date.innerText = announcementData[i].date;
        announcementDate.appendChild(date);
        announcementMessage.appendChild(announcementDate);
    }
    else {
        var announceDate = document.createElement('div');
        announceDate.classList.add('announceDate');
        announceDate.innerText = announcementData[i].date;
        announcementMessage.appendChild(announceDate);
    }
}
var announcementButton = document.createElement('div');
announcementButton.classList.add('announcementButton');
var showAllBtn = document.createElement('button');
showAllBtn.innerText = 'SHOW ALL';
var announceDivider = document.createElement('span');
announceDivider.classList.add('announceDevider');
var createNewBtn = document.createElement('button');
createNewBtn.innerText = 'CREATE NEW';
announcementButton.appendChild(showAllBtn);
announcementButton.appendChild(announceDivider);
announcementButton.appendChild(createNewBtn);
announcementDiv.appendChild(announcementButton);
