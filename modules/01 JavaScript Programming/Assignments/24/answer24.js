function RandomWord (chars){
    

   if(!Array.isArray(chars)){
       console.log("chars should be an array.");
       return;
   }
   
   for(var k=0;k<chars.length;k++){
       if( typeof(chars[k]) !== "string"){
        console.log("chars should include only strings.");
        return;
       }
   }

    this.randomize = function(len){

      if(typeof len !== "number"){
        console.log("length should be a number");
        return;
      }

      var str = "";
      for(var j=0;j<len;j++){
      var i = Math.floor(Math.random()*chars.length);    
      str += chars[i] + " ";    
      }
      return str;
    }
}


var word = new RandomWord(['a','b','g','u']);
//var word = new RandomWord("g");
//var word = new RandomWord(['a','b','g','u',5]);
var result = word.randomize(6);
console.log(result);
result = word.randomize(2);
console.log(result);