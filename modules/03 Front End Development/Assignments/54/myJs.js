
turn = null;
restartGame = 0;

function Cell(_isEnpty, _player) {
    this.isEmpty = _isEnpty;
    this.player = _player;
}
function Player(name, gameSign) {
    this.name = name;
    this.gameSign = gameSign;
   
}


function initializeArray(num) {
    positions = new Array(num);
    for (k = 0; k < num; k++) {
        positions[k] = new Array(num);
        for (t = 0; t < num; t++) {
            positions[k][t] = new Cell(1, "");
        }
    }
}



function init() {
    var playerNames = document.querySelectorAll('input[type=text]');
    if (playerNames[0].value !== '' && playerNames[1].value !== '') {
        if (restartGame === 0) {
            document.getElementById('btn-start-game').disabled = false;
        }
        else if (restartGame === 1) {
            document.getElementById('btn-new-game').disabled = false;
        }
        player1Obj = new Player(playerNames[0].value, "X");
        player2Obj = new Player(playerNames[1].value, "O");
    }
    else {
        if (restartGame === 0) {
            document.getElementById('btn-start-game').disabled = true;
        }
        else if (restartGame === 1) {
            document.getElementById('btn-new-game').disabled = true;
        }
    }
}
function startGame() {

    console.log(event);
    if (restartGame == 1) {
        document.body.removeChild(newGameBtn);

    }
    let light=document.getElementById("light").checked;
    let dark=document.getElementById("dark").checked;
    colorChange(light,dark);
    document.getElementById("gameResult").innerText = "";
    countGames = 0;
    p1 = player1Obj.name + " turn";
    p2 = player2Obj.name + " turn";
    playerTurnObj = player1Obj;

    var btnCells = document.getElementsByClassName("board-div-cell");
    for (let i = 0; i < btnCells.length; i++) {
        btnCells[i].innerHTML = '<input type="button" class="btn-cell" id=' + i + ' onclick="checkCellXorO(event)">';

    }
    initializeArray(3);
    btnsArray = document.getElementsByClassName("btn-cell");

}
function colorChange(light, dark) {
    if (light === true) {
        document.body.style.background = "linear-gradient(-90deg, #E7FFF7,#98E8FF, #45A2E8, 005FF5)";
        event.target.style.background = "#005FF5";
    }
    else if (dark === true) {
        document.body.style.background = "linear-gradient(-90deg, #2B2D42, #8D99AE, #EF233C, #D90429)";
        event.target.style.background = "#2B2D42";
        event.target.style.color = "white";
    }

}
function checkCellXorO(event) {
   
    player_name = document.getElementById("turn");
    game_result = document.getElementById("gameResult");
    countGames++;
    flag = false;
    setTurn(playerTurnObj) ;

    if (check_winning(playerTurnObj)) {
        flag = true;
        game_result.innerHTML = "GAME OVER<br>" + "The winner is<br>" + playerTurnObj.name;
        document.getElementById("player-turn").innerHTML = "";
        for (var i = 0; i < btnsArray.length; i++)
            btnsArray[i].style.display = "none";

    }
    player_name.innerText="";
    // addBtnNewGame();
    if (playerTurnObj === player1Obj) { playerTurnObj = player2Obj; }
    else { playerTurnObj = player1Obj; }
    event.target.disabled = true;
}
function setTurn(playerTurnObj) {
    if (playerTurnObj === player1Obj) {
        player_name.innerText = p1;
        event.target.value = "X";
        colorChange(light, dark);
        if (light === true) {
            event.target.style.backgroundColor = "#D8E2DC";
            event.target.style.color = "black";
        }
        if (dark === true) {
            event.target.style.backgroundColor = "#D90429";
            event.target.style.color = "white";
        }
        

    }
    else if (playerTurnObj === player2Obj) {
        player_name.innerHTML = p2;
        event.target.value = "O";
        if (light === true) {
            event.target.style.backgroundColor = "#FFE5D9";
            event.target.style.color = "black";
        }
        if (dark === true) {
            event.target.style.backgroundColor = "#2B2D42";
            event.target.style.color = "white";
        }

    }
}
function td_clicked(row, col, obj) {

    var restart = false;
    var player = turn;
    var td = document.getElementById(obj.id);
    var img = document.createElement("img");
    if (turn === 1 && isEmpty(row, col)) {
        img.src = "data:image/png;base64,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"
        td.appendChild(img);
        positions[row][col].isEmpty = 0;
        positions[row][col].player = turn;
        turn = 2;
    }
    else if (turn === 2 && isEmpty(row, col)) {
        img.src = "https://www.freeiconspng.com/uploads/letter-o-icon-png-15.png"
        td.appendChild(img);
        positions[row][col].isEmpty = 0;
        positions[row][col].player = turn;
        turn = 1;
    }
    var result = document.getElementById("result");
    result.style.fontSize = "90px";
    result.style.color = "blue";
    if (check_winning(row, col, player)) {
        var player_name = document.getElementById("player" + player).value;
        result.innerText = player_name + " won!";
        restart = true;
    }
    else
        if (check_board()) {
            result.innerText = "A Tie";
            restart = true;
        }
    if (restart) {

        var btn = document.createElement("button");
        btn.innerText = "new game";
        btn.style.fontSize = "50px";
        document.getElementById("newGame").appendChild(btn);
        btn.onclick = function () {
            result.innerText = "";
            init();
            startGame();
            this.parentNode.removeChild(this);
        }
    }
    else {
        var pName = document.getElementById("player" + player).value
        document.getElementById("turn").innerText = pName + "'s turn";
    }
}

function isEmpty(row, col) {

    return positions[row][col].isEmpty;
}



function check_board() {

    for (var r = 0; r < 3; r++) {
        for (var c = 0; c < 3; c++) {
            if (positions[r][c].isEmpty) {
                return false;
            }
        }
    }
    return true;
}

function check_winning(player) {


    var row_winning = winning_by_row(player);
    var col_winning = winning_by_col(player);
    var diagonal_winning = winning_by_diagonal(player);

    return row_winning || col_winning || diagonal_winning;
}

function winning_by_row(player) {

    var player_sign = player.gameSign;
    if (btnsArray[0].value === player_sign && btnsArray[1].value === player_sign && btnsArray[2].value === player_sign)
        return true;
    else if (btnsArray[3].value === player_sign && btnsArray[4].value === player_sign && btnsArray[5].value === player_sign)
        return true;
    else if (btnsArray[6].value === player_sign && btnsArray[7].value === player_sign && btnsArray[8].value === player_sign)
        return true;
    else return false;
}

function winning_by_col(player) {
    var player_sign = player.gameSign;
    if (btnsArray[0].value === player_sign && btnsArray[3].value === player_sign && btnsArray[6].value === player_sign)
        return true;
    else if (btnsArray[1].value === player_sign && btnsArray[4].value === player_sign && btnsArray[7].value === player_sign)
        return true;
    else if (btnsArray[2].value === player_sign && btnsArray[5].value === player_sign && btnsArray[8].value === player_sign)
        return true;
    else return false;
}

function winning_by_diagonal(player) {
    var player_sign = player.gameSign;
    if (btnsArray[0].value === player_sign && btnsArray[4].value === player_sign && btnsArray[8].value === player_sign)
        return true;
    else if (btnsArray[2].value === player_sign && btnsArray[4].value === player_sign && btnsArray[6].value === player_sign)
        return true;
    
    else return false;
}
