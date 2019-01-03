
function Word(chars) {

    this.setLength = function() {
        this.length = chars.length;
    }

}


function findLongestString(str) {
    var words = str.split(" ");
    console.log('String words: ', words);

    var longestWord = words[0];

    for (var i = 1; i < words.length; i++) {
        var wordIns = new Word(words[i]);

        wordIns.setLength(); // Activate setLength function

        if ( longestWord.length < (wordIns.length) ) {
            longestWord = words[i];
        }
    }
    
    return longestWord;
    
    
}

console.log('The longest word:', findLongestString("David dd ggagagagag"));

