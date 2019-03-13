class RandomWord{
    charsArray: Array<string>;

    constructor(charsArray: Array<string>){
        this.charsArray = charsArray;
    }
    public randomize(length: number): string{
        let text = "";
        const possible = this.charsArray.join("");
        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}

let word1 = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));
