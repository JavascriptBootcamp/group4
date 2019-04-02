import { IRandomable } from "./IRandomable"

class RandomWord implements IRandomable
{   
    private charsArray : string[];

    constructor(charsArray:string[])
    {
        this.charsArray = charsArray;
    }


    public randomize(length : number) 
    {
        let text : string = "";
        let possible: string = this.charsArray.join("");

        for (let i = 0; i < length; i++)
            {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
        return text; 
    }
}

let word1 : RandomWord = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));
