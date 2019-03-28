import { iWord } from "./iword";

export class Word implements iWord {
    private chars: string;
    public length: number;
    constructor(chars: string) {
        this.chars = chars;
    }
    public setLength() {
        this.length = this.chars.length;
    }
}

export const findLongestString = (sentence) => {
    let arr = sentence.split(' ');
    let wordsArr = [];
    let max = { maxLength: 0, theString: '' };
    arr.forEach((value, index) => {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].length > max.maxLength) {
            max.maxLength = wordsArr[index].length;
            max.theString = value;
        }
    });
    return max.theString;
}

let strMaxLength = findLongestString('Web Development Tutorial');

console.log(strMaxLength);