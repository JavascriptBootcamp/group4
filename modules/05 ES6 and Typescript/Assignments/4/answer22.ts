interface IStringUtils {
    getVowels:(str:string)=>number;
    removeChar:(str:string,pos:number)=>string;
    incrementLetters:(str:string)=>string;
}
class StringUtils implements IStringUtils{
    constructor(){}
    public getVowels(str:string){
        let count:number = 0;
        let vowels:string = "aeiou";
        let res:string = str.toLowerCase();
        for(var i=0; i< res.length; i++){
            if(vowels.includes(res[i]))
            count++;
        }
        return count;};

    public removeChar(str:string,pos:number){
        let newStr:string = str.replace(str[pos],'');
        return newStr;

    };
    public incrementLetters(str:string){let newStr:string = "";
    for(let i:number=0; i<str.length; i++){
        if(str[i] === " ")
            newStr += " ";
        else
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return newStr;};
    
}

