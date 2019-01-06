function RandomWord(chars){
    this.chars = chars;
    if(!(Array.isArray(chars))){
        console.log("''chars'' should be an array" );
        return;
    }
     
    chars.forEach(element => {
        if(typeof(element)!=="string"){
            console.log("''chars'' should include only strings")
            return;
        }

    });
    this.randomize = function(length){
        var result = "";
        for(var i = 0; i<length;i++){
            result = result + chars[Math.floor(Math.random() * Math.floor(chars.length-1))];
        }
        return(result);
    }
}
var charArr = new RandomWord(["a","b","c"]);
console.log(charArr.randomize(3))