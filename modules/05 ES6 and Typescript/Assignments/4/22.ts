
interface StringUtilsInterface<N,T>{
    getVowels(str : T) : N ;
    removeChar(str:T, pos :N) : T ;
    incrementLetters(str:T) : T;

}
class StringUtils implements StringUtilsInterface <number , string>{

    getVowels(str){
       let count = 0;
       let vowels = "aeiou";
        let res = str.toLowerCase();
        for(let i=0; i< res.length; i++){
            if(vowels.includes(res[i]))
                count++;
        }
        return count;
    }

   removeChar(str, pos){
        let newStr = str.replace(str[pos],'');
        return newStr;
    }

    incrementLetters(str ){
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

var myStringUtils = new StringUtils();
var myStr = "The quick brown fox";
console.log(myStringUtils.getVowels(myStr));
console.log(myStringUtils.removeChar(myStr,2));
console.log(myStringUtils.incrementLetters(myStr));
