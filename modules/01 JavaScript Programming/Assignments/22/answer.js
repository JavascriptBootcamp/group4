var StringUtils = function () {

    //Accepts a string as a parameter and counts the number of vowels within the string
    //if input not a string return -1
    this.getVowels = function (str) {
        return typeof str === "string" ? str.split(" ").length : -1;
    }

    //Removes a character at the specified position of a given string and return the new string.
    //if input not a string return " "
    this.removeChar = function (str, pos) {
        var newStr = "";
        if (typeof str === "string" && typeof pos === "number") {
            newStr = str.slice(0, pos) + str.slice(pos+1, str.length);
        }
        
        return newStr;
    }
    
    //Replaces every character in a given string with the character following it in the alphabet.
    //if input not a string return " "
    this.incrementLetters = function (str) {
        var newStr = "";
        if (typeof str === "string"){
            //split the string to array of chars
            var strArr = str.replace(/ /g, ",").split("");

            strArr.forEach(char => {
                switch (char) {
                    case ",":
                        newStr += " ";
                        break;
                    case "z":
                        newStr += "a";
                        break;
                    case "Z":
                        newStr += "Z";
                        break;
                    default:
                        newStr += String.fromCharCode(char.charCodeAt() + 1);
                        break;
                }
            });

        }
        return newStr;
    }
}

//for testing
var test = new StringUtils;
var str = 'The quick brown fox';
console.log(test.getVowels(str));
console.log(test.removeChar(str,5));
console.log("Befor -",str,"\nAfter -",test.incrementLetters(str));