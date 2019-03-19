/*

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

var word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));

*/

class RandomWord {

    charsArray:string[];

    constructor(charsArray:string[]){

         this.charsArray = charsArray;
    }

     randomize(length:number):string {
       
            var text = "";
            var possible = this.charsArray.join("");
            for (var i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
     }
    
       
}

const word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));