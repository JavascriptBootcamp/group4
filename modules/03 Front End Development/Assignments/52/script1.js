var inMails = [
    { from: "moshiko", subject: "job", content: "bla bla bla bla bla", date: "16-02-19" },
    { from: "moshe", subject: "job", content: "bla bla bla bla bla", date: "10-02-19" },
    { from: "shai", subject: "job", content: "bla bla bla bla bla", date: "10-02-19" },
    { from: "david", subject: "job", content: "bla bla bla bla bla", date: "05-02-19" },
    { from: "guy", subject: "job", content: "bla bla bla bla bla", date: "02-02-19" },
    { from: "matan", subject: "job", content: "bla bla bla bla bla", date: "30-01-19" },
    { from: "ofek", subject: "job", content: "bla bla bla bla bla", date: "20-01-19" },
    { from: "avi", subject: "job", content: "bla bla bla bla bla", date: "15-01-19" },
    { from: "evyatar", subject: "job", content: "bla bla bla bla bla", date: "10-01-19" },
    { from: "maria", subject: "job", content: "bla bla bla bla bla", date: "01-01-19" }];

var sentMails = [
    { from: "moshiko", subject: "job", content: "bla bla bla bla bla", date: "16-02-19" },
    { from: "moshiko", subject: "job", content: "bla bla bla bla bla", date: "16-02-19" },
    { from: "moshiko", subject: "job", content: "bla bla bla bla bla", date: "16-02-19" },
    { from: "moshiko", subject: "job", content: "bla bla bla bla bla", date: "16-02-19" },
    { from: "moshiko", subject: "job", content: "bla bla bla bla bla", date: "16-02-19" }];

function printMails(arrMails) {
    var tableBody = document.getElementById("tbody");
    tableBody.innerHTML = "";

    for (var i = 0; i < arrMails.length; i++) {
        var tr = document.createElement("tr");
        if (i < 3)
            tr.className = "topMails";
        for (var key in arrMails[i]) {
            if (key !== "content") {
                var td = document.createElement("td");
                td.innerText = arrMails[i][key];
                if (key === "subject") {
                    td.onclick = toggleContent;
                    td.innerHTML += "<p class='toggle'>" + arrMails[i]["content"] + "</p>";
                }
                tr.appendChild(td);
            }
            tableBody.appendChild(tr)
        }
    }
}
function toggleContent(e) {
    if (e.target.firstElementChild)
        e.target.firstElementChild.classList.toggle("toggle");
}

function onloadPrint() {
    var arrMails = document.title === "Inbox" ? inMails : sentMails;
    printMails(arrMails);
}

onloadPrint();