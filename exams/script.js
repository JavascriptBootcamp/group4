let apiSearchTerm = null;
let apiPageNum;
let imdbLink = "https://www.imdb.com/title/";

let load = () => {
    apiPageNum = 0
    document.querySelector("#movies-list").innerHTML = "";
    if(document.querySelector("#load-more"))  document.querySelector("#load-more").remove();
    apiSearchTerm = document.querySelector("#search-field").value;
    if (apiSearchTerm.length < 3) return;
    loadMore();
    let loadMoreBtn =  document.createElement("button");
    loadMoreBtn.innerHTML = "Load More";
    loadMoreBtn.onclick = loadMore;
    loadMoreBtn.id = "load-more";
    document.querySelector("#main-container").appendChild(loadMoreBtn)
}

let loadMore = () => {
    apiPageNum++;
    fetch(`http://www.omdbapi.com/?apikey=d777cf78&s=${apiSearchTerm}&type=movie&page=${apiPageNum}`)
        .then((stream) => {
            stream.json()
                .then((json) => {
                    for (movie of json.Search) {
                        displayMovie(movie);
                    }
                })
                .catch((err) => {
                    console.log(err)
                    document.querySelector("#load-more").disabled = true;
                })
        })
}


let displayMovie = (movie) => {
    let movieDetails = document.createElement("li");
    let hidden = document.createElement("div");
    hidden.className = "hidden";


    //Poster
    let poster = document.createElement("img");
    poster.width = "300";
    poster.height = "300";
    poster.src = movie.Poster;
    poster.onclick = (event) => { showDetails(event) };
    movieDetails.appendChild(poster);

    //Title
    let title = document.createElement("span");
    title.innerHTML = "<br> Title: " + movie.Title + "<br>";
    hidden.appendChild(title)
    movieDetails.appendChild(hidden);

    //Type
    let type = document.createElement("span");
    type.innerHTML = "Type: " + movie.Type + "<br>";
    hidden.appendChild(type)
    movieDetails.appendChild(hidden);

    //Year
    let year = document.createElement("span");
    year.innerHTML = "Year of release:" + movie.Year + "<br>";
    hidden.appendChild(year)
    movieDetails.appendChild(hidden);

    //IMDB
    let imdb = document.createElement("a");
    imdb.href = imdbLink + movie.imdbID;
    imdb.innerHTML = "Link to IMDB <br><br>";
    hidden.appendChild(imdb)
    movieDetails.appendChild(hidden);


    document.querySelector("#movies-list").appendChild(movieDetails);

}

showDetails = (e) =>{
    e.srcElement.nextElementSibling.className = "";
}
