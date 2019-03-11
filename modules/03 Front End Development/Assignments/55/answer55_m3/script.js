
var myImages = ["cat.png",
    "dog.png",
    "goldfish.png",
    "guinea_pig.png",
    "kitten.png",
    "mouse.png",
    "puppy.png",
    "rabbit.png",
    "cat.png",
    "dog.png",
    "goldfish.png",
    "guinea_pig.png",
    "kitten.png",
    "mouse.png",
    "puppy.png",
    "rabbit.png"];
var clikedCards = [];
var numOfscsess = 0;
var bordSize = myImages.length;
var gameTime = 60000;
var timeRestGame;
var timeInterval;

function display() {
    setCountTime(gameTime);
    setTimeout(restGame, gameTime);
    var theGameBoard = document.querySelector("#board");
    var imgToInsert;

    if (sessionStorage.getItem("myBoard") == null) {

        for (var i = 0; i < bordSize; i++) {

            imgToInsert = Math.floor(Math.random() * myImages.length);

            theGameBoard.innerHTML += `<div class = "card">
                                    <div class = "front">
                                      <img src= ${myImages[imgToInsert]} />
                                    </div>
                                    <div class = "back"> 
                                        <img src= "cover.jpg" />
                                    </div>
                                  </div>`;

            myImages.splice(imgToInsert, 1);

        }



    }
    else {
        theGameBoard.innerHTML = loadFromLocal();
        numOfscsess += Number(document.querySelectorAll(".back.flip").length) / 2;

    }

    for (var i = 0; i < bordSize; i++) {
        document.querySelectorAll('.back')[i].onclick = onCardClick;

    }
}

function setCountTime (timeGame) {
timeInterval = setInterval(function () {
    timeGame -= 1000;
    document.getElementById("message").innerHTML = `
       you have ${timeGame / 1000} second
       `;
}, 1000);

}

function startNewGame() {

    
      setCountTime(gameTime);
      setTimeout(restGame, gameTime);

    document.querySelector(".new-game").classList.add("show");
    var all = document.querySelectorAll(".back");
    document.getElementById("message").innerHTML = "";
    for (var i = 0; i < all.length; i++) {

        all[i].classList.remove("pointer-events");
    }

    sessionStorage.removeItem("myBoard");

    timeRestGame = setTimeout(restGame, gameTime);

}

function restGame() {

    clearInterval(timeInterval);
    clearTimeout(timeRestGame);
    var all = document.querySelectorAll(".back");
    document.getElementById("message").innerHTML = "GAME OVER";
    for (var i = 0; i < all.length; i++) {
        all[i].classList.remove("flip");
        all[i].classList.add("pointer-events");
    }
    clikedCards.length = 0;
    document.querySelector(".new-game").classList.remove("show");
    sessionStorage.removeItem("myBoard");

}




document.querySelector(".new-game").onclick = startNewGame;



function onCardClick(event) {

    if (clikedCards.length < 2) {
        var board = event.target.parentElement.parentElement;
        board.querySelector(".back").classList.add("flip");

        clikedCards.push(board);


        if (clikedCards.length == 2) {
            if (clikedCards[0].querySelector(".front img").src !==
                clikedCards[1].querySelector(".front img").src) {


                var card1 = clikedCards[0].querySelector(".back");
                var card2 = clikedCards[1].querySelector(".back");

                setTimeout(function () {

                    /*  clikedCards[0].querySelector(".back").classList.add("flip-back");
                     clikedCards[1].querySelector(".back").classList.add("flip-back");
   */
                    card1.classList.remove("flip");
                    card2.classList.remove("flip");

                }, 1000);

            }
            else {

                numOfscsess++;
                saveInLocal();
                if (numOfscsess == bordSize / 2) {

                    document.getElementById("message").innerHTML = "Win - You Are the King";
                    restGame();
                }
            }
            clikedCards.length = 0;
        }


    }


}

function showImage(element, currentCardIndex) {

    element.classList.add(".show-img");
}

function saveInLocal() {

    sessionStorage.setItem("myBoard", document.querySelector(".board").innerHTML);
}

function loadFromLocal() {

    return sessionStorage.getItem("myBoard");
}

display();

//document.addEventListener("load",display);
//document.addEventListener("load",loadFromLocal);
//document.addEventListener("beforeunload",saveInLocal);