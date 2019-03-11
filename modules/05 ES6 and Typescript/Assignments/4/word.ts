
class Word {
    private _chars :string;
    private length :number;
    constructor(chars) {
        this._chars= chars;
    }
    setLength() {
        this.length = this._chars.length;
    }
}

 const findLongestString = (sentence):string => {
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
