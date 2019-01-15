


//Pick a phrase in random
function pickRandPhrase(phrasesArr) {
    randIndex = Math.floor(Math.random() * (phrasesArr.length - 1));
    return phrasesArr[randIndex];
}

//get user input
function getUserInput() {

    var userInput = "";
    var stdin = process.openStdin();

    console.log("Enter the letter you guess are in the phrase");
    stdin.addListener("data", function (d) {
        userInput = d.toString();
        stdin.end();
    });
    return userInput;
}

//function that contain the logic and runing of the game
function main(phrasesArr) {
    var life = 10;
    var notWon = true;
    var userLetter = null;

    //Pick a phrase in random
    var randPhrase = pickRandPhrase(phrasesArr);

    while (life > 0 && notWon) {
        //Show remaining life
        console.log("\nYour remaining life is -", life, "\n");
        //get user input
        //userLetter = getUserInput();

        life--;
    }

    //console.log(phrasesArr);
}

const phrases = ["Back to Square One", "Barking Up The Wrong Tree", "Beating Around the Bush", "Between a Rock and a Hard Place", "Burst Your Bubble"];
main(phrases);

