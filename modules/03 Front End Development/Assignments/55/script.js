function Board(_images) {
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
        for (var i = 0; i < 4; i++) {
            tr = document.createElement("div");
            for (var j = 0; j < 4; j++) {
                td = document.createElement("div");
                td.className = "tr"+i;
                btn = document.createElement("button");
                btn.className = "card-button";
                btn.id = "image" + currentIndex++;
                btn.style.width = "100px";
                btn.style.height = "100px";
                btn.style.backgroundColor = "grey";
                btn.onclick = onCardClick;
                td.appendChild(btn);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        boardEl.appendChild(table);
    }

    function onCardClick(event) {
        var currentCardIndex = Number(event.target.id.replace("image", ""));
        showImage(event.target, currentCardIndex);
        event.target.disabled = true;
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
        var foundedcardsIdxStr = localStorage.getItem("foundedcardsIdxStr");
        var foundedcardsStr = localStorage.getItem("foundedcardsStr");
        this.setCards(foundedcardsStr.split(","));
        this.setMatches(foundedcardsIdxStr.split(","));
        this.setRemainMatches(this.getRemainMatches() - this.getMatches());

        runOnClickFoundedCards();

    }

    function runOnClickFoundedCards(){
        for(var i=0; i< matches.length; i+=2){
            selectedFirstCard = matches[i];
            selectedSecondCard = matches[i+1];
        }
    }

    this.saveData = function(){
        var foundedcardsIdxStr = '';
        var matches = board.getMatches();
        var foundedcardsStr = '';
        var cards = board.getCards();
        for(var i=0; i< matches.length;i++){
            foundedcardsIdxStr += matches[i];
            if(i < matches.length-1 ){
                foundedcardsIdxStr += ',';
            }
        }   
        console.log(matches, foundedcardsIdxStr);
        localStorage.setItem("foundedcardsIdxStr",foundedcardsIdxStr.toString());
        console.log(cards, foundedcardsStr);
        localStorage.setItem("foundedcardsStr",foundedcardsStr.toString());
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

board.display(document.getElementById("board"));
board.getData();