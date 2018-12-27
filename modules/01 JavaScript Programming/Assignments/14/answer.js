
//Question:
//<h1>Array</h1>
//create an array to hold a list of your favorite (colors, food etc.).
//for each choice, log to the screen a string like: "My #1 choice is blue."
//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

//Answer:
var favoColors = ["Purple","Gray","Red","Blue"];
favoColors.forEach(function(item,index){
    console.log(`My #${index+1} choice is ${item}`);
})


//Bonus:
var favoColors = ["Purple","Gray","Red","Blue"];
favoColors.forEach(function(item,index){
    if (index+1===1)
        console.log(`My ${index+1}st choice is ${item}`);
    else if (index+1===2)
        console.log(`My ${index+1}nd choice is ${item}`);
    else if (index+1===3)
        console.log(`My ${index+1}rd choice is ${item}`);
})


