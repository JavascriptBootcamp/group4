export class Picture {
    src:string;
    authorName: string;
    ID:number;
    constructor(picture,name,id){
        this.src=picture;
        this.authorName=name;
        this.ID=id;
    }
}