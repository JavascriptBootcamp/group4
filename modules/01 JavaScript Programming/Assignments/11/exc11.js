// While-Loop
// ---
// 1. Create a while loop that iterates up to 50 while logging "boom" at multiples of 7
// 2. Create a while that iterates up to 100 while logging "fizz" at multiples of 3, 
// "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

var i =0;
while(i++ <= 50)
{
    if(i % 7 === 0)
        console.log(i, "boom");
}

i =0;
while(i++ <= 100)
{
    if(i % 3 === 0 && i % 5 === 0)
        console.log(i, "fizzbuzz");
    else if(i % 3 === 0)
        console.log(i, "fizz");
    else if(i % 5 === 0)
        console.log(i, "buzz");

}
