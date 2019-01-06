function Video(title, uploader, seconds) {
    
        try {
            this.title = title;
            this.uploader = uploader;
            this.seconds = seconds;
            
            this.watch = function(seconds) {
                try {
                    this.seconds = seconds;
                    console.log(`You watched all ${this.seconds} seconds of ${this.title}`);    
                }
                catch(error) {
                    console.log('Oops... An error occured');
                }
            }
    
        }
        catch(error) {
            console.log('Oops... An error occured');
        }
        
    }
    
    var videoObj1 = new Video('Video 1', 'Uploader 1', 111);
    videoObj1.watch(7887878);
    
    
    var videoObj2 = new Video('Video 2', 'Uploader 2', 222);
    
    
    var data = [];
    
    for (var i = 3; i <= 7; i++) {
        new Video('video ' + i, 'Uploader ' + i, 'i'+'i'+'i');
    }
    
    