

showDateAndTime = function(){

    var daysArr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var date = new Date() ;
    var day = daysArr[date.getDay()];
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log("Today is",day,".");
    console.log("Current time is",time); 

}();

showDateAndTime;