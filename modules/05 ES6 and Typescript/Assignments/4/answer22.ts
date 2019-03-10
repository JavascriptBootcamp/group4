interface IStringUtils {
    removeChar(str: string, pos: number): string;
    incrementLetters(str: string): string;
}

export class StringUtils implements IStringUtils {
    
    constructor() { }

    static getVowels(str: string): number {
        let count = 0;
        const vowels = "aeiou";
        let res = str.toLowerCase();
        for (let i = 0; i < res.length; i++) {
            if (vowels.includes(res[i]))
                count++;
        }
        return count;
    }

    public removeChar(str: string, pos: number): string {
        const newStr = str.replace(str[pos], '');
        return newStr;
    }

    public incrementLetters(str: string): string {
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

let myStringUtils: StringUtils = new StringUtils();
const myStr: string = "The quick brown fox";
console.log(StringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr, 2));
console.log(myStringUtils.incrementLetters(myStr));