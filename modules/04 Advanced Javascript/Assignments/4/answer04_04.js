Array.prototype.min=function()
{
    let minValue=this[0];
    for (let i = 1; i < this.length; i++) {
        if(this[i]<=minValue)
        minValue=this[i];
        
    }
    return minValue;
}

Array.prototype.max=function()
{
    let maxValue=this[0];
    for (let i = 1; i < this.length; i++) {
        if(this[i]>=maxValue)
        maxValue=this[i];
        
    }
    return maxValue;
}
var arr = [1, 22, 50, 7];
var minimum = arr.min();
var maximum = arr.max();
console.log("Minimum:", minimum, "Maximum:", maximum);