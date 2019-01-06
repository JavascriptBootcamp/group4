/*
function Video(title, uploader ,seconds ) {
    this.title      = title;
    this.uploader   = uploader;
    this.seconds    = seconds;
    this.watch      = function () {
        console.log("You watched all " + this.seconds + " seconds of " + this.title);
    };
}

//var v = new Video("the sickness","avi zad",120);
//v.watch();


function Video2(title, uploader ,seconds ) {
    this.watch      = function () {
        console.log("You watched all " + seconds + " seconds of " + title);
    }
}

viseos = []
for (var i=0;i<5;i++) {
    viseos[i] = new Video2("title: "+i,"name: "+i,(i+1)*20);
    viseos[i].watch();
}
*/
function Video3(title, uploader ,seconds ) {
    this.watch      = function (min) {
        try {
            console.log("You watched all " + min + " seconds of " + title);
        }
        catch(ex) {
            console.log("Oops... An error occured");
        }
        
    }
}
viseos3 = []
for (var i=0;i<5;i++) {
    viseos3[i] = new Video3("title: "+i,"name: "+i,(i+1)*20);
    viseos3[i].watch(i);
}