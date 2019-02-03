var letters = ['a', 'b', 'd', 'c', 'z'];
var userSeqense = "";
var wordOfTheLevel = "";
var numOfLevel = 1; 
var levels = {1: 3, 2: 5, 3: 7};

function showScrambeldWord(word) {
    var divForShow = document.querySelector("#selectLetters");
    //clear the word from the last level
    divForShow.innerHTML = "";
    //append the new word
    for (var i = 0; i < word.length; i++) {
        divForShow.innerHTML += '<div id="letter' + i + '" onclick="catchChoice(this)" class="letter">' + word[i] + '</div>';
    }
}

function startGame(level, word) {
    //reste the user choices
    userSeqense = "";
    //creat the words for each level
    var word = new RandomWord(letters).randomize(levels[level]);
    wordOfTheLevel = word;

    //for testing:
    console.log("word for level",level,"-",word);

    //creat the word the user going to see on the screen
    var wordForScreen = word.split("").sort();
    showScrambeldWord(wordForScreen);
}

function catchChoice(el) {
    el.classList.add("clicked");
    userSeqense += el.innerText;

    console.log("userSeqense.length -",userSeqense.length);
    console.log("levels[numOfLevel] -", levels[numOfLevel]);

    if(userSeqense === wordOfTheLevel) {
        showMsg("Amizzing!! You were right!! the correct word is "+wordOfTheLevel);
    }
    else if(userSeqense.length===levels[numOfLevel]){
        //remove the clicked color
        var allDivs = document.querySelectorAll(".clicked");
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove("clicked");
        }
        //reset the user answer
        userSeqense = "";
    }

    if(userSeqense.length === levels[3]){
        document.querySelector("#msg").innerText ="Amizzing!! You were right!! the correct word is "+wordOfTheLevel+"/nYou WIN!!!!";
        document.querySelector("button").hidden= true;
    }

    console.log(userSeqense);
}

function showMsg(msg){
    document.querySelector("#msg").innerText = msg;
    document.querySelector("button").hidden= false;
}

function nextLevel() {
    document.querySelector("#msg").innerText = "";
    document.querySelector("button").hidden= true;
    startGame(++numOfLevel, letters);
}

startGame(numOfLevel, letters);