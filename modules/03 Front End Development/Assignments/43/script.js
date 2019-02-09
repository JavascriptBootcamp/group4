function Board(level) {
    var level = level;
    var ranword;
    var word;
    var arrLettersSort;
    var indexarr;
    var lettersAns;
    var answermess = document.getElementById("answermess");
    var list = document.getElementById("list");
    var content = document.getElementById("content");
    this.display = startGame;
    changeButtons(true);

    function startGame() {
        if (content.lastElementChild.id === "mess")
            content.removeChild(content.lastChild);

        if (answermess.firstElementChild)
            answermess.removeChild(answermess.firstElementChild);

        createLevel();
        createAnswerMess();
        createSelect();
    }
    function createLevel() {
        ranword = new RandomWord(randomletters(level));
        word = ranword.randomize(level);
        arrLettersSort = word.split("").sort();
        indexarr = 0;
        alert(word);
    }
    function createAnswerMess() {
        var h4 = document.createElement("h4");
        lettersAns = [];
        for (var i = 0; i < level; i++) {
            lettersAns.push("__ ");
        }
        h4.innerText = lettersAns;
        answermess.appendChild(h4);
    }
    function createSelect() {
        var select = document.createElement("select");
        select.style.textAlignLast = "center";
        select.onchange = checkletter;
        for (var i = 0; i <= word.length; i++) {
            var option = document.createElement("option");
            if (i === 0) {
                option.innerText = "Choose Letter";
                option.selected = true;
            }
            else
                option.innerText = arrLettersSort[i - 1];

            select.appendChild(option);
        }
        list.appendChild(select);
    }
    function changeButtons(value) {
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < 3; i++) {
            buttons[i].disabled = value;
        }
    }
    function randomletters(level) {
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var lettersArr = [];

        for (var i = 0; i < level; i++) {
            lettersArr.push(letters.splice(Math.floor(Math.random() * letters.length), 1));
        }
        return lettersArr;
    }
    function checkletter(event) {
        var messDiv = document.createElement("div");
        var value = event.target.value;
        lettersAns[indexarr] = value;
        answermess.firstElementChild.innerText = lettersAns;

        if ((level - 1) === indexarr) {
            checkNextLevel(messDiv);
        }
        else if (!(value === word[indexarr])) {
            gameOver(messDiv);
        }
        else {
            event.target.removeChild(event.target.childNodes[event.target.selectedIndex]);
            indexarr++;
        }
    }
    function checkNextLevel(messDiv) {
        list.removeChild(list.firstChild);
        if (level === 3 || level === 5) {
            level += 2;
            messDiv.innerHTML = "<h4>Winner!!! Moving to Next Level <h4>";
            content.appendChild(messDiv);
            setTimeout(function () {
                content.removeChild(content.lastChild);
                startGame();
            }, 3000);
        }
        else {
            messDiv.innerHTML = "<h4>Winner!!! You finished the game<h4>";
            messDiv.id = "mess";
            content.appendChild(messDiv);
            changeButtons(false);
        }
    }
    function gameOver(messDiv) {
        list.removeChild(list.firstChild);
        messDiv.innerHTML = "<h4>You lose The answer is: " + word + "<h4>";
        messDiv.id = "mess";
        content.appendChild(messDiv);
        changeButtons(false);
    }
}
function RandomWord(tmparr) {
    var charsArray = tmparr.concat();

    this.randomize = function (length) {
        var str = "";
        for (var i = 0; i < length; i++) {
            str += charsArray.splice(Math.floor(Math.random() * charsArray.length), 1);
        }
        return str;
    }
}

function start(level) {
    var board = new Board(level);
    board.display();
}
