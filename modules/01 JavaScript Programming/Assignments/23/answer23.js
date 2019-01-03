function Word (chars )
{

    this.length = function() {return chars.length;};

}


function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }
  
function findLongestString (sentence  )
{
   var words = sentence.split(" ");
   var currWord;
    var currLength;
    var lengths=[];
   for(var i=0; i<words.length;i++)
   {
    
        currWord= new Word (words[i]);
         currLength=currWord.length();
       
        lengths.push(currLength);
   }
 
   return arrayMax(lengths);


}

console.log(findLongestString('Web  Tutorial') );
