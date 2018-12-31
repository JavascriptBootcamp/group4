var i = 1;

while (i < 101) {

    if (i % 3 == 0)
        console.log(i, "fizz");
    if (i % 3 == 0)
        console.log(i, "buzz");
        
    if (i % 3 == 0 && i % 5 == 0)
        console.log(i, " fizzbuzz");

    i++;
}