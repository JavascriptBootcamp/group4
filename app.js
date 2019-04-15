const MOVIES_NUM_ON_ONE_PAGE = 10;
let poster, imdbID, title = "";
let Movie = {poster, imdbID, title};
let movies = []; // To contain objecs of Movie type
let search = "";
let hasMore = false;
let pageNum;
let presentedMoviesNum = 0;
let totalMoviesNum;


let bodyElem = document.getElementById("body-elem");

let inputSearchElem = document.getElementById("search-input");

let searchButtonElem = document.getElementById("search-button");
searchButtonElem.addEventListener("click", validateSearchInput);

let errorDisplayElemContainer = document.getElementById("search-error-container");
let errorDisplayElem = document.getElementById("search-error");

// let searhFieldsForm = document.getElementById("search-fields");
// searhFieldsForm.addEventListener("submit", searchMovie($event, inputSearchElem));

let wrapperOfMoviesInfoElem = document.getElementById("wrapper-of-movies-info");

let loadMoreButtonElemContainer = document.getElementById("load-more-movies-button-container");
let loadMoreButtonElem = document.getElementById("load-more-movies-button");
loadMoreButtonElem.addEventListener("click", loadMoreMoviesInfo);


function initDefaultValues() {
    movies = [];
    pageNum = 1;
    hasMore = false;
    presentedMoviesNum = 0;
    totalMoviesNum = 0;
}


function validateSearchInput() {
    if(inputSearchElem.value.length === 0) displaySearcErrorMessage("Enter a movie name");
    else if(inputSearchElem.value.length < 3) {
        //errorDisplayElem.innerText = "Your search must contain at least 3 characters";
        displaySearcErrorMessage("Your search must contain at least 3 characters");
    } 
    else {
        //errorDisplayElem.innerText = "";  
        removeSearcErrorMessage();
        initDefaultValues();
        loadFirst10Movies();
    }
}


function loadFirst10Movies() {
    loadMoreButtonElem.innerText = "Load More";
    loadMoreButtonElem.style.width = "150px";
    loadMoreButtonElem.style.fontSize = "16px";
    loadMoreButtonElem.style.color = "#004d99";
    
    while(wrapperOfMoviesInfoElem.firstChild) {
        wrapperOfMoviesInfoElem.removeChild(wrapperOfMoviesInfoElem.firstChild);
    }
    loadMoreButtonElem.disabled = false;
    //console.log(pageNum);

    fetch("http://www.omdbapi.com/?apikey=74fed2a7&s=" + inputSearchElem.value + "&type=movie&page=" + pageNum)
    .then( data => { 
        //console.log(data);
        data.json()    
    .then( json => {
        //console.log(json);

        // If it's a wrong movie name
        if(json.Error){
            loadMoreButtonElem.disabled = true;
            let wrongMovieName = inputSearchElem.value;
            let wrongMovieMessage = `There is no information about movie
                                    which name is ${wrongMovieName}, <br>
                                    try another movie name `;
            return displaySearcErrorMessage(wrongMovieMessage);
        }

        presentedMoviesNum += MOVIES_NUM_ON_ONE_PAGE;  // = json.Search.length
        //console.log(presentedMoviesNum);
        totalMoviesNum = json.totalResults;
        //console.log(totalMoviesNum);
        
        for(let i = 0; i < json.Search.length; i++) {
            let movieContentElem = document.createElement("div");
            movieContentElem.className = "flex-item";

            let moviePoster = document.createElement("img");
            moviePoster.className = "image-in-movie-content";
            moviePoster.src = json.Search[i].Poster;
            moviePoster.id = json.Search[i].imdbID;
    
            let moviePosterContainer = document.createElement("button");
            moviePosterContainer.id = "moviePosterContainer" + (i+1);
            moviePosterContainer.style.backgroundColor = "#94D1FF";
            moviePosterContainer.onmouseover = function() {
                this.style.boxShadow = "5px 5px 20px 20px #b2b2db";
            }
            moviePosterContainer.onmouseout = function() {
                this.style.boxShadow = "1px 1px 1px 1px #749CE8";
            }
            moviePosterContainer.addEventListener("click", displayFullMovieDetails);

            let movieLinkContainer = document.createElement("div");
            let movieLink = document.createElement("a");
            movieLink.innerText = `Click to IMDB page of ${json.Search[i].Title}`;
            movieLink.className = "link-to-imdbID";
            movieLink.addEventListener("click", function() {
                console.log(`iteration ${i}`);
                this.target="_blank";
                this.href = "https://www.imdb.com/title/" + json.Search[i].imdbID;
            }); 

            movieContentElem.appendChild(moviePosterContainer);
            moviePosterContainer.appendChild(moviePoster);
            movieContentElem.appendChild(movieLinkContainer);
            movieLinkContainer.appendChild(movieLink);
            wrapperOfMoviesInfoElem.appendChild(movieContentElem);
        }
    })
    
    })
    .catch( error => {
        console.log(error);
    })
   
}


