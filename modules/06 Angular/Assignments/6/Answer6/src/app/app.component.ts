import { Component, OnInit } from '@angular/core';
import { IPerson } from "IPerson"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  persons : IPerson[]

  constructor()
  {
    this.persons = [
      {
        firstName : "Guy",
        lastName : "Agiv",
        address: "Rehovot",
        phoneNumber: "054-6533214",
        emailAddress: "guyagiv@gmail.com",
      },
      {
        firstName : "Luke",
        lastName : "Skywalker",
        address: "Tatooine",
        phoneNumber: "054-24421111",
        emailAddress: "luketheking@gmail.com",
      },
      {
        firstName : "Anakin",
        lastName : "Skywalker",
        address: "Coruscant",
        phoneNumber: "054-6473983",
        emailAddress: "theboywholived@gmail.com",
      },
    ]
  }

  ngOnInit(): void 
  {
    this.persons = this.persons.sort((p1, p2) => p1.firstName > p2.firstName ? 1 : (p2.firstName > p1.firstName ? -1 : 0));
  }

  sendMail(emailAddress : string)
  {
    return `mailto:${emailAddress}`;
  }
}
