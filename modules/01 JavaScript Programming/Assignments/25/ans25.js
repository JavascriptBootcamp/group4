//Answer 25
(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    Date.prototype.getDayName = function() {
        return  days[this.getDay()];
    };
    var now = new Date();
    console.log("Today is " + now.getDayName() + ".");
    console.log("Current time is " + now.getHours() + ":" + now.getMinutes() + ":" + now.getMinutes());
 })();


