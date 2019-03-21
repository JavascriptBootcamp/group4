// exercise 23
interface IStringUtills<T> {
    getVowels(str: string): T;
    removeChar(str: string, pos: T): string;
    incrementLetters(str: string): string;
}
class StringUtils implements IStringUtills<number>{

    public getVowels = (str: string): number => {
        let count: number = 0;
        let vowels: any = "aeiou";
        let res: string = str.toLowerCase();
        for (let i = 0; i < res.length; i++) {
            if (vowels.includes(res[i]))
                count++;
        }
        return count;
    }

    public removeChar = (str: string, pos: number): string => {
        let newStr: string = str.replace(str[pos], '');
        return newStr;
    }

    public incrementLetters = (str: string): string => {
        let newStr: string = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}

let myStringUtils: StringUtils = new StringUtils();
let myStr: string = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr, 2));
console.log(myStringUtils.incrementLetters(myStr));

// exercise 23
interface IWord {
    chars: string;
    length: number;
    setLength(): void;
}
class Word implements IWord {
    public chars: string;
    public length: number;
    constructor(chars: string) {
        this.chars = chars;
    }
    public setLength = (): void => {
        this.length = this.chars.length;
    }
}

function findLongestString(sentence: string): string {
    let arr: string[] = sentence.split(' ');
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

let strMaxLength: string = findLongestString('Web Development Tutorial');

console.log(strMaxLength);

// exercise 24
interface IRandomWord<T> {
    charsArray: Array<string>;
    randomize(length: T): string;
}
class RandomWord implements IRandomWord<number> {
    public charsArray: Array<string>;
    constructor(charsArray: Array<string>) {
        this.charsArray = charsArray;
    }

    randomize = (length: number): string => {
        let text: string = "";
        let possible: string = this.charsArray.join("");
        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}

let word1: RandomWord = new RandomWord(['a', 'b', 'c']);
console.log(word1.randomize(10));
