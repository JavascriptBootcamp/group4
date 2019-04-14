var page;
var searchInput;

function validateInput() {
    var loadMore = document.getElementById("loadMore");
    var movies = document.getElementById("movies");
    initPage();
    searchInput = document.getElementById("search-input").value
    movies.innerHTML = "";
    if (searchInput.value !== "" && searchInput.length >= 3) {
        loadMovies();
    }
    else {
        loadMore.setAttribute("hidden", "hidden");
    }
}
function initPage() {
    page = 1;
}
function loadMovies() {
    fetch("http://www.omdbapi.com/?apikey=d777cf78&s=" + searchInput + "&type=movie&page=" + page)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var loadMore = document.getElementById("loadMore");
            if (data.Response === "True") {
                loadMore.disabled = false;
                displayMovies(data.Search);
            }
            else if (page !== 1 && data.Response === "False" && data.Error !== "") {
                loadMore.disabled = true;
            }
            else if (page === 1 && data.Response === "False" && data.Error !== ""){
                loadMore.setAttribute("hidden", "hidden");
            }
        });
}

function displayMovies(data) {
    var loadMore = document.getElementById("loadMore");
    var movies = document.getElementById("movies");
    loadMore.removeAttribute("hidden");
    for (var i = 0; i < data.length; i++) {
        var movieWrapper = document.createElement("li");
        var info = document.createElement("div");
        var moviePoster = document.createElement("img");
        var movieLink = document.createElement("a");
        info.id = data[i].imdbID;
        info.className = "info";
        movieWrapper.className = "movie";
        moviePoster.src = data[i].Poster;
        moviePoster.width = "100";
        moviePoster.height = "100";
        moviePoster.setAttribute("imdb", data[i].imdbID);
        moviePoster.onclick = getInfoAll;
        movieLink.innerText = data[i].Title;
        movieLink.href = "https://www.imdb.com/title/" + data[i].imdbID;
        movieLink.target = "_blank";
        movieWrapper.appendChild(moviePoster);
        movieWrapper.appendChild(movieLink);
        movieWrapper.appendChild(info);
        movies.appendChild(movieWrapper);
    }
    incrementPage();
    loadMore.onclick = loadMovies;
}
function incrementPage() {
    page++;
}


function getInfoAll() {
    var imdb = this.getAttribute("imdb");
    fetch("http://omdbapi.com/?apikey=74fed2a7&i=" + imdb)
        .then((response) => response.json())
        .then((data) => {
            createInfo(data, imdb);
        })
}
function createInfo(data, imdb) {
    var info = document.getElementById(imdb);
    var content = "";
    for (let key in data) {
        if (key === "Ratings") {
            for (var i = 0; i < data[key].length; i++) {      
                content += "<div> Source "+i+": " + data[key][i].Source + "</div>";
                content += "<div> Value "+i+": " + data[key][i].Value + "</div>";
            }
        }
        else{
            content += "<div>" + key + ": " + data[key] + "</div>";
        }
    }
    info.innerHTML = content;
}