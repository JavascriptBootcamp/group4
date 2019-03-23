import { Component , OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: Array<any>;
  constructor(){
 
  }

      ngOnInit(){  
    this.contacts=[{fname:"Daniel" ,lname:"Brosh",address:"Ashkelon",phone:"054-5796354",email:"mailto:daniel@d.com"},
    {fname:"Nadav" ,lname:"Choen",address:"Jerusalem",phone:"052-7855698",email:"mailto:nadav@c.com"},
    {fname:"Uriel" ,lname:"Brosh",address:"Haifa",phone:"054-8565465",email:"mailto:uriel@u.com"},
    {fname:"Mark" ,lname:"Zugr",address:"US",phone:"054-57963545655",email:"mailto:Mark@ d.com"}];
    this.contacts.sort((a,b)=>(a.fname > b.fname) ? 1 : ((b.fname > a.fname) ? -1 : 0));

   }
  



}
