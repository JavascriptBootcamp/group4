function RandomWord (chars)
{
    if( !chars instanceof(Array))
      {
             console.log("chars should be an array");
      }
    if(chars.some(function(char)
    {
        typeof(char)!== String

    }))
    {

        console.log("should include only strings");
    }
    this.randomize =function(length)
    {
        if(!length instanceof(Number))
        {
               console.log("length should be a number");
        }
        var str="";
        var randIndex;
        for(var i=0;i<chars.length;i++)
        {
            randIndex=Math.floor(Math.random() * length);     // returns a random integer from 0 to length
            str+=chars[randIndex];
        }
            return str;
    }

}
var word = new RandomWord(['a','b','c']);
var result = word.randomize(2);
console.log(result);
