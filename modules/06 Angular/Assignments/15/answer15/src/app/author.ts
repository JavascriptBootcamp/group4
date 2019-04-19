import { Picture } from './picture';

export class Author {
    imagesBySrc:Picture[];
    authorName: string;
    ID:number;
    profilePicture?:string;
    facebookLink?:string;
    description?:string;
    constructor(pictures,name,id,profilePic,facebook,desc){
        this.imagesBySrc=pictures;
        this.authorName=name;
        this.ID=id;
        this.profilePicture=profilePic;
        this.facebookLink=facebook;
        this.description=desc;
    }
}
