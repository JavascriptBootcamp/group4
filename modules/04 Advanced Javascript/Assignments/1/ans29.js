function Video(title, uploader, seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

}

Video.prototype.watch = function (sec) {
    try {
        console.log(`You watched all ${sec} seconds of ${this.title}!`);
    } catch (error) {
        console.log("Oops... An error occured");
    }
}

var data = []

for (var i = 0; i < 5; i++) {
    var v = new Video("video "+i, "The neerd youtuber", 60 + Math.floor(Math.random() * (60)));
    data.push(v);  
}

data[0].watch(5);
data[1].watch(24);
