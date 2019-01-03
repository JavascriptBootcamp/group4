function Word (chars )
{

    this.length = function() {return chars.length;};

}


function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
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
 
   return words[indexOfMax(lengths)];


}

console.log(findLongestString('Web  Tutorial') );
