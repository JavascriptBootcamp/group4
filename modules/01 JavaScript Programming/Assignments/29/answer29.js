

function Video (title,uploader,seconds) {

    this.title =title;
    this.uploader =uploader;
    this.seconds =seconds;

    this.watch = function(sec){
        this.seconds=sec;
        console.log("You watched all "+this.seconds+ " seconds of "+this.title+"!");
    }

}

var videos =[];

for (var i=0;i<5; i++)
{   
    videos[i] = new Video ("Shrek"+i, "nisim mushun", 120);    
    
    try {
        videos[i].watch(10*i);
      }
      catch(excetion) {
        console.error("Oops... An error occured");
        
      }
}



