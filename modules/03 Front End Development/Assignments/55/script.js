function Board(_images) {
    var remainMatches = _images.length;
    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = [];
    var matches = [];
    var startTime = new Date().getTime();
    var endTime = new Date(startTime + 2*60000);
    var clock = setInterval(function(){
         var now = new Date().getTime();
         if (now>=endTime){
             lose();
             clearInterval(clock);
         }
         else
         {
            var timer=document.getElementById("timer");
            var detla = endTime-now;
            var minutes = Math.floor((detla % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((detla % (1000 * 60)) / 1000);
            timer.innerHTML=`<h2>Time Left:</h2><h2>${minutes}:${seconds}</h2>`;
         }
    }, 1000);
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
        table.setAttribute('id','table');
        for (var i = 0; i < 4; i++) {
            tr = document.createElement("div");
            tr.setAttribute('class','tr');
            for (var j = 0; j < 4; j++) {
                td = document.createElement("div");
                td.setAttribute('class','td');
                btn = document.createElement("button");
                btn.setAttribute('class','btn');
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
        event.target.style.transform = "rotate3d(0,1,0,180deg)";
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
            storeInLS();
        }
        else {
            toggleState(true);
            setTimeout(function(){
                var img1 = document.getElementById("image" + selectedFirstCard);
                var img2 = document.getElementById("image" + selectedSecondCard);
                resetImages(img1, img2);
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
        firstCardElement.style.transform = "rotate3d(0,1,0,360deg)";
        firstCardElement.disabled = false;
        firstCardElement.style.backgroundImage = "";
        secondCardElement.style.transform = "rotate3d(0,1,0,360deg)";
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage = "";
    }
    function checkWin() {
        if (remainMatches === 0){
            document.getElementById("message").innerText = "You Won!";
            document.getElementById("wrapper").style.display='flex';
            document.getElementById("board").classList.toggle("blur");
            clearInterval(clock);
        }
    }
    function storeInLS(){
        var table = document.getElementById("table");
        var storage = {'table':table.innerHTML,'cards':cards,'matches':matches,'remainMatches':remainMatches}
        localStorage.setItem('storage',JSON.stringify(storage));
        console.log(table,cards,matches,remainMatches);

    }
    this.loadFromLsTo = function (boardEl){
        var table = document.createElement("div");
        var btn;
        var storage=JSON.parse(localStorage.getItem('storage'));
        table.setAttribute('id','table');
        table.innerHTML = storage.table;
        cards=storage.cards;
        matches=storage.matches;
        remainMatches=storage.remainMatches;
        console.log(table,cards,matches,remainMatches);
        console.log(boardEl);
        boardEl.appendChild(table);
        btn = document.getElementsByClassName("btn");
        for(var i=0;i<btn.length;i++){
            if(!btn[i].disabled){
                btn[i].addEventListener("click", onCardClick);
            }
        }
    }
    function lose(){
        document.getElementById("message").innerText = "You Lost";
        document.getElementById("wrapper").style.display='flex';
        document.getElementById("board").classList.toggle("blur");
    }
    this.startNewGame = function() {
        // var board = document.getElementById("board");
        // board.classList.toggle("blur");
        // document.getElementById("wrapper").style.display='none';
        localStorage.clear();
        location.reload();
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

if(localStorage.hasOwnProperty('storage')){
    board.loadFromLsTo(document.getElementById("board"));
}
else{
    board.display(document.getElementById("board"));
}