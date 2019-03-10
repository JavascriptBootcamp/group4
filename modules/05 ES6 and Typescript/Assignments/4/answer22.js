"use strict";
exports.__esModule = true;
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.getVowels = function (str) {
        var count = 0;
        var vowels = "aeiou";
        var res = str.toLowerCase();
        for (var i = 0; i < res.length; i++) {
            if (vowels.includes(res[i]))
                count++;
        }
        return count;
    };
    StringUtils.prototype.removeChar = function (str, pos) {
        var newStr = str.replace(str[pos], '');
        return newStr;
    };
    StringUtils.prototype.incrementLetters = function (str) {
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;
var myStringUtils = new StringUtils();
var myStr = "The quick brown fox";
console.log(StringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr, 2));
console.log(myStringUtils.incrementLetters(myStr));
