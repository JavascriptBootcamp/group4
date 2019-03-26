import { Component, OnInit } from '@angular/core';

interface IContactPersons {
  firstName:string;
  lastName:string;
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
  title = 'Contact Persons';
  contactPersons:IContactPersons[]=[];

ngOnInit(){

  this.contactPersons.push(
    {
   firstName:"aviyot",
  lastName:"getahun",
  address:"netivot 1",
  phoneNumber:"050-2222222",
  email:"avig@gmail.com"
    }
  )

  this.contactPersons.push(
    {
   firstName:"moshe",
  lastName:"levi",
  address:"jerusalem 1",
  phoneNumber:"057-7777777",
  email:"mlevi@gmail.com"
    }
  )

  this.contactPersons.push(
    {
   firstName:"david",
  lastName:"erzta",
  address:"asdod 1",
  phoneNumber:"050-4444333",
  email:"ezrdav@gmail.com"
    }
  )
  this.contactPersons.push(
    {
   firstName:"avra",
  lastName:"mengistu",
  address:"gaza 1",
  phoneNumber:"08-1001007",
  email:"avrahelp@gmail.com"
    }
  )

  this.contactPersons.sort((a,b)=> {
    let x = a.firstName.toLowerCase();
    let y = b.firstName.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }
    )
    
}
}
