"use strict";
exports.__esModule = true;
var Word = /** @class */ (function () {
    function Word(chars) {
        this.chars = chars;
        this.setLenght();
    }
    Word.prototype.setLenght = function () {
        this.lenght = this.chars.length;
    };
    return Word;
}());
exports.Word = Word;
exports.findLongestString = function (sentence) {
    var arr = sentence.split(' ');
    var wordsArr = [];
    var max = {
        maxLenghth: 0,
        theString: ''
    };
    arr.forEach(function (value, index) {
        wordsArr.push(new Word(value));
        wordsArr[index].setLenght();
        if (wordsArr[index].lenght > max.maxLenghth) {
            max.maxLenghth = wordsArr[index].lenght;
            max.theString = value;
        }
    });
    return max.theString;
};
var strMaxLenght = exports.findLongestString('Web Development Tutorial');
console.log(strMaxLenght);
