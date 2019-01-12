//current day and time

(function () {
    var currentDay = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log("Today is:", days[currentDay.getDay()]);

    console.log("Current time is:", currentDay.getHours() + ":" + currentDay.getMinutes() + ":" + currentDay.getSeconds());
})();