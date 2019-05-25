import { Component, OnInit } from '@angular/core';

interface Contact {
  firsName: string; 
  lastName: string;
  address:  string;
  phone:    string;
  email:    string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer6';

  contacts: Contact[];
  result: string;
  

  constructor() {
    this.contacts = [
      { 
        firsName: "Harward",
        lastName: "James", 
        address: "New-York", 
        phone: "058576844", 
        email: "hgmsp@gmail.com" 
      },
      { 
        firsName: "David", 
        lastName: "Lev", 
        address: "Jerusalem", 
        phone: "058-8888888", 
        email: "davidlevman@gmail.com" 
      },
      {
        firsName: "Hugo",
        lastName: "Dugo", 
        address: "Hugolend", 
        phone: "777134567", 
        email: "hugodugo@gmail.com" 
      }
    ];

    this.result = '';
  }


  ngOnInit() {
    this.contacts.sort((previousObj, nextObj) => (previousObj.firsName > nextObj.firsName) ? 1 : ((previousObj.firsName < nextObj.firsName) ? -1 : 0));
  }


  sendToServer() {
    console.log("Sending data to server");

    fetch('http://localhost:5000', {
      method: 'POST',
      body: JSON.stringify(this.contacts)
    })
    .then(response => response.text())
    .then(data => {
      console.log("DATA: " + data);
      this.result = data;
    });
  }
}
