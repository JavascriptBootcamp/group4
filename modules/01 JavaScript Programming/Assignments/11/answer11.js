
var i=1;
while(i<50){
    if(i%7===0){
        console.log("boom",i);
    }
    i++;
}

var i=1;
while(i<100){
    if(i%3===0 && i%5===0){
        console.log("fizzbuzz",i);
    }
    else if(i%3===0 && i%5!==0){
        console.log("fizz",i);
    }
    else if(i%3!==0 && i%5===0){
        console.log("buzz",i);
    }
    i++;
}