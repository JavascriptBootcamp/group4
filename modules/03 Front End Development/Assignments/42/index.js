function Video(title, uploader, seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

    this.watch = function () {
        try {
            return `You watched all ${this.seconds} seconds of ${this.title}!`;
        } catch (error) {
            console.log("Oops... An error occured");
        }
    }
}

arr = [];

addFormFlag = false;

function watch(e){
e.preventDefault();
var tid ,nid,sid;
if(!addFormFlag){
     tid = "title";
     nid = "name";
    sid =  "sec";
}
else{
    addFormFlag = false;
    tid = "tid";
    nid = "nid";
   sid =  "sid";
}
var title = document.getElementById(tid).value;
var select = document.getElementById(nid);
var name = select.options[select.selectedIndex].text;
var sec = document.getElementById(sid).value;
var video = new Video(title,name,sec);
var str = video.watch();
arr.push(str);
document.getElementById("ph").innerText = str;
}

function wat(){
    addFormFlag = true;
    watch(event);
}

function addVideoForm(){

var div = document.getElementById("videoDiv");
var form = document.createElement("form");

var title = document.createElement("input");
title.type = "text";
title.placeholder = "title";
title.id = "tid"


var name = document.createElement("select");
name.id = "nid"
var opt1 = document.createElement("option");
opt1.innerText ="nnnn";
name.appendChild(opt1);
var opt2 = document.createElement("option");
opt2.innerText ="xxxx";
name.appendChild(opt2);
var opt3 = document.createElement("option");
opt3.innerText ="dddd";
name.appendChild(opt3);
var opt4 = document.createElement("option");
opt4.innerText ="eeeee";
name.appendChild(opt4);

var sec = document.createElement("input");
sec.type = "number";
sec.placeholder = "seconds";
sec.id = "sid"

var button = document.createElement("button");
button.innerHTML = "Add"
button.onclick = wat;

form.appendChild(title);
form.appendChild(name);
form.appendChild(sec);
form.appendChild(button);
div.appendChild(form);
}


function WatchAll(){
    var div = document.getElementById("WatchAll");
    for(var i in arr){
        if(arr.hasOwnProperty(i)){
            div.innerHTML += arr[i] + "<br/>";
        }
    }
}
