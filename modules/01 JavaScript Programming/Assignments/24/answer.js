function RandomWord(chars){
    this.randomize = function(number){

        if(!Array.isArray(chars)){
            return '"chars" should be an array';
        }
        if(chars.some(char=> typeof(char) !== 'string')){
            return '"chars" should include only strings';
        }
        if(isNaN(number)){
            return '"length" should be a number';
        }
        var randStr = "";
        for(var i=0;i<number;i++){
            var index = Math.floor((Math.random() * chars.length));
            randStr += chars[index];
        }
        return randStr;
    }
}

// var word = new RandomWord(['a','b','c']);
// var result = word.randomize(3);
// console.log(result);

// var word = new RandomWord(['a','b','g','u']);
// var result = word.randomize(6);
// console.log(result);
// result = word.randomize(2);
// console.log(result);

// var word = new RandomWord([1,'b','c']);
// var result = word.randomize(3);
// console.log(result);

// var word = new RandomWord({a:'a',b:'b',c:'c'});
// var result = word.randomize(3);
// console.log(result);