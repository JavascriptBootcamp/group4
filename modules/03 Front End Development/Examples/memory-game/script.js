
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
    this.display = function (boardEl) {
        var tr, td, btn, currentIndex = 0;
        var table = document.createElement("div");
        for (var i = 0; i < 4; i++) {
            tr = document.createElement("div");
            tr.style.display = "block";
            for (var j = 0; j < 4; j++) {
                td = document.createElement("div");
                td.style.display = "inline-block";
                btn = document.createElement("button");
                btn.id = "image" + currentIndex++;
                btn.style.width = "100px";
                btn.style.height = "100px";
                // btn.style.backgroundColor = "grey";
                btn.onclick = onCardClick;
                td.appendChild(btn);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        boardEl.appendChild(table);
        init();
    }
    
    function init(){
        console.log(localStorage);
        for(var i=0;i<cards.length;i++){
            if(localStorage.getItem(i)==='true'){
                console.log(localStorage.getItem(i));
                showImage(document.getElementById("image"+i),i);
                // toggleState(false);
            }
        }

        var timerDiv = document.createElement("div");
        timerDiv.style.fontSize = "30px";
        document.body.appendChild(timerDiv);
        var timer = 180;
        timerDiv.innerHTML = timer;
        let timerId = setTimeout(function tick() {
            if (!timer){
                document.body.innerHTML = "";
                alert("Game over, refresh page to play again.")
            }
            timer--;
            timerDiv.innerHTML = timer;
            timerId = setTimeout(tick, 1000); 
          }, 1000);
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
        element.style.opacity = "0";
        setTimeout(function(){},1000);
        element.style.backgroundImage = "url('" + cards[currentCardIndex] + "')";
        element.style.backgroundSize = "cover";
        element.style.opacity = "1";
    }
    function checkMatch(){
        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {
            remainMatches--;
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            localStorage.setItem(selectedFirstCard,'true');
            localStorage.setItem(selectedSecondCard,'true');
            console.log(localStorage.getItem(selectedFirstCard));
            console.log(localStorage.getItem(selectedSecondCard));
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
        firstCardElement.style.opacity = "0";
        setTimeout(function(){},1000);
        firstCardElement.style.backgroundImage = "url(pattern.jpg)";
        firstCardElement.style.backgroundSize = "400%";
        firstCardElement.style.opacity = "1";
        secondCardElement.disabled = false;
        secondCardElement.style.opacity = "0";
        setTimeout(function(){},1000);
        secondCardElement.style.backgroundImage = "url(pattern.jpg)";
        secondCardElement.style.backgroundSize = "400%";
        secondCardElement.style.opacity = "1";
    }
    function checkWin() {
        if (remainMatches === 0){
            document.getElementById("message").innerHTML = "<h1>Moshiko is the King!</h1><h4>You Won!</h4>";
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