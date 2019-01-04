
function Word(str){
    this.length;
    this.setLength = function(){
     this.length = str.length;
    }
}

function findLongestString(sentence){

var maxLength = 0;
var theBigSizeWord =  "";
 splitedWords = sentence.split(" ");

 for (var i = 0 ; i < splitedWords.length ; i++){

    var word =  new Word(splitedWords[i]);
    word.setLength();

    if(word.length  >  maxLength){
      maxLength = word.length;
      theBigSizeWord = splitedWords[i];
    }
 }
 
 console.log(theBigSizeWord);
}

findLongestString('Web Development Tutorial');