let num = 0;
while (num <= 50) {
    if (num % 7 === 0) {
        console.log(num, ": boom");
    } 
    num++;   
}
num = 0;
while (num <= 100) {
    if (num % 3 === 0) {
        console.log(num, ": fizz");
    }
    if (num % 5 === 0) {
        console.log(num, ": buzz");      
    }
    if (num % 3 === 0 && num % 5 ===0) {
        console.log(num, ": fizzbuzz");      
    }        
    num++;
}