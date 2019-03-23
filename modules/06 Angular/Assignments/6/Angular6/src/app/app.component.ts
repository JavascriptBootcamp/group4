import { Component, OnInit } from '@angular/core';
interface myTable {
  firstName: string,
  lastName: string,
  address: string,
  phoneNumber: string,
  emailAddress: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tbl: myTable[];

  constructor() {
    this.tbl = [
      {
        firstName: "Baniel",
        lastName: "Brosh",
        address: "Ashkelon",
        phoneNumber: "054-5796354",
        emailAddress: "mailto:daniel@d.com"
      },
      {
        firstName: "Cadav",
        lastName: "Choen",
        address: "Jerusalem",
        phoneNumber: "052-7855698",
        emailAddress: "mailto:nadav@c.com"
      },
      {
        firstName: "Ariel",
        lastName: "Choen",
        address: "Haifa",
        phoneNumber: "054-8565465",
        emailAddress: "mailto:uriel@u.com"
      },
    ]
  }

  ngOnInit() {
    this.tbl.sort((a, b) => {
      if (a.firstName < b.firstName) { return -1; }
      if (a.firstName > b.firstName) { return 1; }
      return 0;
    })
  }
}
