let apiSearchTerm = null;
let apiPageNum = 1;

let load = () => {
   apiSearchTerm = document.querySelector("#search-field").value;
   if(apiSearchTerm.length < 3) return;
   fetch(`http://www.omdbapi.com/?apikey=d777cf78&s=${apiSearchTerm}&type=movie&page=&{apiPageNum}`)
   .then( (stream) =>{
       stream.json()
       .then( (json) =>{
           console.log(json);
       } )
   } )
}