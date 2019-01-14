function StringUtils () {
    this.getVowels=function(str){
        var vowels = ['a','e','i','o','u'];
        var count=0;

        for (var i = 0; i < str.length; i++) {
            for (j = 0; j < vowels.length; j++) {
                if (str[i].toLowerCase() === vowels[j]) {
                    count++;
                }
            }
        }
        return count;
    }

    this.removeChar = function(str,charPosition) {
        return str.replace(str[charPosition], "");
    }
    this.incrementLetters = function(str) {
        var newStr = "";

        for (var i = 0; i < str.length; i++) {
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}

var su = new StringUtils();

console.log(su.getVowels('daad'));
console.log(su.removeChar('abcdefg',3));
console.log(su.incrementLetters('abcdefg'));
