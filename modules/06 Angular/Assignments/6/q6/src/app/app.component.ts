import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Contact Persons';
  header: string[];
  contacts: object[];

  constructor(){
    this.header = ["First Name", "Last Name", "Address", "Phone Number", "Email Address"];
    this.contacts = [
      {firstName: "Nadav", lastName: "Choen", address: "Jerusalem", phoneNumber: "054-5796354", mail: "nadav@c.com"},
      {firstName: "Daniel", lastName: "Brosh", address: "Ashkelon", phoneNumber: "054-5796354", mail: "daniel@d.com"},
      {firstName: "Uriel", lastName: "Levi", address: "Haifa", phoneNumber: "054-8565465", mail: "uriel@u.com"}
    ];
  }

  ngOnInit(){
    this.contacts.sort(this.comparator);
  }

  comparator(o1: object,o2: object): number{
    return (o1["firstName"] > o2["firstName"]) ? 1 : -1;
  }

}
