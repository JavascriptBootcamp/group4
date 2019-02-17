var incomingEmails = [];
var outcomingEmails = [];
var contactPersons = [];

function Email(first, second, third, fourth){
    this.firstKey = first;
    this.secondKey = second;
    this.thirdKey = third;
    this.fourth = fourth;
}
function Contact(firstName, lastName, emailAddress){
    this.firstKey = firstName;
    this.secondKey = lastName;
    this.thirdKey = emailAddress;
}
function displayContentToggle(currentMessage){
    var message = document.getElementById(currentMessage) ;
    message.classList.toggle("hide-content");
}
function AlterContent() {
    try {
        createTable(incomingEmails,"incoming-emails", ["FROM","SUBJECT","DATE"]);
    }
    catch(err) {
    }
    try {
        createTable(outcomingEmails,"outcoming-emails",["FROM","SUBJECT","DATE"]);
    }
    catch(err) {
    }
    try {
        createTable(contactPersons,"contact-persons",["FIRST NAME","LAST NAME","EMAIL ADDRESS"]);
    }
    catch(err) {
    }
}
function sort(arr, keyNum){
    arr.sort(function(a, b) {
        return a.keyNum - b.keyNum;
    });
    AlterContent();
}
function createTable(array, div, headerTitle, message){
    var table = document.createElement("table");
    var tr_header = document.createElement("tr");
    var td_first = document.createElement("th");
    var td_second = document.createElement("th");
    var td_third = document.createElement("th");
    var td_first_text = document.createTextNode(headerTitle[0]);
    var td_second_text = document.createTextNode(headerTitle[1]);
    var td_third_text = document.createTextNode(headerTitle[2]);

    document.getElementById(div).innerHTML = "";
    table.id = div+"-tbl";
    document.getElementById(div).appendChild(table);
    table.appendChild(tr_header);
    tr_header.appendChild(td_first);
    tr_header.appendChild(td_second);
    tr_header.appendChild(td_third);
    td_first.appendChild(td_first_text);
    td_second.appendChild(td_second_text);
    td_third.appendChild(td_third_text);
    td_first.addEventListener("click", function(){sort(array,"firstKey");});
    td_second.addEventListener("click", function(){sort(array,"secondKey");});
    td_third.addEventListener("click", function(){sort(array,"thirdKey");});

    for (var i = 0; i < array.length; i++) {
        var tr = document.createElement("tr");
        var td_first_content = document.createElement("td");
        var td_second_content = document.createElement("td");
        var td_third_content = document.createElement("td");
        var td_first_text_content = document.createTextNode(array[i].firstKey);
        var td_second_text_content = document.createTextNode(array[i].secondKey);
        var td_third_text_content = document.createTextNode(array[i].thirdKey);

        td_first_content.classList.add("first-content");  
        td_second_content.classList.add("second-content");
        td_third_content.classList.add("third-content"); 
        tr.appendChild(td_first_content);
        tr.appendChild(td_second_content);
        tr.appendChild(td_third_content);
        tr.setAttribute("onclick","displayContentToggle('"+div + i+ "');");
        td_first_content.appendChild(td_first_text_content);
        td_second_content.appendChild(td_second_text_content);
        td_third_content.appendChild(td_third_text_content);
        table.appendChild(tr);

        if (div == "incoming-emails" || div == "outcoming-emails") {
            var tr_content =  document.createElement("tr");
            var td_content =  document.createElement("td");
            tr_content.id = div + i;
            tr_content.className +="hide-content" ;
            tr_content.className +=" message-body" ;
            td_content.setAttribute("colspan","3");
            var td_content_text = document.createTextNode(array[i].fourth);
            tr_content.appendChild(td_content);
            td_content.appendChild(td_content_text);
            table.append(tr_content);
        }
    }
}
//****************************************** Demo Data **************************************************
for (var i = 0 ; i < 10; i++)
{
    var message = new Email("Amir"+i , "incoming email subject", "0" + i + "/01/2019", "DEMO MESSAGE" + i);
    incomingEmails.push(message);
}
for (var i = 0 ; i < 5; i++)
{
    var message = new Email("yosi"+i , "outcoming email subject", "0" + i + "/01/2019", "DEMO MESSAGE" + i);
    outcomingEmails.push(message);
}
for (var i = 0 ; i < 10; i++)
{
    var contact = new Contact("Amir"+i , "Haj", "Amir@gmail.com");
    contactPersons.push(contact);
}
// *********************************************************************************************************
AlterContent();
