var emailArr = [
	{ from: "dani", subject: "surfing article", date: "23-02-20" },
	{ from: "yosi", subject: "files sending", date: "11-10-18" },
	{ from: "maly", subject: "homework exsercise", date: "23-02-18" },
	{ from: "dalya", subject: "invitation for wedding", date: "15-07-19" },
	{ from: "zuri", subject: "Business meeting", date: "12-02-19" },
	{ from: "gaby", subject: "surfing article", date: "23-02-20" },
	{ from: "yosi", subject: "files sending", date: "11-10-18" },
	{ from: "maly", subject: "homework exsercise", date: "23-02-18" },
	{ from: "dalya", subject: "invitation for wedding", date: "15-07-19" },
    { from: "zuri", subject: "Business meeting", date: "12-02-19" }];
    
var emailArrOut = [
	{ from: "dani", subject: "surfing article", date: "23-02-20" },
	{ from: "dani", subject: "files sending", date: "11-10-18" },
	{ from: "dani", subject: "homework exsercise", date: "23-02-18" },
	{ from: "dani", subject: "invitation for wedding", date: "15-07-19" },
    { from: "dani", subject: "Business meeting", date: "12-02-19" }];
    
var contacts = [
	{ firstName: "yosi", lastName: "buchnik", email: "yosibu@gamil.com" },
	{ firstName: "maly", lastName: "ninio", email: "malyninio@gamil.com" },
	{ firstName: "dalya", lastName: "buchnik", email: "dalyabuchnik@gamil.com" },
	{ firstName: "zuri", lastName: "buchnik", email: "buchnikzuri@gamil.com" },
	{ firstName: "nissan", lastName: "ninio", email: "nissanninio@gamil.com" }];

var incomingFirst3Counter = 0;
var sentFirst3Counter = 0;
var choosenContacts = new Array();

function sortContacts(sortBy){
	var keys = new Array();
    var values =  {};
	var key;
	for(var i=0;i<choosenContacts.length;i++){
		var contactObj = choosenContacts[i];
		firstName = contactObj['firstName'];
		lastName = contactObj['lastName'];
		email = contactObj['email'];
		if(sortBy === 'firstName'){
			key = email + firstName + lastName;
		}
		else if(sortBy === 'lastName'){
			key = lastName + firstName + email;
		}
		else if(sortBy === 'email'){
			key = email + firstName + lastName;
		}
		keys.push(key);
		values[key] = contactObj;
	}
	clearContacts();
	fillContactsSorted(keys.sort(),values);
}

function clearContacts(){
	var contactsTable = document.querySelector("#c_table");
	while(contactsTable.childElementCount > 1){
		contactsTable.removeChild(contactsTable.lastChild);
	}
}

function fillContactsSorted(keys,values){
	var contactsTable = document.querySelector("#c_table");

	for(var i =0; i<keys.length;i++){
		var contactKey = keys[i];
		var contactPerson = values[contactKey];
		var tr = document.createElement("tr");

		var tdFirstName = document.createElement("td");
		var tdLastName = document.createElement("td");
		var tdEmailAddress = document.createElement("td");

		tdFirstName.textContent = contactPerson["firstName"];
		tdLastName.textContent = contactPerson["lastName"];
		tdEmailAddress.textContent = contactPerson["email"];

		tr.appendChild(tdFirstName);
		tr.appendChild(tdLastName);
		tr.appendChild(tdEmailAddress);

		contactsTable.appendChild(tr);
	}
}

	function fillIncomingMails(){
		var divIncomeMail = document.querySelector("#list_incoming_emails");

		for(var i=0; i<emailArr.length; i++){
			var emailButton = document.createElement("button");
			emailButton.textContent = "Email" +(i+1);
			emailButton.onclick = addIncomingEmail.bind(emailButton,i);
			divIncomeMail.appendChild(emailButton);
			divIncomeMail.appendChild(document.createElement("br"));
		}
	}
	
	function addIncomingEmail(emailIndex){
		var isBoldNeeded = incomingFirst3Counter < 3;
		var email = emailArr[emailIndex];
		var incomeEmailTable = document.querySelector("#ie_tabel");
		var tr = document.createElement("tr");
		tr.className = "data";
		if(isBoldNeeded){
			tr.style.fontWeight = 'bold';
		}
		var tdFrom = document.createElement("td");
		var tdSubject = document.createElement("td");
		var tdDate = document.createElement("td");

		tdFrom.textContent = email["from"];
		tdSubject.textContent = email["subject"];
		tdDate.textContent = email["date"];

		tr.appendChild(tdFrom);
		tr.appendChild(tdSubject);
		tr.appendChild(tdDate);

		incomeEmailTable.appendChild(tr);

		this.disabled = true;
		incomingFirst3Counter++;
	}

	function fillContacts(){
		var divContactPersons = document.querySelector("#list_contact_persons");

		for(var i=0; i<contacts.length; i++){
			var contactPersonButton = document.createElement("button");
			contactPersonButton.textContent = "Contact" +(i+1);
			contactPersonButton.onclick = addContactPerson.bind(contactPersonButton,i);
			divContactPersons.appendChild(contactPersonButton);
			divContactPersons.appendChild(document.createElement("br"));
		}
	}
	
	function addContactPerson(contactIndex){
		var contactPerson = contacts[contactIndex];
		choosenContacts.push(contactPerson);
		var contactsTable = document.querySelector("#c_table");
		var tr = document.createElement("tr");
		tr.className = "data";

		var tdFirstName = document.createElement("td");
		var tdLastName = document.createElement("td");
		var tdEmailAddress = document.createElement("td");

		tdFirstName.textContent = contactPerson["firstName"];
		tdLastName.textContent = contactPerson["lastName"];
		tdEmailAddress.textContent = contactPerson["email"];

		tr.appendChild(tdFirstName);
		tr.appendChild(tdLastName);
		tr.appendChild(tdEmailAddress);

		contactsTable.appendChild(tr);

		this.disabled = true;
	}

	function fillSentMails(){
		var divSentMail = document.querySelector("#list_sent_emails");

		for(var i=0; i<emailArrOut.length; i++){
			var emailButton = document.createElement("button");
			emailButton.textContent = "Email" +(i+1);
			emailButton.onclick = addSentEmail.bind(emailButton,i);
			divSentMail.appendChild(emailButton);
			divSentMail.appendChild(document.createElement("br"));
		}
	}

	function addSentEmail(emailIndex){
		var isBoldNeeded = sentFirst3Counter < 3;
		var email = emailArrOut[emailIndex];
		var sentEmailTable = document.querySelector("#oe_tabel");
		var tr = document.createElement("tr");
		tr.className = "data";
		if(isBoldNeeded){
			tr.style.fontWeight = 'bold';
		}
		var tdFrom = document.createElement("td");
		var tdSubject = document.createElement("td");
		var tdDate = document.createElement("td");

		tdFrom.textContent = email["from"];
		tdSubject.textContent = email["subject"];
		tdDate.textContent = email["date"];

		tr.appendChild(tdFrom);
		tr.appendChild(tdSubject);
		tr.appendChild(tdDate);

		sentEmailTable.appendChild(tr);

		this.disabled = true;
		sentFirst3Counter++;
	}

	var page = document.location.href;
	if (page.includes("contacts")) {
		fillContacts();
	}
	else if(page.includes("inbox")) {
		fillIncomingMails();
	}
	else if(page.includes("sent")) {
		fillSentMails();
	}