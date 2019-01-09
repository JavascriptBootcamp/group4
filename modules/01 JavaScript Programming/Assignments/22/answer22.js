function StringUtils(){

    
this.getVowels = function(str){
    var count = 0;
    var strArr = str.toLowerCase().split("");
    for(var i=0;i<strArr.length;i++){
    if(strArr[i] === "a" || strArr[i] === "e" || strArr[i] === "i"  || strArr[i] === "o" || strArr[i] === "u")
     count++;
    }
    return count;
};

this.removeChar = function(str, pos){
var strArr = str.split("");
if(pos == 0){
    strArr.shift();
}
else if(pos == str.length-1){
    strArr.pop();
}
else{
var newStr = [];    
for(var i=0;i<strArr.length;i++){
    if(i != pos){
      newStr.push(strArr[i]);
    }
}
strArr = newStr ;
}
return strArr.join("");
}


this.incrementLetters = function(str){

var strArr = str.split("");
for(var i=0;i<strArr.length;i++){
    switch(strArr[i]) {
        case ' ': break;
        case 'z':
        strArr[i] = 'a'; break;
        case 'Z': 
        strArr[i] = 'A'; break;
        default:
        strArr[i] = String.fromCharCode(1 + strArr[i].charCodeAt(0));
        }
        
}
  return strArr.join("");
}

}


var str =  "The quick brown fox";
var strU = new StringUtils();
console.log(strU.getVowels(str));
console.log(strU.removeChar(str,0));
console.log(strU.removeChar(str,str.length-1));
console.log(strU.removeChar(str,4));
console.log(strU.incrementLetters(str))
