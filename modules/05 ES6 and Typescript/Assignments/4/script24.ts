interface IRandomWord {
    randomize(length: number): string;
}
class RandomWord {
    private _charsArray: Array<string>;

    constructor(charsArray: Array<string>) {
        this._charsArray = charsArray.concat();
    }

    public randomize(length: number): string {
        let str: string = "";

        for (let i: number = 0; i < length; i++)
            str += this._charsArray[Math.floor(Math.random() * this._charsArray.length)];

        return str;
    }
}

const word: RandomWord = new RandomWord(['a', 'b', 'c']);
console.log(word.randomize(10));