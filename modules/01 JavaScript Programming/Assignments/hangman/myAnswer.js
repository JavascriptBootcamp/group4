


function getFindsStr(phrase, letters){

                    var currentGuess=[];
                    currentGuess.fill("_");
                    for(var i=0;i<letters.length;i++){
                            if(isInPhrase(phrase,letters[i])){
                                
                                while(phrase.)
                                currentGuess[i]=
                            }


                    }


}



function isInPhrase(phrase, letter){


   return(phrase.indexOf(letter));





}
function isWon(phrase, letters){
var phraseLengthIndex=0;
while(phraseLengthIndex<phrase.Length){
if(!letters.includes(phrase.charAt(phraseLengthIndex)))
    return false;

 else 
        phraseLengthIndex++;
    
}
return true;


}



function runGame(phrases){


   var chosenPhrase= phrases[Math.floor(Math.random() * phrases.length)];

        var life=10;
while(life>0&&!isWon){

    getFindsStr(phrase, letters);
    isInPhrase(phrase, letter);


    life--;
}




}


function myMain(){

var phrases=["Hello World","You won","Flower","Good game","funny"];

runGame(phrases);


}


