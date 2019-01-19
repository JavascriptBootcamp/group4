
var letters = [];
const readlineSync = require('readline-sync');  

runGame(["hellow word","star","sky","basketball"]);

function runGame(phrases){
var r = Math.floor(Math.random()*4);
var phrase =  phrases[r];   
var life = 10;
while(life>0 && !isWon(phrase, letters)){
    console.log(`life: ${life}`);
    console.log(getFindsStr(phrase, letters));
    var letter = readlineSync.question('Enter another letter please: ');
    letters.push(letter);
    if(!isInPhrase(phrase, letter)){
              life -= 1;
        }
    }
if(life === 0){
    console.log("You lost!");
}
else{
    console.log("you won!");
}
}



//console.log(getFindsStr("Foo bar baz",["a","f","z"]));


function getFindsStr(phrase, letters){
    var str_p = phrase.toLowerCase().split("");
    var str = [];

    for(var i=0;i<letters.length;i++){

        for(var j=0;j<str_p.length;j++){

            if(letters[i] == str_p[j]){
               str[j] = str_p[j];
            }
            else if(str_p[j] == " "){
                str[j] = " ";
            }
           
        }
    }

    for(var k=0;k<phrase.length;k++){
        if(str[k] == undefined){
            str[k] = "_";
        }
    }
    return str.join(" ");

}



//var phrase = 'Foo bar baz';
//console.log(isInPhrase(phrase, 'b')); // true
//console.log(isInPhrase(phrase, 'x')); // false


function isInPhrase(phrase, letter){
var str = phrase.split("");
for(var i=0;i<str.length;i++){
    if(letter == str[i])
      return true;
}
return false;

}



//var phrase = 'abc aa bb ab';
//var letters = ['a', 'b', 'c'];
//console.log(isWon(phrase, letters)); // true
//console.log(isWon('xyza', letters)); // false

function isWon(phrase, letters){

var str = getFindsStr(phrase, letters);
for(var i=0;i<str.length;i++){
    if(str[i] == "_"){
        return false;
    }
}
return true;
}

