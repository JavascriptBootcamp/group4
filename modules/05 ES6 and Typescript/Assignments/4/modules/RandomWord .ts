
class IRandomWord{
    public c_arr:Array<string>
    constructorP(charsArray:Array<string>){
       this.c_arr = charsArray
    }






}
    



function RandomWord (charsArray) {
    if (typeof charsArray === 'object'){
        //this.result = randomize(charsArray); 
    }
    else {
        console.log ('"chars" should be an array.');
    }
    this.randomize = function(length){
        if (typeof length === 'number')
        {
            var text = "";
            var possible = charsArray.join("");
            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        } 
        else {
            console.log('"length" should be a number.');
        }
    }
}