var array=new Array(10);
var val=10;
for (var index = 0; index < array.length; index++) {
  array[index]=val;
  val++;
    
}
console.log(array);
array.forEach(function(element) {
   if(element%2===0)
   console.log(element +" is even");
   else 
   console.log(element+ " is odd");
}, this);
