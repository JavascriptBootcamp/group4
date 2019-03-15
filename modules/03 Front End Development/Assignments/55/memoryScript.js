
function getCardsStorage(cardsLength){
    var cards=[] ; 
    if(window.sessionStorage.getItem("0"))
    for (var i = 0; i < cardsLength; i++) {
            var arrEleme=window.sessionStorage.getItem(i);
            
    cards.push(arrEleme);

    }

    return cards;

}


function getMatchesCards(){
    var matches=[] ; 
    if(window.sessionStorage.getItem("17"))
    for (var i = 17; i < window.sessionStorage.length; i++) {
            var arrEleme=window.sessionStorage.getItem(i);

            matches.push(arrEleme);

    }

    return matches;

}

function Board(_images) {
    if(window.sessionStorage.getItem("remainMatches")>0){
        var remainMatches = +window.sessionStorage.getItem("remainMatches");
    }
    else {

        var remainMatches = _images.length;
        window.sessionStorage.setItem("remainMatches", _images.length);
    }    

    var images = _images.concat(_images);
    var selectedFirstCard = null, selectedSecondCard = null;
    var cards = getCardsStorage(images.length);

    var matches = getMatchesCards();
    var storeImgIndex = 0 ;
    if(window.sessionStorage.getItem("16")){
        var x= Number(window.sessionStorage.getItem("16"));

    }
    else{
        var x= 17;
        window.sessionStorage.setItem("16","17");

    }
 function setMatches(){
    if(matches.length>0){
        for (var i = 17; i < window.sessionStorage.length; i++) {
         var matchInx = window.sessionStorage.getItem(i);
         var button = document.getElementById("image"+matchInx );
         button.style.backgroundImage = "url('" +   cards[matchInx] + "')";
         button.style.backgroundSize = "cover";
         button.disabled= true;


        }
 }}
    if(cards.length===0){
    (function shuffle() { //IIFE
        var randomImage, randomIndex;
        while (images.length > 0) {
            randomIndex = Math.floor(Math.random() * images.length);
            randomImage = images.splice(randomIndex, 1);
                 window.sessionStorage.setItem(storeImgIndex,randomImage[0].image);
                 cards.push(randomImage[0].image);
                 
                 storeImgIndex++;
        }
    })();}
    this.display = function (boardEl) {
        var tr, td, btn, currentIndex = 0;
        for (var i = 0; i < 4; i++) {
           div = document.createElement("div");
           div.id = "div" +i;
            for (var j = 0; j < 4; j++) {
                btn = document.createElement("button");
                btn.id = "image" + currentIndex++;
                btn.style.width = "100px";
                btn.style.height = "100px";
                btn.style.backgroundColor = "grey";
                btn.style.backgroundImage="url('" +"https://png.pngtree.com/png_detail/18/09/10/pngtree-funny-cartoon-picture-png-clipart_2536246.jpg"+ "')";
        btn.style.backgroundSize = "cover";
              
                btn.onclick = onCardClick;
                div.appendChild(btn);
            }
            boardEl.appendChild(div);  
        }
          setMatches();

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
        element.style.backgroundImage = "url('" +    window.sessionStorage.getItem(currentCardIndex)+ "')";

        element.style.backgroundSize = "cover";
        
    }





    function checkMatch(){

        if (cards[selectedFirstCard] === cards[selectedSecondCard]) {
           --remainMatches;
            window.sessionStorage.setItem("remainMatches", remainMatches);

            checkWin();

            matches.push(selectedFirstCard);
            matches.push(selectedSecondCard);
            window.sessionStorage.setItem(x,selectedFirstCard);
            window.sessionStorage.setItem(++x,selectedSecondCard);
            x++;
            window.sessionStorage.setItem("16",x);

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
            if (!matches.includes(i) && !matches.includes(i)){

                document.getElementById("image" + i).disabled = enable;
            }
        }
    }
    function resetImages(firstCardElement, secondCardElement) {
        firstCardElement.disabled = false;
        firstCardElement.style.backgroundImage="url('" +"https://png.pngtree.com/png_detail/18/09/10/pngtree-funny-cartoon-picture-png-clipart_2536246.jpg"+ "')";
        firstCardElement.style.backgroundSize = "cover";
        secondCardElement.disabled = false;
        secondCardElement.style.backgroundImage="url('" +"https://png.pngtree.com/png_detail/18/09/10/pngtree-funny-cartoon-picture-png-clipart_2536246.jpg"+ "')";
        secondCardElement.style.backgroundSize = "cover";
        
    }
    function checkWin() {
var matchCounter = +window.sessionStorage.getItem("remainMatches");
        if (matchCounter=== 0){
            document.getElementById("message").innerHTML = "<h1>Moshiko is the King!</h1><h4>You Won!</h4>";
            document.getElementById("playAgain").style.visibility="visible";

            clearInterval(myVar);


        }
    }



//m=0;
//s=10;
if((window.sessionStorage.getItem("mTimer")&&(window.sessionStorage.getItem("sTimer")))){
    document.getElementById("timer").innerHTML = +window.sessionStorage.getItem("mTimer" )+ " : " + +    window.sessionStorage.getItem("sTimer");

}

else{
window.sessionStorage.setItem("mTimer",9);
window.sessionStorage.setItem("sTimer",59);

}
document.getElementById("timer").innerHTML = +window.sessionStorage.getItem("mTimer" )+ " : " + +    window.sessionStorage.getItem("sTimer");
var myVar = setInterval(myTimer, 1000);

function myTimer() {

        s=+window.sessionStorage.getItem("sTimer" );
        m=+window.sessionStorage.getItem("mTimer" );

s--;
        window.sessionStorage.setItem("sTimer",s);
    document.getElementById("timer").innerHTML = +window.sessionStorage.getItem("mTimer" )+ " : " + +    window.sessionStorage.getItem("sTimer");
    if(s===0){
        if(m===0){
            document.getElementById("message").innerHTML ="<h1>Game Over!</h1><h4>You Lost!</h4>";

            toggleState(true);
            document.getElementById("playAgain").style.visibility="visible";
            clearInterval(myVar);
            
        }

      /*  if(remainMatches >0){
            document.getElementById("message").innerHTML ="HHHHHHHHHH"/* "<h1>Game Over!</h1><h4>You Lost!</h4>"*/;
        

         s=59;
    m--;
window.sessionStorage.setItem("sTimer",s);
    window.sessionStorage.setItem("mTimer",m);
    }
    


   
}
}


function newGame(){  

    window.sessionStorage.clear();
      location.reload();

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