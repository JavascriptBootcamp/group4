export class Picture {
    src:string;
    authorName: string;
    ID:number;
    likesAmount:number;
    constructor(picture,name,id){
        this.src=picture;
        this.authorName=name;
        this.ID=id;
        this.likesAmount=0;
    }
}