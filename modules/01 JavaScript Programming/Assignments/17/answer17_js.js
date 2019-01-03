myMovies = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
}

var printMyMovies = function() {
    var str="";
    for (var movie in myMovies){
        if(movie =="title")
        str = myMovies[movie];
        if(movie =="duration")
        str  += " lasts for " + myMovies[movie]+"minutes." ;
        if(movie =="stars")
        str  += " Stars: " + myMovies[stars];

        console.log(str);
       
    }
}

printMyMovies();