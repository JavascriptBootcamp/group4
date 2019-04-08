


interface PictureInterface{
            url :string;
            img:string;
}


export class Picture implements PictureInterface{
    url :string;
    img:string;

    constructor(url:string,img:string)
    {
        this.url=url;
        this.img=img;

    }

}