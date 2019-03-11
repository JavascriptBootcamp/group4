import { iStringUtils } from "./iStringUtils";
class StringUtils implements iStringUtils <number> {
    public getVowels(str: string)  {
        let numberOfVowels: number = 0;
        let i: number = 0;
        str = str.toLowerCase();
        for (i; i < str.length; i++) {
            if (str[i] === "a" || str[i] === "e" || str[i] === "u" || str[i] === "" || str[i] === "i" || str[i] === "o") {
                numberOfVowels++;
            }
        }
        return numberOfVowels;
    }
    public removeChar(str: string, pos: number)  {
        str = str.replace(str[pos], "");
        return str;
    }
    public incrementLetters(str: string)  {
        let newStr : string = "";
        for(let i=0; i<str.length; i++){
            if(str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}

let su1: StringUtils = new StringUtils();
console.log(su1.getVowels("The quick brown fox"));
console.log(su1.removeChar("The quick brown fox", 6));
console.log(su1.incrementLetters("abcd efgh ijkl mnop qrst uvwx yz"));
