// Create a for loop that prints "even or odd?" 
// and then iterates from 10 to 20. 
var i = 10;
do
{
    var evenOrOdd = "Odd";
    if(i % 2 === 0)
        evenOrOdd = "Even";
    console.log(i ,"is", evenOrOdd);
    i++;  
}
while(i<=20);