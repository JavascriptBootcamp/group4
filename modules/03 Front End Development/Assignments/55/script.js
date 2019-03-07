function Board(_images) {  // _images = images names array
    var remainMatches = _images.length;
    var images = _images.concat(_images);  // images = copy of images names array
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = []; // array of images/cards names in shuffeled order.
    var matches = []; // array of matched cards couples
    var storedOpenCardsArr = [];

    (function shuffle() { //IIFE
        var randomImage, randomIndex;

        // While copy of images names array is not empty
        while(images.length > 0) { 

            // randomIndex = random index in remained copy of images names array
            randomIndex = Math.floor(Math.random() * images.length); 

            // randomImage = deleted image on random index in remained copy of images names array
            randomImage = images.splice(randomIndex, 1); 

            // Add to cards array the image on random index in remained copy of images names array
            cards.push(randomImage[0].image); 
        }
    })();

    this.display = function(boardEl) {
        var currentIndex = 0;

        for (var i = 0; i < 16; i++) {
            btn = document.createElement("button");
            btn.className = "card";
            btn.id = "image" + currentIndex++;
            btn.style.backgroundColor = "grey";
            btn.style.backgroundImage = "url('https://i.pinimg.com/236x/eb/ef/9f/ebef9f83731604f5ec4eb04ff6efd568--bicycle-playing-cards-card-designs.jpg')";
            btn.onclick = onCardClick;

            boardEl.appendChild(btn);
        }

    }

    function onCardClick(event) {
        event.target.classList.add("flipping-animation");
        
        // event.target = clicked element/button/card
        // currentCardIndex = index/id of clicked card/button without 'image' prefix
        var currentCardIndex = Number(event.target.id.replace("image", ""));
        
        showImage(event.target, currentCardIndex); // flip/display the clicked card
        event.target.disabled = true; // disable clicking on flipped card
        setSelectedCards(currentCardIndex);
    }

    function setSelectedCards(currentCardIndex) {
        if (selectedFirstCard) {
            selectedSecondCard = currentCardIndex;
            checkMatch();
        }
        else {
            selectedFirstCard = currentCardIndex; 
        }
    }

    function showImage(element, currentCardIndex) {
        element.style.backgroundImage = "url('" + cards[currentCardIndex] + "')";
        element.style.backgroundSize = "cover";
    }

    function checkMatch(){
        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {
            sessionStorage.setItem("storedOpenCards", storedOpenCardsArr.push(selectedFirstCard));
            sessionStorage.setItem("storedOpenCards", storedOpenCardsArr.push(selectedSecondCard));

            remainMatches--;
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            selectedFirstCard = null;
            selectedSecondCard = null;
            //toggleState(true);
        }
        else {
            toggleState(true);
            //disableClicksOnCards();

            setTimeout(function(){
                resetImages(document.getElementById("image" + selectedFirstCard), document.getElementById("image" + selectedSecondCard));
                selectedFirstCard = null;
                selectedSecondCard = null;
                toggleState(false);
                //enableClicksOnCards();
            }, 1000);
        }
    }

    function toggleState(enable) {
        for (var i=0;i<cards.length;i++){
            // when 2 flipped cards doesn't match
            if (!matches.includes(selectedFirstCard) && !matches.includes(selectedSecondCard)){
                document.getElementById("image" + i).disabled = enable;
            }
        }
    }

    this.enableClicksOnCards = function() {
        var gameBoard = document.getElementById("board");

        for(var i = 0; i < gameBoard.children.length; i++) {
            gameBoard.children[i].disabled = false;
        }
    }

    this.disableClicksOnCards = function() {
        var gameBoard = document.getElementById("board");

        for(var i = 0; i < gameBoard.children.length; i++) {
            gameBoard.children[i].disabled = true;
        }
    }

    function resetImages(firstCardElement, secondCardElement) {
        firstCardElement.disabled = false;
        firstCardElement.style.backgroundImage = "url('https://i.pinimg.com/236x/eb/ef/9f/ebef9f83731604f5ec4eb04ff6efd568--bicycle-playing-cards-card-designs.jpg')";
        
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage = "url('https://i.pinimg.com/236x/eb/ef/9f/ebef9f83731604f5ec4eb04ff6efd568--bicycle-playing-cards-card-designs.jpg')";
    }

    function checkWin() {
        //remainMatches = 0;
        if (remainMatches === 0){
            hideAllRevealedCards();
            removeTimer();
            removeGameBoard();
            addWinnerMessage();
            addStartGameButton();
            document.getElementById("start-game-button").onclick = startGame;
            document.getElementById("message").innerHTML = "<h1>You Won!</h1>";
        }
    }

    function hideAllRevealedCards() {
        var gameBoard = document.getElementById("board");

        disableClicksOnCards();

       for(var i =0; i < gameBoard.children.length; i++) {
        gameBoard.children[i].style.backgroundImage = "url('https://i.pinimg.com/236x/eb/ef/9f/ebef9f83731604f5ec4eb04ff6efd568--bicycle-playing-cards-card-designs.jpg')";
       }
    }

   
}


function Card(animal) {
    this.image = animal + '.png';
}

var catCard = new Card('cat');
var dogCard = new Card('dog');
var goldfishCard = new Card('goldfish');
var guineaPigCard = new Card('guinea_pig');
var kittenCard = new Card('kitten');
var mouseCard = new Card('mouse');
var puppyCard = new Card('puppy');
var rabbitCard = new Card('rabbit');

var board = new Board([catCard, dogCard, goldfishCard, guineaPigCard, kittenCard, mouseCard, puppyCard, rabbitCard]);
board.display(document.getElementById("board"));
board.disableClicksOnCards();





function startGame() {
    addTimer();

    if(!document.getElementById("board")) addGameBoard();

    enableClicksOnCards();
    removeWinnerMessage();
    removeStartGameButton();

    board.enableClicksOnCards();

    setInterval(function() {
        timerObj.tick();

        if(timerElem.innerText <= 0) {
            addWinnerMessage();
            document.getElementById("message").innerText = "Game Over";

            removeTimer();
            removeGameBoard();
            addStartGameButton();
            document.getElementById("start-game-button").onclick = startGame;
            return;
        }
    }, 1000)
    
}


var timerElem = document.getElementById("timer");
var timerObj = new Timer(3, timerElem);

function Timer(time, elem) {
    this.time = time;
    this.elem = elem;

    this.tick = function() {
        this.time--;
        this.elem.innerHTML = this.time;
    }
}


function enableClicksOnCards() {
    var gameBoard = document.getElementById("board");

    for(var i = 0; i < gameBoard.children.length; i++) {
        gameBoard.children[i].disabled = false;
    }
}

function disableClicksOnCards() {
    var gameBoard = document.getElementById("board");

    for(var i = 0; i < gameBoard.children.length; i++) {
        gameBoard.children[i].disabled = true;
    }
}




// Utils
function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function addStartGameButton() {
    addElement("body", "button", "start-game-button", "Start New Game");
}

function removeStartGameButton() {
    removeElement("start-game-button");
}

function addWinnerMessage() {
    addElement("body", "div", "message", "");
}

function removeWinnerMessage() {
    removeElement("message");
}

function addGameBoard() {
    addElement("body", "div", "board", "");
    board.display(document.getElementById("board"));
    board.disableClicksOnCards();

}

function removeGameBoard() {
    removeElement("board");
}

function addTimer() {
    addElement("body", "div", "timer", "");
}

function removeTimer() {
    removeElement("timer");
}

