function Board(_images) {
    var time = 300;
    var timer = document.getElementById("timer");
    var timerInterval = setInterval(function () {
        time--;
        timer.innerText = time;
        checkTimer(time, timerInterval);
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

    this.display = function (boardEl) {
        var tr, td, btn, currentIndex = 0;
        var table = document.createElement("table");
        table.setAttribute("id","table");
        for (var i = 0; i < 4; i++) {
            tr = document.createElement("tr");
            for (var j = 0; j < 4; j++) {
                td = document.createElement("td");
                btn = document.createElement("button");
                btn.id = "image" + currentIndex++;
                btn.style.width = "100px";
                btn.style.height = "100px";
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
        element.style.backgroundSize = "100% 100%";
        element.style.transform = "rotateY(180deg)";
    }
    function checkMatch() {
        var table = document.getElementById("table");
        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {
            remainMatches--;
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            selectedFirstCard = null;
            selectedSecondCard = null;
            st1.setItem("memoryGame", JSON.stringify({'table':table.innerHTML,'cards':cards,'matches':matches,'remainMatches':remainMatches}));
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
        firstCardElement.style.backgroundImage = "";
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage = "";
    }
    function checkWin() {
        if (remainMatches === 0) {
            document.getElementById("message").innerHTML = "<h1>Moshiko is the King!</h1><h4>You Won!</h4>";
        }
    }
    this.displayFromStorage = function(boardEl){
        var table = document.createElement("div");
        var btn;
        var storage=JSON.parse(st1.getItem('memoryGame'));
        table.setAttribute('id','table');
        table.innerHTML = storage.table;
        cards=storage.cards;
        matches=storage.matches;
        remainMatches=storage.remainMatches;
        boardEl.appendChild(table);
        btn = document.querySelectorAll("button");
        for(var i=0;i<btn.length;i++){
            if(!btn[i].disabled){
                btn[i].addEventListener("click", onCardClick);
            }
        }
    }
}

function Card(animal) {
    this.image = animal + '.png';
}

function checkTimer(time, timerInterval) {
    if (time === 0) {
        clearInterval(timerInterval);
        var container = document.getElementById("container");
        var board = document.getElementById("board");
        var btn = document.createElement("button");
        var message = document.getElementById("message");
        var table = document.getElementsByTagName("table")[0];
        btn.innerText = "New Game";
        btn.id = "new-game";
        btn.onclick = initialGame;
        board.removeChild(table);
        container.appendChild(btn);
        message.innerText = "You Lose!!!"
    }
}

function initialGame() {
    var message = document.getElementById("message");
    var data = st1.getItem("memoryGame");
    var catCard = new Card('cat');
    var dogCard = new Card('dog');
    var goldfishCard = new Card('goldfish');
    var guineaPigCard = new Card('guinea_pig');
    var kittenCard = new Card('kitten');
    var mouseCard = new Card('mouse');
    var puppyCard = new Card('puppy');
    var rabbitCard = new Card('rabbit');
    var board = new Board([catCard, dogCard, goldfishCard, guineaPigCard, kittenCard, mouseCard, puppyCard, rabbitCard]);
    if (document.getElementById("new-game")) {
        document.getElementById("new-game").remove();
    }
    if (data) {
        board.displayFromStorage(document.getElementById("board"));
    }
    else {
        message.innerText = "";
        board.display(document.getElementById("board"));
    }
}

initialGame();



