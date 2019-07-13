import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  setLocalStorgae(name : string , data : any){
    localStorage.setItem(name,JSON.stringify(data));
    return fetch('http://localhost:8000/author' , {
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(data)
    });
  }
  getLocalStorgae(name : string){
    return JSON.parse(localStorage.getItem(name))
  }
}
