function RandomWord (chars)
{
    if(!(Array.isArray(chars)))
        return "'chars' should be an array";
    // else if (isArray)
    //     return "'chars' should include only strings.";
    this.randomize = function(length)
    {
        var result =[];
        for(var i =0; i< length; i++)
        {
            var randomNumber = Math.floor(Math.random() * chars.length);
            result.push(chars[randomNumber]);
        }
        return result;
    }
}

var word = new RandomWord(['a','b','b','d']);
var result = word.randomize(6);
//console.log(result);
//result = word.randomize(2);
//console.log(result);