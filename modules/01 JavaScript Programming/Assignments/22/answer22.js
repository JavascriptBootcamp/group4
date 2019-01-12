
function StringUtils (){

    this.getVowels = function(str) {
        var count = 0;
        str = str.toLowerCase();
        arr = str.split('');
        arr.forEach(function (item){
            if ((item=='a')||(item=='o')||(item=='i')||(item=='u')||(item=='e'))
            {
                count++;
            }
        });

        return count;
    }

    this.removeChar = function(str,pos){
        arr = str.split('');
        arr.splice(pos,1);
        return arr.join('');
    }

    this.incrementLetters = function(str) {
        var arr = str.split('');
        var temp=0;
        for(var i=0; i<arr.length; i++)
        {
            temp= arr[i].charCodeAt(0);
            arr[i] = (String.fromCharCode(temp+1));
        }
        return arr.join('');        
    }

}

var a = new StringUtils ();
console.log("count of Vowels: "+(a.getVowels('ASDeO')));
var newStr = a.removeChar('ASDeO',2);
console.log("String after removed char: "+newStr);
console.log("String with the character following it in the alphabet: " +(a.incrementLetters('abc')));
