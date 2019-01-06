function RandomWord(chars) {

    this.randomize = function (length) {
        var result = '';
        if(!Array.isArray(chars)){
            result = 'chars should be an array';
        }
        else if(!chars.every((element)=> typeof element === 'string')){
            result = 'chars should include only strings';
        }
        else if(typeof length !== 'number'){
            result = 'length should be a number';
        }
        else {
            for (var i = 0; i < length; i++) {
                var randomIndex = Math.floor(Math.random() * (chars.length));
                result += chars[randomIndex];    
            }
        }

        return result;


    }
}

var word = new RandomWord(['a','b','z','u']);
var result = word.randomize(2);
console.log(result);
