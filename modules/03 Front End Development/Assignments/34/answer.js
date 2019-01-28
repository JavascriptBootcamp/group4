function initPage(){
    var inputs = new Array();
    for(var i=0; i<10; i++){
        var ti = document.createElement("input");
        ti.id = "text" + i;
        inputs.push(ti);
        document.body.appendChild(inputs[i]);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("br"));
    }  
    var submitBtn = document.createElement("button");
    submitBtn.innerText = "submit";
    submitBtn.id = "submitButton"
    submitBtn.onclick = printWords;
    submitBtn.style.width = '173px';
    submitBtn.style.height = '25px';
    document.body.appendChild(submitBtn);
 
}

function printWords(){
    var div = document.createElement("div");
    var words = new Array();
    for(var i=0; i<10; i++){
        var tiID = "text" + i;
        words.push(document.getElementById(tiID).value);
    }  
    var distinctWords = getDistinctWords(words);
    distinctWords.sort().forEach(element => {
        div.innerHTML += element + " ";
    });
    document.body.appendChild(div);
}

function getDistinctWords(wordsArr){
    var arr = new Array();
    wordsArr.forEach(element => {
        if(arr.indexOf(element) === -1){
            arr.push(element);
        }
    });
    return arr;
}

initPage();

