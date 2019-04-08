import { Component ,OnInit } from '@angular/core';



interface Conact{

    fname:string;
    lname:string;
    address:string;
    phoneNumber:string;
    email:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'assigne6';

      conntactsArr:Conact[];


      constructor(){
 this.conntactsArr=[{fname:"Malak",
    lname:"kh",
    address:"Kfar-Cana",
    phoneNumber:"05222223",
    email:"m@gmail.com"},
    {fname:"Elinor",
            lname:"GArage",
            address:"RamatGan",
            phoneNumber:"0522222222",
            email:"e@gmail.com"}, {fname:"Daniel",
            lname:"Brosh",
            address:"Ashkelon",
            phoneNumber:"0522222224",
            email:"daniel@gmail.com"}];
     
      }

      
           
      
      ngOnInit(){
        this.conntactsArr.sort( (a,b)=> (a.fname > b.fname) ? 1 : ((b.fname > a.fname) ? -1 : 0));
         
}

}
