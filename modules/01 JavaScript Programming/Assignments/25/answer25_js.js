( function() {
var days = ["Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"];
var date = new Date();

console.log(`Today is ${days[date.getDay()]}.
Current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
})();