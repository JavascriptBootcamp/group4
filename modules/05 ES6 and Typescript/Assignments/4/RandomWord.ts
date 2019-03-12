import {IRandomWord} from "./IRandomWord";


 class RandomWord implements IRandomWord {
    private charsArray:Array<string>;
    constructor(_charsArray:Array<string>){
        this.charsArray = _charsArray
     }
  
    public randomize (length:number){
       
            let text:string = ""; 
            const possible:string = this.charsArray.join("");
            for (let i:number = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
    }


var word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));
