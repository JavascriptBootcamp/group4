var arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
var numberOfClick = 0;
var turn = true;
var res = document.getElementById("winner");
var container = document.getElementById("container");
function initialGame() {
	var cell = document.getElementsByClassName("col");
	arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
	res.innerText = "";
	turn = true;
	numberOfClick = 0;
	for (var i = 0; i < cell.length; i++) {
		cell[i].innerText = "";
	}
	for (var i = 0; i < cell.length; i++) {
		cell[i].onclick = function () {
			setTextAndFillArray(this);
		}
	}
}
function start() {
	container.style.display = "block";
	var cell = document.getElementsByClassName("col");
	initialGame();
}
function setTextAndFillArray(thisEl) {
	console.log(thisEl);
	var rowIndex = thisEl.parentNode.getAttribute("rowIndex");
	var index = thisEl.getAttribute("index");
	if (turn) {
		if (thisEl.innerText === "X" || thisEl.innerText === "O") {
			return;
		}
		thisEl.innerText = "X";
		arr[rowIndex][index] = "X";
	}
	else {
		if (thisEl.innerText === "X" || thisEl.innerText === "O") {
			return;
		}
		thisEl.innerText = "O";
		arr[rowIndex][index] = "O";
	}
	checkWin(rowIndex, index);
	turn = checkTurn();
}
function checkTurn() {
	if (turn) {
		return false;

	}
	else {
		return true;
	}
}
function checkWin(rowIndex, index) {
	numberOfClick++;
	var player = "";
	var winFlag = false;
	if (turn) {
		player = document.getElementById("p1").value;
	}
	else {
		player = document.getElementById("p2").value;
	}
	if (arr[rowIndex][0] === arr[rowIndex][1] && arr[rowIndex][1] === arr[rowIndex][2]) {
		res.innerText = player;
		winFlag = true;
	}
	else if (arr[0][index] === arr[1][index] && arr[1][index] === arr[2][index]) {
		res.innerText = player;
		winFlag = true;
	}
	else if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
		res.innerText = player;
		winFlag = true;
	}
	else if (arr[2][0] === arr[1][1] && arr[1][1] === arr[0][2]) {
		res.innerText = player;
		winFlag = true;
	}
	else if (numberOfClick === 9) {
		res.innerText = "A Tie";
		winFlag = true;
	}
	if (winFlag) {
		container.style.display = "none";
	}
}

function pallete(e) {
	var color,backgroundColor;
	e.preventDefault();
	if (e.target.innerText === "light")
	{
		color = "#000";
		backgroundColor = "#FFF";
	}
	else{
		color = "#FFF";
		backgroundColor = "#37383a";
	}
	var body = document.getElementsByTagName("body")[0];
	var div = document.getElementsByClassName("col");
	var res = document.getElementById("winner");
	var title = document.getElementsByClassName("title");
	for (var i = 0; i < div.length; i++) {
		div[i].style.border = "1px solid" + color;
		div[i].style.color = color;
	}
	res.style.color = color;
	title[0].style.color = color;
	body.style.backgroundColor = backgroundColor;
}