// Write a JavaScript function that finds the highest value in an array<br><br>
// Test Data :
// console.log(max([12,34,56,1]));<br>
// console.log(max([-12,-34,0,-56,-1]));<br>
// 56<br>
// 0<br><br>
// Display one example.

function max(array)
{
    var max = array[0]
    array.forEach(item => {
        if(item>max)
            max = item;
    });
    return max;
}

console.log(max([-12,-34,0,-56,-1]));