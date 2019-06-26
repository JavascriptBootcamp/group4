export class Video {
    id:number;
    title: string;
    artistName: string;
    videoSrc: string;
    imgSrc: string;

    constructor(id ,title, artistName, videoSrc, imgSrc) {
        this.id = id;
        this.title = title;
        this.artistName = artistName;
        this.videoSrc = videoSrc;
        this.imgSrc = imgSrc;
    }
}

export const  videos:Video[]=[];
