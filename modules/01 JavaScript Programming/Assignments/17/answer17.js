var favMovie = {
    title :"Puff the Magic Dragon",
    duration :30,
    stars : ["Puff", "Jackie","Living Sneezes"]
}

function printMovie(obj){
    var res = "";
    for (key in obj){
        if (key === "title")
        {
            res += obj[key] + " lasts for ";
        }
        else if (key === "duration"){
            res += obj[key] + " minutes";
        }
        else{
            res += " Stars " + obj[key];
        }
    }
    console.log(res);
}

printMovie(favMovie);