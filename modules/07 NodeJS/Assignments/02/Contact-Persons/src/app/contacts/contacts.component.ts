import { Component, OnInit } from '@angular/core';
interface Client {
  first_name :string,
  last_name :string,
  city :string,
  phone :string,
  mail :string
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  clients:Client[];
  
    constructor() {
      this.clients = [
        { first_name :"Matan", last_name :"Atiya", city :"Beer-Sheva", phone :"052-4404494", mail :"matan@gmail.com"},
        { first_name :"Daniel", last_name :"Brosh", city :"Ashkelon", phone :"054-5796354", mail :"daniel@gmail.com"},
        { first_name :"Uriel", last_name :"Alfasi", city :"Hafia", phone :"052-3396354", mail :"uriel@gmail.com"}
      ]
    }
  
    ngOnInit(): void {
      this.clients = this.clients.sort( (a,b)=> (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
    }
  
    mailto(mail:string):string {
      return "mailto:"+mail;
    }


    saveContacts(){
      fetch('http://localhost:5000', {
        method: 'post',
        body: JSON.stringify(this.clients)
    })
  }


  loadContacts(){

    fetch('http://localhost:5000').then(data=>data.json()).then(res=>this.clients = res);

}
}
