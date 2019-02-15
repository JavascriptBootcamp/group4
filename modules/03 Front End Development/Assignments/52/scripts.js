
var inboxMails = [
  { from: "david", subject: "job", content: "bla bla bla <br>bla bla", date: "15-02-19" },
  { from: "moti", subject: "new car", content: "bla bla bla <br>bla bla", date: "13-02-19" },
  { from: "yaniv", subject: "pass for facebook", content: "bla bla bla <br>bla bla", date: "13-02-19" },
  { from: "liav", subject: "new job", content: "bla bla bla <br>bla bla", date: "12-02-19" },
  { from: "liav", subject: "pictures", content: "bla bla bla <br>bla bla", date: "10-02-19" },
  { from: "david", subject: "win in loto", content: "bla bla bla <br>bla bla", date: "09-02-19" },
  { from: "amir", subject: "take your..", content: "bla bla bla <br>bla bla", date: "08-02-19" },
  { from: "moti", subject: "father and mather", content: "bla bla bla <br>bla bla", date: "08-02-19" },
  { from: "yaniv", subject: "job", content: "bla bla bla <br>bla bla", date: "07-02-19" },
  { from: "amir", subject: "job", content: "bla bla bla <br>bla bla", date: "07-02-19" }];


var sentMails = [
  { from: "Evyatar", subject: "job", content: "bla bla bla <br>bla bla", date: "15-02-19" },
  { from: "Evyatar", subject: "job", content: "bla bla bla <br>bla bla", date: "15-02-19" },
  { from: "Evyatar", subject: "job", content: "bla bla bla <br>bla bla", date: "15-02-19" },
  { from: "Evyatar", subject: "job", content: "bla bla bla <br>bla bla", date: "15-02-19" },
  { from: "Evyatar", subject: "job", content: "bla bla bla <br>bla bla", date: "15-02-19" }];

var arrContacts = [
  { firstname: "Evyatar", lastname: "Duek", mail: "avidada@gmail.com" },
  { firstname: "David", lastname: "Cohen", mail: "bla@gmail.com" },
  { firstname: "Moti", lastname: "Cohen", mail: "bkl@gmail.com" },
  { firstname: "Liran", lastname: "Cohen", mail: "daa@gmail.com" },
  { firstname: "Avi", lastname: "Levi", mail: "dfaa@gmail.com" }];


function sortCol(event) {
  var mSort = event.target.id;
  console.log(mSort);

  arrContacts.sort(compare);
  function compare(a,b) {
   switch (mSort){
   case "firstname":
    if (a.firstname < b.firstname)
      return -1;
    return 1;
    case "lastname":
    if (a.lastname < b.lastname)
      return -1;
    return 1;
    case "mail":
    if (a.mail < b.mail)
      return -1;
    return 1;
   }
  }
  var table = document.getElementById("tableContacts");
  table.innerHTML = '<th id="firstname" onclick="sortCol(event)">First name</th><th id="lastname" onclick="sortCol(event)">Last name</th><th id="mail" onclick="sortCol(event)">Email address</th>';
  printContacts(arrContacts);
}


function printContacts(array) {

  var table = document.getElementById("tableContacts");
  for (var i = 0; i < array.length; i++) {
    var row = document.createElement("tr");
    var contact = array[i];
    for (var key in contact) {
      var td = document.createElement("td");
      td.innerText = contact[key];
      row.appendChild(td);
    }
    table.appendChild(row)
  }
}


function printInbox(array) {

  var table = document.getElementById("tableMails");
  for (var i = 0; i < array.length; i++) {

    var row = document.createElement("tr");
    if (i <= 2)
      row.className = "firstMails";
    var email = array[i];
    for (var key in email) {
      if (key != "content") { // not enter the content to td
        var td = document.createElement("td");
        td.innerText = email[key];
        if (key == "subject") {
          td.className = "tdSubject";
          td.id = "td" + i;
          td.onclick = showContent, event;
          var div = document.createElement("div");
          div.hidden = true;
          div.innerHTML = email["content"];
          td.appendChild(div);
        }
        row.appendChild(td);
      }
      table.appendChild(row)
    }
  }
}

function showContent(event) {
  // console.log("#" + event.target.id + " div");
  if (event.target.id) {
    var a = document.querySelector("#" + event.target.id + " div").hidden;
    if (a == true)
      document.querySelector("#" + event.target.id + " div").hidden = false;
    else
      document.querySelector("#" + event.target.id + " div").hidden = true;
  }
}
