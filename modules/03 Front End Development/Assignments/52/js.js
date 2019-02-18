var inbox = [
    { from: "shon", subject: "pictures", date: "20-02-20" },
    { from: "shon", subject: "travel", date: "05-11-18" },
    { from: "shon", subject: "dinnar", date: "14-03-18" },
    { from: "ari", subject: "next week", date: "05-08-19" },
    { from: "ari", subject: "next week meeting", date: "12-08-19" },
    { from: "don", subject: "surfing article", date: "15-02-20" },
    { from: "don", subject: "files sending", date: "17-12-18" },
    { from: "ofir", subject: "travel plan", date: "23-05-18" },
    { from: "ofir", subject: "homework", date: "18-09-19" },
    { from: "ofir", subject: "Business plan", date: "12-08-19" }
]

var sent = [
    { from: "ari", subject: "surfing article", date: "15-02-20" },
    { from: "ari", subject: "files sending", date: "17-12-18" },
    { from: "don", subject: "travel plan", date: "23-05-18" },
    { from: "don", subject: "homework", date: "18-09-19" },
    { from: "ofir", subject: "Business plan", date: "12-08-19" }
]

var contacts = [
    { first: "ari", last: "ader", email: "a@gmail.com" },
    { first: "don", last: "yuli", email: "b@gmail.com" },
    { first: "shon", last: "sabag", email: "c@gmail.com" },
    { first: "shai", last: "zuck", email: "d@gmail.com" },
    { first: "ofir", last: "ariel", email: "e@gmail.com" }
]

function showInbox() {
    var table = document.getElementById("content");
    table.innerHTML = "";
    table.innerHTML += "<col width='130'>";
    table.innerHTML += "<col width='130'>";
    table.innerHTML += "<col width='130'>";
    var row = document.createElement("tr");
    var th = document.createElement("th");
    th.innerText = "From";
    th.style.color = "darkred";
    row.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Subject";
    th.style.color = "darkred";
    row.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Date";
    th.style.color = "darkred";
    row.appendChild(th);
    table.appendChild(row);
    var count=0;
    for (var key in inbox) {
        var row = document.createElement("tr");
        var th = document.createElement("th");
        th.innerText = inbox[key].from;
        row.appendChild(th);
        var th = document.createElement("th");
        th.innerText = inbox[key].subject;
        row.appendChild(th);
        var th = document.createElement("th");
        th.innerText = inbox[key].date;
        row.appendChild(th);
        row.setAttribute("id",count);
        count++;
        table.appendChild(row);
    }

    for(var i=1; i<=3;i++){
       document.getElementById(count).style.fontWeight = "bold";
    }
    table.style.fontSize = "16px";
    table.style.marginLeft = "170px";
}

function showSent() {
    var table = document.getElementById("content");
    table.innerHTML = "";
    table.innerHTML += "<col width='130'>";
    table.innerHTML += "<col width='130'>";
    table.innerHTML += "<col width='130'>";
    var row = document.createElement("tr");
    var th = document.createElement("th");
    th.innerText = "From";
    th.style.color = "darkred";
    row.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Subject";
    th.style.color = "darkred";
    row.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Date";
    th.style.color = "darkred";
    row.appendChild(th);
    table.appendChild(row);
    for (var key in sent) {
        var row = document.createElement("tr");
        var th = document.createElement("th");
        th.innerText = sent[key].from;
        row.appendChild(th);
        var th = document.createElement("th");
        th.innerText = sent[key].subject;
        row.appendChild(th);
        var th = document.createElement("th");
        th.innerText = sent[key].date;
        row.appendChild(th);
        table.appendChild(row);
    }
    table.style.marginLeft = "140px";
}

function showContact() {
    var table = document.getElementById("content");
    table.innerHTML = "";
    table.innerHTML += "<col width='130'>";
    table.innerHTML += "<col width='130'>";
    table.innerHTML += "<col width='130'>";
    var row = document.createElement("tr");
    var th = document.createElement("th");
    th.innerText = "First Name";
    th.style.color = "darkred";
    row.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Last Name";
    th.style.color = "darkred";
    row.appendChild(th);
    var th = document.createElement("th");
    th.innerText = "Email Address";
    th.style.color = "darkred";
    row.appendChild(th);
    table.appendChild(row);
    for (var key in contacts) {
        var row = document.createElement("tr");
        var th = document.createElement("th");
        th.innerText = contacts[key].first;
        row.appendChild(th);
        var th = document.createElement("th");
        th.innerText = contacts[key].last;
        row.appendChild(th);
        var th = document.createElement("th");
        th.innerText = contacts[key].email;
        th.setAttribute("class","email")
        row.appendChild(th);
        table.appendChild(row);
    }
    table.style.fontSize = "20px";
    table.style.marginLeft = "170px";
}