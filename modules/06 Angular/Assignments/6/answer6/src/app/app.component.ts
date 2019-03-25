import { Component, OnInit } from '@angular/core';

interface Contact {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  emailAddress: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [{
      firstName: "Nadav",
      lastName: "Cohen",
      address: "Jerusalem",
      phoneNumber: 527855698,
      emailAddress: "nadav@c.com"
    }, {
      firstName: "Daniel",
      lastName: "Brosh",
      address: "Ashkelon",
      phoneNumber: 545796354,
      emailAddress: "daniel@d.com"
    }, {
      firstName: "Uriel",
      lastName: "Brosh",
      address: "Haifa",
      phoneNumber: 548565465,
      emailAddress: "uriel@u.com"
    }]
  }

  ngOnInit() {
    this.contacts.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0));
  }
}