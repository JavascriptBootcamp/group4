//Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var favouriteColors = ["Grey", "Blue", "Pink", "Green", "Some color", "No color"];

for (var i = 1; i < favouriteColors.length; i++) {
    var ordin = getNumberWithOrdinal(i);

    console.log("My", ordin, "choice is", favouriteColors[i]);
}

function getNumberWithOrdinal(n) {
    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
 }