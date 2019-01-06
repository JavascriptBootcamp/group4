
function RandomWord(arr){
    this.arr = arr;
    this.randomize = function(number){
        if(!Array.isArray(arr))
        {
            return "chars should be an array";
        }
        var res = arr.some(function(item,index){   
            return typeof(item) !== "string";
        });
        if(res){
            return "chars should include only strings";
        }
        if(isNaN(number)){
            return "length should be a number.";
        }
        var newArr = [];
        this.length = number;
        for (var i=0; i<number; i++){
            var letter = arr[Math.floor(Math.random()*arr.length)];
            newArr.push(letter);
        }
        return newArr;
    }
}

var word = new RandomWord(['a','b','g','u']);
var result = word.randomize(6);
console.log(result);
result = word.randomize(2);
console.log(result);