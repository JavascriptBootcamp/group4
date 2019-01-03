
function Word(chars) {

    this.setLength = function () {
        this.length = chars.length;
    }
}

function findLongestString(str) {

    var words = str.split(" ");
    var wordObjectsArray = [];
    var longestWord;
    var longestWordIndex = 0;

    longestWord = words[0].length;

    for(var i = 0; i < words.length; i++){
        wordObjectsArray.push(new Word(words[i]));
        wordObjectsArray[i].setLength();

        if(wordObjectsArray[i].length > longestWord){
            longestWordIndex = i;
            longestWord = wordObjectsArray[i].length;
        }
    }

    return words[longestWordIndex];
}

console.log(findLongestString('Web Development Tutorial'));
