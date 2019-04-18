export class Image {
    author: string;
    src: string;
    likecount: number;
    constructor(src, count, author) {
        this.src = src;
        this.likecount = count;
        this.author = author;
    }
    addLike() {
        this.likecount++;
    }
}