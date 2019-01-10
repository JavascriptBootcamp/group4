function Video(title,uploader,seconds){
    this.title=title;
    this.uploader=uploader;
    this.seconds=seconds;
    
    this.watch = function(){
        console.log( `you watched all ${this.second} of ${this.title}`);
    }
}
var titlearr = ["harry potter","james bond 007","lord of the rings","lion king","star wars"]
var uploaderarr = ["shimon","david","ahron","yoni","miki"]
var secondsarr = ["160000","180000","180000","120000","140000"]
var video1 = new Video("harry potter","shimon",160000);


video1.watch();
var video2 = new Video("james bond 007","david",180000);
// var video3 = new Video("lord of the rings","david",180000)
console.log(video1.watch.call(video2))
var arrofvid =[];
 for(var i=0;i<5;i++){
     arrofvid.push=new Video(titlearr[i],uploaderarr[i],secondsarr[i])
 }
