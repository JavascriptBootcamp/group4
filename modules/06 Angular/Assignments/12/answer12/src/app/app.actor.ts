

interface ActorInterface{
        name:string;
        age:number;
        img:string;
        url:string;


}


export class Actor  implements ActorInterface{
        
    name:string;
    age:number;
    url:string;
    img:string;
    

    constructor(name:string,age:number,url:string,img:string){
            this.name=name;
            this.age=age;
            this.url=url;
            this.img=img;

    }





}