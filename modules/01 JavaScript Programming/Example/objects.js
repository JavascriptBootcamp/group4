var barcelona = {
    numOfPlayers: 11,
    colors: ['blue', 'red'],
    star: "Leonel Messi",
    stadium: {
        name: "Camp Nou",
        numOfSeats: 120000,
        ticketPrice: 100
    }
};

// var colorsWithDot = barcelona.colors;
// var key = "colors";
// var colorsWithBrackets = barcelona["colors"];
// var colorsWithBrackets = barcelona[key];
// console.log(colorsWithDot);
// console.log(colorsWithBrackets);
for (var key in barcelona){
    console.log(key, barcelona[key]);
}