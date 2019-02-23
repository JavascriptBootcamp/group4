var turn = null;
var positions = null;
var restart = false;

//Bulding Page Html
function Cell(_isEnpty, _player) {
    this.isEmpty = _isEnpty;
    this.player = _player;
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
    var td_id = 1;
    var str = "<div id='table'>";
    for (var i = 0; i < 3; i++) {
        str += "<div class='tr'>"
        for (var j = 0; j < 3; j++) {
            str += "<div class='td border' id = " + td_id + " onclick = td_clicked(" + i + "," + j + ",this)></div>";
            td_id++;
        }
        str += "</div>";
    }
    str += "</div>";

    document.getElementById("table_div").innerHTML = str;

}

function initPage() {
    init();
    
    var btn = document.createElement("button");
    btn.innerText = "new game";
    btn.style.fontSize = "50px";
    btn.classList.add("hide");
    document.getElementById("newGame").appendChild(btn);
    btn.onclick = function (event) {
        restart_btn_clicked(event.target);
    }
    
}

//Game logic
function restart_btn_clicked(btn){
    result.innerText = "";
    init();
    startGame();
    btn.classList.add("hide");
    restart = false;
    //show the game bord
    document.querySelector("#game_bord").classList.remove("hide");
}

function td_clicked(row, col, obj) {
    var player = turn;
    var td = document.getElementById(obj.id);
    var img = document.createElement("img");

    if(positions === null){
        alert("Please enter players names and press the start button to start the game")
    }
    else if(!restart){
        if (turn === 1 && isEmpty(row, col)) {
            img.src = "http://toastmasters.ru/wp-content/uploads/2016/04/Tic-tac-toe-cross.png"
            td.appendChild(img);
            positions[row][col].isEmpty = 0;
            positions[row][col].player = turn;
            turn = 2;
        }
        else if (turn === 2 && isEmpty(row, col)) {
            img.src = "http://toastmasters.ru/wp-content/uploads/2016/04/Tic-tac-toe-nought-e1461667111145.png"
            td.appendChild(img);
            positions[row][col].isEmpty = 0;
            positions[row][col].player = turn;
            turn = 1;
        }
        var result = document.getElementById("result");
        result.style.fontSize = "90px";
        if (check_winning(row, col, player)) {
            var player_name = document.getElementById("player" + player).value;
            result.innerText = player_name + " won!";
            restart = true;
        }
        else if (check_board()) {
            result.innerText = "It's A Tie!";
            restart = true;
        }

        if (restart) {
            var restart_game_btn = document.getElementById("newGame").childNodes[0];
            restart_game_btn.classList.remove("hide");
            document.getElementById("turn").innerText = "";
            //hide the game bord
            document.querySelector("#game_bord").classList.add("hide");
        }
        else {
            var pName = document.getElementById("player" + player).value
            document.getElementById("turn").innerText = pName + "'s turn";
        }
    }
}

function isEmpty(row, col) {

    return positions[row][col].isEmpty;
}

function startGame() {
    var p1 = document.getElementById("player1").value;
    var p2 = document.getElementById("player2").value;
    var round = Math.floor(Math.random() * 2) + 1;
    var pName = round === 1 ? p1 : p2
    document.getElementById("turn").innerText = pName + "'s turn";
    turn = round;
    initializeArray(3);
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

function check_winning(row, col, player) {

    var row_winning = winning_by_row(row, player);
    var col_winning = winning_by_col(col, player);
    var diagonal_winning = winning_by_diagonal(row, col, player);

    return row_winning || col_winning || diagonal_winning;
}

function winning_by_row(row, player) {
    var count = 0;
    for (var i = 0; i < 3; i++) {
        if (positions[row][i].player === player) {
            count++;
        }
    }
    return count === 3;
}

function winning_by_col(col, player) {
    var count = 0;
    for (var i = 0; i < 3; i++) {
        if (positions[i][col].player === player) {
            count++;
        }
    }
    return count === 3;
}

function winning_by_diagonal(row, col, player) {
    var count_diagonal_one = 0;
    var count_diagonal_two = 0;
    for (var i = 0; i < 3; i++) {
        if (positions[i][i].player === player) {
            count_diagonal_one++;
        }
    }
    for (var r = 0, c = 2; r < 3; r++ , c--) {
        if (positions[r][c].player === player) {
            count_diagonal_two++;
        }
    }
    if (count_diagonal_one === 3 || count_diagonal_two === 3) {
        return true;
    }
    else return false;
}