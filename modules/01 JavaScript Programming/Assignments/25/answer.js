//the function  displays the current day and time in the following format:
//Today is Tuesday. 
//Current time is 22:30:38

function currentDayAndTime() {
    var days = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"}
    var d = new Date();
    console.log("Today is " + days[d.getDay()] + ".");

    var hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();

    console.log("Current time is " + hours + ":" + minutes + ":" + seconds);
}

currentDayAndTime();