
function Board(_images) {
    var remainMatches = _images.length;
    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = [];
    var matches = [];

    this.shuffle = function() { 
        var randomImage, randomIndex;
        while (images.length > 0) {
            randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images.splice(randomIndex, 1);
            cards.push(randomImage[0].image);
        }
    };

    this.display = function (boardEl) {
        var btn, currentIndex = 0;
		
        for (var i = 0; i < 16; i++)
        {
                cell = document.createElement("div");
                cell.className = "cell";
                btn = document.createElement("button");
                btn.id = "image" + currentIndex++;
                btn.style.width = "100px";
                btn.style.height = "130px";
                btn.style.backgroundColor = "grey";
                btn.onclick = onCardClick;
                cell.appendChild(btn);
                boardEl.appendChild(cell);
        }
		if(window.sessionStorage.getItem("openCards"))
		{


			matches = window.sessionStorage.getItem("openCards").split(',');
			var current;
			cards = window.sessionStorage.getItem("cards").split(',');
			
			matches.forEach(function(i)
			{
				currentCard = document.getElementById("image" + i);
				currentCard.disabled = true;
				currentCard.style.backgroundImage = "url('" + cards[i] + "')";
				currentCard.style.backgroundSize = "cover";		
			});
		}
		else
		{
			this.shuffle();
		}
    }
    function onCardClick(event) {
        var currentCardIndex = Number(event.target.id.replace("image", ""));
        showImage(event.target, currentCardIndex);
        event.target.disabled = true;
        setSelectedCards(currentCardIndex);
    }
    function setSelectedCards(currentCardIndex) {
        if (selectedFirstCard !== null) {
            selectedSecondCard = currentCardIndex;
            checkMatch();
        }
        else {
            selectedFirstCard = currentCardIndex;
        }
    }
    function showImage(element, currentCardIndex) {
		element.classList.toggle("flipOn");
        element.style.backgroundImage = "url('" + cards[currentCardIndex] + "')";
        element.style.backgroundSize = "cover";
    }
    function checkMatch(){
        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {

            remainMatches--;
            checkWin();
            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
			window.sessionStorage.setItem("openCards", matches.toString());
			window.sessionStorage.setItem("cards", cards.toString());
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
            }, 3500);
			
        }
    }
    function toggleState(enable) {
        for (var i=0;i<cards.length;i++){
            if (!matches.includes(selectedFirstCard) && !matches.includes(selectedSecondCard)){
                document.getElementById("image" + i).disabled = enable;
				//element.className += " flipOff";
            }
        }
    }
    function resetImages(firstCardElement, secondCardElement) {
		firstCardElement.classList.toggle("flipOff");
        firstCardElement.disabled = false;

		firstCardElement.classList.toggle("flipOn");
        firstCardElement.style.backgroundImage = "url(card.jpg)";
		secondCardElement.classList.toggle("flipOff");
        secondCardElement.disabled = false;

		secondCardElement.classList.toggle("flipOn");
        secondCardElement.style.backgroundImage = "url(card.jpg)";
    }
    function checkWin() {
        if (remainMatches === 0){
            document.getElementById("message").innerHTML = "<h4>You Won!</h4>";
        }
    }
}

function Card(animal) {
    this.image = animal + '.png';
}

window.onload = function() {
  var minuts = 4;
  var sec = 59;
  var x = setInterval(function() {
    document.getElementById("timer").innerHTML = minuts + " : " + sec;
    sec--;
	if( (minuts == 00 || minuts == 0) && (sec === 0 || sec === 00) || document.getElementById("message").innerHTML.length > 0)
	{
		clearInterval(x); 
		
		if(document.getElementById("message").innerHTML.length === 0)
		{
			document.getElementById("timer").innerHTML = "Game Over!"; 			
			document.getElementById("reBtn").style.display = "inline";
		}

	}
    if (sec == 00) {
      minuts--;
      sec = 60;
      if (minuts == 0) {
        minuts = 2;
      }
    }
  }, 1000);
}
var reBtn = document.getElementById("reBtn");

reBtn.onclick = function()
{
	location.reload();
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
