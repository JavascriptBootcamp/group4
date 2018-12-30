var movie= {
    title :"Puff the Magic Dragon",
    duration  : 30, 
    stars : ["Puff", "Jackie", "Living Sneezes"]


}
console.log(movie.title);
console.log("lasts for "+ movie.duration +" minutes");

console.log("Stars:");
movie.stars.forEach(function(item)
{
   console.log(item);
   
});
