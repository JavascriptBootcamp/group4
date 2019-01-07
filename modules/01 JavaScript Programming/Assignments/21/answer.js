// Write a JavaScript function that finds the highest value in an array<br><br>
// Test Data :
// console.log(max([12,34,56,1]));<br>
// console.log(max([-12,-34,0,-56,-1]));<br>
// 56<br>
// 0<br><br>
// Display one example.

function max(arr){
    try{
        var maxVal = arr[0];
        arr.forEach(element => {
            if(element > maxVal){
            maxVal = element;
            }
        });
        return maxVal;
    }
    catch(exception){
        console.log("Wrong input!  ",exception);
        }
}

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));