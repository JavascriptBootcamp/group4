export class Player {
    title: string;
    artistName: string;
    description: string;
    videoSrc: string;
    constructor(title: string, artistName: string, description: string, videoSrc: string) {
        this.title = title;
        this.artistName = artistName;
        this.description = description;
        this.videoSrc = videoSrc;
    }
}