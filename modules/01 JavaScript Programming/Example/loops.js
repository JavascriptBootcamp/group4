var arr = [1, 2, 5, 7];
// var arr2 = [9 , 11 , 13 , 14];
// for (var i=0;i<arr.length;i++){
//     console.log(arr[i] * 2);
// }
// arr.forEach(function(item){
//     console.log(item);
// });
// function func(item){
//     console.log(item);
// };
// var callback = func;
// arr.forEach(callback);

// var myFunction = function(func) {
//     var result = func();
//     console.log(result);
// }

// myFunction(function(){
//     return "Hi";
// });

var javascriptBootcampForEach = function(arr, func) {
    var result = [];
    for (var i=0;i<arr.length;i++){
        result.push(func(arr[i]));
    }
    console.log(result);
}

javascriptBootcampForEach([1,2,3], function(item){
    return item * 3;
});