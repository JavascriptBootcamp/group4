var phrasesArr = ["pizza","hamburger","hot dog"];
//var phrasesArr = ["pizza"];
var phrasesStr = phrasesArr[Math.floor(Math.random()*phrasesArr.length)];
var arr = new Array(phrases.length);
var phrases = [];
phrases.push(phrasesStr);

function getFindsStr(phrase, letter){
       
        console.log(phrase);
        phrase = phrase.join();
        for(var i=0; i<phrase.length; i++){
            if (phrase[i].toLowerCase() === letter){
                 arr[i] = letter;
            }
            else if(phrase[i].toLowerCase() === " "){
                arr[i] = " "
            }
        }
    return arr;
}

function isInPhrase(phrase, letter){
    if(phrase.includes(letter)){
        return true;
    }
    return false;
}

function isWon(phrase, letters){
    phrase = phrase.join();
    var phraseCopy = phrase.toLowerCase();
    phraseCopy = phraseCopy.split('');
    letters.forEach(function(item1,index1){
        phraseCopy.forEach(function(item2,index2){
            if(item1 === item2){
               phraseCopy[index2] = ""; 
            }
        });
    });
    var res = phraseCopy.every(function(item){
        return item === "" || item === " ";
    });
    return res;
}



function runGame(phrases){
    var life = 10;
    var won = false;
    var lettersInput = ["p","z","i","a","d","y","n","t","q","l"];
    var index = 0;
   
    while(life>0 && !won){
        console.log("remaining life :",life);
        var findStr = getFindsStr(phrases,lettersInput[index])
        console.log("current match : ",findStr);
        index++;
        if(!isInPhrase(phrases,lettersInput[index])){
           life--; 
        }
        if(isWon(phrases,findStr)){
            won = true;
        }
    }   
    if(life === 0){
            console.log("you lost");
    }
    else{
        console.log("you won");
    }   

//     var readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout
//     })
//     readline.question("entter a letter?", (letter) => {
//       life--;
//       readline.close()
//     })

}

runGame(phrases);
