/*if(process.argv.length>2){
    process.argv.shift();
    process.argv.shift();
    runGame(process.argv);
}*/

phrases = ["hellow word","star","sky","basketball"]

//runGame(phrases);



function runGame(phrases){
var letter = process.argv[2];
var r = math.floor(math.random()*10);
var phrase =  phrases[r];   
var life = 10;
while(life>0 && !isWon(phrase, letter)){
    console.log(`life: ${life}`);

}
}

getFindsStr("star",["s","r"]);
function getFindsStr(phrase, letters){

    var str_p = phrase.split("");
    var arr =[];
    var obj = {};
    for(var i=0;i<str_p.length;i++){
        for(var j=0;j<letters.length;j++){
            if(str_p[i] == letters[j] ){
                obj[i] == str_p[i];
            }
        }
    }
    var s= [];
    for(var key in obj){
      for(var k=0;k<str_p.length;k++){
        if(key == k){
            s[key] = str_p[k];
        }
        else{
            s[key] = "_";
        }
      }
      console.log(s);
      return s;
    }


}

function isInPhrase(phrase, letter){
var str = phrase.split("");
for(var i=0;i<str.length;i++){
    if(letter == str[i])
      return true;
}
return false;

}

function isWon(phrase, letters){

var str_p = phrase.split("");
var str_l = letters.split("");
var arr =[];
for(var i=0;i<str_p.length;i++){
    for(var j=0;j<str_l.length;j++){
        if(str_p[i] == str_l[j] && !isInArr(arr,str_l[j])){
            arr.push(str_l[j])
        }
    }
}
return arr.length == str_l.length;

}

function isInArr(arr,letter){
    for(var i=0;i<arr.length;i++){
        if(letter == arr[i])
          return true;
    }
    return false;
}