
var globalnum=0;

function addVideo(poster,title, link){

    var divVideo = document.createElement("div");
    divVideo.className = "div-video";

    var linkVideo = document.createElement("a");
    linkVideo.innerText="Link To Imdb"
    linkVideo.href = "http://www.imdb.com/title/"+link;

    var VideoPoster = document.createElement("img");
    VideoPoster.className = "img-video";
    VideoPoster.setAttribute('onclick',`showInfo("${link}")`)
    VideoPoster.src = poster;

    var titleVideo = document.createElement("h1")
    titleVideo.className = "title-video";
    titleVideo.innerText=title

    var divInfo = document.createElement("div");
    fetch(`http://www.omdbapi.com/?apikey=74fed2a7&i=${link}`)
    .then(response => response.json())
    .then(data => {divInfo.innerText=JSON.stringify(data);
                    divInfo.id=link;
                    divInfo.style.display = "none"
    })


    divVideo.appendChild(titleVideo)
    divVideo.appendChild(VideoPoster);
    divVideo.appendChild(divInfo)
    divVideo.appendChild(linkVideo);
    

    document.getElementById("wrapper").appendChild(divVideo);
}

function onSubmit(event){
    event.preventDefault()
    document.getElementById("message").innerText=""
    document.getElementById("wrapper").innerHTML=""
    globalnum=1;
    srtingToSearch=document.getElementById("search-input").value;
    if(srtingToSearch.length<3){
        return document.getElementById("message").innerText="insert min 3 char name of movie"
    }
    fetchMovie(srtingToSearch)
}

function fetchMovie(searchterm){
    document.getElementById("message").innerText=""
    document.getElementById("loadmore").disabled = false;
    globalnum=1;
    fetch(`http://www.omdbapi.com/?apikey=74fed2a7&s=${searchterm}&type=movie&page=${globalnum}`)
        .then(response => response.json())
        .then(data => {
            if(!data.Error){
            data.Search.forEach(function(movie){
                console.log(movie)
                addVideo(movie.Poster,movie.Title,movie.imdbID) 
            })
            }else{
                document.getElementById("message").innerText="wrong movie name try another movie name";
            }
    });

}

function showInfo(id) {
    var x = document.getElementById(`${id}`);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


function loadMore(){
    if(!document.getElementById("search-input").value){
        return document.getElementById("message").innerText="insert movie to search"
    }
    document.getElementById("message").innerText=""
    globalnum++
    fetch(`http://www.omdbapi.com/?apikey=74fed2a7&s=${document.getElementById("search-input").value}&type=movie&page=${globalnum}`)
    .then(response => response.json())
    .then(data => {
        if(data.Error){
            document.getElementById("loadmore").disabled = true;
            return document.getElementById("message").innerText="there are no more movies to display"
        }else{
        data.Search.forEach(function(movie){
            addVideo(movie.Poster,movie.Title,movie.imdbID);
        })}
            });


}
