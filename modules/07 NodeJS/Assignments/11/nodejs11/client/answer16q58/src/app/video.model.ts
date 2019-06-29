export class Video {
    id: number;
    title: string;
    singer: string;
    words: string;
    videoSrc: string;
    imgSrc: string;
    constructor(id: number, title: string, singer: string, words: string, videoSrc: string, imgSrc: string) {
        this.id = id;
        this.title = title;
        this.singer = singer;
        this.words = words;
        this.videoSrc = videoSrc;
        this.imgSrc = imgSrc;
    }
}