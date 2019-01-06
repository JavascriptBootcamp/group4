function Video(title, uploader,seconds)
{
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.watch = function()
    {
        return `You watched all ${this.seconds} seconds of ${this.title}`;
    }
}

var Video1 = new Video("Harry Potter", "ofek", 120);
var Video2 = new Video("Spiderman", "Shimon", 140);
console.log(Video1.watch.call(Video2));

//Bonus
// var names = [];
// for(var i =0; i<5 ; i++)
// {
//     names.push(new Video("Harry Potter", "ofek", 120));
// }
// console.log(names);