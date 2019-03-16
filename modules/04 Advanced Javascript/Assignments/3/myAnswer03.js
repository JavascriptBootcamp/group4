Array.prototype.mySliceFunction=function(start,end){
    let result=[];
    for (let i = start; i <= end; i++) {
        result.push(this[i]);
    }
return result;
}
var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1,2);
console.log(sliced);