var Easy = ["fly","red","nut","joy","fox","tie","ant","cry","low","can","due","lip","oak","gap","vat","air","run","ash","key","pit","way","dip","few","lot","eye","mix","ask","end","gas","bus","bay","put","fan","rib","win","use","tin","gun","pop","hip","new","set","hot","pie","bed","bee","tip","dry","jet","sex"];
var Medium = ["raise","doubt","trust","bitch","brave","Venus","draft","voice","agent","torch","sport","straw","chalk","moral","wound","craft","other","agree","issue","video","mouse","close","dairy","theme","jewel","force","taste","tasty","drink","world","scene","snake","ranch","crime","score","scrap","split","bleed","gloom","shift","crack","cause","queen","funny","glass","feast","cower"
,"drama","award","drift"];
var Hard = ["overall","combine","compact","diagram","evening","inflate","element","offense","obscure","steward","lecture","harvest","harmony","diamond","primary","drawing","cunning","parking","divorce","distort","compete","freckle","penalty","deposit","digital","routine","charity","feature","convict","holiday","crusade","fashion","tragedy","dribble","graphic","economy","section","revival","pioneer","shelter","capital","eternal","swallow","citizen","dismiss","thirsty","trouble","promote","pasture","reflect"];
var Words = [Easy,Medium,Hard];

var wordletters = [];
var wordlettersgused = [];

var GameLevel = 1;
var msg_GuessLatter = "Guess a Latter";
var msg_Wrong = "Wrong guess, try agin...";
var msg_Right = "Good gusse";
var msg_Level = "chose a game level";

var Easy = ["fly","red","nut","joy","fox","tie","ant","cry","low","can","due","lip","oak","gap","vat","air","run","ash","key","pit","way","dip","few","lot","eye","mix","ask","end","gas","bus","bay","put","fan","rib","win","use","tin","gun","pop","hip","new","set","hot","pie","bed","bee","tip","dry","jet","sex"];
var Medium = ["raise","doubt","trust","bitch","brave","Venus","draft","voice","agent","torch","sport","straw","chalk","moral","wound","craft","other","agree","issue","video","mouse","close","dairy","theme","jewel","force","taste","tasty","drink","world","scene","snake","ranch","crime","score","scrap","split","bleed","gloom","shift","crack","cause","queen","funny","glass","feast","cower"
,"drama","award","drift"];
var Hard = ["overall","combine","compact","diagram","evening","inflate","element","offense","obscure","steward","lecture","harvest","harmony","diamond","primary","drawing","cunning","parking","divorce","distort","compete","freckle","penalty","deposit","digital","routine","charity","feature","convict","holiday","crusade","fashion","tragedy","dribble","graphic","economy","section","revival","pioneer","shelter","capital","eternal","swallow","citizen","dismiss","thirsty","trouble","promote","pasture","reflect"];
        

function DisplayMassage(msg) {
    console.log(msg)
}



function setLevel() {
//    GameLevel = document.getElementById("levelofgame");

    document.querySelector('.results').innerHTML = document.getElementById("levelofgame");
}
//var newDiv = document.createElement("div");
function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// get word by level
function getWordByLevel(level) {
    return randomWord(Words[level-1]);
}
word = getWordByLevel(level);
//newDiv.innerText = "word: " + word;
/*

    <table border="1">
        <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
        </tr>
    </table>
*/