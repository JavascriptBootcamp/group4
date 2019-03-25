import {myIStringUtils} from "./myIStringUtils";
class StringUtils implements myIStringUtils<number>
{

    public getVowels  (str:string):number{
        let countVowels:number = 0;
      
        let res:string = str.toLowerCase();
        for(let i=0; i< res.length; i++){
            if(res[i]==='a'|| res[i]==='e'||res[i]==='i'||res[i]==='o'||res[i]==='u')
                countVowels++;
        }
        return countVowels;
    }

    public removeChar (str, pos):string{
        let newStr = str.replace(str[pos],'');
        return newStr;
    }

    public incrementLetters (str:string):string{
        let newStr = "";
        for(let i=0; i<str.length; i++){
            if(str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}

let myStringUtils:StringUtils = new StringUtils();
let myStr = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr,2));
console.log(myStringUtils.incrementLetters(myStr));
