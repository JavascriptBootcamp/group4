var contacts = [
    { firstname: "moshiko", lastname: "a", mail: "moshikoa@gmail.com" },
    { firstname: "shai", lastname: "shai", mail: "shai@gmail.com" },
    { firstname: "avi", lastname: "avi", mail: "avi@gmail.com" },
    { firstname: "guy", lastname: "guy", mail: "guy@gmail.com" },
    { firstname: "matan", lastname: "matan", mail: "matan@gmail.com" }];

function printContacts() {
    var tableBody = document.getElementById("tbody");
    tableBody.innerHTML = "";

    for (var i = 0; i < contacts.length; i++) {
        var tr = document.createElement("tr");
        for (var key in contacts[i]) {
            var td = document.createElement("td");
            td.innerText = contacts[i][key];
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}
function sort(e) {
    var id = e.target.id;

    contacts.sort(function (a, b) {
        return a[id] < b[id] ? -1 : 1;
    });
    printContacts();
}

printContacts();
