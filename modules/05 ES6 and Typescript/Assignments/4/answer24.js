"use strict";
exports.__esModule = true;
var RandomWord = /** @class */ (function () {
    function RandomWord(charsArray) {
        if (typeof charsArray !== 'object') {
            console.log('"chars" should be an array.');
        }
        else {
            this.charsArray = charsArray;
        }
    }
    RandomWord.prototype.randomize = function (length) {
        if (typeof length === 'number') {
            var text = "";
            var possible = this.charsArray.join("");
            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        else {
            console.log('"length" should be a number.');
        }
    };
    return RandomWord;
}());
exports.RandomWord = RandomWord;
var word1 = new RandomWord(['a', 'b', 'c']);
console.log(word1.randomize(10));
