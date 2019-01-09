
function StringUtils() {

    // Accepts a string as a parameter and counts the number of voהels within the string
    this.getVovels = function(str) {
        var strLowerCase = str.toLowerCase();
        var vowels = "aeiou";
       
        vovelsNum = 0;

        for(var i=0; i< strLowerCase.length; i++){
            if( vowels.includes(strLowerCase[i]) )  vovelsNum++;
                
        }
        return `The string '${str}' contains ${vovelsNum} vovels`;
    }


    // Removes a character at the specified position of a given string and return the new string.
    this.removeChar = function(str, pos) {

        if (typeof str !== 'string') return 'ERROR: The first param must be a string';
        if ( isNaN( Number(pos) ) ) return 'ERROR: The second param must be a number';

        if (str.length > pos) {
            newStr = '';
            
            for (var i = 0; i < str.length; i++) {
                if (i !== pos) newStr += str[i];
            }
        
            var resObj = {
                passedStr: str,
                positionToDelete: pos,
                result: newStr
            }
        
            return resObj;
        }

        else return 'Error: Maximal position number can be the length of the string less 1';   
    }


    // Replaces every character in a given string with the character following it in the alphabet.
    this.incrementLetters = function(str) {
        var charCodesArr = []; 
        var strOfFollowingChars = '';
    
        // Convert each char in the string to its ASCII code and put it into charCodesArr
        for (var i = 0; i < str.length; i++) {
            charCodesArr.push(str.charCodeAt(i));  
        }
    
        for (var i = 0; i < charCodesArr.length; i++) {
    
            // Check if the passed string contains only letters ( A - Z = 65 - 90, a- z = 97 - 122)
            if ( (charCodesArr[i] >= 65 && charCodesArr[i] <= 90) || (charCodesArr[i] >= 97 && charCodesArr[i] <= 122) ) {
    
                // If its charCode of Z, add A to strOfFollowingChars
                if (charCodesArr[i] === 90) strOfFollowingChars += 'A';
    
                // If its charCode of z, add a to strOfFollowingChars
                else if (charCodesArr[i] === 122) strOfFollowingChars += 'a';
    
                // If its charCode of any letter except Z or z - increment the char code by 1 and convert it to char
                else strOfFollowingChars += String.fromCharCode(charCodesArr[i] + 1);
    
            }
    
            else return 'ERROR: You passed characters other than english letters';            
        }
    
        var resObj = {
            passedStr: str,
            'following characters string': strOfFollowingChars
        }
    
        return resObj;
    }
}


// Create an instance of StringUtils and execute one example from each of its functions.
var strUtils = new StringUtils();

console.log('\n');
console.log( strUtils.getVovels('David') );
console.log('\n');
console.log( strUtils.removeChar('abcdefgh', 6) );
console.log('\n');
console.log( strUtils.incrementLetters('AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz') );
