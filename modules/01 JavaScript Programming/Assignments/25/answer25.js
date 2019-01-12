(function  () {    
    daysOfTheWeek = { 0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"};
    var d = new Date();
    console.log ("Today is "+ daysOfTheWeek[d.getDay()] +"."); 
    console.log ("Current time is "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
})();