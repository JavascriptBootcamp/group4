function RandomWord(arr) {
    this.arr = arr;

    this.randomize = function (length) {
        var chars = arr.join("");
        var randomString = "";
        for (var i = 0; i < length; i++) {
            randomString += chars.charAt(Math.floor(Math.random() * arr.length));
        }
        return randomString;
    }
}

var word = new RandomWord(['a','b','g','u', 'a', 'k']);
var result = word.randomize(10);
console.log(result);
result = word.randomize(2);
console.log(result);