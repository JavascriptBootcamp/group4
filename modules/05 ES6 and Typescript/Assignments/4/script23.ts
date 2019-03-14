interface iWord {
    setLength(): void;
}
class Word {
    private _word: string;
    private _length: number;

    constructor(word: string) {
        this._word = word;
    }

    public setLength() {
        this._length = this._word.length;
    }
    public getlength() {
        return this._length;
    }
}
class Sentence {
    private _sentence: string;
    constructor(sentence: string) {
        this._sentence = sentence;
    }

    public findLongestString(): string {
        const arr = this._sentence.split(' ');
        const wordsArr: Array<Word> = [];
        const max = { maxLength: 0, theString: '' };
        arr.forEach((value, index) => {
            wordsArr.push(new Word(value));
            wordsArr[index].setLength();
            if (wordsArr[index].getlength() > max.maxLength) {
                max.maxLength = wordsArr[index].getlength();
                max.theString = value;
            }
        });
        return max.theString;
    }
}
let strMaxLength: Sentence = new Sentence('Web Development Tutorial');
console.log(strMaxLength.findLongestString());