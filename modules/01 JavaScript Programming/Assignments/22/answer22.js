function StringUtils() {

    this.getVolwels = function (str) {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }
        var volwelStr = str.match(/[auioe]/gi); //regex - g: matches the pattern multiple times, i: makes the regex case insensitive
        return volwelStr === null ? 0 : volwelStr.length;
    }

    this.removeChar = function (str, pos) {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }
        // var newStr = str.slice(0, pos) + str.slice(pos + 1); -> another way to do the same operation
        var newStr = str.replace(str.charAt(pos), '');
        return newStr;
    }

    this.incrementLetters = function (str) {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }

        var incrementedStr = '';

        for (var i = 0; i < str.length; i++) {
            if (str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 122) { //ascii lowercase alphabet.
                incrementedStr += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            if (str.charCodeAt(i) == 32){
                incrementedStr += ' '; //spaces
            }
            if(str.toLowerCase().charCodeAt(i) === 122){ //ascii 122 = 'z'
                incrementedStr += 'a';
            }
        }

        return incrementedStr;
    }
}

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