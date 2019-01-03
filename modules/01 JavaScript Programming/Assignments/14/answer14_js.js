var myfavorite =[ "blue", 
                  "piza",
                  "honda",
                  "footbol",
                  "yellow", 
                  "spageti",
                  "volvo",
                  "tennis",
                  "red", 
                  "angera",
                  "mazda",
                  "rice" ];

//myfavorite.forEach( (val,i) => console.log("My #" + (i + 1) + " choice is "+ val));


myfavorite.forEach( (val,i) => {
    var suffix;
    var endNum ;
    var order = String(i+1);
    if ((order == "11") || (order == "12" )|| (order == "13"))
    suffix = "th";
    else{
    endNum = order[(order.length)-1];
    if (endNum == "1")
      suffix = "st";
      if (endNum == "2")
      suffix = "nd";
      if (endNum == "3")
      suffix = "rd";
      if (endNum == "5")
      suffix = "th";
    }
  





    console.log("My " + (i + 1) + suffix+ " choice is "+ val);
}
)

