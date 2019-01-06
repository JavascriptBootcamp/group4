function RandomWord(arr) {
    this.arr = arr;

    if(!Array.isArray(arr)){
        return '"chars" should be an array';
    }
    this.randomize = function (length) {
        var chars = arr.join("");
        var randomString = "";

        if(isNaN(length)){
            return '"length" should be a number';
        }
        for (var i = 0; i < length; i++) {
            if(! isNaN(chars[i])){
                return '"chars" should include only strings';
            }
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