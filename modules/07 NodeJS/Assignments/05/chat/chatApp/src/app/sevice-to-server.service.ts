import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeviceToServerService {
  messages: object[];
  constructor() {
    this.messages = [];
  }


  sendMessage(_author: string, _message: string): any {

    const url = `http://localhost:8000/`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ author: _author, message: _message }),
      headers: {"Content-Type": "application/json"}
    })
      .then(response => response.text())
      .then(data => {
        this.messages.push(JSON.parse(data));
      });
    
  }

  loadMessages() {
    const url = `http://localhost:8000/`;

    fetch(`${url}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
          this.messages.push(data.result[data.result.length-1]);
      });

  }


}
