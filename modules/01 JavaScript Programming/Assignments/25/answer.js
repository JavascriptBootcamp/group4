(function()
{
    var WeekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();

    console.log("Today is", WeekDay[today.getDay()] + ".");
    console.log("Current time is", today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
})();
