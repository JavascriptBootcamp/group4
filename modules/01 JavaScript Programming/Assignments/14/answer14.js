var arr = ["pizza","blue","black","hamburger"];
arr.forEach(function(item,index){
    if (index+1 === 1){
        suffix = "st";
    }
    else if(index+1 === 2){
        suffix = "nd";
    }
    else if(index+1 === 3){
        suffix = "rd";
    }
    else suffix = "th";
    console.log("my",(index+1) + suffix ,"choice",item);
});