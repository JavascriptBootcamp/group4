import { Injectable } from '@angular/core';
import { Message } from './app.message.model';

const url = "http://localhost:8000";

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
    fetch(url,conf).then(data=>{
      console.log("data:",data);
      data.json().then(content=>{
        console.log((content));
        this.chat.push((content.result));
        console.log(this.chat);

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

    fetch(url,conf).then(data=>{
      data.text().then(content=>{
        console.log(content);
      })
    });

  }

  put(id: number, message: string) {
    let body = { message };
    let conf = { method: 'Put',
                 body: JSON.stringify(body),
                 headers:{'Content-Type': 'application/json'} };
    const newUrl = url + `?id=${id}`;
    fetch(newUrl,conf).then(data=>{
      data.text().then(content=>{
        console.log(content);
      })
    });
  }

  delete(id: number) {
    const newUrl = url + `?id=${id}`;
    fetch(newUrl).then(data=>{
      data.text().then(content=>{
        console.log(content);
      })
    });
  }

  go(method: string, id: string, author: string, message: string) {
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
