var emailArr = [
	{ from: "gaby", subject: "surfing article", date: "23-02-20" },
	{ from: "yosi", subject: "files sending", date: "11-10-18" },
	{ from: "maly", subject: "homework exsercise", date: "23-02-18" },
	{ from: "dalya", subject: "invitation for wedding", date: "15-07-19" },
	{ from: "zuri", subject: "Business meeting", date: "12-02-19" },
	{ from: "gaby", subject: "surfing article", date: "23-02-20" },
	{ from: "yosi", subject: "files sending", date: "11-10-18" },
	{ from: "maly", subject: "homework exsercise", date: "23-02-18" },
	{ from: "dalya", subject: "invitation for wedding", date: "15-07-19" },
	{ from: "zuri", subject: "Business meeting", date: "12-02-19" },
]
var emailArrOut = [
	{ from: "gaby", subject: "surfing article", date: "23-02-20" },
	{ from: "gaby", subject: "files sending", date: "11-10-18" },
	{ from: "gaby", subject: "homework exsercise", date: "23-02-18" },
	{ from: "gaby", subject: "invitation for wedding", date: "15-07-19" },
	{ from: "gaby", subject: "Business meeting", date: "12-02-19" }
]
var contacts = [
	{ firstName: "yosi", lastName: "buchnik", email: "yosibu@gamil.com" },
	{ firstName: "maly", lastName: "ninio", email: "malyninio@gamil.com" },
	{ firstName: "dalya", lastName: "buchnik", email: "dalyabuchnik@gamil.com" },
	{ firstName: "zuri", lastName: "buchnik", email: "buchnikzuri@gamil.com" },
	{ firstName: "nissan", lastName: "ninio", email: "nissanninio@gamil.com" }
]

var contact;
var email;
var page = document.location.href;
if (page.includes("contacts")) {
	orderByColumn();
	contact = document.getElementsByClassName("contact");
	for (var i = 0; i < contact.length; i++) {
		contact[i].onclick = displayContacts
	}
}
else {
	email = document.getElementsByClassName("email");
	for (var i = 0; i < email.length; i++) {
		email[i].onclick = displayEmail
	}
}

function displayEmail(e) {
	e.preventDefault();
	if(this.getAttribute("clicked"))
	{
		return false;
	}
	this.setAttribute("clicked", true);
	console.log(this);
	var inbox = document.getElementById("inbox-table");
	var page = document.location.href
	var index = this.getAttribute("data-email");
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	if (page.includes("sent.html")) {
		tr.className = "tr-email";
		td1.id = "email-from-" + index;
		td1.innerText = emailArrOut[index].from;
		td2.id = "email-subject-" + index;
		td2.innerText = emailArrOut[index].subject;
		td3.id = "email-date-" + index;
		td3.innerText = emailArrOut[index].date;
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		inbox.appendChild(tr);
	}
	else if (page.includes("inbox.html")) {
		tr.className = "tr-email";
		td1.id = "email-from-" + index;
		td1.innerText = emailArr[index].from;
		td2.id = "email-subject-" + index;
		td2.innerText = emailArr[index].subject;
		td3.id = "email-date-" + index;
		td3.innerText = emailArr[index].date;
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		inbox.appendChild(tr);
	}
}

function displayContacts(e) {
	e.preventDefault();
	if(this.getAttribute("clicked"))
	{
		return false;
	}
	this.setAttribute("clicked", true);
	var inbox = document.getElementById("contact-table");
	var index = this.getAttribute("data-contact");
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");
	tr.className = "tr-contact";
	td1.id = "first-name-" + index;
	td1.innerText = contacts[index].firstName;
	td2.id = "last-name-" + index;
	td2.innerText = contacts[index].lastName;
	td3.id = "email-" + index;
	td3.innerText = contacts[index].email;
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	inbox.appendChild(tr);
}

function orderByColumn() {
	var firstNameHeader = document.getElementById("first-name-header");
	var LastNameHeader = document.getElementById("last-name-header");
	var emailHeader = document.getElementById("email-header");
	firstNameHeader.onclick = orderAsc;
	LastNameHeader.onclick = orderAsc;
	emailHeader.onclick = orderAsc;
}

function orderAsc(e) {
	var table, rows, switching, i, x, y, shouldSwitch;
	var column = e.target.innerText;
	table = document.getElementById("contact-table");
	switching = true;
	while (switching) {
		switching = false;
		rows = table.rows;
		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			if (column === "first name") {
				x = rows[i].getElementsByTagName("TD")[0];
				y = rows[i + 1].getElementsByTagName("TD")[0];
			}
			else if (column === "last name") {
				x = rows[i].getElementsByTagName("TD")[1];
				y = rows[i + 1].getElementsByTagName("TD")[1];
			}
			else if (column === "email") {
				x = rows[i].getElementsByTagName("TD")[2];
				y = rows[i + 1].getElementsByTagName("TD")[2];
			}
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}