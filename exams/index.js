// vars for the html elements
const form = document.querySelector("#searchForm");
const searchInput = document.querySelector("#search");
const movieList = document.querySelector("#movieList");
const loadMoreBtn = document.querySelector("#loadMore");

//vars used for the api
const apiKey = "74fed2a7";
let searchPage = 1;
let movies = [];

//check if searchVal not empty and have at least 3 chars - return true/false and set msg for the user if false
function cheackVal(searchVal) {
    let msg = document.querySelector("#searchForm>span.msg");

    if (searchVal.length >= 3) {
        msg.classList.add("hide");
        return true;
    }

    msg.classList.remove("hide");
    (searchVal.length === 0) ? msg.innerHTML = "Movie name is required" : msg.innerHTML = "Movie name need to be at least 3 chars"

    return false;
}

//show the details on the html page 
function showMovieDetails(details, movieId) {
    let detailsContainer = document.querySelector(`#${movieId}`);
    let ul = document.createElement("ul");

    for (const key of Object.keys(details)) {

            let h3 = document.createElement("h3");
            h3.innerText = `${key} :`;

            let li = document.createElement("li");
            li.appendChild(h3);

            if (key === "Ratings") {
                let newUl = document.createElement("ul");
                let ratings = details[key];

                for (const ratkey of Object.keys(ratings)) {
                    
                    let h4 = document.createElement("h4");
                    h4.innerText = `${ratings[ratkey].Source} - ${ratings[ratkey].Value}`; //${rat.Source} - ${rat.Value}

                    let newli = document.createElement("li");
                    newli.appendChild(h4);

                    newUl.appendChild(newli);
                }

                li.appendChild(newUl);
            }
            else {
                let span = document.createElement("span");
                span.innerText = details[key];
                li.appendChild(span);
            }

            ul.appendChild(li)
    }

    detailsContainer.appendChild(ul);
}

//fetch the details from the server and show the details on the html page if nedded
function toggleDetails(movieId, btnInnerText) {
    let detailsContainer = document.querySelector(`#${movieId}`);
    //toggle hide class from the detaile div
    btnInnerText === "Show Movie Details" ? detailsContainer.classList.remove("hide") : detailsContainer.classList.add("hide");
    //if the details div is empty fetch the details from the server and fill the div with them
    if (!detailsContainer.innerHTML) {

        fetch(`http://www.omdbapi.com/?apikey=d777cf78&i=${movieId}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                //fill the div with the movie details
                showMovieDetails(json, movieId);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

function show(moviesArr) {
    if (moviesArr) {
        for (const movie of moviesArr) {
            //update movies
            movies.push(movie);

            //show the movie in the html page
            let title = document.createElement("h1");
            title.innerText = movie.Title;

            let img = document.createElement("img");
            img.src = movie.Poster !== "N/A" ? movie.Poster : "https://www.purdys.com/c.4664544/Live/img/no_image_available.jpeg";

            let link = document.createElement("a");
            link.href = `https://www.imdb.com/title/${movie.imdbID}`;
            link.target = "_blank"
            link.appendChild(img);

            let detailsBtn = document.createElement("button");
            detailsBtn.innerText = "Show Movie Details";
            detailsBtn.onclick = function () {
                toggleDetails(movie.imdbID, detailsBtn.innerText);
                //toggle the btn text
                detailsBtn.innerText = detailsBtn.innerText !== "Show Movie Details" ? "Show Movie Details" : "Hide Movie Details";
            }

            let imgContainer = document.createElement("div");
            imgContainer.classList.add("imgContainer");
            imgContainer.appendChild(title);
            imgContainer.appendChild(link);
            imgContainer.appendChild(detailsBtn);

            let movieDetails = document.createElement("div");
            movieDetails.classList.add("movieDetails");
            movieDetails.classList.add("hide");
            movieDetails.id = movie.imdbID;

            let movieContainer = document.createElement("div");
            movieContainer.classList.add("movieContainer");
            movieContainer.appendChild(imgContainer);
            movieContainer.appendChild(movieDetails)

            movieList.appendChild(movieContainer);
        }

        loadMoreBtn.classList.remove("hide");
    }
    else {
        console.log("no movies left");
        loadMoreBtn.classList.add("hide");
    }

}

//fatch from api the search term
function search(searchVal) {
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchVal}&type=movie&page=${searchPage}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            let moviesArr = json.Search
            show(moviesArr);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function setEventsListeners() {

    form.onsubmit = function () {
        searchVal = searchInput.value;
        //check if searchVal not empty and have at least 3 chars
        if (cheackVal(searchVal)) {
            //clean the previos search
            searchPage = 1;
            movieList.innerHTML = "";
            //fatch from api the search term
            search(searchVal);
        }

        //equal to event.preventDefault() for stoping the form refreshing the page
        return false;
    }

    loadMoreBtn.onclick = function () {
        searchPage++;
        console.log(searchPage);
        searchVal = searchInput.value;
        search(searchVal);
    }
}

setEventsListeners();