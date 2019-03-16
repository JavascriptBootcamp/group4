//group4/Modules/01 JavaScript Programming/Assignments/22

function StringUtils1():void{

    this.getVowels = (str:string):number =>{
        let count: number = 0;
        let vowels: string = "aeiou";
        let res: string = str.toLowerCase();
        for(let i:number = 0; i<res.length; i++){
            // if(vowels.includes(res[i])){
            //     count++;
            // }
        }
        return count;
    }
    this.removeChar = (str:string,pos:number):string =>{
        let newStr:string = str.replace(str[pos],'');
        return newStr;
    }
    this.incrementLetters = function(str:string):string{
        let newStr:string = "";
        for(let i:number = 0; i<str.length; i++){
            if(str[i] === " ")
            newStr += " ";
        else
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}
let myStringUtils = new StringUtils1();
let myStr: string = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr,2));
console.log(myStringUtils.incrementLetters(myStr));
console.log("");
console.log("");


class Word{
    private chars: string;
    public length: number;
    constructor(chars:string){
        this.chars = chars;
    }
    setLength = ():void =>{
        this.length = this.chars.length;
    }

}

function findLongestString(sentence):number{
    let arr: string[] = sentence.split(' ');
    let wordsArr: Word[] = [];
    let max: any = {maxLength : 0, theString : ''};
    arr.forEach((value:string, index:number) => {
        wordsArr.push(new Word(value));
        wordsArr[index].setLength();
        if (wordsArr[index].length > max.maxLength){
            max.maxLength = wordsArr[index].length;
            max.theString = value;
        }
    });
    return max.theString;
}

let strMaxLength: number = findLongestString('Web Development Tutorial');

console.log(strMaxLength);

//group4/Modules/01 JavaScript Programming/Assignments/24
















