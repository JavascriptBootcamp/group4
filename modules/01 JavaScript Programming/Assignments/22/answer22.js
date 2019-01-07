function  StringUtils ()
{
    // Accepts a string as a parameter and counts 
    //the number of vowels within the string
    this.getVowels=function(str){
        var ans=0;
        for(var i=0;i<str.length;i++)
        {
            switch(str[i])
            {
                case 'a'||'A':
                    ans++;
                    break;
                case 'e':
                    ans++;
                    break;  
                case 'i':
                    ans++;
                    break;
                case 'o':
                    ans++;
                    break;
                case 'u':
                    ans++;
                    break;
                case 'y':
                    ans++;
                    break;
                default:
                     break;
    
            }


        }
        return ans;
     

    };
    //Removes a character at the specified position of a given string and return the new string.
    this.removeChar=function(str, pos) 
    {
       
       return str.substring(0, pos).concat(str.substring(pos+1, str.length));


    };
   // Replaces every character in a given string with the character following it in the alphabet.
    this.incrementLetters=function(str)
    { 
        var result="";
        for(var i=0;i<str.length;i++)
        {
           
            result+= String.fromCharCode(str.charCodeAt(i) + 1);
    
        }
        return result;
    };
    
}

var myStringUtils = new StringUtils();
console.log(myStringUtils.getVowels('The quick brown fox' ));
console.log(myStringUtils.removeChar('The quick brown fox',2 ));
console.log(myStringUtils.incrementLetters('abcD' ));
