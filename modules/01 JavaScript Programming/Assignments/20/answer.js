

var arr = [1, 2, 5, 7];

function myFilter(arr,callback){
    
  var evenArr=[];
   for (var i = 0 ; i < arr.length ; i ++){
       if (callback(arr[i]))
        evenArr.push(arr[i]);
        
   }

   return evenArr;

}

var filtered = myFilter(arr, function(item){
     return item % 2 === 0;
});

console.log(filtered);