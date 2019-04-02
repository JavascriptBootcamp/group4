import { IStringUtils } from "./IStringUtils";

class StringUtils implements IStringUtils{

    constructor()
    {
        console.log("Hello User you using String utils =]");
    }

    public getVowels(str : string)
    {
        let count : number = 0;
        let vowels : string = "aeiou";
        let res : string = str.toLowerCase();
        for(let i = 0; i < res.length; i++){
            if(vowels.indexOf(res[i]) > -1)
                {
                    count++;
                }
        }

        return count;
    }

    public removeChar(str : string, pos : number)
    {
        let newStr = str.replace(str[pos],'');
        return newStr;
    }

    public incrementLetters(str : string)
    {
        let newStr = "";
        for(let i = 0; i < str.length; i++){
            if(str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}

let myStringUtils : StringUtils = new StringUtils();
let myStr: string = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr,2));
console.log(myStringUtils.incrementLetters(myStr));
