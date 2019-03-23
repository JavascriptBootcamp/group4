import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer6';

  contactObjects: any[];

  constructor() {
    this.contactObjects = [
      { firsName: "Harward", lastName: "James", address: "New-York", phone: "058576844", email: "hgmsp@gmail.com" },
      { firsName: "David", lastName: "Lev", address: "Jerusalem", phone: "058-8888888", email: "davidlevman@gmail.com" }
    ];

  }

  ngOnInit() {
    this.contactObjects.sort((previousObj, nextObj) => (previousObj.firsName > nextObj.firsName) ? 1 : ((previousObj.firsName < nextObj.firsName) ? -1 : 0));
  }
}
