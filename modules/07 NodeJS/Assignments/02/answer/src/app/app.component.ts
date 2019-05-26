import { Component, OnInit } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

interface Client {
  first_name: string,
  last_name: string,
  city: string,
  phone: string,
  mail: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  clients: Client[];
  fileName: string;
  filesNames: string[];

  constructor() {
    this.clients = [
      { first_name: "Matan", last_name: "Atiya", city: "Beer-Sheva", phone: "052-4404494", mail: "matan@gmail.com" },
      { first_name: "Daniel", last_name: "Brosh", city: "Ashkelon", phone: "054-5796354", mail: "daniel@gmail.com" },
      { first_name: "Uriel", last_name: "Alfasi", city: "Hafia", phone: "052-3396354", mail: "uriel@gmail.com" }
    ];

    this.fileName = "contacts1.js";
    this.filesNames = ["contacts.js","contacts1.js","contacts2.js"];
  }

  ngOnInit(): void {
    this.clients = this.clients.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
  }

  mailto(mail: string): string {
    return "mailto:" + mail;
  }


  getPostObject(){
    return { method:'POST', data:this.clients};
  }

  getGetObject(){
    return { method:'GET', data:this.fileName};
  }

  saveContacts() {
    fetch('http://localhost:5000/', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.getPostObject())
    })
  }

  loadContacts(selectFiles) {
    this.fileName = selectFiles.value;
    
    fetch('http://localhost:5000/', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(this.getGetObject())
    }).then(response=>response.text())
      .then(data=>
        this.clients = JSON.parse(data)); 
       }
  
}
