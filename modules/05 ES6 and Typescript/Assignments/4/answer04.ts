//22
interface IStringUtils<T> {
    getVolwels: (str: string) => number;
    removeChar: (str: string, pos: T) => string;
    incrementLetters: (str: string) => string;
}

class StringUtils implements IStringUtils<string> {
    constructor() {

    }
    public getVolwels(str: string): number {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }
        let volwelStr: string[] = str.match(/[auioe]/gi); //regex - g: matches the pattern multiple times, i: makes the regex case insensitive
        return volwelStr === null ? 0 : volwelStr.length;
    }

    public removeChar(str: string, pos: any): string {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }
        let newStr: string = str.replace(str.charAt(pos), '');
        return newStr;
    }

    public incrementLetters(str: string): string {
        if (!(typeof str === 'string')) {
            throw "Current argument is not a string"
        }

        let incrementedStr: string = '';

        for (let i: number = 0; i < str.length; i++) {
            if (str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 122) { //ascii lowercase alphabet.
                incrementedStr += String.fromCharCode(str.charCodeAt(i) + 1);
            }
            if (str.charCodeAt(i) == 32) {
                incrementedStr += ' '; //spaces
            }
            if (str.toLowerCase().charCodeAt(i) === 122) { //ascii 122 = 'z'
                incrementedStr += 'a';
            }
        }

        return incrementedStr;
    }
}

try {
    let str: string = 'The quick brown fox';
    let strUtils: StringUtils = new StringUtils();
    console.log(strUtils.getVolwels(str));
    console.log(strUtils.removeChar(str, 3));
    console.log(strUtils.incrementLetters(str));
}
catch (exeption) {
    console.log("Error:", exeption);
}

// 23

interface IWord {
    word: string;
    length: number;
}

class Word implements IWord {

    word: string;
    length: number;

    constructor(word: string) {
        this.word = word;
    }

    public setLength(): void {
        this.length = this.word.length;
    }
}

function findLongestString(str: string): string {

    const words: string[] = str.split(" ");
    const wordObjectsArray: Word[] = [];
    let longestWord: number;
    let longestWordIndex: number = 0;

    longestWord = words[0].length;

    for (let i: number = 0; i < words.length; i++) {
        wordObjectsArray.push(new Word(words[i]));
        wordObjectsArray[i].setLength();
        if (wordObjectsArray[i].length > longestWord) {
            longestWordIndex = i;
            longestWord = wordObjectsArray[i].length;
        }
    }

    return words[longestWordIndex];
}

console.log(findLongestString('Web Development Tutorial'));

// 24
class RandomWord {
    arr: string[];

    constructor(arr: string[]) {
        this.arr = arr;
    }

    randomize(length: number): string {
        let chars = this.arr.join("");
        let randomString = "";

        for (let i: number = 0; i < length; i++) {
            randomString += chars.charAt(Math.floor(Math.random() * this.arr.length));
        }
        return randomString;
    }
}

let word: RandomWord = new RandomWord(['a', 'd', 's', 'z', 'a', 'k']);
let result: string = word.randomize(10);
console.log(result);
result = word.randomize(2);
console.log(result);