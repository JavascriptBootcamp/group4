Array.prototype.min = 
  function(){
  var min = this[0];
    for(var i = 0 ; i < this.length;i++){
        if(min > this[i])
          min = this[i];
    }
    return min;
  }
  
  Array.prototype.max = 
  function(){
  var max = this[0];
    for(var i = 0 ; i < this.length;i++){
        if(max < this[i])
          max= this[i];
    }
    return max;
  }
  
  var arr = [1, 22, 50, 7];
  var minimum = arr.min();
  var maximum = arr.max();
  console.log("Minimum:", minimum, "Maximum:", maximum);
