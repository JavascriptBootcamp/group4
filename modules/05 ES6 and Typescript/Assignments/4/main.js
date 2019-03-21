var StringUtils = /** @class */ (function () {
    function StringUtils() {
        this.getVowels = function (str) {
            var count = 0;
            var vowels = "aeiou";
            var res = str.toLowerCase();
            for (var i = 0; i < res.length; i++) {
                if (vowels.includes(res[i]))
                    count++;
            }
            return count;
        };
        this.removeChar = function (str, pos) {
            var newStr = str.replace(str[pos], '');
            return newStr;
        };
        this.incrementLetters = function (str) {
            var newStr = "";
            for (var i = 0; i < str.length; i++) {
                if (str[i] === " ")
                    newStr += " ";
                else
                    newStr += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            return newStr;
        };
    }
    return StringUtils;
}());
var myStringUtils = new StringUtils();
var myStr = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr, 2));
console.log(myStringUtils.incrementLetters(myStr));
var Word = /** @class */ (function () {
    function Word(chars) {
        var _this = this;
        this.setLength = function () {
            _this.length = _this.chars.length;
        };
        this.chars = chars;
    }
    return Word;
}());
function findLongestString(sentence) {
    var arr = sentence.split(' ');
    var wordsArr = [];
    var max = { maxLength: 0, theString: '' };
    arr.forEach(function (value, index) {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].length > max.maxLength) {
            max.maxLength = wordsArr[index].length;
            max.theString = value;
        }
    });
    return max.theString;
}
var strMaxLength = findLongestString('Web Development Tutorial');
console.log(strMaxLength);
var RandomWord = /** @class */ (function () {
    function RandomWord(charsArray) {
        var _this = this;
        this.randomize = function (length) {
            var text = "";
            var possible = _this.charsArray.join("");
            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        };
        this.charsArray = charsArray;
    }
    return RandomWord;
}());
var word1 = new RandomWord(['a', 'b', 'c']);
console.log(word1.randomize(10));
