function Video(title,uploader,seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    // this.watch = function(){
    //     console.log("You watched all " + this.seconds + " of " + this.title);
    // };
    this.watch = function(newSeconds){
        console.log("You watched all " + (newSeconds || this.seconds) + " of " + this.title);
    };
}

var video1 = new Video("First video","Dudu","134");
video1.watch();

var video2 = new Video("Second video","Avi","40");
video2.watch();

var arr = ["Third video","Doron","20","Fourth video","Eran","60","Fifth video","David","130","Sixth video","Mirit","67","Seventh video","Dor","66"];
var j = 3;
try{
    for(var i=0;i<=arr.length+6;i+=3){
        if(i>arr.length)
            throw "error";
        this["video"+j] = new Video(arr[i],arr[i+1],arr[i+2]);
        j++;
    }
}
catch(error){
    console.log("Oops... An error occured");
}

this.video3.watch();
this.video4.watch();
this.video5.watch();
this.video6.watch();
this.video7.watch();

var video8 = new Video("Eighth video","Dan","20");
video8.watch(40);
