let myFavMovie = {
    title : "Metrix",
    duration : 2,
    stars : ["Kiano Rivs","Morfios"]
}

printMovie = ( movieObj ) =>{
         return console.log(movieObj.title + " lasts for " + movieObj.duration +" hours " + "stars: " + movieObj.stars[0] + " , " + movieObj.stars[1]);
        
}

printMovie(myFavMovie)