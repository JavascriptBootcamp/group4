import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  obj: any[];
  constructor() {
    this.obj = [
      { firsName: "Daniel", lastName: "Brosh", address: "Ashkelon", phone: "054-5796354", mail: "daniel@d.com" },
      { firsName: "Nadav", lastName: "Choen", address: "Jerusalem", phone: "052-7855698", mail: "nadav@c.com" },
      { firsName: "Gaby", lastName: "Buchnik", address: "bat-yam", phone: "052-1118469", mail: "gaby@c.com" }
    ];
  }
  ngOnInit() {
    this.obj.sort((a, b) => (a.firsName > b.firsName) ? 1 : ((a.firsName < b.firsName) ? -1 : 0));
  }
}
