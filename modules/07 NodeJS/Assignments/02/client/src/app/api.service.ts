import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  result:string;
  constructor() { }
  sendToServer(info){
    fetch('http://localhost:4200',{
    method: 'POST',
    body: JSON.stringify(info)
    }).then(response => response.text())
    .then(data => this.result = data);
  }
}
