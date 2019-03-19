/*

//answer 22 javascript

function StringUtils() {

    this.getVowels = function (str) {
        var splitedStr = str.split("");
        var vowels = ["a","A","e","E","i","I","u","U","o","O"];
        var numOfVowles = splitedStr.reduce(function(total,wordChar){
           var haveVowels =  vowels.some(voelsChar => {
                 return (voelsChar == wordChar);
             });
            if (haveVowels)
             return total+1;
            else
            return total;
        }, 0 )
         
        return numOfVowles;
    }

    this.removeChar = function (str, pos){

        splitStr = str.split("");
        return splitStr.join("");
    }

    this.incrementLetters = function (str) {

        var splitedStr = str.split("");

        var icrementedStr = splitedStr.map( (val,i) => {
              
              return String.fromCharCode(str.charCodeAt(i) + 1);
              
            })
        

        return icrementedStr.join("");
    }
  
}


var str = "My name is aviyot getahun zzz";
var word = new StringUtils();

console.log("number of vowels on "+ str + ": " + word.getVowels(str));

console.log(word.removeChar(str , 0));

console.log(word.incrementLetters(str));
*/
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.prototype.getVowels = function (str) {
        var splitedStr = str.split("");
        var vowels = ["a", "A", "e", "E", "i", "I", "u", "U", "o", "O"];
        var numOfVowles = splitedStr.reduce(function (total, wordChar) {
            var haveVowels = vowels.some(function (voelsChar) {
                return (voelsChar == wordChar);
            });
            if (haveVowels)
                return total + 1;
            else
                return total;
        }, 0);
        return numOfVowles;
    };
    StringUtils.prototype.removeChar = function (str, pos) {
        var splitStr = str.split("");
        splitStr.splice(pos, 1);
        return splitStr.join("");
    };
    StringUtils.prototype.incrementLetters = function (str) {
        var splitedStr = str.split("");
        var icrementedStr = splitedStr.map(function (val, i) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        });
        return icrementedStr.join("");
    };
    return StringUtils;
}());
var str = "My name is aviyot getahun zzz";
var word = new StringUtils();
console.log("number of vowels on \"" + str + "\": " + word.getVowels(str));
console.log(word.removeChar(str, 0));
console.log(word.incrementLetters(str));
