/*

//answer 22 javascript

function StringUtils() {

    this.getVowels = function (str) {
        var splitedStr = str.split("");
        var vowels = ["a","A","e","E","i","I","u","U","o","O"];
        var numOfVowles = splitedStr.reduce(function(total,wordChar){
           var haveVowels =  vowels.some(voelsChar => {
                 return (voelsChar == wordChar);
             });
            if (haveVowels)
             return total+1;
            else
            return total;    
        }, 0 ) 
         
        return numOfVowles;
    }

    this.removeChar = function (str, pos){

        splitStr = str.split("");
        return splitStr.join("");
    }

    this.incrementLetters = function (str) {

        var splitedStr = str.split("");

        var icrementedStr = splitedStr.map( (val,i) => {
              
              return String.fromCharCode(str.charCodeAt(i) + 1);
              
            })
        

        return icrementedStr.join("");
    }
  
}


var str = "My name is aviyot getahun zzz";
var word = new StringUtils();

console.log("number of vowels on "+ str + ": " + word.getVowels(str));

console.log(word.removeChar(str , 0));

console.log(word.incrementLetters(str));
*/

class StringUtils {


    getVowels(str:string):number{

        const splitedStr:string[] = str.split("");
        const vowels:string[] = ["a","A","e","E","i","I","u","U","o","O"];

        const numOfVowles:number = splitedStr.reduce(function(total,wordChar){
           const haveVowels:boolean =  vowels.some(voelsChar => {
                 return (voelsChar == wordChar);
             });
            if (haveVowels)
             return total+1;
            else
            return total;    
        }, 0 ) 
         
        return numOfVowles;
    }

      removeChar(str:string, pos:number):string{

        let splitStr = str.split("");
          splitStr.splice(pos,1);
          
        return splitStr.join("");
    }

    incrementLetters(str:string):string {

        let splitedStr = str.split("");

        const icrementedStr = splitedStr.map( (val,i) => {
              
              return String.fromCharCode(str.charCodeAt(i) + 1);
              
            })
        

        return icrementedStr.join("");
    }
}

const str = "My name is aviyot getahun zzz";
var word = new StringUtils();

console.log(`number of vowels on "${str}": ${word.getVowels(str)}`);

console.log(word.removeChar(str , 0));

console.log(word.incrementLetters(str));