
function findBiggest(Obj){
    var objStr;
    var biggest = 0;
    for(var i=0; i<Obj.length; i++){
        if(biggest < Obj[i].length){
            biggest = Obj[i].length;
            objStr = Obj[i];
        }
    }
    return objStr;

}
function Word(chars){
    this.length = chars.split('').length;
    this.chars = chars

    function setLength(length){
        this.length = length;
    }

}
function findLongestString(sentence){
    sentArr = sentence.split(' ');
    strObjArr = []
    sentArr.forEach(elem => {
      strObjArr.push(new Word(elem))  
    });        
    return findBiggest(strObjArr);
} 
console.log(findLongestString("Web Development Tutorial").chars);