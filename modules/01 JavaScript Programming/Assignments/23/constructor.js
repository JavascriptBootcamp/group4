
function Word(str)
{
    this.setLength = function(){ this.length = str.length; };
}

function findLongestString(sentence){ 
    var longestWord = '', currentWord = null;
    var longestLength = 0;
    var wordsStr = sentence.split(' ');
    wordsStr.forEach(function(element) {
        currentWord = new Word(element); 
        currentWord.setLength();
        if(longestLength < currentWord.length)  
        {
            longestLength = currentWord.length;
            longestWord = element;
        }
        }); 

    return longestWord;
}

var result = findLongestString('Web Development Tutorial');
console.log(result);