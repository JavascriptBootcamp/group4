interface IRandomWord{
    charsArray: number[];
    randomize(length:string):string;
}

class RandomWord implements IRandomWord{
    charsArray: number[];
    constructor(charsArray){
        this.charsArray = charsArray;
    }
    randomize(length){
        let text = "";
        let possible = this.charsArray.join("");
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}

let word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));