function addRow(){
    var studentName = document.getElementById("student_name_input").value;
    var subject = document.getElementById("subject_input").value;
    
    var studentstable = document.getElementById("students_table");
    var tr = document.createElement("tr");
    var studentTd = document.createElement("td");
    var subjectTd = document.createElement("td");
    studentTd.innerText = studentName;
    subjectTd.innerText = subject;
    tr.appendChild(studentTd);
    tr.appendChild(subjectTd);
    studentstable.appendChild(tr);
}

function pickOne(){
    var studentstable = document.getElementById("students_table");
    var numOfRows = studentstable.rows.length;
    var randomRow = Math.floor(Math.random() * (numOfRows - 1)) + 1;
    var selectedRow = studentstable.rows[randomRow];
    var studentName = selectedRow.getElementsByTagName("td")[0].innerText;
    var subject = selectedRow.getElementsByTagName("td")[1].innerText;

    var result = document.getElementById('result');
    var divStudentName = document.createElement("div");
    var divSubjectName = document.createElement("div");

    var closeBtn = document.createElement("button");
    var container = document.getElementById('container');

    divStudentName.id = "div_student_name"; 
    divSubjectName.id = "div_subject_name"; 
    closeBtn.id = "close_btn";

    divStudentName.innerText = studentName;
    divSubjectName.innerText = subject;
    closeBtn.innerText = 'X';
    closeBtn.onclick = closeFrame; 

    container.style.opacity = "0.25";

    result.appendChild(divStudentName);
    result.appendChild(divSubjectName);
    result.appendChild(closeBtn);

}

function closeFrame(){
    var container = document.getElementById('container');
    var result = document.getElementById('result');
    container.style.opacity = "1";
    removeChilds(result);
    frame = null;

}

function removeChilds(node){
    while(node.hasChildNodes()){
        node.removeChild(node.lastChild);
    }
}