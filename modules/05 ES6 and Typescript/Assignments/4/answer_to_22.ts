import {IStringUtils}  from "./IstringUtils";

export class StringUtils implements IStringUtils {

    constructor() { }

    // Accepts a string as a parameter and counts the number of vowels within the string
    public getVovels(str: string): string {
        let strLowerCase: string = str.toLowerCase();
        let vowels: string = "aeiou";
        
        var vovelsNum: number = 0;

        for(let i: number = 0; i < strLowerCase.length; i++){
            if( vowels.includes(strLowerCase[i]) )  vovelsNum++;       
        }
        return `The string '${str}' contains ${vovelsNum} vovels`;   
    }


    // Removes a character at the specified position of a given string and return the new string.
    public removeChar(str: string, pos: number): object {
        if (str.length > pos) {
            let newStr: string = "";
            
            for (let i = 0; i < str.length; i++) {
                if (i !== pos) newStr += str[i];
            }
        
            var resObj = {
                passedStr: str,
                positionToDelete: pos,
                result: newStr
            }
        
            return resObj;
        }

        else return {'Error': 'Maximal position number can be the length of the string less 1'};   
    }


    // Replaces every character in a given string with the character following it in the alphabet.
    public incrementLetters(str: string): object {
        let charCodesArr: number[] = []; 
        let strOfFollowingChars: string = '';
    
        // Convert each char in the string to its ASCII code and put it into charCodesArr
        for (let i: number = 0; i < str.length; i++) {
            charCodesArr.push(str.charCodeAt(i));  
        }
    
        for (let i: number = 0; i < charCodesArr.length; i++) {
            // Check if the passed string contains only letters ( A - Z = 65 - 90, a- z = 97 - 122)
            if ( (charCodesArr[i] >= 65 && charCodesArr[i] <= 90) || (charCodesArr[i] >= 97 && charCodesArr[i] <= 122) ) {
    
                // If its charCode of Z, add A to strOfFollowingChars
                if (charCodesArr[i] === 90) strOfFollowingChars += 'A';
    
                // If its charCode of z, add a to strOfFollowingChars
                else if (charCodesArr[i] === 122) strOfFollowingChars += 'a';
    
                // If its charCode of any letter except Z or z - increment the char code by 1 and convert it to char
                else strOfFollowingChars += String.fromCharCode(charCodesArr[i] + 1);
    
            }
    
            else return {'ERROR': 'You passed characters other than english letters'};            
        }
    
        var resObj = {
            passedStr: str,
            'following characters string': strOfFollowingChars
        }
    
        return resObj;
    }
}
     
let strUtilsObj: StringUtils = new StringUtils();


console.log('\n');
console.log(strUtilsObj.getVovels('aahh'));
console.log('\n');
console.log( strUtilsObj.removeChar('abcdefgh', 6) );
console.log('\n');
console.log( strUtilsObj.incrementLetters('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz') );   
