var movieTitleElem = document.getElementById('movieTitle');
var movieUploaderElem = document.getElementById('movieUploader');
var movieDurationElem = document.getElementById('movieDuration');

var addMovieButton = document.querySelector('#addMovieButton');
addMovieButton.addEventListener('click', executeWatchMethod);


function Video(title, uploader, seconds) {
    var watch;

    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
   
    this.watch = function watch() {
        var resDisplayDiv = document.createElement('div');
        resDisplayDiv.innerText = `You watched all ${this.seconds} seconds of ${this.title}`;
        document.getElementById('resultTextContainer').appendChild(resDisplayDiv);    
    }   
}


function executeWatchMethod(event) {
    event.preventDefault();

    //console.log(movieTitleElem.value, movieUploaderElem.value, movieDurationElem.value);
    var videoObj = new Video(movieTitleElem.value, movieUploaderElem.value, movieDurationElem.value);
    //console.log(videoObj);

    videoObj.watch();
}




// var videoObj = new Video('Video 2', 'Uploader 2', 222);
// videoObj.watch();




























// function Video(title, uploader, seconds) {

    
//     try {
//         this.title = title;
//         this.uploader = uploader;
//         this.seconds = seconds;
        
//         this.watch = function(seconds) {
//             try {
//                 this.seconds = seconds;
//                 console.log(`You watched all ${this.seconds} seconds of ${this.title}`);    
//             }
//             catch(error) {
//                 console.log('Oops... An error occured');
//             }
//         }

//     }
//     catch(error) {
//         console.log('Oops... An error occured');
//     }
    
// }
    
// var videoObj1 = new Video('Video 1', 'Uploader 1', 111);
// videoObj1.watch(7887878);


// var videoObj2 = new Video('Video 2', 'Uploader 2', 222);


// var data = [];

// for (var i = 3; i <= 7; i++) {
//     new Video('video ' + i, 'Uploader ' + i, 'i'+'i'+'i');
// }
    
 