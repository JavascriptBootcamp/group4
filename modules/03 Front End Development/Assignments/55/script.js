function Board(_images) {
    var time = 3;
    var timer = document.getElementById("timer");
    var timerInterval = setInterval(
        function () {
            timer.innerText = time;
            checkTimer(time--, timerInterval);
        }, 1000);

    var remainMatches = _images.length;
    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = [];
    var matches = [];
    (function shuffle() { //IIFE
        var randomImage, randomIndex;
        while (images.length > 0) {
            randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images.splice(randomIndex, 1);
            cards.push(randomImage[0].image);
        }
    })();

    function checkTimer(time, timerInterval) {
        if (time === 0) {
            clearInterval(timerInterval);
            var container = document.getElementById("container");
            var board = document.getElementById("board");
            var btn = document.createElement("button");
            var message = document.getElementById("message");
            var table = document.getElementById("table");
            btn.innerText = "New Game";
            btn.id = "new-game";
            btn.onclick = initialGame;
            board.removeChild(table);
            container.appendChild(btn);
            message.innerText = "You Lose!!!"
            sessionStorage.clear();
            matches = [];
        }
    }
    
    function initialGame() {
        var message = document.getElementById("message");
        if (document.getElementById("new-game")) {
            document.getElementById("new-game").remove();
        }
        message.innerText = "";
        timer.innerText = "";
        time = 300;
        timerInterval = setInterval(
            function () {
                timer.innerText = time--;
                checkTimer(time, timerInterval);
            }, 1000);
        
        board.display(document.getElementById("board"));

    }

    this.setRemainMatches = function(_remainMatches){
        remainMatches = _remainMatches;
    }

    this.getRemainMatches = function(){
        return remainMatches;
    }
    
    this.setMatches = function(_matches){
        matches = _matches;
    }

    this.setCards = function(_cards){
        cards = _cards;
    }

    this.getMatches = function(){
        return matches;
    }

    this.getCards = function(){
        return cards;
    }

    this.display = function (boardEl) {
        var tr, td, btn, currentIndex = 0;
        var table = document.createElement("div");
        table.id = "table";
        for (var i = 0; i < 4; i++) {
            tr = document.createElement("div");
            tr.className = "tr" + i;
            for (var j = 0; j < 4; j++) {
                td = document.createElement("div");
                td.className = "td"+i;
                btn = document.createElement("button");
                btn.className = "card-button";
                btn.id = "image" + currentIndex++;
                btn.style.width = "100px";
                btn.style.height = "100px";
                btn.style.backgroundColor = "grey";
                btn.onclick = onCardClick.bind(btn);
                td.appendChild(btn);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        boardEl.appendChild(table);
    }

    function onCardClick() {
        var currentCardIndex = Number(this.id.replace("image", ""));
        showImage(this, currentCardIndex);
        this.disabled = true;
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
            remainMatches--;
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            selectedFirstCard = null;
            selectedSecondCard = null;
        }
        else {
            toggleState(true);
            setTimeout(function(){
                resetImages(document.getElementById("image" + selectedFirstCard), document.getElementById("image" + selectedSecondCard));
                selectedFirstCard = null;
                selectedSecondCard = null;
                toggleState(false);
            }, 1000);
        }
    }
    function toggleState(enable) {
        for (var i=0;i<cards.length;i++){
            if (!matches.includes(selectedFirstCard) && !matches.includes(selectedSecondCard)){
                document.getElementById("image" + i).disabled = enable;
            }
        }
    }
    function resetImages(firstCardElement, secondCardElement) {
        firstCardElement.disabled = false;
        firstCardElement.style.backgroundImage = "";
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage = "";
    }
    function checkWin() {
        if (remainMatches === 0){
            document.getElementById("message").innerHTML = "<h1>Moshiko is the King!</h1><h4>You Won!</h4>";
        }
    }

    this.getData = function(){
        var _matches = sessionStorage.getItem("_matches");
        var _cards = sessionStorage.getItem("_cards");

        if(!_matches || !_cards){
            return;
        }

        this.setCards(_cards.split(","));
        return _matches.split(",");
    }

    this.restoreData = function(_matches){

        this.setRemainMatches(this.getRemainMatches() - this.getMatches());
        runOnClickFoundedCards(_matches);
    }

    // Simaulate buttons click for all founded cards
    function runOnClickFoundedCards(_matches){
        var length = _matches.length;
        for(var i=0; i< length; i+=2){
            var firstCard = _matches[i];
            var button = document.getElementById("image" + firstCard);
            onCardClick.call(button);
            var secondCard = _matches[i+1];
            button = document.getElementById("image" + secondCard);
            onCardClick.call(button);

        }
    }

    this.saveData = function(){
        var _matches = board.getMatches().toString();
        var _cards = board.getCards().toString();

        sessionStorage.setItem("_matches",_matches.toString());
        sessionStorage.setItem("_cards",_cards.toString());
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


window.onbeforeunload = function(){
    board.saveData();

}


 //sessionStorage.clear();
 var storedData = board.getData();

board.display(document.getElementById("board"));
if(storedData){
    board.restoreData(storedData);
}
