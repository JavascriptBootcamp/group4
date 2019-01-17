data = {};
time = 10
index = 0;
function init(i) {
    index = i;
    if (i == 1) {
        initTime();
    }
    else { time = 11; }
    var k = 0;
    var quiz = document.getElementById("quiz");
    var str = "";
    str += "<table>";
        str += "<tr>";
        str += "<td colspan='2'>";
        str += question["q" + i].question ;
        str += "</td>";
        for (var j = 1; j < 5; j = j + 2) {
            str += "<tr>";
            str += "<td id = '"+i+"-"+j+"' onclick = switch_q("+i+","+j+",this)>";
            str += j + "." + question["q" + i][j];
            str += "</td>";
            k = j + 1;
            str += "<td  id = '" + i + "-" + k + "' onclick = switch_q(" + i + ","+ k +",this)>";
            str += j+1 + "." + question["q" + i][j + 1];
            str += "</td>";
            str += "</tr>";
        }
    
        str += "</table>";
        if (i == 10) {
            str += "<input type='hidden' value='1547375825757'>";
            str += "<button onclick='postData()'>Submit</button>";
        }
        quiz.innerHTML = str;
}



function switch_q(quest,answer,obj){

    var td = document.getElementById(obj.id);
    if (answer == question["q" + quest]["correct"]) {
        td.style.color = "green";
    }
    else {
        td.style.color = "red";
    }
    data[quest] = {
        question: question["q" + quest]["question"],
        answer: question["q" + quest][answer]
    }
    if (quest < 10) {
        setTimeout(function () { init(quest + 1) }, 3000);
    }

}

function initTime() {
    
    document.getElementById("time").innerHTML = `Time: ${time}`;
    h = setInterval(function () { setTime() }, 1000);
};

function setTime() {
    if (time <= 1) {
        data[index] = {
            question: question["q" + index]["question"],
            answer: "No Answer"
        }
        clearInterval(h); 
        if (index < 10) {
            init(index + 1);
            initTime(index + 1);
        }
    }
    time -= 1;
    document.getElementById("time").innerHTML = `Time: ${time}`;;
}


function postData() {
    var http = new XMLHttpRequest();
    var url = 'http://localhost:3000/quiz';
    http.open("POST", url, true);

    http.onreadystatechange = (e) => {
        if (http.readyState == 4 && http.status == 200)
        console.log(http.responseText);
    }

    http.send(data);
}