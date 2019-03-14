function Board(_images) {
    var remainMatches = _images.length;
    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = [];
    var matches = [];
    if (sessionStorage.getItem("cardsSort")) {
        cards = sessionStorage.getItem("cardsSort").split(',');
        try {
            matches = sessionStorage.getItem("matches").split(',').map(Number);
        }
        catch (e) { }
        if (sessionStorage.getItem("remainMatches")) {
            remainMatches = sessionStorage.getItem("remainMatches")
        }
        console.log(remainMatches)

    }
    else {
        (function shuffle() { //IIFE
            var randomImage, randomIndex;
            while (images.length > 0) {
                randomIndex = Math.floor(Math.random() * images.length);
                randomImage = images.splice(randomIndex, 1);
                cards.push(randomImage[0].image);
            }
            sessionStorage.setItem("cardsSort", cards);
        })();
    }
    this.display = function (boardEl) {
        var rowDiv, btn_front, frontAndBackHolder, currentIndex = 0;
        for (var i = 0; i < 4; i++) {
            rowDiv = document.createElement("div");
            rowDiv.setAttribute("class","row-div")
            
            for (var j = 0; j < 4; j++) {
                frontAndBackHolder = document.createElement("div");
                frontAndBackHolder.id = "frontAndBackHolder" + currentIndex
                btn_front = document.createElement("button");
                btn_front.id = "image" + currentIndex;
                btn_front.onclick = onCardClick;
                frontAndBackHolder.appendChild(btn_front);
                rowDiv.appendChild(frontAndBackHolder);
                currentIndex++;
            }
            boardEl.appendChild(rowDiv);
        }
        var tempMatches = matches.filter((el, i, a) => i === a.indexOf(el))
        for(var i = 0; i < tempMatches.length; i++) {
            var imgBtn = document.querySelector("#image" + matches[i]);
            showImage(imgBtn, matches[i]);
            imgBtn.disabled = true;      
        }

    }
    function onCardClick(event) {
        var currentCardIndex = Number(event.target.id.replace("image", ""));
        var frontAndBack = document.querySelector("#frontAndBackHolder" + currentCardIndex);
        frontAndBack.style = "transform: rotateY(180deg); transition: transform 0.8s;";
        setTimeout(function () {
            showImage(event.target, currentCardIndex);
        }, 200);
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
    function checkMatch() {
        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {
            sessionStorage.setItem("image" + selectedFirstCard, cards[selectedFirstCard]); // using sessionStorage
            sessionStorage.setItem("image" + selectedSecondCard, cards[selectedSecondCard]);
            remainMatches--;
            sessionStorage.setItem("remainMatches", remainMatches);
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            sessionStorage.setItem("matches", matches);
            selectedFirstCard = null;
            selectedSecondCard = null;
        }
        else {
            toggleState(true);
            setTimeout(function () {
                document.querySelector("#image" + selectedFirstCard).style = "transform: rotateY(180deg); transition: transform 0.3s;";
                document.querySelector("#image" + selectedSecondCard).style = "transform: rotateY(180deg); transition: transform 0.3s;";
                setTimeout(function () {
                    resetImages(document.getElementById("image" + selectedFirstCard), document.getElementById("image" + selectedSecondCard));
                    selectedFirstCard = null;
                    selectedSecondCard = null;
                    toggleState(false);
                }, 500)


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
        firstCardElement.style = "";
        firstCardElement.parentElement.style = "";
        secondCardElement.style = "";
        secondCardElement.disabled = false;
        secondCardElement.parentElement.style = "";
    }
    function checkWin() {
        if (remainMatches === 0) {
            document.querySelector("#board").style.display = "none";
            document.querySelector("#board").innerHTML = "<h1>Moshiko is the King!</h1><h4>You Won!</h4>";
            sessionStorage.setItem("time","00:03");
            location.reload();
        
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
var timer2;

if(sessionStorage.getItem("time")){
    timer2 = sessionStorage.getItem("time");
}
else{
    timer2 = "10:00";
}
var interval = setInterval(function() {
  var timer = timer2.split(':');
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = (seconds < 0) ? --minutes : minutes;
  if (minutes === 0 && seconds === 0){
    clearInterval(interval);
    document.querySelectorAll(".row-div").forEach(row => row.style.display = "none")
    document.querySelector("#board").innerHTML = "<h1>Game Over</h1>"
    restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Start Again"
    restartBtn.id = "restart-btn"
    restartBtn.onclick = function(){
        sessionStorage.clear();
        location.reload();
    }
    document.querySelector("#board").appendChild(restartBtn);
  } 
  sessionStorage.setItem("time", document.querySelector("#timer").innerHTML)
  console.log(sessionStorage.getItem("time"));
  seconds = (seconds < 0) ? 59 : seconds;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  var timeCountDown = document.getElementById("timer");
  timeCountDown.innerHTML = minutes + ':' + seconds;
  timeCountDown.style = "font-size: 70px; color: white"
  timer2 = minutes + ':' + seconds;
}, 1000);

