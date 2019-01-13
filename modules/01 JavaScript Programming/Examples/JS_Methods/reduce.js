//מתודה זו מבצעת פונקציה על מערך ומקבלת 4 ארגומנטים על פי הסדר צובר ערך נוכחי אינדקס נוכחי ומערך


var arr = [10,20,30,40];

function getMax(total, currentValue,currentIndex, arr){
   return total + currentValue;
}

var max =arr.reduce(getMax);
console.log(max);