import { Injectable } from '@angular/core';
import { Client } from './model.client';
@Injectable({
  providedIn: 'root'
})

export class FilesService {
  clients: Client[];
  fileName: string;
  filesNames: string[];
  fileCounter: number;
  constructor() {
    this.clients = [
      { first_name: "Matan", last_name: "Atiya", city: "Beer-Sheva", phone: "052-4404494", mail: "matan@gmail.com" },
      { first_name: "Daniel", last_name: "Brosh", city: "Ashkelon", phone: "054-5796354", mail: "daniel@gmail.com" },
      { first_name: "Uriel", last_name: "Alfasi", city: "Hafia", phone: "052-3396354", mail: "uriel@gmail.com" }
    ];
    this.fileCounter = 1;
    this.fileName = `contacts${this.fileCounter}.json`;
    this.loadContactsFiles();
   }

   getClients(){
     return this.clients;
   }

   getPostObject() {
    return { method: 'POST', fileName: this.fileName, data: this.clients };
  }

  getGetObject() {
    return { method: 'GET', fileName: this.fileName };
  }

  saveContacts() {
    fetch('http://localhost:5000/', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(this.getPostObject())
    }).then(res=>this.loadContactsFiles());
  }

  loadContacts(selectFiles) {
    this.fileName = selectFiles.value;

    fetch('http://localhost:5000/', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(this.getGetObject())
    }).then(response => response.text())
      .then(data =>{
        this.clients = JSON.parse(data);
        this.setFileNameByCounter();
      });
  }

  loadContactsFiles(){
    fetch('http://localhost:5000/?json', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    }).then(response => response.text())
      .then(data =>{
        this.filesNames = JSON.parse(data);
        this.setFileNameByCounter();
        console.log(this.fileName,this.fileCounter);
      });
  }

  setFileNameByCounter(){
    this.fileCounter = this.filesNames.length + 1;
    this.fileName = `contacts${this.fileCounter}.json`;
  }

}
