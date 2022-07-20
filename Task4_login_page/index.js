var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function importCardData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./card_data.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function printCardData() {
    return __awaiter(this, void 0, void 0, function () {
        var cardData, cardContainer, i, card, expired, box1, subbox1, image, subbox2, cardHead, h3, starImage, subjectDiv, extraGrade, lessonsDiv, classSelect, option, student, student, box2, previewIcon, manageIcon, submissionIcon, reportIcon;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importCardData()];
                case 1:
                    cardData = _a.sent();
                    cardContainer = document.querySelector(".cardContainer");
                    for (i = 0; i < cardData.length; i++) {
                        card = document.createElement("div");
                        card.classList.add("card");
                        cardContainer.appendChild(card);
                        if (cardData[i].expire) {
                            expired = document.createElement("div");
                            expired.classList.add("expired");
                            expired.innerHTML = "Expired";
                            card.appendChild(expired);
                        }
                        box1 = document.createElement("div");
                        box1.classList.add("box1");
                        card.appendChild(box1);
                        subbox1 = document.createElement("div");
                        subbox1.classList.add("subbox1");
                        box1.appendChild(subbox1);
                        image = document.createElement("img");
                        image.setAttribute("src", cardData[i].image);
                        subbox1.appendChild(image);
                        subbox2 = document.createElement("div");
                        subbox2.classList.add("subbox2");
                        box1.appendChild(subbox2);
                        cardHead = document.createElement("div");
                        cardHead.classList.add("cardHead");
                        subbox2.appendChild(cardHead);
                        h3 = document.createElement("h3");
                        h3.innerText = cardData[i].title;
                        starImage = document.createElement("img");
                        starImage.setAttribute("src", cardData[i].starImage);
                        starImage.classList.add("star");
                        cardHead.appendChild(h3);
                        cardHead.appendChild(starImage);
                        subjectDiv = document.createElement("div");
                        subjectDiv.classList.add("subjectDiv");
                        subbox2.appendChild(subjectDiv);
                        subjectDiv.innerHTML =
                            cardData[i].subject +
                                '<span class="devider"></span>' +
                                "Grade " +
                                cardData[i].grade;
                        extraGrade = document.createElement("span");
                        extraGrade.classList.add("gradeAdd");
                        extraGrade.innerText = " +" + cardData[i].extragrade;
                        subjectDiv.appendChild(extraGrade);
                        // ------------------Lessons Div----------------------
                        if (cardData[i].units != null) {
                            lessonsDiv = document.createElement("div");
                            lessonsDiv.classList.add("lessonsDiv");
                            subbox2.appendChild(lessonsDiv);
                            lessonsDiv.innerHTML = "<span class=\"number\">".concat(cardData[i].units, "</span>\n            <span class=\"gap\">Units</span>\n            <span class=\"number\">").concat(cardData[i].lessons, "</span>\n            <span class=\"gap\">Lessons</span>\n            <span class=\"number\">").concat(cardData[i].topics, "</span>\n            <span class=\"gap\">Topics</span>");
                        }
                        classSelect = document.createElement("select");
                        classSelect.classList.add("classSelect");
                        subbox2.appendChild(classSelect);
                        option = document.createElement("option");
                        option.innerHTML = cardData[i].classname;
                        if (cardData[i].unavailable) {
                            classSelect.classList.add("unavailable");
                        }
                        classSelect.appendChild(option);
                        // -------------Students Div------------
                        if (cardData[i].students != null && cardData[i].date != null) {
                            student = document.createElement("div");
                            student.classList.add("subjectDiv");
                            student.innerHTML =
                                cardData[i].students +
                                    " Students" +
                                    '<span class="devider"></span>' +
                                    cardData[i].date;
                            subbox2.appendChild(student);
                        }
                        else if (cardData[i].students != null && cardData[i].date == null) {
                            student = document.createElement("div");
                            student.classList.add("subjectDiv");
                            student.innerHTML = cardData[i].students + " Students";
                            subbox2.appendChild(student);
                        }
                        box2 = document.createElement("div");
                        box2.classList.add("box2");
                        previewIcon = document.createElement("img");
                        previewIcon.setAttribute("src", "icons/preview.svg");
                        box2.appendChild(previewIcon);
                        manageIcon = document.createElement("img");
                        manageIcon.setAttribute("src", "icons/manage course.svg");
                        box2.appendChild(manageIcon);
                        submissionIcon = document.createElement("img");
                        submissionIcon.setAttribute("src", "icons/grade submissions.svg");
                        box2.appendChild(submissionIcon);
                        reportIcon = document.createElement("img");
                        reportIcon.setAttribute("src", "icons/reports.svg");
                        box2.appendChild(reportIcon);
                        card.appendChild(box2);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
printCardData();
// ------------------Alert Hover------------------------
function importAlertData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./alert_data.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function printAlertData() {
    return __awaiter(this, void 0, void 0, function () {
        var alertData, alertDiv, i, alertMessage, alertHead, title, status_1, alertTopic, alertTopic, alertDate, alertButton, alertClick;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importAlertData()];
                case 1:
                    alertData = _a.sent();
                    alertDiv = document.querySelector(".alertDiv");
                    for (i = 0; i < alertData.length; i++) {
                        alertMessage = document.createElement("div");
                        alertMessage.classList.add("alertMessage", "incompleted");
                        alertDiv.appendChild(alertMessage);
                        alertHead = document.createElement("div");
                        alertHead.classList.add("alertHead");
                        title = document.createElement("h5");
                        title.innerHTML = alertData[i].title;
                        status_1 = document.createElement("span");
                        status_1.classList.add("material-symbols-outlined", "md-18");
                        status_1.innerText = "do_not_disturb_on";
                        alertHead.appendChild(title);
                        alertHead.appendChild(status_1);
                        alertMessage.appendChild(alertHead);
                        if (alertData[i]["class"] != null) {
                            alertTopic = document.createElement("div");
                            alertTopic.classList.add("alertTopic");
                            alertTopic.innerHTML = "Class:<span>".concat(alertData[i]["class"], "</span>");
                            alertMessage.appendChild(alertTopic);
                        }
                        else if (alertData[i].course != null) {
                            alertTopic = document.createElement("div");
                            alertTopic.classList.add("alertTopic");
                            alertTopic.innerHTML = "Course:<span>".concat(alertData[i].course, "</span>");
                            alertMessage.appendChild(alertTopic);
                        }
                        alertDate = document.createElement("div");
                        alertDate.classList.add("alertDate");
                        alertDate.innerText = alertData[i].date;
                        alertMessage.appendChild(alertDate);
                    }
                    alertButton = document.createElement("button");
                    alertButton.classList.add("alertButton");
                    alertButton.innerText = "SHOW ALL";
                    alertDiv.appendChild(alertButton);
                    alertClick = document.querySelectorAll(".alertMessage");
                    alertClick.forEach(function (item) {
                        item.addEventListener("click", function () {
                            item.classList.remove("incompleted");
                            item.classList.add("completed");
                            var icon = item.querySelector('.alertMessage .material-symbols-outlined');
                            icon.classList.remove('material-symbols-outlined');
                            icon.innerHTML = "<i class=\"fa-solid fa-circle-check\"></i>";
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
printAlertData();
// ------------------Announcement Hover------------------------
function importAnnouncementData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("./announcement_data.json")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function printAnnouncementData() {
    return __awaiter(this, void 0, void 0, function () {
        var announcementData, announcementDiv, i, announcementMessage, announcementName, name_1, status_2, announcementHead, title, announcementTopic, announcementTopic, announcementDate, attachFile, date, announceDate, announcementButton, showAllBtn, announceDivider, createNewBtn, announcementClick;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, importAnnouncementData()];
                case 1:
                    announcementData = _a.sent();
                    announcementDiv = document.querySelector(".announcementDiv");
                    for (i = 0; i < announcementData.length; i++) {
                        announcementMessage = document.createElement("div");
                        announcementMessage.classList.add("announcementMessage", "incompleted");
                        announcementDiv.appendChild(announcementMessage);
                        announcementName = document.createElement("div");
                        announcementName.classList.add("announcementName");
                        announcementName.innerText = "PA:";
                        name_1 = document.createElement("span");
                        name_1.innerText = announcementData[i].name;
                        status_2 = document.createElement("span");
                        status_2.classList.add("material-symbols-outlined", "md-18");
                        status_2.innerText = "do_not_disturb_on";
                        announcementName.appendChild(name_1);
                        announcementName.appendChild(status_2);
                        announcementMessage.appendChild(announcementName);
                        announcementHead = document.createElement("div");
                        announcementHead.classList.add("announcementHead");
                        title = document.createElement("h5");
                        title.innerHTML = announcementData[i].title;
                        announcementHead.appendChild(title);
                        announcementMessage.appendChild(announcementHead);
                        if (announcementData[i]["class"] != null) {
                            announcementTopic = document.createElement("div");
                            announcementTopic.classList.add("announcementTopic");
                            announcementTopic.innerHTML = "Class:<span>".concat(announcementData[i]["class"], "</span>");
                            announcementMessage.appendChild(announcementTopic);
                        }
                        else if (announcementData[i].course != null) {
                            announcementTopic = document.createElement("div");
                            announcementTopic.classList.add("announcementTopic");
                            announcementTopic.innerHTML = "Course:<span>".concat(announcementData[i].course, "</span>");
                            announcementMessage.appendChild(announcementTopic);
                        }
                        if (announcementData[i].attachements != null) {
                            announcementDate = document.createElement("div");
                            announcementDate.classList.add("announcementDate");
                            attachFile = document.createElement("div");
                            attachFile.innerHTML = "<span class=\"material-symbols-outlined md-12\">attach_file</span>".concat(announcementData[i].attachements);
                            announcementDate.appendChild(attachFile);
                            date = document.createElement("div");
                            date.innerText = announcementData[i].date;
                            announcementDate.appendChild(date);
                            announcementMessage.appendChild(announcementDate);
                        }
                        else {
                            announceDate = document.createElement("div");
                            announceDate.classList.add("announceDate");
                            announceDate.innerText = announcementData[i].date;
                            announcementMessage.appendChild(announceDate);
                        }
                    }
                    announcementButton = document.createElement("div");
                    announcementButton.classList.add("announcementButton");
                    showAllBtn = document.createElement("button");
                    showAllBtn.innerText = "SHOW ALL";
                    announceDivider = document.createElement("span");
                    announceDivider.classList.add("announceDevider");
                    createNewBtn = document.createElement("button");
                    createNewBtn.innerText = "CREATE NEW";
                    announcementButton.appendChild(showAllBtn);
                    announcementButton.appendChild(announceDivider);
                    announcementButton.appendChild(createNewBtn);
                    announcementDiv.appendChild(announcementButton);
                    announcementClick = document.querySelectorAll(".announcementMessage");
                    announcementClick.forEach(function (item) {
                        item.addEventListener("click", function () {
                            item.classList.remove("incompleted");
                            item.classList.add("completed");
                            var icon = item.querySelector('.announcementMessage .md-18');
                            icon.classList.remove('material-symbols-outlined', 'md-18');
                            icon.innerHTML = "<i class=\"fa-solid fa-circle-check fa-lg\"></i>";
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
printAnnouncementData();
