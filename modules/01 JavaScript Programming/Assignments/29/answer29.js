function Video(title , uploader ,seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.obj = {
        title:this.title,
        uploader:this.uploader,
        seconds:this.seconds,
        watch : function(amounts){
            console.log("You watched all "+ amounts +" seconds of",title);
        }
    }
}
var arr = [];
for(var i=0; i<5; i++){
    var video = new Video("Otters Holding Hands "+i,"gaby",60); 
    video.obj.watch(350);
}

try {
    var video2 = new Video("Lord of the ring","yossi",90); 
    video2.obj.watch("150");
} catch (error) {
    console.log("Oops... An error occured");
}
