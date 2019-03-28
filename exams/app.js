function MovieDetais(_title,_year,_type,_imdbID){
    this.title = _title;
    this.year = _year;
    this.type = _type;
    this.imdbID = _imdbID;
}

function Movie(_movieName, _poster, _link, _movieDetais) {
    this.movieName = _movieName;
    this.poster = _poster,
    this.link = _link;
    this.movieDetais = _movieDetais;
}

var nextPage = (function () { // IIFE
    var counter = 15;
    function newAdd() {
        counter += 1;
        return counter;
    }
    return newAdd;
})();

function searchMovie() {
    event.preventDefault();
    //var movieName = 'titanic';//document.getElementById("movie-name-input").innerText;
    var movieName = document.getElementById("movie-name-input").value;  
    if (movieName.length < 4) {
        console.log("err");
        document.getElementById("error").style.visibility = "visible";
        return;
    }
    document.getElementById("error").style.visibility = "hidden";    
    var loadMoreButton = document.getElementById('load-more-button');

    //var url = "http://www.omdbapi.com/?apikey=d777cf78&s=" + movieName + "&type=movie&page=" + nextPage();
    var url = "http://www.omdbapi.com/?apikey=74fed2a7&s=" + movieName + "&type=movie&page=" + nextPage();
    
    //var urlLink = "http://www.omdbapi.com/?apikey=d777cf78&s="
    var urlLink = "http://www.omdbapi.com/?apikey=74fed2a7&s="
    
    fetch(url).then(
        function (stream) {
            stream.json().then(
                function (json) {
                    if(json)
                        loadMoreButton.style.visibility = "visible";
                    else
                        loadMoreButton.style.visibility = "hidden";
                    for (var i in json.Search) {
                        if (json.Search.hasOwnProperty(i)) {
                            var poster = json.Search[i]['Poster'];
                            var link = urlLink + json.Search[i]['imdbID'];

                            var title = json.Search[i]['Title'];
                            var year = json.Search[i]['Year'];
                            var type = json.Search[i]['Type'];
                            var imdbID = json.Search[i]['imdbID'];

                            var movieDetais = new MovieDetais(title, year, type, imdbID);                            
                            var movie = new Movie(movieName, poster, link,movieDetais);
                            console.log(json.Search[i]);
                            addMovieOnPage(movie);
                            loadMoreButton.style.visibility='visible';
                        }
                    }
                }
            )
        }
    ).catch(function (error) {    
        var loadMoreButton = document.getElementById("load-more-button");
        loadMoreButton.style.visibility = "hidden";
        console.log('da',loadMoreButton);
    })
    window.scrollTo(0,0);
}

function addMovieOnPage(movie) {
    var divMovies = document.getElementById('movies');
    var divMovie = document.createElement('div');
    var movieImg = document.createElement('img');
    movieImg.src = movie.poster;
    movieImg.onclick = showDetails.bind(null,divMovie,movie.movieDetais);

    movieLink = document.createElement('a');
    movieLink.href = movie.link;
    movieLink.text = "Link on IMDB page";

    divMovie.appendChild(movieLink);
    divMovie.appendChild(movieImg);

    divMovies.appendChild(divMovie);
}

function showDetails(divMovie,movieDetais){
    divMovieDetails = document.createElement("div");
    divMovieDetails.innerText = "Tilte: " + movieDetais.title;
    divMovieDetails.innerText += ", Year: " + movieDetais.year;
    divMovieDetails.innerText += ", type: " + movieDetais.type;
    divMovieDetails.innerText += ", imdbID: " + movieDetais.imdbID; 
    divMovie.appendChild(document.createElement("br"));
    divMovie.appendChild(divMovieDetails);
    divMovie.appendChild(document.createElement("br"));
    
}

