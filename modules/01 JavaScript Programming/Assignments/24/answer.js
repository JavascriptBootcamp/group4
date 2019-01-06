
function RandomWord(chars){
    if(!(Array.isArray(chars)))
        {return '"chars" should be an array'}
    for (var i=0;i<chars.length;i++){
        if(!(typeof(chars[i]==='string'))){
            return '"chars" should include only strings'
        }
    }
    
    this.randomize = function(length){
        if(typeof(length)!=='number'){return '"length" should be a number'}
        var result =[];
        for(var i=0;i<length;i++){
            var randomNumber = Math.floor(Math.random()*chars.length);
            result.push(chars[randomNumber]);
        }
        return result;
    }



}
var word = new RandomWord(['a','b','c']);
var result = word.randomize(4);
console.log(result);

