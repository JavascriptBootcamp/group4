Array.prototype.mySliceFunction = function(first,last){
    var sliced =[];
    for(var i=first;i<=last;i++){
        sliced.push(this[i]);
    }
    return sliced;
}

var arr = [1,2,5,7];
var sliced = arr.mySliceFunction(1,2);
console.log(sliced);