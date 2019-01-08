//answer 22 javascript

function StringUtils() {

    this.getVowels = function (str) {
        var splitedStr = str.split("");
        var vowels = ["a","A","e","E","i","I","u","U","o","O"];
        var numOfVowles = splitedStr.reduce(function(total,wordChar){
           var haveVowels =  vowels.some(voelsChar => {
                 return (voelsChar == wordChar);
             });
            if (haveVowels)
             return total+1;
            else
            return total;    
        }, 0 ) 
         
        return numOfVowles;
    }

  
}

var str = "My name is aviyot getahun";
var word = new StringUtils();
console.log("number of vowels on "+ str + ": " + word.getVowels(str));