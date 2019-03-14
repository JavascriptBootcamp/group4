interface IStringUtils {
    getVowels(str: string): number,
    removeChar(pos: number): string,
    incrementLetters(str: string): string;
}

export class StringUtils implements IStringUtils {
    private _str: string;

    constructor(str: string) {
        this._str = str;
    }

    public getVowels(): number {
        let count = 0;
        const vowels = "aeiou";
        const res = this._str.toLowerCase();
        for (var i = 0; i < res.length; i++) {
            if (vowels.includes(res[i]))
                count++;
        }
        return count;
    }

    public removeChar(pos: number): string {
        let newStr = this._str.replace(this._str[pos], '');
        return newStr;
    }

    public incrementLetters(): string {
        let newStr = "";
        for (let i = 0; i < this._str.length; i++) {
            if (this._str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(this._str.charCodeAt(i) + 1);
        }
        return newStr;
    }

}

//testing:
var myStringUtils: StringUtils = new StringUtils("The quick brown fox");
// var myStr = "The quick brown fox";
console.log(myStringUtils.getVowels());
console.log(myStringUtils.removeChar(2));
console.log(myStringUtils.incrementLetters());
