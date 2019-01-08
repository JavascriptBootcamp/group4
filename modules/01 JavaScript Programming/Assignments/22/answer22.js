function StringUtils() {

    this.getVowels = function (str) {
        var vowels = "aeiou";
        var count = 0;

        for (var i = 0; i < str.length; i++) {
            if (vowels.indexOf(str[i].toLowerCase()) !== -1)
                count++;

        }
        return count;
    }

    this.removeChar = function (str, pos) {
        return str.replace(str[pos], "");
    }

    this.incrementLetters = function (str) {
        var res = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() >= 'a' && str[i].toLowerCase() < 'z') {
                if (str[i] === 'z')
                    res += 'a';
                else if (str[i] === 'Z')
                    res += 'A';
                else
                    res += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            else
                res += str[i];

        }
        return res;
    }
}

var su = new StringUtils();
var str = 'The quick brown fox';

console.log(su.getVowels(str));
console.log(su.removeChar(str, 5));
console.log(su.incrementLetters(str));