function RandomWord (chars){
    
    this.randomize = function(len){
      var str = "";
      for(var j=0;j<len;j++){
      var i = Math.floor(Math.random()*chars.length);    
      str += chars[i] + " ";    
      }
      return str;
    }
}


var word = new RandomWord(['a','b','g','u']);
var result = word.randomize(6);
console.log(result);
result = word.randomize(2);
console.log(result);