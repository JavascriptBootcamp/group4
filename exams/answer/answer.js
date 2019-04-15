
var movieList = document.querySelector(".movieList");
var pageNumber = 1;
var movieList = document.querySelector(".movieList");
var result;



var makeAjaxCall = function () {

  var serchTerm = document.getElementById('movie-title').value;
  if (serchTerm.length > 2) {

    var myFetch = fetch(`http://www.omdbapi.com/?apikey=74fed2a7&s=${serchTerm}&type=movie&page=${pageNumber}`);

    myFetch.then(
      function (stream) {
        stream.json().then(function (json) {

     
          try {
            json.Search.length;
          }
          catch(err) {
            document.querySelector("#loadMore").disabled = true;
          }

         
             
          
          for (let item of json.Search) {
            //if(!(item.Poster ==="N/A"))
              movieList.innerHTML += `
              <div class="result-item">
              <h3 onclick = "showDetails('${item.imdbID}')"> ${item.Title}</h3>
              <ul id="detail${item.imdbID}"></ul>
              <a href="http://www.imdb.com/title/${item.imdbID}"> 
              <img src= ${item.Poster}></img> </a>
              <div>
              `;
            //console.log(item);
          }


        });
      }

    );
  }

}

function showDetails(id){

    const  detailList = document.querySelector(`#detail${id}`);

    if(detailList.innerHTML === "" ) {

  const detailsFetch = fetch(`http://www.omdbapi.com/?apikey=d777cf78&i=${id}`);
  console.log(detailsFetch);
  detailsFetch.then(function(stream){
            stream.json().then(function(detailes){
    console.log(detailes);
    

    for(let detail in detailes){
      if(typeof detailes[detail]) {
      detailList.innerHTML += `
      <li>${detail} : ${detailes[detail]}</li>
      `
      }
    
    }
    })
  })

}
 else{
    detailList.innerHTML ="";
 }

}


function fristFetch(){
  movieList.innerHTML = "";
  pageNumber = 1;
  makeAjaxCall();
} 

function loadMoreRes() {
  pageNumber++;
  makeAjaxCall();
}g