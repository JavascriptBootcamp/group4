var movies = {
    title: "City Of God", 
    duration: 130, 
    stars: [    "Alexandre Rodrigues",
                "Leandro Firmino da Hora",
                "Phellipe Haagensen",
                "Douglas Silva",
                "Jonathan Haagensen",
                "Matheus Nachtergaele",
                "Seu Jorge" ]
};

// <movie> lasts for 30 minutes <Stars: <name1>,... ,<namen>.>
/*
var stars = [    "Alexandre Rodrigues",
"Leandro Firmino da Hora",
"Phellipe Haagensen",
"Douglas Silva",
"Jonathan Haagensen",
"Matheus Nachtergaele",
"Seu Jorge" ]
*/
function creatMovieStarsString (stars) {
    var starsString = ""
    stars.forEach(function(str) {
        if (starsString.length === 0) {
            starsString = starsString+str;
        }
        else {
            starsString = starsString+" ,"+str;
        }
    }, this);
    starsString = starsString+".";
    return starsString
}

function movieInfo (movies,creatMovieStarsString) {
    var starsString = creatMovieStarsString(movies["stars"]);
    console.log(movies["title"]+" lasts for" +movies["duration"]+ " minutes. Stars: "+starsString);
}
movieInfo (movies,creatMovieStarsString);



/*
array.forEach(function(key) {
    
    
}, this);
*/

