function StringUtils() {
    this.getVowels = (str) => {
        var arr = str.split('');
        var countVowels = 0;
        arr.forEach((value) => {
            if(value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u'){
                return countVowels++;
            }
        });
        return countVowels;
    } ;

    this.removeChar = (str, pos) => {
        str = str.substring(0, pos) + str.substring(pos + 1);
        return str;
    }
    this.incrementLetters = (str) => {
        var arr = str.split('');
        arr.forEach((char, i) => {
            arr[i] = String.fromCharCode(char.charCodeAt(0) + 1);// from charCode to char
        });
        str = arr.join('');
        return str;
    }
};
var obj = new StringUtils();

console.log(obj.getVowels('The quick brown fox'));
console.log(obj.removeChar('The quick brown fox 2', 3));
console.log(obj.incrementLetters('The quick brown fox 3'));
