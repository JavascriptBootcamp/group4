var myFavoriteMovie =
{
    title : "Star Wars - The force unleashed",
    duration : 185,
    stars : ["Darth Vader", "Anakin Skywalker", "Qui Gon Jin", "Darth sidious"],
}

function printMovieInfo(theMovie)
{
    console.log(theMovie.title, "lasts for", theMovie.duration, "minutes. Stars:");
    theMovie.stars.forEach(function(element) {
        console.log(element);
    }, this);
}

printMovieInfo(myFavoriteMovie);
