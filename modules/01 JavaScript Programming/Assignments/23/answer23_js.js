
function Word(str){

    this.setLength = function(){
     this.length = str.length;
    }
}

function findLongestString(sentence){

 splitedWords = sentence.split(" ");
 for (var i = 0 ; i < splitedWords.length;i++)
 var word =  new Word(splitedWords[i]);
 
 console.log(splitedWords);

}

findLongestString('Web Development Tutorial');