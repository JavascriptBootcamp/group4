var incomingMails = [{ from: "Elinor g", subject: "Sqlabs homework 1", date: "08-02-19", content: "content 1" },
{ from: "Elinor g", subject: "Sqlabs homework 2", date: "22-02-19", content: "content 2" },
{ from: "Elinor g", subject: "Sqlabs homework 3", date: "23-02-19", content: "content 3" },
{ from: "Elinor g", subject: "Sqlabs homework 4", date: "20-02-19", content: "content 4" },
{ from: "Elinor g", subject: "Sqlabs homework 5", date: "03-01-19", content: "content 5" },
{ from: "Elinor g", subject: "Sqlabs homework 6", date: "20-01-19", content: "content 6" },
{ from: "Elinor g", subject: "Sqlabs homework 7", date: "22-12-18", content: "content 7" },
{ from: "Elinor g", subject: "Sqlabs homework 8", date: "07-02-19", content: "content 8" },
{ from: "Elinor g", subject: "Sqlabs homework 9", date: "28-12-18", content: "content 9" },
{ from: "Elinor g", subject: "Sqlabs homework 10", date: "10-02-19", content: "content 10" }];

var outcomingMails = [{ from: "Elinor g", subject: "Sqlabs homework - sent 1", date: "29-11-18", content: "content sent 1" },
{ from: "Elinor g", subject: "Sqlabs homework - sent 2", date: "18-02-19", content: "content sent 2" },
{ from: "Elinor g", subject: "Sqlabs homework - sent 3", date: "22-01-19", content: "content sent 3" },
{ from: "Elinor g", subject: "Sqlabs homework - sent 4", date: "06-01-19", content: "content sent 4" },
{ from: "Elinor g", subject: "Sqlabs homework - sent 5", date: "18-01-19", content: "content sent 5" }];

var contactPersons = [{ firstName: "Gabriela", lastName: "Fastag", email: "danny@gamil.com" },
{ firstName: "Danny", lastName: "Bentes", email: "gaby@gamil.com" },
{ firstName: "Andres", lastName: "Novoa", email: "andres@gamil.com" },
{ firstName: "Keren", lastName: "Katz", email: "keren@gamil.com" },
{ firstName: "Anna", lastName: "Carvajal", email: "anna@gamil.com" }];

var page = window.location.href;
if (page.includes("index")) {
    displayMail(incomingMails);

} else if (page.includes("sent")) {
    displayMail(outcomingMails);

} else if (page.includes("contacts")) {
    displayContact(contactPersons);
}

function displayMail(obj) {
    var tableEmails = document.getElementById("email-table");
    for (var i = 0; i < obj.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        tr.setAttribute("id", "content" + i);
        tr.setAttribute("onclick", "displayContent(this.id)");
        var trContent = document.createElement("tr");
        trContent.setAttribute("class", "content");
        trContent.innerText = obj[i].content;
        trContent.style.display = "none";
        td1.innerText = obj[i].from;
        td2.innerText = obj[i].subject;
        td3.innerText = obj[i].date;
        if (i < 3) {
            tr.classList.add("top-3-emails");
        }
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tableEmails.appendChild(tr);
        tableEmails.appendChild(trContent);
    }
}
function displayContent(id) {

    var tr = document.getElementById(id);
    var emailContent = tr.nextElementSibling;
    if (emailContent.style.display === "none") {
        emailContent.style.display = "block";
    } else {
        emailContent.style.display = "none";
    }
}

function displayContact(obj) {

    var tableContacts = document.getElementById("contacts-table");
    for (var i = 0; i < obj.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td1.innerText = obj[i].firstName;
        td2.innerText = obj[i].lastName;
        td3.innerText = obj[i].email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tableContacts.appendChild(tr);
    }
}

function orderByAsc(id) {
    var table = document.getElementById("contacts-table");
    for (var i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    if (id === "first-name") {
        contactPersons.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
    } else if (id === "last-name") {
        contactPersons.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
    }
    else if (id === "email") {
        contactPersons.sort((a, b) => (a.email > b.email) ? 1 : -1);
    }
    displayContact(contactPersons);
}

