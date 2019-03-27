export interface iRandomWord {
    randomize(length: number): string;
}
import { iRandomWord } from "./answer24";
export class RandomWord implements iRandomWord {
    private charsArray: Array<string>;
    constructor(charsArray: Array<string>) {
        this.charsArray = charsArray;
    }
    public randomize(length: number) {
        if (typeof length === 'number') {
            let text = "";
            let possible = this.charsArray.join("");
            for (let i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }
        else {
            return "length should be a number.";
        }
    }
}
let word1 = new RandomWord(['a', 'b', 'c']);
console.log(word1.randomize(10));
