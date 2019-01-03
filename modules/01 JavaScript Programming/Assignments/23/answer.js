function Word(chars)
{
    this.setLength=function(){
        this.length=chars.length;
       
    }
   
}

function findLongestString(sentence)
{
    var temp,finalsize=0,finalword;
    
    var array=sentence.split(" ");

    for (var i = 0; i < array.length; i++) 
    {
        temp=new Word(array[i]);
        temp.setLength();
        if(temp.length>finalsize)
        {
            finalsize=temp.length;
        finalword=array[i];
        }

    }     
    return finalword;
}

console.log(findLongestString("Web Development Tutorial"));
