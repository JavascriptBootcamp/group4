var num = 1;

while(num <= 50){
    if(num%7===0) console.log("boom");
    num++;
}
num=1;

while(num <= 100){
    if(num%3===0 && num%5===0)
        console.log("fizzbuzz");
    if(num%3===0)
        console.log("fizz");
    if(num%5===0)
        console.log("buzz");
    num++;
}