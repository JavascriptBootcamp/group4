interface IStringUtils
{
    getVowels(str:string): number;
    removeChar(str: string, pos: number): string;
    incrementLetters(str: string): string 
}

class StringUtils implements IStringUtils {
    constructor() {

    }


    getVowels(str: string): number {
        let count: number = 0;
        let vowels: string = "aeiou";
        let res: string = str.toLowerCase();
        for (let i = 0; i < res.length; i++) {
            if (vowels.includes(res[i]))
                count++;
        }
        return count;
    }

    removeChar(str: string, pos: number): string {
        let newStr: string = str.replace(str[pos], '');
        return newStr;
    }
    incrementLetters(str: string): string {
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


    let myStringUtils:StringUtils = new StringUtils();
    let myStr:string = "The quick brown fox";
    console.log(myStringUtils.getVowels(myStr));
    console.log(myStringUtils.removeChar(myStr,2));
    console.log(myStringUtils.incrementLetters(myStr));
