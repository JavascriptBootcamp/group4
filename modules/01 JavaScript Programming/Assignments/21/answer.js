function max(arr){
    try{
        if(!Array.isArray(arr)){
            throw 'the input is not an array';
        }
        if(arr.length === 0){
            throw 'no elements in the array';
        }
        var isAnyNAN = arr.some((value) => {
            return isNaN(value);
        });
        if(isAnyNAN){
            throw 'not all the elements in the array are numbers';
        }
        var max = arr[0];
        arr.reduce((x, y) => {
            max  = max < y ? y:max;
        });
    }catch(ex){
        console.log('Error:', ex);
    }finally {
        return max;
    }
}

console.log(max([-12,-34,0,-56,-1]));
