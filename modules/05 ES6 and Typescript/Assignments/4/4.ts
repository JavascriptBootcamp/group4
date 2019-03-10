//group4/Modules/01 JavaScript Programming/Assignments/22 in type script
export interface IStringUtils {
    getVowels: (str: string) => number,
    removeChar: (str: string, pos: number) => string,
    incrementLetters: (str: string) => string
}

export class StringUtils implements IStringUtils {

    constructor() {
    }

    getVowels(str: string): number {
        let count = 0;
        let vowels = "aeiou";
        let res = str.toLowerCase();
        for (var i = 0; i < res.length; i++) {
            if (vowels.includes(res[i]))
                count++;
        }
        return count;
    }

    removeChar(str: string, pos: number): string {
        let newStr = str.replace(str[pos], '');
        return newStr;
    }

    incrementLetters(str: string): string {
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }

}

//testing:
// var myStringUtils = new StringUtils();
// var myStr = "The quick brown fox";
// console.log(myStringUtils.getVowels(myStr));
// console.log(myStringUtils.removeChar(myStr,2));
// console.log(myStringUtils.incrementLetters(myStr));


//group4/Modules/01 JavaScript Programming/Assignments/23 - in type script

export interface IWord {
    length: number,
    setLength: () => void
}
//implements

export class Word implements IWord{
    private _chars: string;
    public length: number;

    constructor(chars: string) {
        this._chars = chars;
    }

    setLength() {
        this.length = this._chars.length;
    }
}

export const findLongestString = (sentence: string): object => {
    let arr = sentence.split(' ');
    let wordsArr: Word[] = [];
    let max: any = { maxLength: 0, theString: '' };
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


//group4/Modules/01 JavaScript Programming/Assignments/24 - in type script

export class RandomWord {
    private charsArray: string[];

    constructor(charsArray: string[]) {
        this.charsArray = charsArray;
    }

    randomize(length: number): string {
        let text = "";
        let possible = this.charsArray.join("");
        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}


let word1 = new RandomWord(['a', 'b', 'c']);
console.log(word1.randomize(10));