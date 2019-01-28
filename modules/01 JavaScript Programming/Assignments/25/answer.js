// Question: Write a JavaScript function that displays the current day and time in the following format:<br><br>
// Today is Tuesday. <br>
// Current time is 22:30:38<br><br>
// display one example by executing this function using IIFE.<br><br>


//Answer
(function (){
    var weekday=new Array(7);
    weekday[0]="Monday";
    weekday[1]="Tuesday";
    weekday[2]="Wednesday";
    weekday[3]="Thursday";
    weekday[4]="Friday";
    weekday[5]="Saturday";
    weekday[6]="Sunday";
    var date = new Date();
    console.log(`Today is ${weekday[date.getUTCDay()]} \nCurrent time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
})();