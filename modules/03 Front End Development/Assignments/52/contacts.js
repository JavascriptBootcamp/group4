var contactPersons = [{ firstName: "Matan", lastName: "Atiya", email: "m@gmail.com" },
{ firstName: "Ateret", lastName: "Ness", email: "A@walla.com" },
{ firstName: "Dror", lastName: "Kaplan", email: "d@yahoo.com" }];

var contact_Table_Body_El = document.querySelector("tbody");

function sortBy(th_El) {
    var sort_by = th_El.innerText.split(" ")[0];
    if (sort_by === "First"){
        contactPersons.sort((a,b) => (a.firstName > b.firstName) ? 1 : -1); 
    }
    else if (sort_by === "Last"){
        contactPersons.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1);
    }
    else {
        contactPersons.sort((a,b) => (a.email > b.email) ? 1 : -1);
    }

    showContactPersons();
}

function creatPersonTr(contactPersonObj) {
    var tr = document.createElement("tr");

    var tdFirstName = document.createElement("td");
    tdFirstName.innerText = contactPersonObj.firstName;

    var tdLastName = document.createElement("td");
    tdLastName.innerText = contactPersonObj.lastName;

    var tdEmail = document.createElement("td");
    tdEmail.innerText = contactPersonObj.email;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdEmail);

    return tr;

}

function showContactPersons() {
    var tableHead = contact_Table_Body_El.childNodes[0];
    contact_Table_Body_El.innerHTML = "";
    contact_Table_Body_El.appendChild(tableHead);

    for (let i = 0; i < contactPersons.length; i++) {
        var contectPersonTr = creatPersonTr(contactPersons[i]);
        contact_Table_Body_El.appendChild(contectPersonTr);
    }
}

function onLoadingPage() {
    showContactPersons();

    var allThead = document.querySelectorAll("#content table th");
    for (let i = 0; i < allThead.length; i++) {
        allThead[i].onclick = (event) => {
            sortBy(event.currentTarget);
        }
    }

}

onLoadingPage();