function Word (str) {
    this.length;
    this.setLength = function (str) {
        this.length = str.length;
    };
    return this.setLength(str);
}

function findLongestString (str) {
    var strSplit = str.split(" ");
    var max = 0;
    var size;
    var word;
    for (var i=0; i<strSplit.length ; i++) {
        size = new Word(strSplit[i]).length;
        if (max < size) {
            max = size;
            word = strSplit[i];
        }
    }
    return word;
}

