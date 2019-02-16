var incomingMail = [ {from : "Matan Atiya", subject : "Finshing course homework", date: "15/2/2019", content: "You need to finish ex 52"},
{from : "Matan Atiya", subject : "Finshing course homework 2", date: "15/2/2019", content: "You need to finish ex 53"},
{from : "Matan Atiya", subject : "Finshing course homework 3", date: "15/2/2019", content: "You need to finish ex 54"},
{from : "Matan Atiya", subject : "Finshing course homework 4", date: "15/2/2019", content: "You need to finish ex 55"},
{from : "Matan Atiya", subject : "Finshing course homework 5", date: "15/2/2019", content: "You need to finish ex 56"},
{from : "Matan Atiya", subject : "Finshing course homework 6", date: "15/2/2019", content: "You need to finish ex 57"},
{from : "Matan Atiya", subject : "Finshing course homework 7", date: "15/2/2019", content: "You need to finish ex 58"},
{from : "Matan Atiya", subject : "Finshing course homework 8", date: "15/2/2019", content: "You need to finish ex 59"},
{from : "Matan Atiya", subject : "Finshing course homework 9", date: "15/2/2019", content: "You need to finish ex 60"},
{from : "Matan Atiya", subject : "Finshing course homework 10", date: "15/2/2019", content: "You need to finish ex 61"}];
var outComingMail = [{from : "Matan Atiya", subject : "Finshing course homework - Sent", date: "15/2/2019", content: "You need to finish ex 53"},
{from : "Matan Atiya", subject : "Finshing course homework - Sent 2", date: "15/2/2019", content: "You need to finish ex 54"},
{from : "Matan Atiya", subject : "Finshing course homework - Sent 3", date: "15/2/2019", content: "You need to finish ex 55"},
{from : "Matan Atiya", subject : "Finshing course homework - Sent 4", date: "15/2/2019", content: "You need to finish ex 56"},
{from : "Matan Atiya", subject : "Finshing course homework - Sent 5", date: "15/2/2019", content: "You need to finish ex 57"}];

var divContent = document.querySelector("#content");

function creatLable(lableFor, lableTxt) {
    var label = document.createElement("label");
    label.htmlFor = lableFor;
    label.innerText = lableTxt;
    return label;
}

function creatSpan(spanName, spanTxt) {
    var span = document.createElement("span");
    span.name = spanName; 
    span.innerText = spanTxt;
    return span;
}

function toggleEmailContent(emailDiv) {
    var emailContentDiv = emailDiv.childNodes[1];
    var emailContentIndex = Object.keys(divContent.childNodes).find(key => divContent.childNodes[key] === emailDiv);
    var url = location.href.split("/").pop();
    var txt = (url === "52.html") ? incomingMail[emailContentIndex].content : outComingMail[emailContentIndex].content;

    emailContentDiv.classList.toggle("hide");
    emailContentDiv.innerText = txt;
}

function creatEmailDiv(mailObj) {
    var email = document.createElement("div");
    email.classList.add("email");
    email.onclick = (event) => {
        toggleEmailContent(event.currentTarget);
    }

    var emailHead = document.createElement("div");
    emailHead.classList.add("email-head");

    var lablForm = creatLable("from", "From:");
    var spanForm = creatSpan("from", " "+mailObj.from);
    emailHead.appendChild(lablForm);
    emailHead.appendChild(spanForm);

    var lablSub = creatLable("subject", "Subject:");
    var spanSub = creatSpan("subject", " "+mailObj.subject);
    emailHead.appendChild(lablSub);
    emailHead.appendChild(spanSub);

    var lablDate = creatLable("date", "DateSubject:");
    var spanDate = creatSpan("date", " "+mailObj.date);
    emailHead.appendChild(lablDate);
    emailHead.appendChild(spanDate);

    var emailContent = document.createElement("div");
    emailContent.classList.add("email-content"); 
    emailContent.classList.add("hide");

    email.appendChild(emailHead);
    email.appendChild(emailContent);
    return email;
    
}

function onLoadingPage() {

    var pageName = location.href.split("/").pop();
    var arr = [];
    if(pageName === "52.html") {
        arr = incomingMail;
    }
    else if (pageName === "sent.html"){
        arr = outComingMail;
    }
    for (let i = 0; i < arr.length; i++) {
        var email = creatEmailDiv(arr[i]);
        divContent.appendChild(email);
    }
}

onLoadingPage();