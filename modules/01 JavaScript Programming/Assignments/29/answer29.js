function Video(title, uploader, seconds) { //string, string, number
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

    this.watch = function () {
        console.log(this.uploader, 'watch all', this.seconds, "seconds of", this.title);
    }
}

try {
    var movieObj = {
        movieTitle: "IT",
        movieUploader: "Guy",
        movieSeconds: 220
    };

    var movieArray = [];
    var movie2 = new Video("Hello World", "Grisha", 110);
    var movie3 = new Video("2048", "Mariya", 110);
    var movie4 = new Video("Avatar", "Joe", 110);
    var movie5 = new Video("Star Wars", "Michael", 110);


    for (var i = 0; i < 5; i++) {
        movieArray.push(new Video(movieObj.movieTitle, movieObj.movieUploader, movieObj.movieSeconds));
    }

    for (var i = 0; i < 5; i++) {
        movieArray[i].watch();
    }
}
catch(exeption){
    console.log("Ooops....", exeption);
}