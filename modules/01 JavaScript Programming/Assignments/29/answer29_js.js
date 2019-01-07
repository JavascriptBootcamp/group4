
function Video(title, uploader, second){

    //privte propeirts
    title = title;
    uploader = uploader;
    second = second;

    //global function
    this.watch = function() {
        
        try{

        console.log(`You watched all ${second} seconds of ${title}!`);

        }
        catch(err){

            console.log("Oops... An error occured");
        }

        finally {

        }
    }
} 


try {
var video1 = new Video("Titanic", "Aviyot" ,120);
var video2 = new Video("Roki", "getahun" ,90);
video1.watch();
video2.watch();
}

catch(er){

    console.log("Oops... An error occured");
}

finally {
    
    console.log("you finsh");
}


