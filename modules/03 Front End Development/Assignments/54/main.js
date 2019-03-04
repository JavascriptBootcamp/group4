reStart = 0;
function newGame() {
    if (reStart === 1) {
        document.body.removeChild(btn);
    }
    light = document.getElementById("light").checked;
    dark = document.getElementById("dark").checked;
    if (light === true) {
        document.body.style.background = "linear-gradient(-90deg, #D8E2DC, #FFE5D9, #FFCAD4, #F4ACB7)";
        event.target.style.background = "#D8E2DC";
    }
    if (dark === true) {
        document.body.style.background = "linear-gradient(-90deg, #2B2D42, #8D99AE, #EF233C, #D90429)";
        event.target.style.background = "#2B2D42";
        event.target.style.color = "white";
    }
    document.getElementById("game-status").innerHTML = "";
    document.getElementById("btn-start-game").disabled = true;
    player1 = document.getElementById("player1").value + " turn";
    player2 = document.getElementById("player2").value + " turn";
    playerTurn = "X";
    count = 0;
    var btnCircle = document.getElementsByClassName("circle");
    for (var i = 0; i < btnCircle.length; i++) {
        btnCircle[i].innerHTML = '<input type="button" class ="btn-circle" onclick="checkXorO(event)">';
    }
    btnsArray = document.getElementsByClassName("btn-circle");
}
function checkXorO(event) {
    playerName = document.getElementById("player-turn");
    gameStatus = document.getElementById("game-status");
    count++;
    flag = false;
    if (playerTurn === "X") {
        playerName.innerHTML = player1;
        event.target.value = "X";
        if (light === true) {
            event.target.style.backgroundColor = "#D8E2DC";
            event.target.style.color = "black";
        }
        if (dark === true) {
            event.target.style.backgroundColor = "#D90429";
            event.target.style.color = "white";
        }

        if (checkIfWin(playerTurn)) {
            flag = true;
            gameStatus.innerHTML = "GAME OVER<br>" + "The winner is<br>" + document.getElementById("player1").value;
            document.getElementById("player-turn").innerHTML = "";
            for (var i = 0; i < btnsArray.length; i++)
                btnsArray[i].style.display = "none";
            addBtnNewGame();
        }
    } else if (playerTurn === "O") {
        playerName.innerHTML = player2;
        event.target.value = "O";
        if (light === true) {
            event.target.style.backgroundColor = "#FFE5D9";
            event.target.style.color = "black";
        }
        if (dark === true) {
            event.target.style.backgroundColor = "#2B2D42";
            event.target.style.color = "white";
        }

        if (checkIfWin(playerTurn)) {
            flag = true;
            gameStatus.innerHTML = "GAME OVER<br>" + "The winner is<br>" + document.getElementById("player2").value;
            document.getElementById("player-turn").innerHTML = "";
            for (var i = 0; i < btnsArray.length; i++)
                btnsArray[i].style.display = "none";
            addBtnNewGame();
        }
    }
    if (playerTurn === "X") {
        playerTurn = "O";
    } else {
        playerTurn = "X";
    }

    if (flag === false && count === btnsArray.length) {

        gameStatus.innerText = "A Tie- play again";
        for (var i = 0; i < btnsArray.length; i++)
            btnsArray[i].style.display = "none";
        document.getElementById("player-turn").innerHTML = "";
        addBtnNewGame();
    }
    event.target.disabled = true;
}
function checkIfWin(pt) {

    if ((btnsArray[0].value === pt) && (btnsArray[1].value === pt) && (btnsArray[2].value === pt)) {
        return true;
    }
    if ((btnsArray[3].value === pt) && (btnsArray[4].value === pt) && (btnsArray[5].value === pt)) {
        return true;
    }
    if ((btnsArray[6].value === pt) && (btnsArray[7].value === pt) && (btnsArray[8].value === pt)) {
        return true;
    }
    if ((btnsArray[0].value === pt) && (btnsArray[3].value === pt) && (btnsArray[6].value === pt)) {
        return true;
    }
    if ((btnsArray[0].value === pt) && (btnsArray[4].value === pt) && (btnsArray[8].value === pt)) {
        return true;
    }
    if ((btnsArray[2].value === pt) && (btnsArray[4].value === pt) && (btnsArray[6].value === pt)) {
        return true;
    }
    if ((btnsArray[1].value === pt) && (btnsArray[4].value === pt) && (btnsArray[7].value === pt)) {
        return true;
    }
    if ((btnsArray[2].value === pt) && (btnsArray[5].value === pt) && (btnsArray[8].value === pt)) {
        return true;
    }
    return false;
}
function addBtnNewGame() {
    reStart = 1;
    btn = document.createElement("button");
    btn.innerHTML = "New Game";
    btn.setAttribute("id", "btn-new-game");
    btn.setAttribute("onclick", "newGame()");
    if (light === true) {
        btn.style.background = "#D8E2DC";
    }
    if (dark === true) {
        btn.style.background = "#2B2D42";
        btn.style.color = "white";
    }
    document.body.appendChild(btn);
}
function fieldsCheck() {
    var textInputs = document.querySelectorAll('input[type=text]');
    if (textInputs[0].value !== "" && textInputs[1].value !== "") {
        if (reStart === 0) {
            document.getElementById("btn-start-game").disabled = false;
        }
        if (reStart === 1) {
            document.getElementById("btn-new-game").disabled = false;
        }
    } else {
        if (reStart === 0) {
            document.getElementById("btn-start-game").disabled = true;
        }
        if (reStart === 1) {
            document.getElementById("btn-new-game").disabled = true;
        }
    }
}
