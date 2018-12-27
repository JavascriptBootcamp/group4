//Create a for loop that prints "even or odd?" and then iterates from 10 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even")

for (var i =10; i<21;i++)
{
    if(i%2===0)
        console.log(`${i} is even`);
    else
        console.log(`${i} is odd`);
}