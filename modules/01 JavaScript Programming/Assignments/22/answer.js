// Write a JavaScript constructor <code>StringUtils</code> which contains the follwoing functions:
// <ol>
// <li>
// <code>getVowels(str)</code> Accepts a string as a parameter and counts the number of vowels within the string<br><br>
// Example string : 'The quick brown fox' <br>
// Expected Output : 5
// </li>
// <li>
// <code>removeChar(str, pos)</code> Removes a character at the specified position of a given string and return the new string.
// </li>
// <li>
// <code>incrementLetters(str)</code> Replaces every character in a given string with the character following it in the alphabet. 
// </li>
// </ol>
// Create an instance of <code>StringUtils</code> and execute one example from each of its functions.

function StringUtils()
{
    this.getVowels = function(str)
    {
        var vowels = "aeiouy"
        var result = [];
        str = str.toLowerCase().split("");
        str.forEach(item => {
            if(vowels.includes(item))
                result.push(item);
        });
        return result.length;
    }
    this.removeChar = function(str, pos)
    {
        str = str.split("");
        str.splice(pos,1);
        return str.join("");
    }
    this.incrementLetters = function(str){
        var alphabet = "abcdefghijklmnopqrstuvwxyz"
        alphabet = alphabet.split("");
        str = str.toLowerCase().split("");
        result = str.concat();
        for(var i=0; i<str.length; i++)
        {
            for (var j=0; j<alphabet.length; j++)
            {
                if(str[i]===alphabet[j])
                {
                    if(str[i]==='z')
                        result[i]="a";
                    else
                        result[i]=alphabet[j+1];
                }
            }
        }
        return result.join("");
    }
}

var StringUtils1 = new StringUtils();
console.log(StringUtils1.getVowels('The quick brown fox'));
console.log(StringUtils1.removeChar("ofek",2));
console.log(StringUtils1.incrementLetters("nedjz"));