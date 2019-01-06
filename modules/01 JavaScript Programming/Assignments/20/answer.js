var arr = [1, 2, 5, 7];

var myFilter = function(arr2,callback){
     var result = [];
     for (var i=0;i<arr2.length;i++){
          if(callback(arr[i])!==null) 
               result.push(callback(arr[i]));
     }
     return result;
 }

var by2filtered = myFilter(arr, function(item){
     if(item % 2 === 0)
          return(item);
     else 
          return (null);
});


console.log(by2filtered);


