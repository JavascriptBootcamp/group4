Array.prototype.mySliceFunction = function (start, end) {
   var temp=[]
   var counter=0;
   for(;start<=end;start++){
       temp.push(this[start])
   }
   return temp
};

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1,2);
console.log(sliced);
