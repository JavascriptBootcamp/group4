(function () {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var n = d.getDay();
    var time = d.toLocaleTimeString();
    console.log("Today is " + days[n] + ".");
    console.log("Current time is " + time);
})();
