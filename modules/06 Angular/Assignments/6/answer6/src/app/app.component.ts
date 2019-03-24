import { Component, OnInit } from '@angular/core';

interface Person {
  FirstName: string;
  LastName: string;
  City: string;
  Phone: string;
  MailLink: string;
  Mail: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  persons: Person[];

  constructor() {
    this.persons = [
      { FirstName: "Uriel", LastName: "Brosh", City: "Ashkelon", Phone: "054-5796354", MailLink: "mailto:uriel@u.com", Mail: "uriel@u.com" },
      { FirstName: "Nadav", LastName: "Cohen", City: "Jerusalem", Phone: "052-7855698", MailLink: "mailto:nadav@c.com", Mail: "nadav@c.com" },
      { FirstName: "Daniel", LastName: "Gefen", City: "Haifa", Phone: "054-8565465", MailLink: "mailto:daniel@d.com", Mail: "daniel@d.com" }
    ]
  }

  ngOnInit() {


    this.persons.sort((a: Person, b: Person) => {
      if (a.FirstName < b.FirstName)
        return -1;
      if (a.FirstName > b.FirstName)
        return 1;
      return 0;
    }
    );
  }
}