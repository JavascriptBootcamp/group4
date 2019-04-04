import { Component, OnInit } from '@angular/core';

interface Contact {
  first: string;
  last: string;
  address: string;
  phone: string;
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  contacts: Contact[];
  constructor() {
    this.contacts = [
      {
        first: 'Shimon', last: 'Hazan', address: 'Jerusalem',
        phone:'054-8695690', email: 'nadav@c.com'
      },
      {
        first: 'David', last: 'Lev', address: 'Jerusalem',
        phone: '052-6564974', email: 'uriel@u.com'
      },
      {
        first: 'Jhon', last: 'TheRippper', address: 'Ashkelon',
        phone:'058-9876541', email: 'daniel@d.com'
      }
    ];
  }
  ngOnInit() {
    this.contacts.sort((c1, c2) => c1.first.localeCompare(c2.first));
  }
}
