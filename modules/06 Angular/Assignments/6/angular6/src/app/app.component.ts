import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  obj: object[];
  constructor() {
    this.obj = [
      { firsName: "Daniel", lastName: "Brosh", address: "Ashkelon", phone: "054-5796354", mail: "daniel@d.com" },
      { firsName: "Nadav", lastName: "Choen", address: "Jerusalem", phone: "052-7855698", mail: "nadav@c.com" }
    ]
  }
  ngOnInit() {
    this.createTable();
  }
  createTable() {
    let myApp = document.getElementById("my-app");
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let thFirstName = document.createElement("th");
    let thLastName = document.createElement("th");
    let thAddress = document.createElement("th");
    let thPhone = document.createElement("th");
    let thMail = document.createElement("th");
    thFirstName.innerText = "First Name";
    thLastName.innerText = "Last Name";
    thAddress.innerText = "Address";
    thPhone.innerText = "Phone";
    thMail.innerText = "Mail";
    tr.appendChild(thFirstName);
    tr.appendChild(thLastName);
    tr.appendChild(thAddress);
    tr.appendChild(thPhone);
    tr.appendChild(thMail);
    table.appendChild(tr);
    myApp.appendChild(table);

    for (let key of this.obj) {
      let tr = document.createElement("tr");
      let tdFirstName = document.createElement("td");
      let tdLastName = document.createElement("td");
      let tdAddress = document.createElement("td");
      let tdPhone = document.createElement("td");
      let tdMail = document.createElement("td");
      tdFirstName.innerText = `${key.firsName}`;
      tdLastName.innerText = `${key.lastName}`;
      tdAddress.innerText = `${key.address}`;
      tdPhone.innerText = `${key.phone}`;
      tdMail.innerText = `${key.mail}`;
      tr.appendChild(tdFirstName);
      tr.appendChild(tdLastName);
      tr.appendChild(tdAddress);
      tr.appendChild(tdPhone);
      tr.appendChild(tdMail);
      table.appendChild(tr);
    }
  }
}
