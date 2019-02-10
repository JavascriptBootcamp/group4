function displayMsg(msg) {
    var display_div = document.getElementById('display');
    var para = document.createElement("p");
    var node = document.createTextNode(msg);
    para.appendChild(node);
    display_div.appendChild(para);
}
function ClearMsgAndInput() {
    var display_div = document.getElementById('display');
    display_div.innerHTML = '';
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
}



function CheckNum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    ClearMsgAndInput();
    var display_div = document.getElementById('display');
    if (num1 < 1 || num1 > 100 || num2 < 1 || num2 > 100) {
        displayMsg("the numbers shuld be between 1-100");
        
    }
    else if (num1 < num2) {
        var dis;
        for (var i = num1; i <= num2; i++){
            dis = (i % 2 === 0 ? i+" is even" :i+" is odd");
           // display_div.innerHTML = display_div.innerText + dis;
           displayMsg(dis)
        }
    }
    else {
        displayMsg("second number " +num1 + " is bigger then first " + num2);    
    }
}