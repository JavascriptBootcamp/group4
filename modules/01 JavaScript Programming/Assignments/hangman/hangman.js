function getFindsStr(phrase, letters){
    var res = [];
    phrase.split('').forEach(p => {
        if(letters.join('').includes(p))
            res.push(p);
        else if(p === ' ')
            res.push(' ');
        else
            res.push('_');
    });
    return res.join('');
}

function isWon(phrase, letters){
    return !getFindsStr(phrase,letters).includes('_');
}


function runGame(phrases){
    var life = 10;
    var gessLst = [];
    var phrase = phrases[Math.floor(Math.random()*phrases.length)];
    console.log("Wellcome to hangman Game.");
    console.log("You have " + life + " lifes left please enter your gess:");
    var stdin = process.openStdin();
        stdin.addListener("data", function(gess) {
            gessLst = gessLst.concat(gess.toString().trim().split(''));
            console.log(getFindsStr(phrase,gessLst));
            
            if(isWon(phrase,gessLst)) {
                console.log("You Won!!!!");
                process.exit();
            }
            life--;
            if(life === 0){
                console.log("You Lost!!!");
                process.exit();
            }
            console.log("You have " + life + " lifes left please enter your gess:");            
        });
}
    

var phrases = ['messi ronaldo','bambam'];
runGame(phrases);