import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

 interface IMessage {
  id: number;
  author: string;
  message: string;
}

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url: string;
  messages: IMessage[];
  errMsg: string;
  isErr: boolean;
  messagesSearched: IMessage[];
  pageMessages: IMessage[];
  pageNumber: Number;
  numberOfPages: number;
  constructor() {
    this.url = "http://localhost:8000";
    this.messages = [];
    this.errMsg = "insert at least 3 letters";
    this.isErr = false;
    this.messagesSearched = [];
    this.pageMessages = [];
    this.pageNumber = 1;
    this.numberOfPages = 0;
  }

   ngOnInit() {
    this.getMessages();
  }

   getMessages() {
    const delay = 2000;
    setInterval(async () => {
      const response = await fetch(this.url);
      const data = await response.json();
      this.messages = data.result;
      //console.log(data);
    }, delay);
  }

   onSubmitForm(f: NgForm) {
     const { username, message } = f.value;
    this.sendMessage(username, message);
  }

   async sendMessage(username: string, message: string) {
    
     const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Author: username,
        Message: message
      })
    });
  }

  search(searchRef: NgForm) {
    this.clearAll();
    if (searchRef.valid && searchRef.value !== undefined && searchRef.value !== "") {
      this.isErr = false;
      this.searchInArr(searchRef.value);
      this.checkNumberOfPages();
      this.displayPageMessages();
    }
    else {
      this.isErr = true;
    }
  }
  clearAll() {
    this.pageNumber = 1;
    this.numberOfPages = 0;
  }
  searchInArr(searchKeywords: string) {
    this.messagesSearched = [];
    for (let m of this.messages) {
      if (m.message.includes(searchKeywords)) {
        this.messagesSearched.push(m);
      }
    }
  }
  checkNumberOfPages() {
    this.numberOfPages = Math.ceil(this.messagesSearched.length / 5);
  }
  displayPageMessages() {
    this.pageMessages = [];
    const from = (Number(this.pageNumber) - 1) * 5;
    const till = Number(this.pageNumber) * 5;
    for (let i = from; i < till; i++) {
      if (this.messagesSearched[i]) {
        this.pageMessages.push(this.messagesSearched[i]);
      }
    }
  }
  nextPage() {
    this.pageNumber = Number(this.pageNumber) + 1;
    this.displayPageMessages();
  }
}