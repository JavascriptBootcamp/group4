
function getFindsStr(phrase, letters){
    var res = [];
    for(var i=0; i< phrase.split('').length; i++){
    
        for(var j=0; j<letters.length; i++){
            if(phrase[i] === letters[j]){
                res.push(phrase[i]);
                break;
            }
            else{
                res.push("_");
                break;
            }
        }
    }
    return res.join('');
}

function getGessFromUser(){

}

function runGame(phrases){
    var phrase = phrases[Math.floor(Math.random()*phrases.length)];
    var life = 10;
    while(life > 10){
        console.log("You have " + life + "left!");
        sPhrase = phrase.split('');
        



        life--;
    }
    return phrase;
}




// var items = ['messi','ronaldo','Game of Throns','Led Zepplin'];
// console.log(runGame(items));