//Question:
// write a function named "myFilter" which filters an array using a callback function.

//Answer:
var arr = [1, 2, 5, 7, 4, 6];
var filtered = myFilter(arr, function(item){
     return item % 2 === 0;
});
console.log(filtered);

//filter an array using a callback function
function myFilter(arr,callback)
{
    var result =[];
    for(var i = 0; i < arr.length; i ++)
    {
        if(callback(arr[i]))
            result.push(arr[i]);
    }
    return result;
}