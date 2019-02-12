var incomingEmails = [
    { from: "lital", subject: "pictures", date: "20-02-20" },
    { from: "yosi", subject: "travel", date: "05-11-18" },
    { from: "lea", subject: "dinnar", date: "14-03-18" },
    { from: "eran", subject: "next week", date: "05-08-19" },
    { from: "yaniv", subject: "next week meeting", date: "12-08-19" },
    { from: "chen", subject: "surfing article", date: "15-02-20" },
    { from: "or", subject: "files sending", date: "17-12-18" },
    { from: "ofek", subject: "travel plan", date: "23-05-18" },
    { from: "shira", subject: "homework", date: "18-09-19" },
    { from: "keren", subject: "Business plan", date: "12-08-19" }
]
var outCamingEmails = [
    { from: "chen", subject: "surfing article", date: "15-02-20" },
    { from: "or", subject: "files sending", date: "17-12-18" },
    { from: "ofek", subject: "travel plan", date: "23-05-18" },
    { from: "shira", subject: "homework", date: "18-09-19" },
    { from: "keren", subject: "Business plan", date: "12-08-19" }
]
function printEmail(arraName) {
    var emailIndex = document.getElementById("emailNumber").value;
    var table = document.getElementById("email-table");
    var row = document.createElement("tr");
    var email = arraName[emailIndex];
    for (var key in email) {
        var td = document.createElement("td")
        td.innerText = email[key];
        row.appendChild(td);
    }
    table.appendChild(row)
    document.getElementById("emailNumber").value = ""

}
