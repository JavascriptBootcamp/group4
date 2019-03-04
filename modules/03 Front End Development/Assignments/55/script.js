function Board(_images) {
    var remainMatches = _images.length;
    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = [];
    var matches = [];
    var matchesCards = getLocalStorage();
    (function shuffle() { //IIFE
        var randomImage, randomIndex;
        while (images.length > 0) {
            randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images.splice(randomIndex, 1);
            cards.push(randomImage[0].image);
        }
        console.log(cards)
    })();

    this.display = function (boardEl) {
        var cardDiv, btn, currentIndex = 0;
        var table = document.createElement("div");
        table.id = "wrapper";
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                cardDiv = document.createElement("div");
                // cardDiv.id = "myDiv";
                cardDiv.className = "cards-div action-button animate"
                btn = document.createElement("div");
                btn.className = "cards flipper"
                btn.id = "image" + currentIndex++;
                btn.style.width = "180px";
                btn.style.height = "320px";
                // btn.style.backgroundImage= "url(back_blue.jpg)";
                // btn.style.backgroundColor = "grey";
                btn.onclick = onCardClick;
                cardDiv.appendChild(btn);
                table.appendChild(cardDiv);

            }
        }
        boardEl.appendChild(table);
        (function displayFromLocalStorage() { //IIFE
            remainMatches = matchesCards.length;
            var imageIndex;
            for (const key in matchesCards) {


                if (matchesCards.hasOwnProperty(key)) {
                    const cardImg = matchesCards[key];
                    var allIndexes = cards.map((e, i) =>
                        e === cardImg ? i : ''

                    ).filter(String);
                    allIndexes.forEach(function (index) {
                        document.getElementsByClassName('cards-div')[index].disabled = true;
                        showImage(document.getElementsByClassName('cards-div')[index], index)
                        // document.getElementById("image" + index).disabled=true;
                        document.getElementById("image" + index).onclick = null;
                    })


                    // cards.in
                    //                 imageIndex = cards.indexOf(cardImg);
                    // console.log(document.getElementsByClassName('cards-div')[imageIndex],allIndexes,cardImg,matchesCards[key])
                }
            }
        })();
        //game over after 240 secends(4 minutes)
        let timerId = setInterval(() => {
            var gameOver = document.getElementById("message");
            gameOver.innerHTML = "<h1>Game Over!</h1>";
            var body = document.getElementById("board");
            var btn = document.createElement("button");
            btn.innerHTML = "start game";
            body.innerHTML = "";
            gameOver.appendChild(btn);

            btn.onclick = function () {
                localStorage.clear();
                window.location.reload();
            };

            ;
        }, 240000);

    }

    function onCardClick(event) {
        console.log(event.target.id)

        var currentCardIndex = Number(event.target.id.replace("image", ""));
        var element = document.getElementsByClassName('cards-div')[currentCardIndex];
        element.classList.toggle("is-flipped")
        showImage(event.target, currentCardIndex);
        event.target.disabled = true;
        setSelectedCards(currentCardIndex);
    }
    function setSelectedCards(currentCardIndex) {
        console.log(currentCardIndex, selectedFirstCard)

        if (selectedFirstCard !== null) {
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
        console.log(cards[selectedFirstCard] === cards[selectedSecondCard])
        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {
            remainMatches--;
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            ////
            matchesCards.push(cards[selectedFirstCard]);
            setLocalStorage(matchesCards);

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
            if (!matches.includes(selectedFirstCard) && !matches.includes(selectedSecondCard)) {
                document.getElementById("image" + i).disabled = enable;
            }
        }
    }
    function resetImages(firstCardElement, secondCardElement) {
        firstCardElement.disabled = false;
        firstCardElement.style.backgroundImage = "url(back_red.jpg)";
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage = "url(back_red.jpg)";
    }
    function checkWin() {
        if (remainMatches === 0) {
            document.getElementById("message").innerHTML = "<h1>Moshiko is the King!</h1><h4>You Won!</h4>";
        }
    }

}
function setLocalStorage(cards) {
    localStorage.setItem("matchCards", JSON.stringify(cards))
}
function getLocalStorage() {
    return localStorage.getItem("matchCards") ? JSON.parse(localStorage.getItem('matchCards')) : [];
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
