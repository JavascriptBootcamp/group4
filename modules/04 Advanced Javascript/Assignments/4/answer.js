var arr = [1, 22, 50, 7];

Array.prototype.min = function(){
    var minimum = this[0];
    for(var i = 0;i<this.length;i++){
        if(this[i] < minimum){
            minimum = this[i];
        }
    }
    return minimum;
};

Array.prototype.max = function(){
    var maximum = this[0];
    for(var i = 0;i<this.length;i++){
        if(this[i] > maximum){
            maximum = this[i];
        }
    }
    return maximum;
};
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);