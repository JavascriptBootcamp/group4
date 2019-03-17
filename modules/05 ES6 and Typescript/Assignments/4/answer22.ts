interface IStringUtils<T> {
    getVowels(str: string): number;
    removeChar(str: string, pos: T): string;
    incrementLetters(str: string): string;
}

class StringUtils implements IStringUtils<number>{

    constructor() { }

    public getVowels(str: string): number {
        let count: number = 0;
        const vowels: string = "aeiou";
        let res: string = str.toLowerCase();

        for (let index = 0; index < res.length; index++) {
            if (vowels.includes(res[index]))
                count++;
        }
        return count;
    }

    public removeChar(str: string, pos: number): string {
        let newStr = str.replace(str[pos], '');
        return newStr;
    }

    public incrementLetters(str: string): string {
        let newStr: string = "";

        for (let i: number = 0; i < str.length; i++) {
            if (str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }

}

let myStringUtils = new StringUtils();
const myStr = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr,2));
console.log(myStringUtils.incrementLetters(myStr));