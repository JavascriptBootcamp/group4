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
		var divIncomeMail = document.querySelector("#list_incoming_emails");
		// divIncomeMail.appendChild(document.createElement("br"));
		var isBoldNeeded = emailIndex < 3;
		var email = emailArr[emailIndex];
		var incomeEmailTable = document.querySelector("#ie_tabel");
		console.log(incomeEmailTable);
		var tr = document.createElement("tr");
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
	}

	function fillContacts(){
		var divContactPersons = document.querySelector("#list_contact_persons");
		console.log(divContactPersons);

		for(var i=0; i<contacts.length; i++){
			var contactPersonButton = document.createElement("button");
			contactPersonButton.textContent = "Contact" +(i+1);
			contactPersonButton.onclick = addContactPerson.bind(contactPersonButton,i);
			divContactPersons.appendChild(contactPersonButton);
			divContactPersons.appendChild(document.createElement("br"));
		}
	}

	function addContactPerson(contactIndex){

	}

	fillIncomingMails();

	fillContacts();