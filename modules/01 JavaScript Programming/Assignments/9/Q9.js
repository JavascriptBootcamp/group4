//Q9
for(var i=1; i<=100 ; i++){
    console.log(i*2);
}
var greetings = "";
var namesArr = ["David","Yoni"];
var len = namesArr.length;
for(var i=0; i<=len-1; i++){
    greetings += "Hello " + namesArr[i] + "!";
    if(i === len-1) break;
    greetings += " , " ;
}

console.log(greetings);
var print = "";
for(var i=1; i<=5 ; i++){
    for(var j=0; j<i; j++ )
        print += "*";
    console.log(print);
    print = "";
}

//
//