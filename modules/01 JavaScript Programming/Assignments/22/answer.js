function StringUtils() {
    this.getVowels = function (str) {
        return str.length && str.split(" ").length;
    };
    
    this.removeChar = function (str, pos) {
        return str.slice(0, pos)+str.slice(pos+1, str.length);
    };
    
    this.incrementLetters = function (str) {
        var strCpy = '';
        for (var i=0 ; i<str.length ; i++) {
            strCpy = strCpy + String.fromCharCode(str[i].charCodeAt(0)+1);
        }
        return strCpy;
    };
}

var test = new StringUtils();

console.log(test.getVowels("there are four words")); 
console.log(test.removeChar("11111111",4)); 
console.log(test.incrementLetters("ACEG")); 
