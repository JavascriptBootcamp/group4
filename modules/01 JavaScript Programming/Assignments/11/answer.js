let i = 1;

while( i <= 50)
{
    if(i % 7 === 0)
    {
        console.log("boom");
    }
    i++;
}

i = 1;

while(i <= 100)
{
    if( i % 3 === 0 && i % 5 === 0)
    {
        console.log("fizzbuzz");
    }

    else if( i % 3 === 0)
    {
        console.log("fizz");
    }
    
    else if(i % 5 === 0)
    {
        console.log("buzz");
    }

    ++i;
}
