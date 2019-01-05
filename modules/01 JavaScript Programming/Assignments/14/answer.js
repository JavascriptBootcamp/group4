var food = ['hamburger', 'BBQ', 'salad'];
var beverage = ['beer', 'vodka', 'coke'];
var colors = ['blue', 'green', 'black'];
var i;

var str = '';
var suffix;

for(i = 0; i < food.length; i++){
    str += 'My ' + (i+1) + switchSuffix(i + 1) + ' choice is ' + food[i];
    if(i !== food.length - 1){
        str += ', '
    }
}
str += '\n';
for(i = 0; i < beverage.length; i++){
    str += 'My ' + (i+1) + switchSuffix(i + 1) + ' choice is ' + beverage[i];
    if(i !== beverage.length - 1){
        str += ', '
    }
}
str += '\n';
for(i = 0; i < colors.length; i++){
    str += 'My ' + (i+1) + switchSuffix(i + 1) + ' choice is ' + colors[i];
    if(i !== colors.length - 1){
        str += ', '
    }
}

console.log(str);

function switchSuffix(num){
    switch(num) {
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd';
        case 4:
            return 'th';
    }
}