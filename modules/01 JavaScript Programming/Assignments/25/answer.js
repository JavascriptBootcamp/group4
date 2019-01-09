
var today = new Date();

function getCurrentDayAndTime() {
  
    var dayNumAndName = { 0: 'Sunday',  1: 'Monday',  2: 'Tuesday',
        3: 'Wednesday',  4: 'Thursday', 5: 'Friday', 6: 'Saturday'    
    };
    
    var currentDayNum = today.getDay();
    var currentDayOfWeek = `Today is ${dayNumAndName[currentDayNum]}`;
    var currentTime = 'Current time is ' + twoDigitsHour() + ':' + twoDigitsMinute() + ':' + twoDigitsSecond();
    
    var currentDayAndTime = currentDayOfWeek + '\n' + currentTime;
    
    console.log('\n', currentDayAndTime, '\n');   
}

getCurrentDayAndTime();


// Utils for getCurrentDayAndTime function
function twoDigitsHour() {
    var hour = today.getHours().toString();
    return twoDigitsValue(hour);
}

function twoDigitsMinute() {
    var minute = today.getMinutes().toString();
    return twoDigitsValue(minute);
}

function twoDigitsSecond() {
    var second = today.getSeconds().toString();
    return twoDigitsValue(second);
}

function twoDigitsValue(value) {
    if (value.length < 2) value = '0' + value;
    return value;
}
