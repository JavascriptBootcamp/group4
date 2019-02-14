var incomingEmailsArr = [
	{ from: "David Lev", subject: "Welcome", date: "10-02-19" },
	{ from: "Yosef Ashkenazi", subject: "Bruchi", date: "11-02-19" },
	{ from: "Yosef Mizrahi", subject: "The goal of the whole life", date: "10-02-19" },
	{ from: "Valery Sctranvaser", subject: "car master", date: "10-02-19" },
	{ from: "Terminator Accumulator", subject: "New generation JS machine", date: "10-02-19" },
	{ from: "Shmuel Lasri", subject: "Big tsdoke", date: "10-02-19" },
	{ from: "Ella nadoela", subject: "more job", date: "12-02-19" },
	{ from: "Bill Goldberg", subject: "We are the next winners", date: "10-02-19" },
	{ from: "Iggy Gogi", subject: "Zdarov Bratan", date: "13-02-19" },
	{ from: "Ayelet Hamevulbelet", subject: "Yuval Hamebulvalbubalal", date: "14-02-19" }
];

var outcomingEmailsArr = [
	{ from: "David Lev", subject: "The Best JS Programmer", date: "10-02-19" },
	{ from: "David Lev", subject: "Good", date: "10-02-19" },
	{ from: "David Lev", subject: "very good", date: "10-02-19" },
	{ from: "David Lev", subject: "well", date: "10-02-19" },
	{ from: "David Lev", subject: "amazing", date: "10-02-19" }
];

var contactsData = [
	{ firstName: "Yosef", lastName: "Ashkenazi", email: "bruchirebe@gamil.com" },
	{ firstName: "Yosef", lastName: "Mizrahi", email: "yosefhatsadik@gamil.com" },
	{ firstName: "Pavel", lastName: "Konovalov", email: "pashanasha@gamil.com" },
	{ firstName: "Andy", lastName: "Zorki", email: "andreypat@gamil.com" },
	{ firstName: "Eyal", lastName: "Itskovitch", email: "eyalicamop@gamil.com" }
];


var contactsLinksElems;
var emailsLinksElems;
var currentPageURL = location.href; // Return the entire URL of the current HTML page


if (currentPageURL.includes("contacts.html")) {
	getAlphabeticOrderInColumn();

	contactsLinksElems = document.getElementsByClassName("contact");
	for (var i = 0; i < contactsLinksElems.length; i++) {
		contactsLinksElems[i].onclick = displayContact;
	}
}
else {
	emailsLinksElems = document.getElementsByClassName("email");
	for (var i = 0; i < emailsLinksElems.length; i++) {
		emailsLinksElems[i].onclick = displayEmail;
	}
}


function displayContact(e) {
	e.preventDefault();

	//console.log(this);
	if(this.getAttribute("clicked")) return false;
	this.setAttribute("clicked", true);

	var contactsTable = document.getElementById("contacts-table");
	var contactIndex = this.getAttribute("contact-index");

	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");

	tr.className = "tr-contact";
	//td1.id = "first-name-" + contactIndex;
	td1.innerText = contactsData[contactIndex].firstName;
	//td2.id = "last-name-" + contactIndex;
	td2.innerText = contactsData[contactIndex].lastName;
	//td3.id = "email-" + contactIndex;
	td3.innerText = contactsData[contactIndex].email;

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	contactsTable.appendChild(tr);
}



function displayEmail(e) {
	e.preventDefault();

	//console.log(this);
	if(this.getAttribute("clicked")) return false;
	this.setAttribute("clicked", true);

	var emailMessagesTable = document.getElementById("inbox-table");
	var emailIndex = this.getAttribute("email-index");

	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");

	var thatPageURL = location.href;

	if(thatPageURL.includes("sent.html")) {
		tr.className = "tr-email";
		td1.innerText = outcomingEmailsArr[emailIndex].from;
		td2.innerText = outcomingEmailsArr[emailIndex].subject;
		td3.innerText = outcomingEmailsArr[emailIndex].date;

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		emailMessagesTable.appendChild(tr);
	}
	else if(thatPageURL.includes("inbox.html")) {
		tr.className = "tr-email";
		td1.innerText = incomingEmailsArr[emailIndex].from;
		td2.innerText = incomingEmailsArr[emailIndex].subject;
		td3.innerText = incomingEmailsArr[emailIndex].date;

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		emailMessagesTable.appendChild(tr);
	}
}


function getAlphabeticOrderInColumn() {
	var firstNameHeader = document.getElementById("first-name-header");
	var LastNameHeader = document.getElementById("last-name-header");
	var emailHeader = document.getElementById("email-header");

	firstNameHeader.onclick = getAscendingOrder;
	LastNameHeader.onclick = getAscendingOrder;
	emailHeader.onclick = getAscendingOrder;
}


function getAscendingOrder(e) {
	var contactsTable, rows, isContinueToChangeRowsOrder, currentRow, nextRow, toChangeRowsOrder;
	var currentColumnHeaderText = e.target.innerText;

	contactsTable = document.getElementById("contacts-table");
	isContinueToChangeRowsOrder = true;

	while(isContinueToChangeRowsOrder) {
		isContinueToChangeRowsOrder = false;

		rows = contactsTable.rows;
		
		for(var i = 1; i < rows.length - 1; i++) {
			toChangeRowsOrder = false;

			if (currentColumnHeaderText === "First Name") {
				currentRow = rows[i].getElementsByTagName("TD")[0];
				nextRow = rows[i + 1].getElementsByTagName("TD")[0];
			}
			else if (currentColumnHeaderText === "Last Name") {
				currentRow = rows[i].getElementsByTagName("TD")[1];
				nextRow = rows[i + 1].getElementsByTagName("TD")[1];
			}
			else if (currentColumnHeaderText === "Email") {
				currentRow = rows[i].getElementsByTagName("TD")[2];
				nextRow = rows[i + 1].getElementsByTagName("TD")[2];
			}

			if (currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {
				toChangeRowsOrder = true;
				break;
			}
		}

		if (toChangeRowsOrder) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			isContinueToChangeRowsOrder = true;
		}
	}
} 