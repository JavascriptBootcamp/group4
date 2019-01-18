const phrases = ["Back to Square One", "Barking Up The Wrong Tree", "Beating Around the Bush",
    "Between a Rock and a Hard Place", "Burst Your Bubble"];

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
    //return promise to use await in the main function
    return new Promise((resolve, reject) => {
        //waiting to the user input
        stdin.addListener("data", function (d) {
            userInput = d.toString().split("")[0];
            //after getting the data remove the event listeners so we will not have duplicates on the same stdin
            stdin.removeAllListeners('data');
            //returning the user input in the end of the promise
            resolve(userInput);
        });
    });
}

//replace the _ with the letter the user guss, return a new string
function revealHiddenChars(normalStr, hiddenStr, charToCheck) {
    var newStr = "";

    for (let i = 0; i < normalStr.length; i++) {

        if (normalStr[i] === charToCheck || normalStr[i] === charToCheck.toUpperCase()) {
            //add the letter the user found
            newStr += normalStr[i];
        }
        else if (normalStr[i] === " ") {
            //save the spaces in the phrase
            newStr += " ";
        }
        else if (hiddenStr[i] !== " " || hiddenStr[i] !== "_") {
            //save the letter the user already found
            newStr += hiddenStr[i];
        }
        else {
            //a letter that still not found remain as _
            newStr += "_";
        }

    }

    return newStr;
}

//function that contain the logic and runing of the game
async function main(phrasesArr) {
    var life = 20;
    var notWon = true;
    var userLetter = null;

    //Pick a phrase in random
    var randPhrase = pickRandPhrase(phrasesArr);
    var showPhrase = randPhrase.replace(/[a-zA-Z]/g, "_");

    //cheating code :)))
    //console.log("randPhrase -", randPhrase);

    while (life > 0 && notWon) {
        //Show remaining life
        console.log("\nYour remaining life is -", life, "\n");
        //show the phrase hidden with _
        console.log(showPhrase.split("").join(" "), "\n");
        //get user input
        userLetter = await getUserInput();

        //check if user input in the phrase
        if (randPhrase.includes(userLetter) || randPhrase.includes(userLetter.toUpperCase())) {
            //replace the _ with the letter the user guess
            showPhrase = revealHiddenChars(randPhrase, showPhrase, userLetter);
        }

        //check if the user won
        if (randPhrase === showPhrase) {
            notWon = false;
        }

        life--;
    }

    //show the phrase better at the end of the game
    randPhrase = randPhrase.split("").join(" ")

    //print win or lose
    notWon ? console.log("\n\nYou used all your turns!!\nThe correct phrase was -\n\n" + randPhrase + "\n\nTry again next time\n") :
        console.log("\n\n" + randPhrase + "\n\nCorrct!! You guess the phrase!!\n\nYou WIN!!!!\n\nsee you next time\n");

    //end the stdin event listener proccess and finish the program
    process.exit();
}

main(phrases);

