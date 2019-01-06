function RandomWord(chars){
    this.randomize = function(length){
        if(!Array.isArray(chars)){
            return '"chars" should be an array';
        }
        var checkNonString = chars.some((value) => {
            return typeof value !== 'string'
        });
        if(checkNonString){
            return '"chars" should include only strings';
        }
        if(!Number.isInteger(length)){
            return '"length" should be a number';
        }
        var str = '';
        for(var i =0; i < length; i++){
            var j = Math.floor(Math.random() * chars.length);
            str += chars[j];
        }
        return str;
    }
}


var randomWord = new RandomWord(['a', 'b', 'd', 'f']);

console.log(randomWord.randomize(3));
