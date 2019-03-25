import { Component, OnInit } from '@angular/core';
interface Phone {
  areaCode: string;
  suffix: string;
}
interface Contact {
  first: string;
  last: string;
  address: string;
  phone: Phone;
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contacts: Contact[];
  constructor() {
    this.contacts = [
      {
        first: 'Nadav', last: 'Cohen', address: 'Jerusalem',
        phone: {
          areaCode: '052',
          suffix: '7855698'
        }, email: 'nadav@c.com'
      },
      {
        first: 'Uriel', last: 'Ben Ishay', address: 'Haifa',
        phone: {
          areaCode: '054',
          suffix: '856546'
        }, email: 'uriel@u.com'
      },
      {
        first: 'Daniel', last: 'Brosh', address: 'Ashkelon',
        phone: {
          areaCode: '054',
          suffix: '5796354'
        }, email: 'daniel@d.com'
      }
    ];
  }
  ngOnInit() {
    this.contacts.sort((c1, c2) => c1.first.localeCompare(c2.first));
  }
}
