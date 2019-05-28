import { Injectable } from '@angular/core';
import { Client } from "./Client.model";


@Injectable({
  providedIn: 'root'
})
export class FuncToServerService {
  clients:Client[]; 
  counterFile: number;
  files: string[];

  constructor() {
    this.clients = [];
    this.counterFile = 2;
    this.files = ["contact1.json", "contact2.json"];

  }

  getClients() {
    return this.clients;
  }

  newContactFile() {
    this.counterFile++;
    let fileName = `contact${this.counterFile}.json`;
    this.files.push(fileName);
    console.log(this.files);
    return fileName;
  }


  saveTofile(clients) {
    let fileName = this.newContactFile();
    fetch('http://localhost:5000', {
      method: 'POST',
      body: JSON.stringify({ method: "POST", fileName: fileName, data: clients })
    });

    this.setLocalStorage(fileName, JSON.stringify(clients));
  }


  loadFromServer(fileName: string) {
    console.log(fileName);

    if (localStorage.getItem(fileName))
      this.getLocalStorage(fileName);

    else {

      fetch('http://localhost:5000/', {
        method: 'POST',
        body: JSON.stringify({ method: "GET", fileName: fileName })
      }).then(response => response.text())
        .then(data => {
          this.clients = JSON.parse(data);
        });
    }
  }

  getLocalStorage(fileName: string) {
    let data = localStorage.getItem(fileName)
    this.clients = JSON.parse(data);
  }

  setLocalStorage(fileName: string, data: string) {
    localStorage.setItem(fileName, data);
  }

}
