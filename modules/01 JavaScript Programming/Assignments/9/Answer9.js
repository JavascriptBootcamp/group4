// Q1
for (i=0 ; i<101 ; i++) {
    console.log(i*2);
}

// Q2
var NameArr = ["Avrahm","Yacov","yetzak","mosh","david"]

NameArr.forEach(function(element) {
    console.log("hello "+element+"!");      
}, this);

for (i=1 ; i<6 ; i++) {
    for (j=0 ; j<i ; j++) {
        process.stdout.write("* ");
    }
    console.log();
}
