var arr = [1, 2, 5, 7];

let myFilter = function(someArr, callbackFunc) {
     if (typeof callbackFunc === 'function') return callbackFunc(someArr);
     else console.log('myFilter function must get a function as a second param');
}

let getEvenArrNums = function(someArr) {
     var filteredArr = [];

     someArr.forEach( num => {
          if (num % 2 === 0) filteredArr.push(num);
     });

     return filteredArr;
}

var filtered = myFilter(arr, getEvenArrNums);

console.log(filtered);
