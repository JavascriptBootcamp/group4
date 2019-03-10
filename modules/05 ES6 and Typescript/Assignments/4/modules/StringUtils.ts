interface i_StringUtils<T>{

    getVowels : (str:string) => number,
    removeChar : (str:string,pos:T) => string,
    incrementLetters : (str:string) => string

}


class StringUtils implements i_StringUtils<number>{
    
    public getVowels(str:string):number{
        let count : number = 0;
        const vowels : string = "aeiou";
        const res:string = str.toLowerCase();
        for(let i:number=0; i< res.length; i++){
            if(vowels.includes(res[i]))
                count++;
            }
            return count;
    }
    public removeChar(str:string,pos:number){
            const newStr:string = str.replace(str[pos],'');
            return newStr;
    }
    public incrementLetters(str:string){

        let newStr:string = "";
        for(let i:number=0; i<str.length; i++){
            if(str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }

}


