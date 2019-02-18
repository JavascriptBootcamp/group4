window.onload = addRowHandlers();
function myMain(){
    emailsTable = document.getElementById("emailsTable");

var mail0={from:"TV",subject:"Update ",date:"25-5-2017"};
   var mail1={from:"Malak",subject:"Studylinks",date:"13-2-2019"};
   var mail2={from:"SQLink",subject:"Schedule",date:"10-2-2019"};
   var mail3={from:"University",subject:"Graduation Party",date:"25-2-2019"};
   var mail4={from:"EnglishLesson",subject:"Cancelation day",date:"1-2-2019"};
   var mail5={from:"TV2",subject:"Update ",date:"25-5-2017"};
   var mail6={from:"Malak2",subject:"Studylinks",date:"13-2-2018"};
   var mail7={from:"SQLink2",subject:"Schedule",date:"10-2-2017"};
   var mail8={from:"University2",subject:"Graduation Party",date:"25-2-2016"};
   var mail9={from:"EnglishLesson2",subject:"Cancelation day",date:"1-2-2015"};
  inboxArr=[mail0,mail1,mail2,mail3,mail4,mail5,mail6,mail7,mail8,mail9];
  var mailSent0={from:"Malak",subject:"Update ",date:"25-5-2017"};
   var mailSent1={from:"Malak",subject:"Studylinks",date:"13-2-2019"};
   var mailSent2={from:"Malak",subject:"Schedule",date:"10-2-2017"};
   var mailSent3={from:"Malak",subject:"Graduation Party",date:"25-2-2011"};
   var mailSent4={from:"Malak",subject:"Cancelation day",date:"1-2-2010"};
   sentArr=[mailSent0,mailSent1,mailSent2,mailSent3,mailSent4];
    var contact0= {firstName:"University",lastName:"Haifa",email:"univHaif@gmail.com"};
    var contact1= {firstName:"TV",lastName:"ads",email:"ads@gmail.com"};
    var contact2= {firstName:"English",lastName:"Lessons",email:"engLessons@gmail.com"};
    var contact3= {firstName:"sqlink",lastName:"fmily",email:"sqlink@gmail.com"};
    var contact4= {firstName:"Elinor",lastName:"Garagi",email:"elinor@gmail.com"};
    contacts=[contact0,contact2,contact3,contact4];

    emailContent=document.getElementById("emailContent");
    for(var i=0;i<inboxArr.length;i++){
        tr = document.createElement("tr");
         td1= document.createElement("td");
        td1.innerText=inboxArr[i].from;
         td2= document.createElement("td");
        td2.innerText = inboxArr[i].subject;
         td3= document.createElement("td");
        td3.innerText=inboxArr[i].date;
        if(i===0||i===1||i===2)
        tr.classList.add("first3Emails");
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
     
        emailsTable.appendChild(tr);   
    }
rows =emailsTable.rows;

for (var i = 0; i < rows.length; i++)
{
            rows[i].addEventListener("click", function(){
                           alert("d");
        for (var j = 0;j < rows[i].children.length; j++){
          str +=" "+rows[i].children[j].innerText;
            emailContent.innerHTML=str;
            str="";
        }
    
    
} );   }            // this function has an issue with onclick it doesnt recognize it inspite is printed it by alert









    
    
    emailsTable.innerHTML+="<span class='maintitle'><b>Sent<br></b></span>";
    for(var i=0;i<sentArr.length;i++){
        var tr = document.createElement("tr");
        var td1= document.createElement("td");
        td1.innerText=sentArr[i].from;
        var td2= document.createElement("td");
        td2.innerText = sentArr[i].subject;
        var td3= document.createElement("td");
        td3.innerText=sentArr[i].date;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        emailsTable.appendChild(tr);
    }
   contactsTable= document.getElementById("contactsTable");
    emailsTable.innerHTML+="<span class='maintitle'><b>Contacts<br></b></span>";
    for(var i=0;i<contacts.length;i++){
        var tr = document.createElement("tr");
        var td1= document.createElement("td");
        td1.innerText=contacts[i].firstName;
        var td2= document.createElement("td");
        td2.innerText = contacts[i].lastName;
        var td3= document.createElement("td");
        td3.innerText=contacts[i].email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        contactsTable.appendChild(tr);
    }
}

document.getElementById("inb").addEventListener("click", function(){
    event.preventDefault();
    var emailsTable= document.getElementById("emailsTable");
    var contactsTable= document.getElementById("contactsTable");
    contactsTable.innerHTML="";
    emailsTable.innerHTML="";
     emailsTable.innerHTML+="<span class='maintitle'><b>Income<br></b></span>";
    for(var i=0;i<inboxArr.length;i++){
        var tr = document.createElement("tr");
        var td1= document.createElement("td");
        td1.innerText=inboxArr[i].from;
        var td2= document.createElement("td");
        td2.innerText = inboxArr[i].subject;
        var td3= document.createElement("td");
        td3.innerText=inboxArr[i].date;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        emailsTable.appendChild(tr);


}});
    document.getElementById("sent").addEventListener("click", function(){
        event.preventDefault();
            var emailsTable= document.getElementById("emailsTable");
            var contactsTable= document.getElementById("contactsTable");
            contactsTable.innerHTML="";
            emailsTable.innerHTML="";
        emailsTable.innerHTML="<span class='maintitle'><b>Sent<br></b></span>";
        for(var i=0;i<sentArr.length;i++){
            var tr = document.createElement("tr");
            var td1= document.createElement("td");
            td1.innerText=sentArr[i].from;
            var td2= document.createElement("td");
            td2.innerText = sentArr[i].subject;
            var td3= document.createElement("td");
            td3.innerText=sentArr[i].date;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            emailsTable.appendChild(tr);
        
}});

    

    
document.getElementById("contacts").addEventListener("click", function(){
       event.preventDefault();
      contactsTable= document.getElementById("contactsTable");
      contactsTable.innerHTML="";
      tr = document.createElement("tr");
      td1= document.createElement("th");
     td2= document.createElement("th");
      td3= document.createElement("th");
      td1.innerHTML="first name";
      td1.id="f";
      td1.onclick=function(){
        contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0));
         document.getElementById("contacts").click();

      };
      td2.innerHTML="last name";
      td2.id="l"; 
      td2.onclick=function(){
        contacts.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
        document.getElementById("contacts").click();
      }
      td3.innerHTML="email";
      td3.id="em";
      td3.onclick=function(){
        contacts.sort((a, b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0));
        document.getElementById("contacts").click();
      }
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      contactsTable.appendChild(tr);      
       emailsTable.innerHTML="<span class='maintitle'><b>Contacts<br></b></span>";
       for(var i=0;i<contacts.length;i++){
           var tr = document.createElement("tr");
           var td1= document.createElement("td");
           td1.innerText=contacts[i].firstName;
           var td2= document.createElement("td");
           td2.innerText = contacts[i].lastName;
           var td3= document.createElement("td");
           td3.innerText=contacts[i].email;
           tr.appendChild(td1);
           tr.appendChild(td2);
           tr.appendChild(td3);
           contactsTable.appendChild(tr);
               }
            
          });



        


    