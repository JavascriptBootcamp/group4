function StringUtils(){
    this.getVowels = function(str){
        var numberOfVowels = 0;
        str = str.toLowerCase();
        for (var  i=0; i<str.length; i++){
            if (str[i] === "a" || str[i] === "e" || str[i] === "u" || str[i] === "" || str[i] === "i" || str[i] === "o"){
                numberOfVowels++;
            }
        }
        return numberOfVowels;
    }
    this.removeChar = function(str,pos){
        str = str.replace(str[pos],"");
        return str;
    }
    this.incrementLetters = function(str){
        var strNew ="";
        var asciChar = "";
        for (var i=0; i<str.length; i++){
            //case break word 
            if(str[i] === " "){
                strNew += " "; 
                continue;
            }
            //case last charecter
            else if(str[i] === "z" || str[i] === "Z"){
                strNew += "a"; 
                continue;
            }
            //following charecter
            asciChar = str[i].charCodeAt();
            asciChar++;
            strNew += String.fromCharCode(asciChar);
        }
        return strNew;
    }
}

 var su1 = new StringUtils();
 console.log(su1.getVowels("The quick brown fox"));
 console.log(su1.removeChar("The quick brown fox",6));
 console.log(su1.incrementLetters("abcd efgh ijkl mnop qrst uvwx yz"));
