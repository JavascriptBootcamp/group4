import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Client {
  id: number,
  first_name: string,
  last_name: string,
  city: string,
  phone: string,
  mail: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("tableNumber") tableNumber: ElementRef;
  id: number;
  clients: Client[];
  answerFromServer: string;
  loadClients: any;
  files : any;
  constructor() {
    this.randomNumber();
    this.clients = [];
    this.loadClients = [];
  }

  ngOnInit(): void {
    this.files = null;
    this.getFiles();
    this.clients = [
      { id: this.id, first_name: "Matan", last_name: "Atiya", city: "Beer-Sheva", phone: "052-4404494", mail: "matan@gmail.com" },
      { id: this.id, first_name: "Daniel", last_name: "Brosh", city: "Ashkelon", phone: "054-5796354", mail: "daniel@gmail.com" },
      { id: this.id, first_name: "Uriel", last_name: "Alfasi", city: "Hafia", phone: "052-3396354", mail: "uriel@gmail.com" }
    ]
    this.clients = this.clients.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
  }

  mailto(mail: string): string {
    return "mailto:" + mail;
  }
  saveTable() {
    const obj = { id: this.id, table: this.clients };
    fetch("http://localhost:5000/", {
      method: 'POST',
      body: JSON.stringify(obj)
    }).then(response => response.text())
      .then(data => {
        this.answerFromServer = data;
      });
  }
  randomNumber() {
    this.id = Math.floor(Math.random() * 1000);
  }
  loadTable() {
    const tableNumber = this.tableNumber.nativeElement.options[this.tableNumber.nativeElement.selectedIndex].value;
    if (tableNumber) {
      fetch("http://localhost:5000/?tableNum=" + tableNumber + "").then((res) => {
        return res.json();
      }).then((data) => {
        this.loadClients = JSON.stringify(data);
        this.loadClients = JSON.parse(this.loadClients);
        this.loadClients = this.loadClients.table;
      });
    }
  }
  getFiles() {
    fetch("http://localhost:5000").then((res) => {
      return res.json();
    }).then((data) => {
      this.files = data;
    });
  }
}
