var page = 1;
var web1 = "http://www.omdbapi.com/?apikey=74fed2a7&s=";
var web2 = "&type=movie&page=";
var searchValue;
var api;

function Mysubmit() {
    document.getElementById("results").innerHTML = "";
    searchValue = document.getElementById("searchValue").value;
    if (searchValue.length < 3) {
        document.getElementById("error").innerText = "please enter least 3 characters ";
    }
    else {
        document.getElementById("more").disabled = false;
        document.getElementById("error").innerText = "";
        page = 1;
        api = `${web1}${searchValue}${web2}${page}`;
        fetchFunc(api);
    }
    document.getElementById("searchValue").value = "";
}

function addResult(movie) {
    var result = document.getElementById("results");
    if (movie.Poster == "N/A")
        movie.Poster = "https://static.amazon.jobs/teams/53/thumbnails/IMDb_Jobs_Header_Mobile.jpg?1501027253";
    result.innerHTML += "<div id='movie'><br><img class='img' src=" + movie.Poster +
        "height='200px' width='200px' onclick='movieInfo(" + JSON.stringify(movie.imdbID) +
        ")'><br><a href='https://www.imdb.com/title/" + movie.imdbID +
        "' target='_blank'><b><span id='title'>" + movie.Title + "</span></b></a><div id=" +
        movie.imdbID + "></div></div>";
}

function LoadMore() {
    page++;
    api = `${web1}${searchValue}${web2}${page}`;
    fetchFunc(api);
}

function fetchFunc(api) {
    fetch(api).then(response => response.json()).then(data => {
        for (movie of data.Search)
            addResult(movie);
        document.getElementById("more").removeAttribute("hidden");
    })

    //test for disable button
    api = `${web1}${searchValue}${web2}${page+1}`;
    fetch(api).then(response => response.json()).then(data => {
        if (data.hasOwnProperty('Error'))
            document.getElementById("more").disabled = true;
    })
}

function movieInfo(movieID) {
    if (document.getElementById(movieID).innerHTML == "") {
        var api = "http://www.omdbapi.com/?apikey=74fed2a7&i=" + movieID;
        fetch(api).then(response => response.json())
            .then(data => {
                var ul = document.createElement("ul");
                for (var key in data) {
                    if ((data[key] != "N/A") && (key != "Poster")) {
                        if (typeof (data[key]) != "object") {
                            var li = document.createElement("li");
                            li.innerHTML = "<b>" + key + "</b>" + ": " + data[key];
                        }
                        else {
                            var li = document.createElement("li");
                            li.innerHTML = "<b>" + key + "</b>:";
                            var ul2 = document.createElement("ul");
                            for (var Raiting of data[key]) {
                                for (var itemRaiting in Raiting) {
                                    var li2 = document.createElement("li");
                                    li2.innerHTML = Raiting[itemRaiting];
                                    ul2.appendChild(li2);
                                }
                            }
                            li.appendChild(ul2);
                        }
                    }
                    ul.appendChild(li);
                }
                document.getElementById(movieID).appendChild(ul);
            })
    }
    else
        document.getElementById(movieID).innerHTML = "";


}