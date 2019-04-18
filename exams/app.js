const apiKeys = ["74fed2a7", "d777cf78"];
let pageNumber = 1;
function getMovieUrl(movieName, pageNumber = 1, apiKey = apiKeys[1]) {

    return "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + movieName + "&type=movie&page=" + pageNumber;
}

function gethMovieInfo(movieId, apiKey = apiKeys[1]) {

    return "http://www.omdbapi.com/?apikey=" + apiKey + "&i=" + movieId;
}

function gethMovieImdbSource(movieId) {
    return "https://www.imdb.com/title/" + movieId;
}

function Movie(title, id, imgSrc, imdbLink) {
    this.title = title;
    this.id = id;
    this.imgSrc = imgSrc;
    this.imdbLink = imdbLink;
}

setVisibilityLoadMore('hidden');

function searchMovie() {

    setDisabledLoadMore(false);
    let movieName = document.getElementById("wrapper-search-input-movie").value;
    let movieUrl = getMovieUrl(movieName,pageNumber);
    // console.log(movieUrl);
    fetch(movieUrl).then(
        stream => {
            stream.json().then(
                data => {
                    // console.log(data);
                    if(data.Response === 'True'){
                        setVisibilityLoadMore('visible');
                        let currentMovies = data.Search;
                        for(let i =0; i < currentMovies.length; i++){
                            let movie = getMovieObject(currentMovies[i]);
                            addMovie(movie);
                        }
                        pageNumber++;
                        if(currentMovies.length < 10){
                            setDisabledLoadMore(true);
                        }
                    }
                    else{
                        if(pageNumber > 1){
                            setDisabledLoadMore(true);
                        }
                    }
                    // console.log(data,pageNumber);
                })
        })
        .catch(error => {
            console.log('error:', error);
        })
}

function getMovieObject(jsonMovie){
    let title = jsonMovie.Title;
    let id = jsonMovie.imdbID;
    let imgSrc = jsonMovie.Poster;
    let imdbLink = gethMovieImdbSource(id);
    return new Movie(title, id, imgSrc, imdbLink)
}

function addMovie(movie){
    let resultsDivContainer = document.getElementById("wrapper-results");
    let resultDivContainer = document.createElement("div");
    let resultDivBasic = document.createElement("div");
    let imgSrc = document.createElement("img");
    let wrrapImgSrc = document.createElement("div");
    let aImdbLink = document.createElement("a");
    let wrrapImdbLink = document.createElement("div");
    let resultDivMoreInfo = document.createElement("div");

    resultDivContainer.className = "wrapper-result-movie";
    resultDivBasic.className = "wrapper-result-movie-basic";
    resultDivMoreInfo.id = "info-" + movie.id;
    resultDivMoreInfo.className = "wrapper-result-movie-info"

    imgSrc.src = movie.imgSrc !== "N/A" ? movie.imgSrc : "";
    imgSrc.onclick = showMoreInfo.bind(null,movie.id);
    aImdbLink.text = movie.title;
    aImdbLink.href = movie.imdbLink;
    aImdbLink.target = '_blank';

    wrrapImdbLink.appendChild(aImdbLink);
    resultDivBasic.appendChild(wrrapImdbLink);
    wrrapImgSrc.appendChild(imgSrc);
    resultDivBasic.appendChild(wrrapImgSrc);
    resultDivContainer.appendChild(resultDivBasic);
    resultDivContainer.appendChild(resultDivMoreInfo);
    resultsDivContainer.appendChild(resultDivContainer);
}

function showMoreInfo(movieId){
    let moreInfoUrl = gethMovieInfo(movieId);
    fetch(moreInfoUrl).then(
        stream =>{
            stream.json().then(
                data => {
                    document.getElementById("info-" + movieId).textContent = '';
                    for(var k in data){
                        // console.log(k + ':',data[k]);
                        let detailDiv = document.createElement("div");
                        if(k !== 'Response'){
                            detailDiv.textContent = k + ':' + data[k];
                            document.getElementById("info-" + movieId).appendChild(detailDiv);
                        }
                    }
                    // console.log(data);
                }
            )
        }
    )
    .catch( error => {
        console.log('error:',error);
    })
}

function loadMore() {
    searchMovie();
}

function setDisabledLoadMore(disabled){
    document.getElementById("wrapper-load-more-btn").disabled = disabled;
}

function setVisibilityLoadMore(visibility){
    document.getElementById("wrapper-load-more-btn").style.visibility = visibility;

}