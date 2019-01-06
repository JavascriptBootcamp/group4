function RandomWord (chars)
{
    if( !Array.isArray(chars))
      {
             console.log("chars should be an array");
      }
      else
      {
        
        if(chars.some(function(char)
        {
           return typeof char !== 'string';
        }))
        {
    
            console.log("should include only strings");
        }
        else{
            this.randomize =function(length)
            {
                if(isNaN(length)===false)
                {
                       console.log("length should be a number");
                }
                else{
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
        }
      
      }
 

}
var word = new RandomWord(['3','b','c']);
var result = word.randomize('s');
console.log(result);
