const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var life = 10;
var won = false;  
var phrasesArr = ["pizza","hamburger","hot dog"];
var phrasesStr = phrasesArr[Math.floor(Math.random()*phrasesArr.length)];
var arr = new Array(phrasesStr.length);
arr.fill(null);
var phrases = [];
phrases.push(phrasesStr);

function showLetters(phrase){
    var arr = [];
    phrase = phrase.join();
        for(var i=0; i<phrase.length; i++){
            if (phrase[i] !== " "){
                arr.push("_");
            }
            else{
                arr.push(" ");
            }
        }
    console.log(arr);
}
function getFindsStr(phrase, letter){
        phrase = phrase.join();
        for(var i=0; i<phrase.length; i++){
            if (phrase[i].toLowerCase() === letter){
                 arr[i] = letter;
            }
            else if(phrase[i].toLowerCase() === " "){
                arr[i] = " ";
            }
        }
    arr.forEach(function(item,index){
        if (item === null){
            arr[index] = "_";
        }
    });
    return arr;
}

function isInPhrase(phrase, letter){
    phrase = phrase.join();
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
    console.log("remaining life :",life);
    if(life>0 && !won){
        readline.question("enter value ", (letter) => { 
        var findStr = getFindsStr(phrases,letter)   
        console.log("current match : ",findStr);
        var match = isInPhrase(phrases,letter)
        if(!match){
            life--; 
        }
        if(isWon(phrases,findStr)){
            won = true;
        }
        runGame(phrases);   
        })
    }
    else{
        life === 0 ? console.log("you lost") : console.log("you won");
        readline.close();
    }
    
}
showLetters(phrases);
runGame(phrases);
