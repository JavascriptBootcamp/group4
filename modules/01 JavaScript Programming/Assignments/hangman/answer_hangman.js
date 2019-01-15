var life = 10;
var notWon = true;
var phrases = ["python","javascript"];
var randomIndex = 0;
var phrase = phrases[randomIndex].split("");
var currentFound = new Array(phrase.length);
currentFound.fill("-");
console.log(phrase);

while ( life > 0 && notWon){
    console.log("remaing life : " + life);
    console.log("found matches: " + currentFound.toString());
    var letterUser = prompt("enter Letter");
    if (phrase.indexOf(letterUser) != -1){
       currentFound[phrase.indexOf(letterUser)] = letterUser;
     console.log("faund");
    }
     else
     life--;

     life--

    if (life  === 0) {
        console.log("you lost");
        return;
    }

}