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

    this.getCards = function () {
        return cards;
    }

    this.getMatches = function () {
        return matches;
    }

    this.display = function (boardEl) {
        //get the cards from session storage if exict
        if(sessionStorage.getItem("cards")){
            cards = sessionStorage.getItem("cards").split(",");
        }

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

            //get the matches from session storage if exict
            if(sessionStorage.getItem("matches")){ 
                matches = sessionStorage.getItem("matches").split(",");
                //if id in the matches from session storag 
                if(matches.includes(`${i}`)){
                    //remove onclick  and flip the card
                    card.onclick = null;
                    flip_card(card);
                }
            }
        }
        //update the remain matches if exist a data fron the session
        remainMatches-=(matches.length/2);
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
            //set the cards in session storage
            sessionStorage.setItem("cards", cards);
            //set the matches in session storage 
            sessionStorage.setItem("matches", matches);
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
            gameOver("You Won!!");
        }
    }

    function gameOver(msg) {
        document.querySelector("#board").style.display = "none";
        document.querySelector("#message").classList.remove("hide");
        document.querySelector("#message>button").classList.remove("hide");
        document.querySelector("#message>h1").innerHTML = msg;
    }

    this.timesUp = function (str) {
        gameOver(str);
    }
}

function Card(card_img) {
    this.image = 'imgs/' + card_img;
}

function game_timer(game_obj, time_in_minutes) {
    var timer = time_in_minutes*60;
    var minutes;
    var seconds;
    var id = setInterval(() => {
        timer--;
        if((game_obj.getCards().length -2) === game_obj.getMatches().length) {
            clearInterval(id);
        }
        else if(timer === 0) {
            game_obj.timesUp("Time's up!! Game Over");
            clearInterval(id);
        }
        minutes = Math.floor(timer/60);
        seconds = timer%60;
        document.querySelector("#clock>h1").innerHTML = `${minutes}:${seconds}`;
    },1000);
}

function reset_game() {
    document.querySelector("#board").style.display = "";
    document.querySelector("#board").innerHTML = "";
    sessionStorage.removeItem("matches");
    sessionStorage.removeItem("cards");
    document.querySelector("#message").classList.add("hide");
    document.querySelector("#message>button").classList.add("hide");
    document.querySelector("#message>h1").innerHTML = "";
    var newboard = new Board([Card_1, Card_2, Card_3, Card_4, Card_5, Card_6, Card_7, Card_8]);
    newboard.display(document.getElementById("board"));
    game_timer(board, 5);
}

var Card_1 = new Card('7.png');
var Card_2 = new Card('9.png');
var Card_3 = new Card('10.png');
var Card_4 = new Card('ace.png');
var Card_5 = new Card('joker.png');
var Card_6 = new Card('king.png');
var Card_7 = new Card('prince.png');
var Card_8 = new Card('queen.png');
var board = new Board([Card_1, Card_2, Card_3, Card_4, Card_5, Card_6, Card_7, Card_8]);
board.display(document.getElementById("board"));
game_timer(board, 5);