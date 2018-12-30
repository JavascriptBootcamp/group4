// Create an object to store the following information about your favorite movie: title 
//(a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts
// for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


var favMovie =
 {
     title: "Mission Imposible",
     duration: 96,
     stars: ["Tom Cruise","Ving Rhames","Simon Pegg","Michelle Monaghan"]
 };

 var f = function(objMovie)
        {  
            var info = objMovie.title + " lasts for " + objMovie.duration + ' minutes. ';
            info += "stars: ";
            objMovie["stars"].forEach(function(element) {
                info += element + ", ";
            }, this);
            info = info.slice(0,info.length-2);
            return info;
        }
console.log(f(favMovie));