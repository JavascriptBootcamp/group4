class StringUtils(){

    public function getVowels(str: String): number {
        let count:number = 0;
        let vowels:string = "aeiou";
        let res:string = str.toLowerCase();
        for(let i=0;i<res.length;i++){
            if(vowels.includes(res[i]))
            count++;
        }
        return count;
    }

    static function removeChar(str: String, pos:number): string{
        let newStr:string = str.replace(str[pos],'');
        return newStr;
    }


    public function incrementLetters(str:String): String {
        let newStr:string="";
        for(let i:number=0;i<str.length;i++){
            if(str[i] === " ")
            newStr += " ";
        else
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }

}