function StringUtils()
{
    this.getVowels = function(str)
    {
        var numOfVowels = 0;

        if(!isStr(str))
        {
            throw "Only string type is accepted!";
        }

        var vowels = ['a','e','u','i','o'];

        if(str)
        {
            lowerStr = str.toLowerCase();
            console.log(lowerStr);
            for(var i = 0; i < lowerStr.length;i++)
            {
                if(vowels.includes(lowerStr[i]))
                {
                    numOfVowels++;
                }
            }
        }

        return numOfVowels;
    }

    this.removeChar = function(str, pos)
    {
        if(!isStr(str))
        {
            throw "Only string type is accepted!";
        }

        if(pos < 0 || pos >= str.length)
        {
            throw "The position doesnt exist in the input string";
        }

        return str.replace(str.charAt(pos), "");
    }

    this.incrementLetters = function(str)
    {
        if(!isStr(str))
        {
            throw "Only string type is accepted!";
        }
        
        var incrementStr = "";

        for(var i = 0; i < str.length; i++)
        {
             if(isLetter(str[i]))
            {
                capitalChar = str[i].toUpperCase();

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

    var isStr = function(str)
    {
        return typeof str === "string";
    }

    var isLetter = function (char)
    {
        char = char.toUpperCase();
        return char >= "A" && char <= "Z" ? true : false;
    }
}
try
{
    var str = "The quick brown fox";
    var strUtils = new StringUtils();
    
    console.log(strUtils.getVowels(str));
    console.log(strUtils.removeChar(str,5));
    console.log(strUtils.incrementLetters("Hi im from israel!"));
}
catch(ex)
{
    console.log(ex);
}
