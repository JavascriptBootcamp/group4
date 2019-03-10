Array.prototype.mySliceFunction = function(a, b){
    var newArr = [];
    try {
        if(isNaN(a) || isNaN(b)){
            throw 'one or more of the parameters are NaN';
        }
        if(a < 0){
            a = this.length + a;
        }
        if(b >= this.length){
            b = this.length - 1;
        }
        for(var i = a; i <= b; i++){
            newArr.push(this[i]);
        }
        return newArr;
    } catch (error) {
        console.log('"', error, '"');
    }
}

var arr = [1, 2, 5, 7];
var sliced = arr.mySliceFunction(1,2);
console.log(sliced);
