import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string;
  files : string[] = [];

  constructor() {
    this.url = "http://localhost:5000/file";
 
  }

  async searchMessages(file: string) {
    this.files.indexOf(file) === -1 ? this.files.push(file) : console.log("This item already exists");
    await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        files: this.files
      })
    });
  }
}
