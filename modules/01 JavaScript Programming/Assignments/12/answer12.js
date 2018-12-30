var string = "aaa bbb 111 222";
var op = " ";
console.log(returnEvenString(string , op));

function returnEvenString(str,op){
   var res="";
   str = str.split(op);   
    str.forEach(function(item,index){ 
        if(index%2!==0)
        {
           res+=item  
        }
    });
    return res;
}
