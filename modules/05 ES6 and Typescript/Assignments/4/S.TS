
interface IStringUtils<T> {
    getVowels(str: string): number;
    removeChar(str: string, pos: T): string;
    incrementLetters(str: string): string;
}

class StringUtils implements IStringUtils {
    constructor() {
    }

    public getVowels(str: string): number {
        let count:number = 0;
        const vowels:string = "aeiou";
        let res:string = str.toLowerCase();
        for (let value of res) {
            if (vowels.includes(value))
                count++;
        }
        return count;
    }

    public removeChar(str: string, pos: number): string {
        const newStr:string = str.replace(str[pos], '');
        return newStr;
    }

    public incrementLetters(str: string): string {
        let newStr:string = "";
        for (let i:number = 0; i < str.length; i++) {
            if (str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}

