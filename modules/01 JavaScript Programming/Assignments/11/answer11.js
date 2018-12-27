//While-Loop
//---
//1. Create a while loop that iterates up to 50 while logging "boom" at multiples of 7
//2. Create a while that iterates up to 100 while logging "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

for(var i=1; i<=50;++i)
{ 
    if(i%7==0)
    {
        console.log(" boom");
        
    }
}
for(var j=1; j<=100;++j)
{ 
    if(j%7==0)
    {
        console.log(" fizz");
        
    }
}
for(var j=1; j<=100;++j)
{ 
    if(j%5==0)
    {
        console.log(" buzz");
        
    }
}
for(var j=1; j<=100;++j)
{ 
    if(j%5==0 && j%3==0 )
    {
        console.log(" fizzbuzz");
        
    }
}
