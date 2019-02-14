open = false;

function openMenu() {

    open = !open;
    var menuDiv = document.getElementById("menuDiv");
    if (open) {
        menuDiv.style.visibility = "visible";
    }
    else {
        menuDiv.style.visibility = "hidden";
    }
}


function activeLink(linkNmae){
    var ul_links = document.querySelectorAll("#ul_links li");
    for(var li in ul_links){
        if(ul_links.hasOwnProperty(li)){
            var link = ul_links[li];
            if(link.id == linkNmae){
                link.className += " active";
            }
            else
            link.className = "category";
        }
    }
}


function Email(from, subject, date, content) {

    this.from = from;
    this.subject = subject;
    this.date = date;
    this.content = content;
}

function init_email_List(emailType) {

    activeLink(emailType);
    var main_div = document.getElementById("ph");
    main_div.innerHTML = "";
    var ul = document.getElementById("contentList");
    ul.innerHTML = "";
    var li_header = document.createElement("li");
    li_header.className = "list_header";
    li_header.innerHTML = "<label class='firstColumn'>from</label><label>subject</label><label class='secondColumn'>date</label>"
    ul.appendChild(li_header);
    var arr = emailData[emailType];
    for (var i in arr) {
        var email = new Email(arr[i].from, arr[i].subject, arr[i].date, arr[i].content);
        var li = document.createElement("li");
        li.className = "li-info";
        if (i < 3) {
            li.style.fontWeight = "bold";
        }
        li.innerHTML = "<label class='firstColumn'>" + email.from + "</label><label>" + email.subject + "</label><label class='secondColumn'>" + email.date + "</label>";
        li.onclick = showEmailContent.bind(email);
        ul.appendChild(li);
    }
}

function showEmailContent() {
    var ul = document.getElementById("contentList");
    ul.innerHTML = "";
    var main_div = document.getElementById("ph");
    main_div.innerHTML = "";
    var subject = document.createElement("h3");
    subject.innerText = this.subject;
    var from = document.createElement("label");
    from.innerText = this.from;
    var date = document.createElement("label");
    date.innerText = this.date;
    var content = document.createElement("p");
    content.innerText = this.content;

    main_div.appendChild(subject)
    main_div.appendChild(date)
    main_div.appendChild(from)
    main_div.appendChild(content)
}



function Contact(firstName,lastName, emailAddress) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
}

function init_contact_list(data){
    activeLink("contacts");
    var arr;
    var main_div = document.getElementById("ph");
    main_div.innerHTML = "";
    var ul = document.getElementById("contentList");
    ul.innerHTML = "";
    var li_header = document.createElement("li");
    li_header.className = "list_header";
    li_header.innerHTML = "<label class='firstColumn'>first Name</label><label>last Name</label><label class='secondColumn'>email Address</label>"
    ul.appendChild(li_header);
    arr = data?data:emailData["contacts"];
    var firstName,lastName,emailAddress;
    for (var i in arr) {
        var contact = new Contact(arr[i].firstName, arr[i].lastName, arr[i].emailAddress);
        var li = document.createElement("li");
        li.className = "li-info";

        firstName = document.createElement("label");
        firstName.className = "firstColumn";
        firstName.innerText = contact.firstName;
        firstName.onclick = sortByColumn.bind(null,'firstName');
        li.appendChild(firstName);

        lastName = document.createElement("label");
        lastName.className = "secondColumn";
        lastName.innerText = contact.lastName;
        lastName.onclick = sortByColumn.bind(null,'lastName');
        li.appendChild(lastName);

        emailAddress = document.createElement("label");
        emailAddress.innerText = contact.emailAddress;
        emailAddress.onclick = sortByColumn.bind(null,'emailAddress');
        li.appendChild(emailAddress);

        ul.appendChild(li);
    }
}

function sortByColumn(colName){
    var arr;
    arr = emailData["contacts"];
       arr.sort(function(_a,_b){
        var a = _a[colName].toUpperCase();
        var b = _b[colName].toUpperCase();

         if(a > b){
             return 1;
         }
         else if(a < b){
             return -1;
         }
         return 0;  
    })

    init_contact_list(arr);
}


