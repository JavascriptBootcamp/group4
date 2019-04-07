


export class TemplateDrivenForm {
        public fName: number;
        public lName: string;
        public age: number;
        public userName: string;
        public password: string;
        public phoneNumber: string;
        public email: string;
        public comments: string;
        public hobbies: string[];


    constructor(fName,lName,age,userName,password,phoneNumber,email,comments,hobbies,){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
        this.userName= userName;
        this.password=password;
        this.phoneNumber= phoneNumber;
        this.email=email;
        this.comments=comments;
        this.hobbies=hobbies;
    }



}
