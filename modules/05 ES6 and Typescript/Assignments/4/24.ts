class RandomWord{
    constructor(charsArray : Array<string>){ 
            this.charsArray=charsArray;
    
    }   
    randomize (length : number){
        
            let text = "";
            let possible = this.charsArray.join("");
            for (let i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        } 
    }

var word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));
