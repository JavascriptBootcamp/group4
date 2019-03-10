class StringUtils
{
    constructor()
    {
        console.log("Hello User you using String utils");
    }
    public getVowels(str : string) : number {
        let numOfVowels:number = 0;
        
        if(!this.isStr(str))
        {
            throw "Only string type is accepted!";
        }

        let vowels: Array<string> = ['a','e','u','i','o'];

        if(str)
        {
            let lowerStr:string = str.toLowerCase();
            let i:number = 0;
            console.log(lowerStr);


            for(i; i < lowerStr.length; ++i)
            {
                if(vowels.indexOf(lowerStr[i]) > -1)
                {
                    numOfVowels++;
                }
            }
        }

        return numOfVowels;
    }

    private isStr(str : string) : boolean
    {
        return typeof str === "string";
    }

    public removeChar<T>(str : string, pos : T)
    {
        if(!this.isStr(str))
        {
            throw "Only string type is accepted!";
        }

        if(Number(pos) < 0 || Number(pos) >= str.length)
        {
            throw "The position doesnt exist in the input string";
        }

        return str.replace(str.charAt(Number(pos)), "");
    }

    public incrementLetters(str : string)
    {
        if(!this.isStr(str))
        {
            throw "Only string type is accepted!";
        }
        
        let incrementStr: string = "";
        let i:number = 0;
        for(i; i < str.length; i++)
        {
             if(this.isLetter(str[i]))
            {
                let capitalChar:string = str[i].toUpperCase();

                if(capitalChar === "Z")
                {
                    incrementStr += String.fromCharCode(str.charCodeAt(i) - 25);
                }
                else
                {
                    incrementStr += String.fromCharCode(str.charCodeAt(i) + 1);
                }
            }
            else
            {
                incrementStr += str[i];
            }
        }

        return incrementStr;
    }

    public isLetter(char : string) : boolean
    {
        char = char.toUpperCase();
        return char >= "A" && char <= "Z" ? true : false;
    }
}

try
{
    let str:string = "The quick brown fox";
    let strUtils:StringUtils = new StringUtils();
    
    console.log(strUtils.getVowels(str));
    console.log(strUtils.removeChar(str,5));
    console.log(strUtils.incrementLetters("Hi im from israel!"));
}
catch(ex)
{
    console.log(ex);
}
