function Video(title, uploader, seconds){
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;

    this.watch = function () {
        try {
            return `You watched all ${this.seconds} seconds of ${this.title}!`;
        } catch (error) {
            return "Oops... An error occured";
        }
    }
}
