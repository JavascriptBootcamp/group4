function getCurrentDay(){
    var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
                   "Thursday", "Friday", "Saturday"];
    var date = new Date();
    var currentDayMessage ='Today is ' + d_names[date.getDay()] + '.\n';
    currentDayMessage += "Current time is " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return currentDayMessage
}

console.log(getCurrentDay());

