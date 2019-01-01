function myFilter  (arr,func){
      
    var result = [];
    // using library=>

    result=arr.filter(func);
 
    // straightforward =>

    /*  for (var i=0;i<arr.length;i++){
        if(func(arr[i]))
        {
            result.push(arr[i]);
        }
       
    }*/
    return result;
}
var arr = [1, 2, 5, 7];
var filtered = myFilter(arr, function(item){
     return item % 2 === 0;
});
console.log(filtered);
