import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { BodyData } from '../models/bodyData.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients: Client[];
  url: string;
  data: BodyData;
  fileCounter: number;
  fileNames: string[];

  constructor() {
    this.clients = [
      { first_name: "Matan", last_name: "Atiya", city: "Beer-Sheva", phone: "052-4404494", mail: "matan@gmail.com" },
      { first_name: "Daniel", last_name: "Brosh", city: "Ashkelon", phone: "054-5796354", mail: "daniel@gmail.com" },
      { first_name: "Uriel", last_name: "Alfasi", city: "Hafia", phone: "052-3396354", mail: "uriel@gmail.com" }
    ]
    this.url = 'http://localhost:5000';
    this.data = { method: "", fileName: "" };
    this.fileCounter = 1;
    this.fileNames = [];
  }
  sortClient(): void {
    this.clients.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0));
  }
  async saveInServer() {
    let fileName: string = `contacts${this.fileCounter++}.json`;
    this.data = { method: "POST", fileName: fileName, body: this.clients };
    try {
      await this.callServer(this.data);
      this.fileNames.push(fileName);
    } catch (error) {
      console.log(error);
    }
  }
  loadFromServer(fileName: string): void {
    this.data = { method: "GET", fileName: fileName };
    this.callServer(this.data)
      .then(response => response.json())
      .then(data => this.clients = (data));
  }

  private callServer(dataToSend): Promise<any> {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(dataToSend)
    })
  }
}
