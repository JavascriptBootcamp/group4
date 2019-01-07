var res = (function(){
    var strDate = "";
    var d = new Date();
    var days =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    strDate = "Today is " + days[d.getDay()];
    strDate += "\nCurrent time is " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    return strDate;
})();

console.log(res);