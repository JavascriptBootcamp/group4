class StringUtils {
    constructor(){
        
    }
    getVowels(str) : number{
        let count:number = 0;
        let vowels = "aeiou";
        const res = str.toLowerCase();
        for(var i=0; i< res.length; i++){
            if(vowels.includes(res[i]))
                count++;
        }
        return count;
    }

     removeChar(str, pos): string{
        let newStr:string = str.replace(str[pos],'');
        return newStr;
    }

    incrementLetters(str) : string{
        let newStr: string = "";
        for(var i=0; i<str.length; i++){
            if(str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }
}

    
    const myStringUtils :StringUtils  = new StringUtils();
    let myStr: string = "The quick brown fox";
    console.log(myStringUtils.getVowels(myStr));
    console.log(myStringUtils.removeChar(myStr,2));
    console.log(myStringUtils.incrementLetters(myStr));