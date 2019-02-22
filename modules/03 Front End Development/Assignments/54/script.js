function Board(player1, player2) {
    var cells = document.getElementsByClassName("cell");
    var startBtn = document.getElementById("startbtn");
    var messRound = document.getElementById("messround");
    var gamezone = document.getElementById("gamezone");
    var player1 = player1;
    var player2 = player2;
    var clicks;
    var combinations;
    this.start = display;

    function display(event) {
        if (startBtn.innerText === "Start Game") {
            document.getElementById("score").style.display = "block";
            createNewGameBtn();
        }
        else if (event.target.id === "startbtn") {
            document.getElementById("newGame").onclick = display;
        }
        gamezone.style.display = "block";
        combinations = [["00", "01", "02"], ["10", "11", "12"], ["20", "21", "22"]];
        player1.playerView.innerText = player1.name + ": " + player1.score;
        player2.playerView.innerText = player2.name + ": " + player2.score;
        messRound.innerText = null;
        clicks = 0;
        for (i = 0; i < cells.length; i++) {
            cells[i].innerText = null;
            cells[i].onclick = onCellClick;
        }
    }
    function createNewGameBtn() {
        var div = document.getElementById("buttons");
        var newGame = document.createElement("button");
        newGame.innerText = "Start New Game";
        newGame.id = "newGame";
        newGame.onclick = display;
        changeStartGametoReset();
        div.appendChild(newGame);
    }
    function changeStartGametoReset() {
        var reset = startBtn;
        reset.innerText = "Reset Game";
    }
    function onCellClick(event) {
        var cell = event.target;
        var id = cell.id;
        var row = Number(id[0]);
        var col = Number(id[1]);
        var shapeClick;
        clicks++;
        clicks % 2 !== 0 ? shapeClick = "X" : shapeClick = "O";
        cell.innerText = shapeClick;
        combinations[row][col] = shapeClick;
        cell.onclick = null;

        if (clicks > 4) {
            checkResRound(row, col);
        }
    }
    function checkResRound(row, col) {
        var winner = checkWin(row, col);
        if (clicks === 9 && !winner) {
            messRound.innerText = "A Tie";
            endRound()
        }
        else if (winner) {
            if (winner === "X") {
                player1.playerView.innerText = player1.name + ": " + (++player1.score);
                messRound.innerText = player1.name + " Won";
            }
            else {
                player2.playerView.innerText = player2.name + ": " + (++player2.score);
                messRound.innerText = player2.name + " Won";
            }
            endRound();
        }
    }
    function checkWin(row, col) {
        // win (-)
        if (combinations[row][0] === combinations[row][1] && combinations[row][1] === combinations[row][2]) {
            return combinations[row][0];
        } // win (|)
        else if (combinations[0][col] === combinations[1][col] && combinations[1][col] === combinations[2][col]) {
            return combinations[0][col];
        }
        //win diagnoals
        else if (combinations[0][0] === combinations[1][1] && combinations[1][1] === combinations[2][2]) {
            return combinations[1][1];
        }
        else if (combinations[0][2] === combinations[1][1] && combinations[1][1] === combinations[2][0]) {
            return combinations[1][1];
        }
        else
            return false;

    }
    function endRound() {
        gamezone.style.display = "none";
    }
}
function Player(player, playerView) {
    this.name = player;
    this.playerView = playerView;
    this.score = 0;
}

function startGame(event) {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var checkNames = checkPlayersName(player1, player2);
    if (checkNames === "ok") {
        var board = new Board(new Player(player1, document.getElementById("p1")), new Player(player2, document.getElementById("p2")));
        board.start(event);
    }
    else {
        alert("Worng Input " + checkNames);
    }
}

function checkPlayersName(player1, player2) {
    var checkSentence = new RegExp(/^[a-zA-z ]{1,10}$/);
    if (!player1.match(checkSentence))
        return "Player 1";
    else if (!player2.match(checkSentence))
        return "Player 2";
    else if (player1.trim() === player2.trim())
        return "The names are equal"
    else
        return "ok";
}

function changeColor() {
    var body = document.getElementsByTagName("body")[0];
    var btn = document.getElementById("onoff");
    var backcolor;
    var fontcolot;
    var srcimg;
    var name;
   
    if (btn.name === "sun") {
        backcolor = "black";
        fontcolot = "white";
        srcimg = "<img src='https://img.icons8.com/office/16/000000/summer.png'></img>";
        name = "moon";
    }
    else {
        backcolor = "white";
        fontcolot = "black";
        srcimg = "<img src='https://img.icons8.com/office/16/000000/bright-moon.png'></img>";
        name = "sun";
    }

    body.style.backgroundColor = backcolor;
    body.style.color = fontcolot;
    btn.innerHTML = srcimg;
    btn.name = name;
}