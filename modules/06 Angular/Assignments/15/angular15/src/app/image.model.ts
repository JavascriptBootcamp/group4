export class Image {
    src: string;
    likecount: number;
    constructor(src,count) {
        this.src = src;
        this.likecount = count;
    }
    addLike() {
        this.likecount++;
    }
}