function stringUtils(str){

  //  this.str=str;

    this.getVowels=function(str){
        var vowels = ['a','e','i','o','u','A','E','I','O','U'];
        var numOfVow=0;
        for(var i=0;i<str.length;i++){
            for(var j=0;j<vowels.length;j++){
                if(str[i]===vowels[j]){
                    numOfVow+=1;
                }
            }
        }
        console.log(numOfVow);
    };
    this.removeChar = function(str,pos){
        var leftSide="";
        var rightSide="";
        leftSide = str.substring(0, pos);
        rightSide = str.substring(pos + 1, str.length);
        return (leftSide + rightSide);
    };
    this.incrementLetters =function(str){
        alefbet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"]
        bigalefbet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A"]
        result="";
        for(var i=0;i<str.length;i++){
            for(var j=0;j<22;j++){
                if(str[i]===alefbet[j]){
                    result+=alefbet[j+1];
                }
                if(str[i]===bigalefbet[j]){
                    result+=bigalefbet[j+1];
                }
            }
        }
        return result
    }
}

var x = new stringUtils();
x.getVowels('The quick brown fox');
console.log(x.removeChar('The quick brown fox',0))
console.log(x.incrementLetters('The quick brown fox'))
