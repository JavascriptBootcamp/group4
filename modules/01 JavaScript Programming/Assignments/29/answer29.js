function Video(title , uploader , seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.watch = function(seconds){
        console.log(uploader + " watched " + seconds + " seconds of " + title);
    }
}
var vid1 = new Video("VIDEO 1", "AMIR", 35);
var vid2 = new Video("VIDEO 2", "SAMI", 50);

vid1.watch(50);
vid2.watch();

var arrayOfVideos = [];
for (let i = 0; i < 5; i++) {
    arrayOfVideos[i] = new Video(" video : " + i, " amir : " + i, " seconds : " + i);
    try {
        arrayOfVideos[i].watch(i*30);
    }
    catch (exception) {
        console.log("Error Agument!");
    }
}