function displayFullMovieDetails() {

    fetch("http://www.omdbapi.com/?apikey=d777cf78&i=" + this.firstChild.id)
    .then( data => { 
        //console.log(data);
        data.json()    
    .then( json => {
        //console.log(json);

        let container = this.parentElement;
        let movieDetailsNum = 0;

        // Unshow the full details of the movie if they showen
        if(this.name  > 0) {
            for(let i = 0; i < this.name; i++) { 
                container.removeChild(container.lastChild)
            }
            container.style.paddingTop = "164px";
            //container.style.paddingBottom = "200px";
            this.name = 0;
        }
        // Show the full details of the movie
        else {
            for(let field in json){
                //console.log(field + ': ' + json[field]);
                let movieDetailElem = document.createElement("div");
                movieDetailElem.innerText = field + ': ' + json[field];
                container.appendChild(movieDetailElem);
                movieDetailsNum++;
            }
            container.style.paddingTop = "400px";
            this.name = movieDetailsNum;   
        }
    })
    
    })
    .catch( error => {
        console.log(error);
    })
}


function loadMoreMoviesInfo() {
    if(presentedMoviesNum > 0) {
        console.log(`${presentedMoviesNum} movies presented`);
        pageNum++;
        //errorDisplayElem.innerText = `page number ${pageNum}`;
       
        fetch("http://www.omdbapi.com/?apikey=74fed2a7&s=" + inputSearchElem.value + "&type=movie&page=" + pageNum)
        .then( data => { 
            //console.log(data);
            data.json()    
        .then( json => {
            //console.log(json);
            
            var iterationNum = 0;
            for(let i = presentedMoviesNum; i < json.Search.length+presentedMoviesNum; i++) {
                // console.log(i);
                // console.log(json.Search[iterationNum]);
                let movieContentElem = document.createElement("div");
                movieContentElem.className = "flex-item";

                let moviePoster = document.createElement("img");
                moviePoster.className = "image-in-movie-content";
                moviePoster.src = json.Search[i-presentedMoviesNum].Poster;
                moviePoster.id = json.Search[i-presentedMoviesNum].imdbID;
        
                let moviePosterContainer = document.createElement("button");
                moviePosterContainer.id = "moviePosterContainer" + (i+1);
                moviePosterContainer.style.backgroundColor = "#87AFFF";
                moviePosterContainer.onmouseover = function() {
                    this.style.boxShadow = "5px 5px 20px 20px #8585eb";
                }
                moviePosterContainer.onmouseout = function() {
                    this.style.boxShadow = "1px 1px 1px 1px #749CE8";
                }
                moviePosterContainer.addEventListener("click", displayFullMovieDetails);

                let movieLinkcontainer = document.createElement("div");
                let movieLink = document.createElement("a");
                movieLink.innerText = `Click to IMDB page of ${json.Search[i-presentedMoviesNum].Title}`;
                movieLink.className = "link-to-imdbID";

                
                movieLink.addEventListener("click", function() {
                    console.log(`iteration ${i-presentedMoviesNum+MOVIES_NUM_ON_ONE_PAGE}`);
                    this.target="_blank";
                    console.log(json.Search);
                    this.href = "https://www.imdb.com/title/" + json.Search[i-presentedMoviesNum+ MOVIES_NUM_ON_ONE_PAGE].imdbID;
                }); 

                movieContentElem.appendChild(moviePosterContainer);
                moviePosterContainer.appendChild(moviePoster);
                movieContentElem.appendChild(movieLinkcontainer);
                movieLinkcontainer.appendChild(movieLink);
                wrapperOfMoviesInfoElem.appendChild(movieContentElem);

                iterationNum++;
            }
            presentedMoviesNum += MOVIES_NUM_ON_ONE_PAGE;  // += json.Search.length
            errorDisplayElem.innerText = `${presentedMoviesNum} movies already displayed`;

            if(presentedMoviesNum >= totalMoviesNum) {
                loadMoreButtonElem.disabled = true;
                loadMoreButtonElem.innerText = `No more ${inputSearchElem.value} movies to display`;
                loadMoreButtonElem.style.width = "500px";
                loadMoreButtonElem.style.fontSize = "50px";
                loadMoreButtonElem.style.color = "red";
            }      
        })
        })
        .catch( error => {
            console.log(error);
        })
    }
}



// Utils
function displaySearcErrorMessage(message) {
    displayTextMessage(errorDisplayElemContainer, errorDisplayElem, message);
}

function removeSearcErrorMessage() {
    removeTextMessage(errorDisplayElem);
}

function displayTextMessage(container, textField, message) {
    container.appendChild(textField);
    textField.innerHTML = message;
}

function removeTextMessage(textField) {
    textField.remove();
}
