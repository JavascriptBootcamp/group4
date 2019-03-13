import { IRandomWord } from "./IrandomWord";

class RandomWord implements IRandomWord<number> {
    private chars;

    constructor(chars: string[]) { 
        this.chars = chars;
    }

    // Accepts a number length as a parameter and generates a string
    public randomize(lengthNum: number): string {
        var resStr: string = '';
        var randVal: number;

        if (lengthNum <= 0) return 'ERROR: YOU MUST PASS A POSITIVE NUMBER AS A PARAMETER!'

        for (var i = 0; i < lengthNum; i++) {
            randVal = Math.floor( (Math.random() * this.chars.length)  );
            resStr += this.chars[randVal];
        }

        return resStr;
    }  

    // Sample code to practice generics
    public getGoodOrBad(value: number) {
        if(value > 5) return "good";
        else return "Very bad - the value less than 5"
    }
}


var word = new RandomWord(['a','b','c']);
var result = word.randomize(3);
console.log(result); // bca
console.log(word.getGoodOrBad(4));
