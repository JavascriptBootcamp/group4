function Video (title, uploader,seconds )
{
    this.title=title;
    this.uploader=uploader;
    this.seconds=seconds;
    this.watch=function()
    {
        console.log ( "You watched all "+this.seconds+" seconds of "+ this.title +"!");
    };
    this.watch=function(newseconds)
    {
        console.log ( "You watched all "+newseconds+" seconds of "+ this.title +"!");
    };

}
var myVideo= new Video("Otters Holding Hands","lit",60);
myVideo.watch();

var data=[];
for(var i=0;i<5;i++)
{
   // var myVideo= new Video("Otters Holding Hands","lit",60);
    data.push(myVideo);


}
myVideo.watch(80);
