

function Word(char) {
    this.setLength = function(){
        this.length = char.length;
    }
  }

function findLongestString (sentence){
    var lengthLongest=1;
    var wordLongest ="";
    var arrWord = sentence.split(' ');
    arrWord.forEach(function(item) {
        var word = new Word (item);
        word.setLength();
        if (word.length>lengthLongest){
            wordLongest=item;
            lengthLongest=word.length;
        }
    });
    console.log(wordLongest);
}

var sentence = "Web Development Tutorial";
findLongestString(sentence);
