import { Injectable } from '@angular/core';
import { Imessage } from './app.message.model';
import { Method } from './method.model';

const step = 5;


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  urlServer: string;
  chat: Imessage[];
  page: number;
  isInSearch: boolean;
  constructor() {
    this.urlServer = "http://localhost:8000";
    this.chat = [];
    this.page = 1;
    this.isInSearch = false;
  }

  get(query='') {
    let conf = { method: Method.GET};
    let url = this.urlServer + query;
    if(!this.isInSearch){
      this.isInSearch = true;
      this.chat = [];
    }
    fetch(url,conf).then(data=>{
      // this.chat = [];
      data.json().then(content=>{
        if(content.result.length>0){
          this.chat=this.chat.concat(content.result);
          if(content.result.length < step)
            this.isInSearch = false;
        }
        else 
         this.isInSearch = false;
      })
    });
  }

  post(author: string, message: string) {
    let body;
    body = { author:author, message:message
};
    let conf = { method: Method.POST,
                 body: JSON.stringify(body),
                 headers:{'Content-Type': 'application/json'} };

    fetch(this.urlServer,conf).then(data=>{
      data.text().then(content=>{
        this.get();
      })
    });

  }

  put(id: number, message: string) {
    let body = { message };
    let conf = { method: Method.PUT,
                 body: JSON.stringify(body),
                 headers:{'Content-Type': 'application/json'} };
    const newUrl = this.urlServer + `?id=${id}`;
    fetch(newUrl,conf).then(data=>{
      data.text().then(content=>{
        this.get();
      })
    });
  }

  delete(id: number) {
    const newUrl = this.urlServer + `?id=${id}`;
    let conf = { method: Method.DELETE,
                 headers:{'Content-Type': 'application/json'} };
    fetch(newUrl,conf).then(data=>{
      data.text().then(content=>{
        this.get();
      })
    });
  }

  clearChat(){
    this.chat = [];
  }

  run(method: string, id: number, author: string, message: string) {
    this.page = 1;
    this.chat = [];
    this.isInSearch = false;
    switch (method) {
      case Method.POST:
        this.post(author, message);
        break;
      case Method.GET:
        this.get();
        break;
      case Method.PUT:
        this.put(+id, message);
        break;
      case Method.DELETE:
        this.delete(+id);
        break;
    }
  }

  searchMessage(searchKey: string, page: number){
    this.page = page;
    // if(this.page === 1)
    //   this.chat = [];
    this.get(`?searchKey=${searchKey}&page=${Math.floor(page)}`);
  }

  // onSearchMessage(searchKey: string, page: number=1){
  //   this.searchMessage(searchKey,page);
  //     this.get(`?searchKey=${searchKey}&page=${Math.floor(page)}`);
  // }

  loadMore(searchKey: string){
    this.page++;
    this.searchMessage(searchKey,this.page);
  }
}
