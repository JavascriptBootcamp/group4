function Board(_images) {
    var remainMatches = _images.length;
    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = [];
    var matches = [];
    var openCards = {};
    (function shuffle() { //IIFE
        var randomImage, randomIndex;
        while (images.length > 0) {
            randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images.splice(randomIndex, 1);
            cards.push(randomImage[0].image);
        }
    })();
    this.display = function () {
         
        var boardEl = document.createElement("div");
        boardEl.id = "board";
        var tr, td, btn, currentIndex = 0;
        var warperDiv = document.createElement("div");
        warperDiv.id = "warperDiv";
        for (var i = 0; i < 4; i++) {
            tr = document.createElement("div");
            tr.className = "tr";
            for (var j = 0; j < 4; j++) {
                td = document.createElement("div");
                td.className = "td";
                
                btn = document.createElement("button");
                btn.id = "image" + currentIndex++;
                btn.className = "btn";
                btn.style.backgroundImage =  "url( './card.jpg')";
                btn.style.backgroundSize = "cover";
                btn.onclick = function(){
                    this.classList.remove("glow");
                    this.parentElement.classList.add("btnclicked");
                    onCardClick(event);
                }
                
                btn.onmouseover = function(){
                    this.className += " glow";
                }
                btn.onmouseout = function(){
                    this.classList.remove("glow");
                }
                td.appendChild(btn);
                tr.appendChild(td);
            }
            warperDiv.appendChild(tr);
        }
        boardEl.appendChild(warperDiv);
        document.getElementById("ph").appendChild(boardEl);
        if(newGameFlag){
            document.getElementById("newGameBTN").classList.toggle("hide"); 
            sessionStorage.clear("openCards");
        }
         setOpenCards();
         setTimer();
    }
    function setOpenCards(){
        var cards = document.querySelectorAll(".btn");
        var openCards = JSON.parse(sessionStorage.getItem("openCards"));
        if(!openCards){
            return;
        }
       for(var i in cards){
           if(cards.hasOwnProperty(i)){
                 if(openCards[i]){
                    cards[i].style.backgroundImage = openCards[i]
                 }
                 else{
                    cards[i].style.backgroundImage = "url( './card.jpg')";
                 }
           }
       }
    }
    function setTimer(){
        var timeDiv = document.getElementById("time");
        var time = 30;
        timeDiv.innerText = time;
        var h = setInterval(function timer(){
            if(time<1){
                clearInterval(h);
                 var b = document.getElementById("board");
                 b.parentNode.removeChild(b);
                 document.getElementById("newGameBTN").classList.toggle("hide");  
            }
            else{
            time--;
            timeDiv.innerText = time;
            }
        },1000);
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
            if(JSON.parse(sessionStorage.getItem("openCards"))){
            openCards = JSON.parse(sessionStorage.getItem("openCards"));
            }
            openCards[selectedFirstCard] = document.getElementById("image" + selectedFirstCard).style.backgroundImage;
            openCards[selectedSecondCard] = document.getElementById("image" + selectedSecondCard).style.backgroundImage;
            sessionStorage.setItem("openCards",JSON.stringify(openCards));
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
       firstCardElement.style.backgroundImage =   "url( './card.jpg')";
       firstCardElement.parentElement.classList.remove("btnclicked");
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage =  "url( './card.jpg')";
        secondCardElement.parentElement.classList.remove("btnclicked");
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

function init(){

var catCard = new Card('cat');
var dogCard = new Card('dog');
var goldfishCard = new Card('goldfish');
var guineaPigCard = new Card('guinea_pig');
var kittenCard = new Card('kitten');
var mouseCard = new Card('mouse');
var puppyCard = new Card('puppy');
var rabbitCard = new Card('rabbit');
var board = new Board([catCard, dogCard, goldfishCard, guineaPigCard, kittenCard, mouseCard, puppyCard, rabbitCard]);
board.display();


}

newGameFlag = false;
function newGame(){
    newGameFlag=true;
    init();
}