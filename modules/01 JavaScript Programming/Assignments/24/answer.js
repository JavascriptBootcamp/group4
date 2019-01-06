function RandomWord(chars){
    this.chars = chars;
    this.err = 0;
    if(!(Array.isArray(chars))){
        console.log("''chars'' should be an array" );
        this.err = 1;
    }
     
    chars.forEach(element => {
        if(typeof(element)!=="string"){
            console.log("''chars'' should include only strings")
            this.err = 1;
        }

    });
    this.randomize = function(length){
        var result = "";
        for(var i = 0; i<length;i++){
            result = result + chars[Math.floor(Math.random() * Math.floor(chars.length))];
        }
        return(result);
    }
}
var charArr = new RandomWord(["a","b","c","d","e",1]);
if(!charArr.err)
    console.log(charArr.randomize(3));