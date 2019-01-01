var favMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

function printMovieInfo(movie) {
    return (movie["title"] + " last for " + movie["duration"] + " minutes stars: " + movie["stars"]);
}

console.log(printMovieInfo(favMovie));
