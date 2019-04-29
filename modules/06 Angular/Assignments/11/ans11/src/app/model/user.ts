export class user{
    name:string;
    password:number
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
}
export class regUser{
    fullname:string;
    email:string;
    age:number;
    username:string;
    password:number;

    constructor(fullname,email,age,username,password){
        this.fullname=fullname,
        this.email=email,
        this.age=age;
        this.username=username,
        this.password=password
    }
}