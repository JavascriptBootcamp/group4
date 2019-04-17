
function submitMovie(event) {
    event.preventDefault();
    document.getElementById("wrapper").style.display="inline";
       document.getElementById("article").innerHTML="";
       document.getElementById("movieDetails").innerHTML="";
       document.getElementById("movieDetails").style.display="none";

    var movieTitle = document.getElementById("search").value;
    page=1 ;

    fetchRequest(movieTitle, page);
    
}

function fetchRequest(movieTitle, page) {
    var movies = [];
    fetch("http://www.omdbapi.com/?apikey=74fed2a7&s=" + movieTitle + "&type=movie&page=" + page).then(data => data.json()).then(response => {
        arrayRespo = response.Search;
        for (var i = 0; i < arrayRespo.length; i++) {
           var makeMovieInst = new Movie(arrayRespo[i].Title, arrayRespo[i].Year, arrayRespo[i].imdbID, arrayRespo[i].Type, arrayRespo[i].Poster);
            movies.push(makeMovieInst);
        }
        for (var i = 0; i < movies.length; i++) {
            showMovie(movies[i]);
            if(i===movies.length-1){
                addLoadMore();
            }
        }            
        function addLoadMore(){  
     document.getElementById("article").innerHTML+="<br><button  id='loadBtn' onClick='load()'; type='button'>Load More</button>";
     document.getElementById("loadBtn").disabled=false;

    }      
        var index=page+1;
        fetch("http://www.omdbapi.com/?apikey=74fed2a7&s=" + movieTitle + "&type=movie&page=" + index).then(data => data.json()).then(response => {
            if (!response.Search) {
               document.getElementById("loadBtn").disabled=true;
            }  
        });
    });
    }
    
    function load(){
       
        var select = document.getElementById('article');
       select.removeChild(select.lastChild);
        var movieTitle = document.getElementById("search").value;
        page++;
        fetchRequest(movieTitle,page);
    }

 function Movie(title, year, imdbID, type, poster) {
    this.title = title;
    this.year = year;
    this.imdbID = imdbID;
    this.type = type;
    this.poster = poster;
}

function showMovie(movieObj){
    var article = document.getElementById("article");
    var img = document.createElement("img");
    img.src = movieObj.poster;
   
    article.innerHTML += "<br># <b>" +"<a href='#' onclick="+"loadMovieDetails('"+movieObj.imdbID+"')>"+ movieObj.title + "</a></b>   " + "  " + "<a href=" + "https://www.imdb.com/title/" + movieObj.imdbID + " target = '_blank'>link to IMDB</a> <br> ";
    article.appendChild(img);
}

function loadMovieDetails(imdb){
          var movieDetails =  document.getElementById("movieDetails");
          document.getElementById("movieDetails").style.display="inline";

          fetch("http://www.omdbapi.com/?apikey=d777cf78&i="+ imdb).then(data => data.json()).then(response => {
            
          movieDetails.innerHTML="<b>Title :</b> "+ response.Title +" <br><b> Year :<b>" +response.Year +" <br><b> Rated :</b>"+ response.Rated+" <br><b> Released :</b>"+ response.Released +" <br><b> Runtime : </b>"+ response.Runtime + " <br><b> Genre : </b>"+response.Genre+  " <br> <b>Director : </b>"+response.Director+" <br> <b> Writer :</b>"+response.Writer +" <br><b> Actors :</b>"+response.Actors  +" <br><b> Language :</b>"+response.Language;
          for(var i=0;i<response.Ratings.length;i++){
            movieDetails.innerHTML+="<br> <b>Ratings source: </b>" +   response.Ratings[i].Source+ "    "+",Rating value : " + response.Ratings[i].Value;

          }
          movieDetails.innerHTML+="<br><b>Metascore : </b>" +   response.Metascore+ "<br><b>imdbRating : </b>" +   response.imdbRating+"<br><b>imdbVotes : </b>" +   response.imdbVotes+"<br> <b>imdbID:</b> " +  response.imdbID+
          "<br><b> Type : </b>" + response.Type + "<br> <b>DVD : </b>" + response.DVD+ "<br> <b>BoxOffice : </b>" + response.BoxOffice + "<br><b> Production : </b>" + response.Production  + "<br><b> Website :</b> " + response.Website   + "<br> <b>Response :</b> " + response.Response+"<br>" ;
          var img = document.createElement("img");
         img.src = response.Poster;
         movieDetails.appendChild(img);
        
        
          


        });     
        
}
