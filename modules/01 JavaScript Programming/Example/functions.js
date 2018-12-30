// function isHuman(legs){
    //var legs = 4;
    // return legs === 2 ? "human" : "some other creature";
    // if (legs === 2) {
    //     // console.log("human");
    //     return "human";
    // }
    // else {
    //     // console.log("some other creature");
    //     return "some other creature";
    // }
// }

var isHuman = function(legs){
    return legs === 2 ? "human" : "some other creature";
}

var result = isHuman(4);
console.log(result);
result = isHuman(12);
console.log(result);
// result = isHuman(2);
// console.log(result);
console.log(isHuman(2));

// var obj = {
//     isHuman: function(legs){
//         return legs === 2 ? "human" : "some other creature";
//     }
// }

function getMultiply(arrayOfNumbers, multiplier){
    var arrResult = [];
    for (var i=0;i<arrayOfNumbers.length;i++){
        // console.log(arrayOfNumbers[i] * multiplier);
        arrResult.push(arrayOfNumbers[i] * multiplier);
    }
    return {
        result: arrResult
    };
}
var numbers = [1, 2, 5, 7];
// console.log(getMultiply(numbers, 2).result);
console.log(getMultiply(numbers, 2)["result"]);