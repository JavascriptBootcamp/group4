export class Author {
    authorName: string;
    ID:number;
    profilePicture?:string;
    facebookLink?:string;
    description?:string;
    constructor(name,id,profilePic,facebook,desc){
        this.authorName=name;
        this.ID=id;
        this.profilePicture=profilePic;
        this.facebookLink=facebook;
        this.description=desc;
    }
}
