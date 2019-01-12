
var date = new Date();
switch (date.getDay()) {
    case 0: var day = "sunday"; break;
    case 1:var day = "monday"; break;
    case 2:var day = "tuesday";break;
    case 3:var day = "wednesday";break;
    case 4:var day = "thursday ";break;
    case 5:var day = "friday ";break;
    case 6:var day = "saturday ";break;
}

console.log("Today is "+day);

var time = (function () { 
    console.log('Current time is %d:%d:%d',date.getHours(), date.getMinutes(),date.getSeconds()); 
})(); 
