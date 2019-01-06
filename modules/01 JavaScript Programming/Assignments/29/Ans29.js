function Video(title, uploader ,seconds ){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

    this.watch = function watch(amounts){
        this.seconds = amounts;
        console.log("You watched all " + this.seconds + " seconds of "+ this.title + "!");
    }
} 
try{
    vid1 = new Video("Metrix","Some guy",60);
    vid2 = new Video("Avatar","Some other guy",67);
}
catch(err){
    console.log("Oops... An error occured");
}

vids = [["Metrix","Some guy",60],["Avatar","Some other guy",67],["Thor","Avi",50],["Thor2","David",52],["Thor3","Dan",50]]

console.log(vids[0][2]);
vidsObj = []

for(var i=0; i<vids.length; i++){

    vidsObj.push(new Video(vids[i][0],vids[i][1],vids[i][2]));

}
console.log("check push",vidsObj);
