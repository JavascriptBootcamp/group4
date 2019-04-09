import { Component ,OnInit} from '@angular/core';
interface Client{
  firstName:string,
  lastName:string,
  address: string,
  phoneNumber:string,
  emailAddress:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title :string;
  clients:Client[];
  constructor(){
    this.title= 'Contact Persons';
    this.clients=[
      {firstName:"Daniel", lastName:"Brosh",address:"Ashkelon",phoneNumber:"054-5796354",emailAddress:"daniel@d.com"},
      {firstName:"Nadav", lastName:"Choen",address:"Jerusalem",phoneNumber:"052-7855698",emailAddress:"nadav@c.com"},
      {firstName:"Uriel", lastName:"Levi",address:"Haifa",phoneNumber:"054-8565465",emailAddress:"uriel@u.com"},

    ]
  }

  ngOnInit(): void {
    this.clients=this.clients.sort((a,b)=> (a.firstName >b.firstName) ? 1 : ((b.firstName>a.firstName)?-1:0))
    
  }
  mailto(address:string):string{
    return "mailto:"+address;
  }

}
