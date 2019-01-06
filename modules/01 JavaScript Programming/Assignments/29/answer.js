function Video(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

    this.watch = function () {
        console.log(this.uploader, "Watched all", this.seconds, "seconds of", this.title + "!");
    }
}
try {
    var videoObject1 = new Video("Harry Plotter", "Guy", 190);
    videoObject1.watch();

    var videoObject2 = new Video("Green Mile", "Mariya", 235);
    videoObject2.watch();

    var videoObjectArr = [];

    for (var i = 0; i < 5; i++) {
        var videoObject = new Video(videoObject1.title, videoObject1.uploader, videoObject1.seconds);
        videoObjectArr.push(videoObject);
        videoObjectArr[i].watch();
    }
}
catch
{
    throw new Error("Oops ... An error occured");
}
