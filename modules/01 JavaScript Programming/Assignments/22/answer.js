function StringUtils(){
    this.getVowels = function(str){
        if(typeof(str) !== 'string'){
            console.log("Wrong input!");
        }
        var volwes = 'aeiou';
        var volwesCounter = 0;
        var strArr = str.toLowerCase().split('');
        strArr.forEach(element => {
            if(volwes.indexOf(element) >=0 )
                volwesCounter++;
        });
        return volwesCounter;
    },

    this.removeChar = function(str, pos){
        if(typeof(str) !== 'string' || pos < 0 || pos > str.length){
            console.log("Wrong input!");
            return;
        }
        return str.substr(0,pos) + str.substr(pos+1,str.length);
    },

    this.incrementLetters = function(str){
        if(typeof(str) !== 'string'){
            console.log("Wrong input!");
            return;
        }
        var newStr = '';
        for(var i =0; i< str.length; i++){
                if(str[i] === ' ' || str[i] === 'z' || str[i] === 'Z'){
                    newStr += str[i];
                }
                else{
                    newStr += String.fromCharCode(str[i].charCodeAt(0) +1);
                }
            }
            return newStr;
        }
}

var su = new StringUtils();
console.log(su.getVowels('The quick brown fox' ));

console.log(su.removeChar('The quick brown fox',100));

console.log(su.incrementLetters('The quick brown fox'));

console.log(su.incrementLetters('abc hij klm noz'));