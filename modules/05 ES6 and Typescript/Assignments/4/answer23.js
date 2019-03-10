"use strict";
exports.__esModule = true;
var Word = /** @class */ (function () {
    function Word(chars) {
        this.chars = chars;
    }
    Word.prototype.setLength = function () {
        this.length = this.chars.length;
    };
    Word.prototype.getLength = function () {
        return this.length;
    };
    return Word;
}());
exports.Word = Word;
function findLongestString(sentence) {
    var arr = sentence.split(' ');
    var wordsArr = [];
    ;
    var max = { maxLength: 0, theString: '' };
    arr.forEach(function (value, index) {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].getLength() > max.maxLength) {
            max.maxLength = wordsArr[index].getLength();
            max.theString = value;
        }
    });
    return max.theString;
}
var strMaxLength = findLongestString('Web Development Tutorial');
console.log(strMaxLength);
