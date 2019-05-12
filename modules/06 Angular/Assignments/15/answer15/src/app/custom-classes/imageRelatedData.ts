export class ImageRelatedData {
    selfID: string;
    imageSource: string;
    likesNum: number;
    authorName: string;
    isImageClicked: boolean;
    authorID?: number;

    constructor(selfID: string,
                imageSource: string,
                likesNum: number,
                authorName: string,
                isImageClicked: boolean,
                authorID?: number) {
        this.selfID = selfID;
        this.imageSource = imageSource;
        this.likesNum = likesNum;
        this.authorName = authorName;
        this.isImageClicked = isImageClicked;
        this.authorID = authorID;
    }

    addLike(instance): void {
        this.likesNum++;
        localStorage.setItem(instance.imageSource, instance.likesNum + '');
    }
}