var favoriteMovie = {
    title: ' "IT" ',
    duration: 180,
    stars: ["Bill", "Sophia", "Chosen"]
}

function printMovieParams(movie) {
    console.log(movie.title, "lasts for", movie.duration, "minutes. Stars:", printStars(favoriteMovie.stars));
}

function printStars(arr) {
    var starsString = "";
    for (var i = 0; i < arr.length - 1; i++) {
        starsString += arr[i] + ", ";
    }
    starsString += arr[i];

    return starsString;
}

printMovieParams(favoriteMovie);