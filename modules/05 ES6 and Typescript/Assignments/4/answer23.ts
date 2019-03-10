interface IWord {
    setLength(): void;
    getLength(): number;
}
export class Word implements IWord {
    private length: number;
    private chars: string;
    constructor(chars: string) {
        this.chars = chars;
    }
    public setLength(): void {
        this.length = this.chars.length;
    }
    public getLength(): number {
        return this.length;
    }
}

function findLongestString(sentence: string): string{
    const arr: Array<string> = sentence.split(' ');
    const wordsArr: Array<Word> = [];
    interface IMax {maxLength: number, theString: string};
    const max:IMax = {maxLength: 0, theString: ''};
    arr.forEach((value: string, index: number) => {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].getLength() > max.maxLength){
            max.maxLength = wordsArr[index].getLength();
            max.theString = value;
        }
    });
    return max.theString;
}

let strMaxLength: string = findLongestString('Web Development Tutorial');

console.log(strMaxLength);