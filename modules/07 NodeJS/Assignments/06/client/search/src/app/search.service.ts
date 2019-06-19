import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = "http://localhost:5000/file";
  data: string[];

  constructor() {
    this.data = [];
   }

  async post(filesToSearch: object){
    const md = {
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(filesToSearch)
    };
    const response = await fetch(this.url,md);
    const data1 = await response.json();
    console.log(data1);
  }
  getPostResult(){
    return this.data;
  }
}
