(() => {
    var theDate = new Date();
    var day;
    switch(theDate.getDay()){
        case 0: 
            day = "Sunday";
            break;
        case 1: 
            day = "Monday";
            break;
        case 2: 
            day = "Tuesday";
            break;
        case 3: 
            day = "Wednesday";
            break;
        case 4: 
            day = "Thursday";
            break;
        case 5: 
            day = "Friday";
            break;
        case 6: 
            day = "Saturday";
            break;
    }
    console.log('Today is', day + '.') ;
    console.log('Current time is', theDate.getHours() + ':' + theDate.getMinutes() + ':' + theDate.getSeconds() + '.');
}) ();// an IIFE
