// function runGame(phrases){
//     var life = 10;
//     phrases = phrases[Math.floor(Math.random()*phrases.length)];
//     var readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout
//     })
//     while(life>0){
//       readline.question("entter a letter?", (letter) => {
//         life--;
//         readline.close()
//       })
//     }
    
// }

// var phrasesArr = ["pizza","hamburger","hot dog"];
// runGame(phrasesArr);


var phrase = 'Foo bar baz';
var letters = ['b','o'];
function getFindsStr(phrase, letters){
    var arr = new Array(length);
    phrase = phrase.toLowerCase();
    //var length = phrase.length;
    for(var i=0; i<phrase.length; i++){
        //if(phrase[i] === letters[])
    }
    
    
    if (phrase.includes(letters)){
      var index = phrase.indexOf(letters);
      arr[index] = letters;
    }
    return arr;
}

finds = getFindsStr(phrase, letters);
console.log(finds);