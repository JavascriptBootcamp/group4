var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.prototype.getVolwels = function (str) {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string";
        }
        var volwelStr = str.match(/[auioe]/gi); //regex - g: matches the pattern multiple times, i: makes the regex case insensitive
        return volwelStr === null ? 0 : volwelStr.length;
    };
    StringUtils.prototype.removeChar = function (str, pos) {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string";
        }
        var newStr = str.replace(str.charAt(pos), '');
        return newStr;
    };
    StringUtils.prototype.incrementLetters = function (str) {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string";
        }
        var incrementedStr = '';
        for (var i = 0; i < str.length; i++) {
            if (str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 122) { //ascii lowercase alphabet.
                incrementedStr += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            if (str.charCodeAt(i) == 32) {
                incrementedStr += ' '; //spaces
            }
            if (str.toLowerCase().charCodeAt(i) === 122) { //ascii 122 = 'z'
                incrementedStr += 'a';
            }
        }
        return incrementedStr;
    };
    return StringUtils;
}());
try {
    var str = 'The quick brown fox';
    var strUtils = new StringUtils();
    console.log(strUtils.getVolwels(str));
    console.log(strUtils.removeChar(str, 3));
    console.log(strUtils.incrementLetters(str));
}
catch (exeption) {
    console.log("Error:", exeption);
}
