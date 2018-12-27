// { <h1>Array</h1>
// create an array to hold a list of your favorite (colors, food etc.).
// for each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", 
// picking the right suffix for the number based on what it is. }
var bonusFlag = true;
arrPos = ["1st","2nd","3rd","4th","5ve"]

var arr = new Array("Pizza","Pasta", "Blue", "Milk", "Yello");
arr.forEach(function(element,index) {
    if(!bonusFlag)
        console.log("My #" ,index+1 + "choice is", element + ".");
    else    
        console.log("My" , arrPos[index], "choice is", element + ".");
});
