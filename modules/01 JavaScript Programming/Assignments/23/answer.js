function Word(chars){

    this.setLength = function(){
        this.length = chars.length;
    };
}

// var testWord = new Word("test");
// testWord.setLength();
// console.log(testWord.length);

function findLongestString(sentence){
    var spl = sentence.split(" ");
    var longestPlace = 0;
    var longest = new Word(spl[0]);
    longest.setLength();
    for(i=0;i<spl.length;i++){
        var temp = new Word(spl[i]);
        temp.setLength();
        if(longest.length<temp.length)
            longestPlace=i;
    }
    console.log(spl[longestPlace]);
}

findLongestString("this is an example sentence");
