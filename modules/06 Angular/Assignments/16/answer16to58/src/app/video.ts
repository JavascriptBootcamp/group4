export class Video {
    title: string;
    artistName: string;
    description: string
    videoSrc: string;
    imgSrc: string;

    constructor(title: string, artistName: string, description: string, videoSrc: string, imgSrc: string) {
        this.title = title;
        this.artistName = artistName;
        this.description = description;
        this.videoSrc = videoSrc;
        this.imgSrc = imgSrc;
    }
}