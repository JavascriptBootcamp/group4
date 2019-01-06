// function Video(title, uploader, seconds){
//     try{
//         if(typeof title !== 'string' || typeof uploader !== 'string'|| !Number.isInteger(seconds) && seconds > 0) throw 'Oops... An error occured'
//         this.title = title;
//         this.uploader = uploader;
//         this.seconds = seconds;
//     }catch (ex){
//         console.log(ex);
//     }finally{
//         if(typeof title !== 'string')
//             this.title = 'default title';
//         if(typeof uploader !== 'string')
//             this.uploader = 'default uploader';
//         if(!Number.isInteger(seconds) && seconds > 0)
//             this.seconds = 60;
//     }
//     this.watch = function(){
//         console.log('You watched all',this.seconds,'seconds of', this.title);
//     }
// }


// var v1 = new Video('Harry Potter', 'J.K. Rowling', '120');

// v1.watch();

// function Video(title, uploader, seconds){
//     try{
//         if(typeof title !== 'string' || typeof uploader !== 'string'|| !Number.isInteger(seconds) && seconds > 0) throw 'Oops... An error occured'
//         this.title = title;
//         this.uploader = uploader;
//         this.seconds = seconds;
//     }catch (ex){
//         console.log(ex);
//     }finally{
//         if(typeof title !== 'string')
//             this.title = 'default title';
//         if(typeof uploader !== 'string')
//             this.uploader = 'default uploader';
//         if(!Number.isInteger(seconds) && seconds > 0)
//             this.seconds = 60;
//     }
//     this.watch = function(){
//         console.log('You watched all',this.seconds,'seconds of', this.title);
//     }

// }


// var v1 = new Video('Harry Potter', 'J.K. Rowling', 120);

// var arrVideos = [];

// for(var i=0; i < 5; i++){
//     arrVideos.push(new Video('Harry Potter ' + (i + 1), 'J.K. Rowling', 120 + 10 * i));
// }

// arrVideos.forEach((video) => {
//     video.watch();
// });

function Video(title, uploader){
    try{
        if(typeof title !== 'string' || typeof uploader !== 'string') throw 'Oops... An error occured'
        this.title = title;
        this.uploader = uploader;
    }catch (ex){
        console.log(ex);
    }finally{
        if(typeof title !== 'string')
            this.title = 'default title';
        if(typeof uploader !== 'string')
            this.uploader = 'default uploader';
    }
    this.watch = function(seconds){
        try{
            if(!Number.isInteger(seconds) && seconds > 0) throw 'Oops... An error occured'
            this.seconds = seconds;
        }catch(ex){
            console.log(ex);
        }finally{
            if(!Number.isInteger(seconds) && seconds > 0)
                this.seconds = 60;
            console.log('You watched all',this.seconds,'seconds of', this.title);
        }
    }

}


var v1 = new Video('Harry Potter', 'J.K. Rowling', 120);

var arrVideos = [];

for(var i=0; i < 5; i++){
    arrVideos.push(new Video('Harry Potter ' + (i + 1), 'J.K. Rowling'));
}

arrVideos.forEach((video, index) => {
    video.watch(120 + 10 * index);
});
