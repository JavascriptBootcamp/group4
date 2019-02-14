
function Video(title, uploader, second){
    this.title = title;
    this.uploader = uploader;
    this.second = second;
    

    this.watch = function() {
        console.log(`You watched all ${this.second} seconds of ${this.title}!`);
    }
} 

try {
var video1 = new Video("Titanic", "Aviyot" ,120);
var video2 = new Video("Roki", "getahun" ,90);
video.watch();
video2.watch();
}

catch(er){

    console.log("Oops... An error occured");
}

finally {
    
    console.log("you finsh");
}


