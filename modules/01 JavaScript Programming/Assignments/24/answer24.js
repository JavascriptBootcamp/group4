

function RandomWord  (chars){
    this.chars = chars;


this.randomize = function (length ){
    var str="";
    if (!Array.isArray(this.chars))
     return "'chars' should be an array";
    if (typeof(length)!='number')
        return "'length' should be a number";

    for (var i=0; i<this.chars.length; i++)
        if (typeof(this.chars[i])!='string')
                return "'chars' should include only strings";
    
    for (var i=0; i<length; i++){
        str +=this.chars[Math.floor(Math.random() * (this.chars.length))];
    }
    return str;
}

}

var word1 = new RandomWord([2,'b','g','u']);
var result = word1.randomize(3);
console.log(result);
var word2 = new RandomWord([2,'b','g','u']);
var result = word2.randomize("sa");
console.log(result);
var word3 = new RandomWord(['a','b','g','u']);
var result = word3.randomize(3);
console.log(result);
var word4 = new RandomWord("dfsds");
var result = word4.randomize(3);
console.log(result);

