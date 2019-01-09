function Word(chars){

    this.length;
    this.setLength = function(){
        this.length = chars.length;
    }
}

function findLongestString(str) {
    var arr = str.split(' ');
    var maxLength = 0;
    var maxWord = "";
    for(var i=0; i<arr.length; i++){

        var oneWord = new Word(arr[i]);
        oneWord.setLength();
        if(oneWord.length > maxLength){
            maxLength = oneWord.length;
            maxWord = arr[i];
        }
    }
    console.log("biggest length " + maxWord);
}

var strSentence = "Web Development Tutorial";
findLongestString(strSentence);
