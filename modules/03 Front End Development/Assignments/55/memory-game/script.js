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
        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement("div");
            card.classList.add("card_container");
            card.id = "image"+i;
            card.onclick = function() {
                onCardClick(this);
            }

            let card_back = document.createElement("div");
            card_back.classList.add("card");
            card_back.classList.add("card_back");
            card_back.style.backgroundImage = "url('" + cards[i] + "')";
            card_back.style.backgroundSize = "cover";

            let card_front = document.createElement("div");
            card_front.classList.add("card");
            card_front.classList.add("card_front");

            card.appendChild(card_back);
            card.appendChild(card_front);
            boardEl.appendChild(card);
        }
    }

    function flip_card(card_container) {
        //sign card container as a fliped/not fliped card
        card_container.classList.toggle("flip");
        //fliped the card inner part - back and front
        let card_sides = card_container.querySelectorAll(".card_front, .card_back");
        for (const side of card_sides) {
            side.classList.toggle("flip");
        }
    }
    
    function onCardClick(card_el) {
        flip_card(card_el);
        var currentCardIndex = Number(card_el.id.replace("image", ""));
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

    function checkMatch(){
        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {
            remainMatches--;
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            document.querySelector("#image"+selectedFirstCard).onclick = null;
            document.querySelector("#image"+selectedSecondCard).onclick = null;
            selectedFirstCard = null;
            selectedSecondCard = null;
        }
        else {
            setTimeout(function(){
                selectedFirstCard = null;
                selectedSecondCard = null;
                toggleState();
            }, 900);
        }
    }
    function toggleState() {
        let cards = document.querySelectorAll(".card_container");
        for (let card of cards) {
            if(card.onclick !== null && card.classList.value.includes("flip")){
                flip_card(card);
            }
        }
        
    }

    function checkWin() {
        if (remainMatches === 0){
            document.querySelector("#board").style.display = "none";
            document.querySelector("#message").classList.remove("hide");
            document.querySelector("#message>h1").innerHTML = "You Won!!";
        }
    }
}

function Card(animal) {
    this.image = 'imgs/' + animal + '.png';
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