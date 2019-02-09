var charsArray = ['a', 'b', 'c', 'd', 'e', 'f'];
var word = "";
var letterList = document.getElementById("letters");
var x = document.createElement("OPTION");
x.setAttribute("value", "default");
var t = document.createTextNode("Select Letter");
x.appendChild(t);
letterList.appendChild(x);
var currentLevel;

function start(level) {
    currentLevel = level;
    word = new RandomWord(charsArray).randomize(level);
    console.log(word);
    display();
}

function display() {
    var splittedWord = word.split("");
    var letterList = document.getElementById("letters");
    while (letterList.options.length) {
        letterList.remove(0);
    }
    var x = document.createElement("OPTION");
    x.setAttribute("value", "default");
    var t = document.createTextNode("Select Letter");
    x.appendChild(t);
    letterList.appendChild(x);
    splittedWord.forEach(function (element) {
        var x = document.createElement("OPTION");
        x.setAttribute("value", element);
        var t = document.createTextNode(element);
        x.appendChild(t);
        letterList.appendChild(x);
    });
}

function checkAnswer() {
    var answer = document.getElementById("answer").innerText;
    if (answer === word) {
        document.getElementById("result").innerText = "Success! Moving to the next level..";
        var div = document.getElementById("answer");
        div.innerText = "";
        if (currentLevel !== 7)
            start(currentLevel + 2);
    }
    else
        document.getElementById("result").innerText = "Failed :( refresh to restart";
}

function selectLetter() {
    var letterList = document.getElementById("letters");
    var selectedLetter = letterList.options[letterList.selectedIndex].value;
    var div = document.getElementById("answer");
    div.innerText += selectedLetter;
    letterList.remove(letterList.selectedIndex);
}

function RandomWord(charsArray) {
    if (typeof charsArray === 'object') {
        //this.result = randomize(charsArray); 
    }
    else {
        console.log('"chars" should be an array.');
    }
    this.randomize = function (length) {
        if (typeof length === 'number') {
            var text = "";
            var possible = charsArray.join("");
            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        else {
            console.log('"length" should be a number.');
        }
    }
} 