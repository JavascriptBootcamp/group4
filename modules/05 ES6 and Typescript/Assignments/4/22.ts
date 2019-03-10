// C:\Users\front17\AppData\Roaming\npm\tsc
import {iStringUtils} from './IstringUtils';


class StringUtils implements iStringUtils<number>{

    public getVowels(str: string){
        let count: number = 0;
        let vowels: string = "aeiou";
        let res: string = str.toLowerCase();
        for(let i=0; i< res.length; i++){
            if(vowels.includes(res[i]))
                count++;
        }
        return count;
    }

    public removeChar(str: string,pos: number){

        let newStr: string = str.replace(str[pos],'');
        return newStr;
    }

    public incrementLetters(str: string){
        var newStr = "";
            for(let i=0; i<str.length; i++){
                if(str[i] === " ")
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
console.log(myStringUtils.removeChar(myStr,2));
console.log(myStringUtils.incrementLetters(myStr));
    