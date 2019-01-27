var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    var btn1 = document.createElement("BUTTON");
    var btn2 = document.createElement("BUTTON");
    var btn3 = document.createElement("BUTTON");
    btn1.innerText = "Like";
    btn2.innerText = "Comment";
    btn3.innerText = "Share";
    li.appendChild(btn1);
    li.appendChild(btn2);
    li.appendChild(btn3);  
}

document.querySelector("title").innerText = "Instush";
