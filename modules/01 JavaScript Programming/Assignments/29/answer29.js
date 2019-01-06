function Video (title, uploader,seconds )
{
    this.title=title;
    this.uploader=uploader;
    this.seconds=seconds;
    this.watch=function()
    {
        console.log ( "You watched all "+this.seconds+" seconds of "+ this.title +"!");
    };

}
var myVideo= new Video("Otters Holding Hands","lit",60);
myVideo.watch();
