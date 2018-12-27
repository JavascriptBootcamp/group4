let colors = new Array("red","blue","yellow","green","white");
colors.forEach(function(item) {
    
});
for (let i = 0; i < colors.length; i++) {
    console.log("My #",i+1 ,"choice is :", colors[i]);
}
for (let i = 0; i < colors.length; i++) {
    console.log("My", ordinal_suffix_of(i+1), "choice is :", colors[i]);
}
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}