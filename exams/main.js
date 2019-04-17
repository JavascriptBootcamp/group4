var rootUrl = "http://www.omdbapi.com/?apikey=74fed2a7&";
var page;
var input = "";
var movies = [];

var listMovies = document.getElementById("list-movies");
var loadMoreBtn = document.getElementById("load-more-btn");
var errorInput = document.getElementById("error-input");
var movieDetails = document.getElementById("movie-details");
var bgBlur = document.querySelector(".bg-blur");

function searchMovie(event) {
    event.preventDefault();
    initValues();
    input = document.getElementById("search").value;
    loadMovies();
}

function initValues() {
    page = 1;
    listMovies.innerText = "";
    errorInput.style.display = "none";
}

function loadMovies() {
    fetch(rootUrl + "s=" + input + "&type=movie&page=" + page).then(response => response.json()).then(data => {
        if (data.Search) {
            for (var i = 0; i < data.Search.length; i++) {
                var movieObj = data.Search[i];
                movies.push(new Movie(movieObj.Title, movieObj.imdbID, movieObj.Poster));
            }
            displayMovies(movies);
            movies = [];
        } else {
            if (page === 1) {
                errorInput.style.display = "block";
                loadMoreBtn.style.display = "none";
            } else {
                disableLoad();
            }
        }
    })
}

function displayMovies(moviesArray) {
    loadMoreBtn.style.display = "block";
    loadMoreBtn.disabled = false;
    for (var i = 0; i < moviesArray.length; i++) {
        var movieWrapper = document.createElement("div");
        movieWrapper.setAttribute("class", "movie-wrapper");
        var ul = document.createElement("ul");
        var liTitle = document.createElement("li");
        var movieTitle = document.createElement("h2");
        movieTitle.innerText = moviesArray[i].title;
        movieTitle.setAttribute("class", "movie-title");
        var movieImdb = document.createElement("a");
        movieImdb.target = "blank";
        movieImdb.href = "https://www.imdb.com/title/" + moviesArray[i].imdbID;
        var liImage = document.createElement("li");
        var moviePoster = document.createElement("img");
        moviePoster.setAttribute("imdb", moviesArray[i].imdbID);
        moviePoster.src = moviesArray[i].poster;
        moviePoster.setAttribute("class", "movie-image");
        moviePoster.onclick = showMovieDetails;
        liImage.appendChild(moviePoster);
        ul.appendChild(liImage);
        movieImdb.appendChild(movieTitle);
        liTitle.appendChild(movieImdb);
        ul.appendChild(liTitle);
        movieWrapper.appendChild(ul);
        listMovies.appendChild(movieWrapper);
    }
    page++;
}

function disableLoad() {
    loadMoreBtn.disabled = true;
}

function showMovieDetails() {
    var imdbMovie = this.getAttribute("imdb");
    fetch(rootUrl + "i=" + imdbMovie).then(response => response.json()).then(data => {
        setMovieDetail(data);
    })
}

function setMovieDetail(data) {
    movieDetails.innerHTML = "";
    bgBlur.style.visibility = "visible";
    var ul = document.createElement("ul");
    var title = document.createElement("h3");
    title.innerText = "Movie Details";
    ul.appendChild(title);
    for (let key in data) {
        if (key === "Ratings") {
            var ratingsUl = document.createElement("ul");
            ratingsUl.innerHTML = "Ratings: <br>";
            for (var i = 0; i < data[key].length; i++) {
                var sourceIl = document.createElement("il");
                var valueIl = document.createElement("il");
                sourceIl.innerHTML = "Source: " + data[key][i].Source + "<br>";
                valueIl.innerHTML = "Value: " + data[key][i].Value + "<br>";
                ratingsUl.appendChild(sourceIl);
                ratingsUl.appendChild(valueIl);
                ul.appendChild(ratingsUl);
            }
        } else {
            var il = document.createElement("il");
            il.innerHTML = key + ":" + data[key] + "<br>";
            ul.appendChild(il);
        }
    }
    movieDetails.appendChild(ul);
    movieDetails.style.visibility = "visible";
}

function closeMovieDetails(detail) {
    detail.style.visibility = "hidden";
    bgBlur.style.visibility = "hidden";
}
