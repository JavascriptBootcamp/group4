export class Video {
    title: string;
    artistName: string;
    videoSrc: string;
    imgSrc: string;

    constructor(title, artistName, videoSrc, imgSrc) {
        this.title = title;
        this.artistName = artistName;
        this.videoSrc = videoSrc;
        this.imgSrc = imgSrc;
    }
}

export const  videos:Video[]=[];
