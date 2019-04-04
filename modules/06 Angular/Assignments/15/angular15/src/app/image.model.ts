export class Image {
    src: string;
    likecount: number;
    constructor(src) {
        this.src = src;
        this.likecount = 0;
    }
    addLike() {
        this.likecount++;
    }
}