// function isHuman(legs){
    // var legs = 4;
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
/************/
// Behind the scenes
// var isHuman;
/************/
// console.log(isHuman(2));
// var isHuman = function(legs){
//     return legs === 2 ? "human" : "some other creature";
// }

// var result = isHuman(4);
// console.log(result);
// result = isHuman(12);
// console.log(result);
// result = isHuman(2);
// console.log(result);
// console.log(isHuman(2));

// var obj = {
//     isHuman: function(legs){
//         return legs === 2 ? "human" : "some other creature";
//     }
// }

// function getMultiply(arrayOfNumbers, multiplier){
//     var arrResult = [];
//     for (var i=0;i<arrayOfNumbers.length;i++){
//         // console.log(arrayOfNumbers[i] * multiplier);
//         arrResult.push(arrayOfNumbers[i] * multiplier);
//     }
//     return {
//         result: arrResult
//     };
// }
// var numbers = [1, 2, 5, 7];
// console.log(getMultiply(numbers, 2).result);
// console.log(getMultiply(numbers, 2)["result"]);

var multiplier = 4;
var arr = [1, 2, 5, 7];
function getMultiply(arrayOfNumbers, multiplier){
    var arrResult = [];

    function pushToArray(arr, multiplier){
        arrResult.push(arr * multiplier);
        // console.log("innerVar", innerVar); // Error  - innerVar is not defined
        function printArr(){
            console.log(arrResult);
            console.log("innerVar", innerVar);
            var innerVar = "something";
        }
        printArr();
    }

    for (var i=0;i<arrayOfNumbers.length;i++){
        pushToArray(arrayOfNumbers[i], multiplier);
    }

    return arrResult
}
console.log(getMultiply(arr, 4));