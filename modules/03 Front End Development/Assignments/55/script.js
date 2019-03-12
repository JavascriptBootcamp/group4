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
        var tr, td, flipper, front, back, btn, currentIndex = 0;
        var table = document.createElement("div");
        table.id = 'table';
        for (var i = 0; i < 4; i++) {
            tr = document.createElement("div");
            tr.className = 'tr';
            for (var j = 0; j < 4; j++) {
                td = document.createElement("div");
                td.className = 'td flip-container';
                flipper = document.createElement('div');
                flipper.className = 'flipper';
                front = document.createElement('div');
                front.className = 'front';
                front.onclick = onBackgroundClick;
                back = document.createElement('div');
                back.className = 'back';
                btn = document.createElement("button");
                btn.id = "image" + currentIndex++;

                // btn.onclick = onCardClick;
                back.appendChild(btn);
                flipper.appendChild(front);
                flipper.appendChild(back);
                td.appendChild(flipper);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        boardEl.appendChild(table);
    }
    // function onCardClick(event) {
    //     // var currentCardIndex = Number(event.target.id.replace("image", ""));
    //     // showImage(event.target, currentCardIndex);
    //     // event.target.disabled = true;
    //     // setSelectedCards(currentCardIndex);
    //     // console.log(event.target);
    //     //lip(event);
    // }
    function onBackgroundClick(event) {
        var selectedBtn = event.target.nextSibling.children[0];
        if (selectedBtn.disabled === false) {
            var currentCardIndex = Number(selectedBtn.id.replace("image", ""));
            showImage(selectedBtn, currentCardIndex);
            selectedBtn.disabled = true;
            setSelectedCards(currentCardIndex);
            flip(event);
        }
    }
    function setSelectedCards(currentCardIndex) {
        if (selectedFirstCard !== null) {// changed because index 0
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
    function checkMatch() {
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
            setTimeout(function () {
                resetImages(document.getElementById("image" + selectedFirstCard), document.getElementById("image" + selectedSecondCard));
                selectedFirstCard = null;
                selectedSecondCard = null;
                toggleState(false);
            }, 1000);
        }
    }
    function toggleState(enable) {
        for (var i = 0; i < cards.length; i++) {
            if (!matches.includes(i)) {// the change
                document.getElementById("image" + i).disabled = enable;
            }
        }
    }
    function resetImages(firstCardElement, secondCardElement) {
        var first = firstCardElement.parentNode.parentNode.parentNode;
        var second = secondCardElement.parentNode.parentNode.parentNode;
        firstCardElement.disabled = false;     
        firstCardElement.style.backgroundImage = "";
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage = "";
        flip(first);
        flip(second);
    }
    function checkWin() {
        if (remainMatches === 0) {
            document.getElementById("message").innerHTML = "<h1>Moshiko is the King!</h1><h4>You Won!</h4>";
        }
    }
}

function Card(animal) {
    this.image = animal + '.png';
}

function flip(e) {
    var btn = e.target || e;
    var elem = e.target ? btn.parentNode.parentNode:e;
    elem.classList.toggle('hover');
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