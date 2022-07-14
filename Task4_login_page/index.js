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
    box2.innerHTML = "<img src=\"icons/preview.svg\" alt=\"preview\" />\n    <img src=\"icons/manage course.svg\" alt=\"manage course\" />\n    <img src=\"icons/grade submissions.svg\" alt=\"\" />\n    <img src=\"icons/reports.svg\" alt=\"reports\" />";
    card.appendChild(box2);
}
