

function filter(arr){

    return arr.filter(item=> item >6);
}


function myFilter (arr,callback){
    return callback(arr);
    
}

var arr= [2,5,21,14];
console.log(myFilter(arr,filter));

