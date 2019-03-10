interface IRandomWord<T> {
    randomize(length: number): string;
}
export class RandomWord implements IRandomWord<Array<string>> {
    private charsArray: Array<string>;
    constructor(charsArray: Array<string>) {
        if (typeof charsArray !== 'object'){
            console.log ('"chars" should be an array.');
        } else {
            this.charsArray = charsArray;
        }    
    }
    randomize(length: number): string {
        if (typeof length === 'number')
        {
            let text: string = "";
            const possible = this.charsArray.join("");
            for (let i = 0; i < length; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        } 
        else {
            console.log('"length" should be a number.');
        }
    }
}

const word1: RandomWord = new RandomWord(['a','b','c']);
console.log(word1.randomize(10));