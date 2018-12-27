var i=1;

while(i <= 50){
    if(i % 7 === 0){
        console.log(i + ': boom');
    }
    i++;
}

i = 1;

while(i <= 100){
    if(i % 3 === 0){
        console.log(i + ': fizz');
        if(i % 5 === 0){
            console.log(i + ': buzz');
            console.log(i + ': fizbuzz');
        }
    }else if(i % 5 === 0){
        console.log(i + ': buzz');
    }
    i++;
}