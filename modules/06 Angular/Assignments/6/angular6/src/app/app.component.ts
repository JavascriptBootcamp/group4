import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular6';
  tHeader: string[];
  contacts: Contact[] = [];
  table: HTMLTableElement;
  thead: HTMLTableSectionElement;
  tbody: HTMLTableSectionElement;
  constructor() {
    this.tHeader = ["First Name", "Last Name", "Address", "Phone Number", "Email Address"];
    this.contacts.push(new Contact("Moshe", "A", "Holon", "0501111111", "moshiko1@gmail.com"));
    this.contacts.push(new Contact("a", "B", "Holon", "0502222222", "moshiko2@gmail.com"));
    this.table = document.createElement('table');
    this.thead = this.table.createTHead();
    this.tbody = this.table.createTBody();
  }
  ngOnInit() {
    this.contacts.sort((a, b) => {
      return a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1;
    });

    this.createHeadRow();
    this.createBodyRow();
  }
  private createHeadRow(): void {
    let row: HTMLTableRowElement = this.thead.insertRow(0);
    for (let i: number = 0; i < this.tHeader.length; i++) {
      row.insertCell(i).innerHTML = this.tHeader[i];
    }
  }
  private createBodyRow(): void {
    this.contacts.forEach((value, index) => {
      let row: HTMLTableRowElement = this.tbody.insertRow(index);
      for (let key in value) {
        row.insertCell(-1).innerHTML = value[key];
      }
    });
  }

}
class Contact {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  emailAddress: string;
  constructor(firstName: string, lastName: string, address: string, phoneNumber: string, emailAddress: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;

  }
}