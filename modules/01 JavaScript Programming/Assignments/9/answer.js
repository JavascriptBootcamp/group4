for(var i=0; i<=100; i++){
    console.log(i*2);
}

var myArr = ["gaby","yossi","maly","dalya"];
myArr.forEach(function(item){
    console.log("hello",item + "!");
});

var res="";
for(var i=1; i<=5; i++){
    for(var j=0; j<i; j++){
        res += "*";
    }
    res +="\n";
}
console.log(res);