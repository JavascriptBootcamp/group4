for (var i=1;i<=100;i++){
    console.log(i*2);
}

var arr = ['David','Yoni'];

arr.forEach(function(item){
    console.log("Hello " + item+"!");
})

for(var i=1;i<5;i++){
    for(var j=0;j<i;j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}