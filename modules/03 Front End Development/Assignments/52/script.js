function inbox(from, subject, date, content) {
    this.from = from;
    this.subject = subject;
    this.date = date;
    this.content = content;
}
function send(to, subject, date, content) {
    this.to = to;
    this.subject = subject;
    this.date = date;
    this.content = content;
}
function contacts(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}
var allEmails = [];
var inbox = [new inbox("Bibi", "i love cigars", new Date('1995-12-17T03:24:00'), "iuyiuyiuyiuyiuy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Sara", "i love bibi", new Date('1995-12-17T03:24:00'), "m,n,mn,mn,mnLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Sara", "i love bibi", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Avi Gabai", "i am stupid", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Yair Lapid", "Bibi loves cigars", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Bibi", "i love cigars", new Date('1995-12-17T03:24:00'), "iuyiuyiuyiuyiuy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Sara", "i love bibi", new Date('1995-12-17T03:24:00'), "m,n,mn,mn,mnLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Sara", "i love bibi", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Avi Gabai", "i am stupid", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new inbox("Yair Lapid", "Bibi loves cigars", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")
];

var send = [new send("Bibi", "i love cigars", new Date('1995-12-17T03:24:00'), "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new send("Sara", "i love bibi", new Date('1995-12-17T03:24:00'), "Lorem Ipsum is simply dummy text of the printing and typesetting industry.;lk;lk;lk;lk;lk;lk Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new send("Sara", "i love bibi", new Date('1995-12-17T03:24:00'), "Lorem Ipsum is simply dummy text of the printing and typesetting industry.1234567890-0987654323456789 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new send("Avi Gabai", "You are stupid", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"),
new send("Yair Lapid", "Bibi loves cigars", new Date('1995-12-17T03:24:00'), "asdasdadsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")
];

var contacts = [new contacts("David", "Sabag", "david@sabag.com"), new contacts("David", "Aabag", "david@sabag.com"), new contacts("David", "Aabag", "david@sabag.com"),
new contacts("Beni", "Ganz", "beni@ganz.com"), new contacts("Beni", "Ganz", "beni@ganz.com"), new contacts("Beni", "Ganz", "beni@ganz.com")];

allEmails.push(inbox);
allEmails.push(send);
allEmails.push(contacts);



function fill(e) {
    var emails = document.querySelector("._inbox, ._send, ._contacts");
    for (var i = 0; i < allEmails.length; i++) {
        for (var j = 0; j < allEmails[i].length; j++) {
            tr = document.createElement("tr");
            from = document.createElement("a");
            from.href = "#";
            subject = document.createElement("a");
            subject.href = "#";
            date = document.createElement("a");
            date.href = "#";
            content = document.createElement("td");
            fromTd = document.createElement("td");
            subjectTd = document.createElement("td");
            dateTd = document.createElement("td");

            if (i === 0) {
                tr.setAttribute("class", "inbox");
                subject.innerHTML = allEmails[i][j].subject;
                date.innerHTML = allEmails[i][j].date;
                from.innerHTML = allEmails[i][j].from;
                content.innerHTML = allEmails[i][j].content;
                from.onclick = function (event) { displayContant(event) }
                subject.onclick = function (event) { displayContant(event) }
                date.onclick = function (event) { displayContant(event) }
                content.style.display = "none";

            }
            if (i === 1) {
                tr.setAttribute("class", "send");
                subject.innerHTML = allEmails[i][j].subject;
                date.innerHTML = allEmails[i][j].date;
                from.innerHTML = allEmails[i][j].to;
                content.innerHTML = allEmails[i][j].content;
                from.onclick = function (event) { displayContant(event) }
                subject.onclick = function (event) { displayContant(event) }
                date.onclick = function (event) { displayContant(event) }
                content.style.display = "none";
            }
            if (i === 2) {
                tr.setAttribute("class", "contacts");
                subject.innerHTML = allEmails[i][j].lastName;
                subject.onclick = function(){sort(contacts,"lastName",e)}
                date.innerHTML = allEmails[i][j].email;
                date.onclick = function(){sort(contacts,"email",e)}
                from.innerHTML = allEmails[i][j].firstName;
                from.onclick = function () { sort(contacts, "firstName",e) }
            }
            fromTd.appendChild(from);
            subjectTd.appendChild(subject);
            dateTd.appendChild(date);
            tr.appendChild(fromTd);
            tr.appendChild(subjectTd);
            tr.appendChild(dateTd);
            tr.appendChild(content)
            emails.appendChild(tr);
        }

    }
    if (e.target.URL.includes("inbox.html")) {
        document.querySelectorAll(".send, .contacts").forEach(e => e.style.display = "none");
    }
    if (e.target.URL.includes("send.html")) {
        document.querySelectorAll(".inbox, .contacts").forEach(e => e.style.display = "none");
    }
    if (e.target.URL.includes("contacts.html")) {
        document.querySelectorAll(".send, .inbox").forEach(e => e.style.display = "none");
    }
}

function displayContant(e) {
    msg = e.srcElement.parentElement.parentElement.lastChild.innerHTML;
    document.querySelector("#emails").remove()
    document.querySelector("#main-area").innerHTML = msg;
    document.querySelector("#back-to-main").style.display = "block";
}

function sort(arr, column, e) {
    if (column === "firstName") {
        arr.sort(function (a, b) {
            if (a.firstName[0].toUpperCase() > b.firstName[0].toUpperCase()) return 1;
            if (a.firstName[0].toUpperCase() < b.firstName[0].toUpperCase()) return -1;
            return 0;
        })
    }
    if (column === "lastName") {
        arr.sort(function (a, b) {
            if (a.lastName[0].toUpperCase() > b.lastName[0].toUpperCase()) return 1;
            if (a.lastName[0].toUpperCase() < b.lastName[0].toUpperCase()) return -1;
            return 0;
        })
    }
    if (column === "email") {
        arr.sort(function (a, b) {
            if (a.email[0].toUpperCase() > b.email[0].toUpperCase()) return 1;
            if (a.email[0].toUpperCase() < b.email[0].toUpperCase()) return -1;
            return 0;
        })
    }
    document.querySelectorAll(".inbox, .send, .contacts").forEach(e => e.remove());
    fill(e);
}