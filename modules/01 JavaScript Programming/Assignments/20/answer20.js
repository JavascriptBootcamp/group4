

var arr = [1, 2, 5, 7];

function myFilter(arr,func){
    return func(arr);
}

var filtered = myFilter(arr, function(array){
      return array.filter(item=>item % 2 === 0) ;
});
console.log(filtered);