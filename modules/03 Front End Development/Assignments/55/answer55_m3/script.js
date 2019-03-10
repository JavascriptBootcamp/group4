
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
  

  
var bordSize =  myImages.length;
   function display () {
        var theGameBoard = document.querySelector("#board");
        var imgToInsert;
        
        if(sessionStorage.getItem("myBoard") == "") {

        for (var i = 0; i < bordSize; i++) {

        imgToInsert = Math.floor(Math.random() * myImages.length);

        theGameBoard.innerHTML +=`<div class = "card">
                                    <div class = "front">
                                      <img src= ${myImages[imgToInsert]} />
                                    </div>
                                    <div class = "back"> 
                                        <img src= "cover.jpg" />
                                    </div>
                                  </div>`;
        
         myImages.splice(imgToInsert, 1);  
             
        }

          
        for (var i = 0; i <  bordSize; i++) {
            document.querySelectorAll('.back')[i].onclick = onCardClick;

        }
    }
    else {

        theGameBoard.innerHTML = loadFromLocal();
        for (var i = 0; i <  bordSize; i++) {
            document.querySelectorAll('.back')[i].onclick = onCardClick;

       }
    

      
  
    }
  }

    
    var clikedCards= [];''
    var numOfscsess = 0;
  


  
    function startNewGame () {

        document.querySelector(".new-game").classList.add("show");
        var all =  document.querySelectorAll(".back");
        document.getElementById("message").innerHTML = "";
        for(var i = 0 ;i < all.length ; i ++) {
          
           all[i].classList.remove("pointer-events");
        }

        sessionStorage.removeItem("myBoard");

        setTimeout(restGame,10000);
     
    }


    
    function restGame(){
        
       var all =  document.querySelectorAll(".back");
        document.getElementById("message").innerHTML = "GAME OVER";
        for(var i = 0 ;i < all.length ; i ++) {
           all[i].classList.remove("flip");
           all[i].classList.add("pointer-events");
        }
        clikedCards.length = 0;
        document.querySelector(".new-game").classList.remove("show");
        sessionStorage.removeItem("myBoard");

    }

    document.querySelector(".new-game").onclick =  startNewGame;

    setTimeout(restGame,100000);

    function onCardClick(event) {

        if(clikedCards.length < 2) {
            var board = event.target.parentElement.parentElement;
             board.querySelector(".back").classList.add("flip");

            clikedCards.push(board);
        
           
            if (clikedCards.length == 2) {
                if(clikedCards[0].querySelector(".front img").src !==
                   clikedCards[1].querySelector(".front img").src){
                    
                    
                  // clikedCards[0].querySelector(".back").classList.add("flip-back");
                  // clikedCards[1].querySelector(".back").classList.add("flip-back");
                
                     clikedCards[0].querySelector(".back").classList.remove("flip");
                     clikedCards[1].querySelector(".back").classList.remove("flip");
                   
                   
             

                   }
                   else {

                       numOfscsess++;
                       saveInLocal();
                       if(numOfscsess == bordSize/2) {
                        
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


display();


//function load() {console.log("i am load")}

function saveInLocal() {

    sessionStorage.setItem("myBoard", document.querySelector(".board").innerHTML);
}

function loadFromLocal() {

    return sessionStorage.getItem("myBoard");
}

//document.addEventListener("load",load);

//document.addEventListener("load",loadFromLocal);
//document.addEventListener("beforeunload",saveInLocal);