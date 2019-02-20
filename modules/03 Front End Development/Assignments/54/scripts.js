turn = null;

function changeColor(event) {
    console.log(event.target.id);
    var td = document.querySelectorAll("div .td");
    if (event.target.id == "dark") {
        for (i = 0; i < td.length; i++) {
            td[i].style.backgroundColor = "#2047FF";
        }
    }
    else
        for (i = 0; i < td.length; i++) {
            td[i].style.backgroundColor = "palegoldenrod";
        }

}

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

function td_clicked(row, col, event) {
    var restart = false;
    var player = turn;
    console.log(event.id);
    var td = document.getElementById(event.id);
    var img = document.createElement("img");
    if (turn === 1 && isEmpty(row, col)) {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/2/2d/O-Jolle_insigna.png"
        td.appendChild(img);
        positions[row][col].isEmpty = 0;
        positions[row][col].player = turn;
        turn = 2;
    }
    else if (turn === 2 && isEmpty(row, col)) {
        img.src = "https://www.freeiconspng.com/uploads/styled-x-png-31.png"
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
        document.getElementById("table_div").style.display = "none";

    }
    else
        if (check_board()) {
            result.innerText = "A Tie";
            restart = true;
            document.getElementById("table_div").style.display = "none";

        }

    if (restart) {
        var btn = document.createElement("button");
        btn.innerText = "new game";
        btn.style.fontSize = "50px";
        document.getElementById("newGame").appendChild(btn);
        btn.onclick = function () {
            result.innerText = "";

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
function startGame() {
    var p1 = document.getElementById("player1").value;
    var p2 = document.getElementById("player2").value;
    var round = Math.floor(Math.random() * 2) + 1;
    var pName = round === 1 ? p1 : p2
    document.getElementById("turn").innerText = pName + "'s turn";
    turn = round;
    document.getElementById("table_div").style.display = "block";
    for (var i = 1; i <= 9; i++)
        document.getElementById(i).innerHTML = "";
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
