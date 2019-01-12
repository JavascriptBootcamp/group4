function StringUtils() {
    this.getVowels = function (str) {
        return str.length && str.split(" ").length;
    };
    this.removeChar = function (str, pos) {
        return str.slice(0, pos)+str.slice(pos+1, str.length);
    };
    this.incrementLetters = function (str) {
        var strCopy = '';
        for (var i=0 ; i<str.length ; i++) {
            strCopy = strCopy + String.fromCharCode(str[i].charCodeAt(0)+1);
        }
        return strCopy;
    };
}

var SU = new StringUtils();

console.log(SU.getVowels("this is the counting function")); // output 5 
console.log(SU.removeChar("0123456789",5)); // remove char 5 output 012346789
console.log(SU.incrementLetters("ACEG")); // output BDFH