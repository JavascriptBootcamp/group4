import { Injectable } from '@angular/core';
import { Message } from './app.message.model';

const urlServer = "http://localhost:8000";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  chat: Message[];
  constructor() {
    this.chat = [];
  }

  get() {
    let conf = { method: 'GET'};
    fetch(urlServer,conf).then(data=>{
      this.chat = [];
      data.json().then(content=>{
        this.chat = content.result;
      })
    });
  }

  post(author: string, message: string) {
    let body;
    body = { author:author, message:message
};
    let conf = { method: 'POST',
                 body: JSON.stringify(body),
                 headers:{'Content-Type': 'application/json'} };

    fetch(urlServer,conf).then(data=>{
      data.text().then(content=>{
        console.log(content);
        this.get();
      })
    });

  }

  put(id: number, message: string) {
    let body = { message };
    let conf = { method: 'Put',
                 body: JSON.stringify(body),
                 headers:{'Content-Type': 'application/json'} };
    const newUrl = urlServer + `?id=${id}`;
    fetch(newUrl,conf).then(data=>{
      data.text().then(content=>{
        this.get();
        console.log(content);
      })
    });
  }

  delete(id: number) {
    const newUrl = urlServer + `?id=${id}`;
    let conf = { method: 'Delete',
                 headers:{'Content-Type': 'application/json'} };
    fetch(newUrl,conf).then(data=>{
      data.text().then(content=>{
        this.get();
        console.log(content);
      })
    });
  }

  run(method: string, id: string, author: string, message: string) {
    console.log("method:",method);
    switch (method) {
      case "POST":
        this.post(author, message);
        break;
      case "GET":
        this.get();
        break;
      case "PUT":
        this.put(+id, message);
        break;
      case "DELETE":
        this.delete(+id);
        break;
    }
  }
}
