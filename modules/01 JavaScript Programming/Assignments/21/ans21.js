//Answer 21

function findHighest(arr){
    var highest = 0;
    for(var i=0; i<arr.length; i++){
        if(highest < arr[i])
            highest = arr[i];
    }
    return highest;

}
console.log( findHighest([-12,-34,0,-56,-1]) );