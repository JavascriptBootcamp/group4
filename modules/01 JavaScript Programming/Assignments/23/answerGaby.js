function Word(chars){
    this.setLength = function(){
        this.length = chars.length;
    }
}

function findLongestString(sentence){
    var arrSentence = [];
    var wordArr = [];
    var wordLength;
    var max = {maxLength: 0, theString: ''};
    arrSentence = sentence.split(' ');
    arrSentence.forEach(function(item,index) {
        wordArr.push(new Word(item));
        wordArr[index].setLength();
        if (wordArr[index].length > max.maxLength){
            max.maxLength = wordArr[index].length;
            max.theString = item;
        }
    });
    return max.theString;
}
var sentence = "Web Development Tutorial";
var maxLengthOfWord = findLongestString(sentence);
console.log(maxLengthOfWord);