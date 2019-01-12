function max (arr){

    var max=arr[0];
  
    for (var i = 0; i < arr.length; i++) {
      max = arr[i]>max ? arr[i]: max ;
    }
  
    return max;
  }
  S
  var v = [10 , 2, -4 , 20];
  console.log(max(v));
