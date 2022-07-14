

interface data {
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

const cardData : data[] = [
    {
        "expire":false,
        "image": "images/imageMask-1.svg",
        "title": "Acceleration",
        "starImage":"icons/favourite.svg",
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
        "expire":false,
        "image": "images/imageMask-2.svg",
        "title": "Displacement, Velocity and Speed",
        "starImage":"icons/favourite.svg",
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
        "expire":false,
        "image": "images/imageMask.svg",
        "title": "Introduction to Biology: Micro organisms and how they affect",
        "starImage":"icons/favourite.svg",
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
        "starImage":"icons/favourite.svg",
        "subject": "Mathematics",
        "grade": 8,
        "extragrade": 3,
        "units": null,
        "lessons": null,
        "topics": null,
        "classname": "Mr. Frank's Class B",
        "students":44,
        "date": "14-Oct-2019 - 20-Oct-2020",
        "unavailable": false
    }
]


const cardContainer = document.querySelector('.cardContainer')

for(let i = 0; i<cardData.length;i++){
    const card = document.createElement('div')
    card.classList.add('card')
    cardContainer.appendChild(card)

    if(cardData[i].expire){
        const expired = document.createElement('div')
        expired.classList.add('expired')
        expired.innerHTML = 'Expired'
        card.appendChild(expired)
    }
    
    // -----------------------box-1------------------------
    const box1 = document.createElement('div')
    box1.classList.add('box1')
    card.appendChild(box1)

    // -----------------------subbox-1------------------------
    const subbox1 = document.createElement('div')
    subbox1.classList.add('subbox1')
    box1.appendChild(subbox1)

    const image = document.createElement('img')
    image.setAttribute('src',cardData[i].image)
    subbox1.appendChild(image)

    // -----------------------subbox-2------------------------

    // ------------------------Title-------------------------
    const subbox2 = document.createElement('div')
    subbox2.classList.add('subbox2')
    box1.appendChild(subbox2)

    const cardHead = document.createElement('div')
    cardHead.classList.add('cardHead')
    subbox2.appendChild(cardHead)

    const h3 = document.createElement('h3')
    h3.innerText = cardData[i].title
    const starImage = document.createElement('img')
    starImage.setAttribute('src',cardData[i].starImage)
    starImage.classList.add('star')
    cardHead.appendChild(h3)
    cardHead.appendChild(starImage)

    // -------------------Subject Div--------------------
    const subjectDiv = document.createElement('div')
    subjectDiv.classList.add('subjectDiv')
    subbox2.appendChild(subjectDiv)

    subjectDiv.innerHTML = cardData[i].subject + '<span class="devider"></span>'+'Grade '+cardData[i].grade
    const extraGrade = document.createElement('span')
    extraGrade.classList.add('gradeAdd')
    extraGrade.innerText = ' +'+cardData[i].extragrade
    subjectDiv.appendChild(extraGrade)
    
    // ------------------Lessons Div----------------------
   if(cardData[i].units!=null){
    const lessonsDiv = document.createElement('div')
    lessonsDiv.classList.add('lessonsDiv')
    subbox2.appendChild(lessonsDiv)

    lessonsDiv.innerHTML = `<span class="number">`+cardData[i].units+`</span>
    <span class="gap">Units</span>
    <span class="number">`+cardData[i].lessons+`</span>
    <span class="gap">Lessons</span>
    <span class="number">`+cardData[i].topics+`</span>
    <span class="gap">Topics</span>`
   }

    // -----------------Select Class-------------------
    const classSelect = document.createElement('select')
    classSelect.classList.add('classSelect')
    subbox2.appendChild(classSelect)

    const option = document.createElement('option')
    option.innerHTML = cardData[i].classname
    if(cardData[i].unavailable){
        classSelect.classList.add('unavailable')
    }
    classSelect.appendChild(option)
    
    // -------------Students Div------------
    if(cardData[i].students!=null && cardData[i].date!=null){
        const student = document.createElement('div')
        student.classList.add('subjectDiv')
        student.innerHTML = cardData[i].students+' Students'+'<span class="devider"></span>'+cardData[i].date
        subbox2.appendChild(student)
    }else if(cardData[i].students!=null && cardData[i].date==null){
        const student = document.createElement('div')
        student.classList.add('subjectDiv')
        student.innerHTML = cardData[i].students+' Students'
        subbox2.appendChild(student)
    }
    

    // --------------Box 2-------------------
    const box2 = document.createElement('div')
    box2.classList.add('box2')

    const previewIcon = document.createElement('img')
    previewIcon.setAttribute('src',"icons/preview.svg")
    box2.appendChild(previewIcon)

    const manageIcon = document.createElement('img')
    manageIcon.setAttribute('src',"icons/manage course.svg")
    box2.appendChild(manageIcon)

    const submissionIcon = document.createElement('img')
    submissionIcon.setAttribute('src',"icons/grade submissions.svg")
    box2.appendChild(submissionIcon)

    const reportIcon = document.createElement('img')
    reportIcon.setAttribute('src',"icons/reports.svg")
    box2.appendChild(reportIcon)

    // box2.innerHTML = `<img src="icons/preview.svg" alt="preview" />
    // <img src="icons/manage course.svg" alt="manage course" />
    // <img src="icons/grade submissions.svg" alt="" />
    // <img src="icons/reports.svg" alt="reports" />`
    card.appendChild(box2)
}

