//Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
//Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
var favoriteMovie ={
    title:"harrypotter",
    duration:180,
    stars:["harry","hermaioni","ron"]
    };
function func(favoriteMovie){
    console.log(favoriteMovie.title+" lasts for "+favoriteMovie.duration+" stars:"+favoriteMovie.stars)
};
func(favoriteMovie);