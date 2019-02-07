function Video(title, uploader, seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

    // this.watch = function () {

    //     try {
    //         document.querySelector("#res").innerHTML = "You watched all "+ this.seconds +" seconds of " + this.title;
    //     } catch (error) {
    //         console.log("Oops... An error occured");
    //     }
    // }
}

function watch(){
    var title = document.querySelector("#inp").value;
    var uploader = document.querySelector("#sel").options[document.querySelector("#sel").selectedIndex];
    var sec = document.querySelector("#num").value;
    var vid = new Video(title,uploader,sec);
    document.querySelector("#res").innerHTML = "You watched all "+ vid.seconds +" seconds of " + vid.title;
    
}

