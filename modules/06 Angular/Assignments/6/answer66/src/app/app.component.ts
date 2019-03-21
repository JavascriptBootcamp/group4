import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer66';
  columns: string[];

  CHARACTERS: any[];

  constructor() {

    this.columns = ["FirstName", "LastName", "Address", "PhoneNumber", "EmailAddress"];
    this.CHARACTERS =
      [
        {
          FirstName: 'Daniel',
          LastName: 'Brosh',
          Address: 'Ashkelon',
          PhoneNumber: '054-5796354',
          EmailAddress: 'daniel@d.com'
        },
        {
          FirstName: 'Nadav',
          LastName: 'Choen',
          Address: 'Jerusalem',

          PhoneNumber: '052-7855698',
          EmailAddress: 'nadav@c.com'
        },
        {
          FirstName: 'Uriel',
          LastName: 'Last Name',
          Address: 'Haifa',
          PhoneNumber: '054-8565465',
          EmailAddress: 'uriel@u.com'
        },

      ]

  }
  ngOnInit() {

    this.sortByName();
  }

  sortByName() {
    this.CHARACTERS.sort(function (a, b) {
      var nameA = a.FirstName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.FirstName.toUpperCase(); // ignore upper and lowercase
      console.log(nameA)
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }


}
