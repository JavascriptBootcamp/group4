export class Player {
    title: string;
    singer: string;
    words: string;
    videoSrc: string;
    constructor(title: string, singer: string, words: string, videoSrc: string) {
        this.title = title;
        this.singer = singer;
        this.words = words;
        this.videoSrc = videoSrc;
    }
}