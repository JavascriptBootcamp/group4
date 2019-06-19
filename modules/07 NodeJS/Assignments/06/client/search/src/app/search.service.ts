import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = "http://localhost:5000/file";

  constructor() {
   }

  async post(filesToSearch: object){
    const md = {
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(filesToSearch)
    };
    const response = await fetch(this.url,md);
    return await response.json();
  }
}
