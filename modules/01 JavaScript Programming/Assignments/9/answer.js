var arr1 = [];
//var index = 0;

for(var i = 0; i < 100; i++){
    arr1.push(i + 1);
    console.log(arr1[i]);
    arr1[i] = arr1[i] * 2;
}
console.log('-------');
arr1.filter((num) => {
    return num <= 100 ? console.log(num):'';
});

var arrNames = ['David', 'Yoni', 'Michal'];

arrNames.forEach((item) => {
    console.log('Hello ' + item + '!');
});

var asterisks;
for(i =0 ; i < 5; i++){
    asterisks = '';
    for(var j=0; j < 5; j++){
        if(j <= i)
            asterisks+='*';
    }
    console.log(asterisks);
}
