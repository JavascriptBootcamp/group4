
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

var names = new Array();
names = ["Amir","Moshe","Yosi","Yaniv","Sami"] ;
names.forEach(function(item){
    console.log("Hello", item + "!");
});
var star = "";
for (let i = 1; i <= 10; i++){
    star += "*";
    console.log (star);
}
