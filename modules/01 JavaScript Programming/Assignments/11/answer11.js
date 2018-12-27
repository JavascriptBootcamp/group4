//While-Loop
//---
//1. Create a while loop that iterates up to 50 while logging "boom" at multiples of 7
//2. Create a while that iterates up to 100 while logging "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
var i=1;
while( i<=50)
{ 
    if(i%7==0)
    {
        console.log(" boom");
        
    }
    ++i;
}
 var j=1;
while( j<=100)
{ 
    if(j%7==0)
    {
        console.log(" fizz");
        
    }
    ++j;
}
 j=1;
while( j<=100)
{ 
    if(j%5==0)
    {
        console.log(" buzz");
        
    }
        ++j;

} 
j=1;
while( j<=100)
{ 
    if(j%5==0 && j%3==0 )
    {
        console.log(" fizzbuzz");
        
    }
        ++j;

}
