function Video (title ,uploader ,seconds ){

    this.title = title;
    this.uploader=uploader;
    this.seconds = seconds;

    this.watch = function(){
        console.log(`You watched all ${this.seconds} seconds of ${this.title}!`)
    }
}


var video1 = new Video("Otters Holding Hands","viki",50);
video1.watch();

var video2 = new Video("Something new","yaron",50);

var videoArr = [{
    title:"something_1",
    uploader:"someone_1",
    seconds:60
},{
   title:"something_2",
   uploader:"someone_2",
   seconds:85
},
{
   title:"something_3",
   uploader:"someone_3",
   seconds:39
},
{
    title:"something_4",
    uploader:"someone_4",
    seconds:95
},
{
    title:"something_5",
    uploader:"someone_5",
    seconds:100
}
];


try{
for(var i=0;i<videoArr.length;i++){
   this["v" + i] = new Video(videoArr[i].title,videoArr[i].uploader,videoArr[i].seconds);
   this["v" + i].watch();
}
}

catch(ex){
    console.log("Oops... An error occured");
}

 