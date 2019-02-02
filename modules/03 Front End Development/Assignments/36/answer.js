var isPlayer1Turn;
var isPlayer2Turn;
var isANewGame;
var isThereAWinner;
var clicksCount;

var gameBoardCells = document.getElementsByTagName("td");

// var gameBoard = [
//     ['row0col0', 'row0col1', 'row0col2'], 
//     ['row1col0', 'row1col1', 'row1col2'], 
//     ['row2col0', 'row2col1', 'row2col2']
// ];

// Event listeners to each game board cell click
var row0Col0 = document.getElementById('row0col0');
row0Col0.addEventListener('click', () => onGameBoardCellClick(row0Col0));

var row0Col1 = document.getElementById('row0col1');
row0Col1.addEventListener('click', () => onGameBoardCellClick(row0Col1));

var row0Col2 = document.getElementById('row0col2');
row0Col2.addEventListener('click', () => onGameBoardCellClick(row0Col2));

var row1Col0 = document.getElementById('row1col0');
row1Col0.addEventListener('click', () => onGameBoardCellClick(row1Col0));

var row1Col1 = document.getElementById('row1col1');
row1Col1.addEventListener('click', () => onGameBoardCellClick(row1Col1));

var row1Col2 = document.getElementById('row1col2');
row1Col2.addEventListener('click', () => onGameBoardCellClick(row1Col2));

var row2Col0 = document.getElementById('row2col0');
row2Col0.addEventListener('click', () => onGameBoardCellClick(row2Col0));

var row2Col1 = document.getElementById('row2col1');
row2Col1.addEventListener('click', () => onGameBoardCellClick(row2Col1));

var row2Col2 = document.getElementById('row2col2');
row2Col2.addEventListener('click', () => onGameBoardCellClick(row2Col2));

var gameBoard = [
  [row0Col0, row0Col1, row0Col2], 
  [row1Col0, row1Col1, row1Col2], 
  [row2Col0, row2Col1, row2Col2]
];


function runGame() {
  isThereAWinner = false;
  document.getElementById('message').innerText = '';
  isANewGame = true;
  isPlayer1Turn = true;
  isPlayer2Turn = false;
  clicksCount = 0;

  // Clearing/reset the cells of the game board for a new game
  for (var i = 0; i < gameBoardCells.length; i++) {
    gameBoardCells[i].innerText = '';
  }
}


function onGameBoardCellClick(gameBoardCell) {
  if(gameBoardCell.innerText === '') {
    if(isPlayer1Turn) gameBoardCell.innerText = "X";
    else if(isPlayer2Turn) gameBoardCell.innerText = "O";

    isPlayer1Turn = !isPlayer1Turn;
    isPlayer2Turn = !isPlayer2Turn;
    
    // setTimeout( () => { 
    //   clicksCount++;
    //   console.log('clicksCount = ', clicksCount);
    // }, 1000);

    clicksCount++;
    console.log('clicksCount = ', clicksCount);
    checkWin();
  }
  else alert(`This cell is already marked with ${gameBoardCell.innerText}`);
}


function checkWin() {
  if(!isANewGame || isThereAWinner) {
    alert("You must press 'Start Game' button to start a game");
    return;
  }

  
  var symbol = null;

  if (clicksCount === 9) {
    if (confirm("A Tie!\n Press OK if you want to play again")) {
      runGame();
    } //else location.reload();    
  }
  else if (clicksCount >= 5) {
    // Check for horizontal winning
    if(row0Col0.innerText === row0Col1.innerText && row0Col1.innerText === row0Col2.innerText) {
      isANewGame = false;
      symbol = row0Col0.innerText;
      isThereAWinner = true;
    }
    else if(row1Col0.innerText === row1Col1.innerText && row1Col1.innerText === row1Col2.innerText) {
      isANewGame = false;
      symbol = row1Col0.innerText;
      isThereAWinner = true;
    }
    else if(row2Col0.innerText === row2Col1.innerText && row2Col1.innerText === row2Col2.innerText) {
      isANewGame = false;
      symbol = row2Col0.innerText;
      isThereAWinner = true;
    }
    // Check for vertical winning
    else if(row0Col0.innerText === row1Col0.innerText && row1Col0.innerText === row2Col0.innerText) {
      isANewGame = false;
      symbol = row0Col0.innerText;
      isThereAWinner = true;
    }
    else if(row0Col1.innerText === row1Col1.innerText && row1Col1.innerText === row2Col1.innerText) {
      isANewGame = false;
      symbol = row0Col0.innerText;
      isThereAWinner = true;
    }
    else if(row0Col2.innerText === row1Col2.innerText && row1Col2.innerText === row2Col2.innerText) {
      isANewGame = false;
      symbol = row0Col0.innerText;
      isThereAWinner = true;
    }
    // Check for diagonal winning
    else if(row0Col0.innerText === row1Col1.innerText && row1Col1.innerText === row2Col2.innerText) {
      isANewGame = false;
      symbol = row0Col0.innerText;
      isThereAWinner = true;
    }
    else if(row0Col2.innerText === row1Col1.innerText && row1Col1.innerText === row2Col0.innerText) {
      isANewGame = false;
      symbol = row0Col0.innerText;
      isThereAWinner = true;
    }
  }

  if (isThereAWinner) {
    isANewGame = false;

    if (symbol === 'X') {
        // alert("The winner is player 1");
        // location.reload();
        document.getElementById('message').innerText = 'The winner is player 1';

        // for (var i = 0; i < gameBoardCells.length; i++) {
        //   console.log(gameBoardCells[i]);
        //   gameBoardCells[i].readOnly = true;
        // }
    }
    else if(symbol === 'O') {
        // alert("The winner is player 2");
        // location.reload();
        document.getElementById('message').innerText = 'The winner is player 2';

        // for (var i = 0; i < gameBoardCells.length; i++) {
        //   console.log(gameBoardCells[i]);
        //   gameBoardCells[i].readOnly = true;
        // }
    }
}
}