import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'areanagrams'
})

export class AnagramsPipe implements PipeTransform {
    transform(str: string): string {
        let indexOfDelimiter = str.indexOf('?');
        if(indexOfDelimiter < 0) {
            return 'delimiter "?" not found';
        }
        let strLeft = str.substring(0, indexOfDelimiter);
        let strRight = str.substring(indexOfDelimiter + 1);
        let leftToCheck = this.lettersAndNumbersOnly(strLeft);
        let rightToCheck = this.lettersAndNumbersOnly(strRight);
        let answer = this.checkContainsAll(leftToCheck, rightToCheck);
        return `"${strLeft}" and "${strRight}" ${answer}`;
    }
    lettersAndNumbersOnly(str: string): string {
        str = str.trim();
        let currCharCode = null;
        let newStr = '';
        for(let i=0; i<str.length; i++) {
            currCharCode = str.charCodeAt(i);
            if((currCharCode >= 48 && currCharCode <= 57) || (currCharCode >= 65 && currCharCode <= 90) || (currCharCode >= 97 && currCharCode <= 122)){
                newStr += str[i];
            }
        }
        return newStr;
    }
    checkContainsAll(givenStr: string, toCheckStr: string): boolean {
        let currIndex;
        for(let i=0; i<givenStr.length; i++) {
            if(givenStr[i] === ' '){
                console.log(1);
                continue;
            }
            currIndex = toCheckStr.indexOf(givenStr[i]);
            if(currIndex === -1){
                return false;
            }
            toCheckStr = toCheckStr.substring(0,currIndex) + toCheckStr.substring(currIndex+1);
        }
        if(toCheckStr.length > 0){
            return false;
        }
        return true;
    }
}