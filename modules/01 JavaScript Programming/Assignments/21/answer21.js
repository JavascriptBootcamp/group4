function max(arr)
{
    //var arr=[12,34,56,1];
    var maxValue=arr[0];
    arr.forEach(element => {
        maxValue=(maxValue >  element ? maxValue :  element);
     });
    return maxValue;
}

console.log(max([12,34,56,1]));
