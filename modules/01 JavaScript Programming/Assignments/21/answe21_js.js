function max(data){

    var maxVal= data[0];
    data.forEach(element => {
        if (element > maxVal)
          maxVal = element;
    });

    return maxVal;
} 

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));