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
  isEditing: boolean;
  currentMessage: IMessage;
  resultSearch: IMessage[];
  showSearchResult: boolean;
  loadDisable: boolean;
  numberOfSearchResults: number;
  messageModel: string;

  constructor() {
    this.url = "http://localhost:8000";
    this.messages = [];
    this.isEditing = false;
    this.currentMessage = null;
    this.showSearchResult = false;
    this.loadDisable = false;
  }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    const delay = 2000;
    window.setInterval(async () => {
      const response = await fetch(this.url);
      const data = await response.json();
      this.messages = data.result;
      console.log(data);
    }, delay);
  }

  onSubmitForm(f: NgForm) {
    console.log("Form Content", f);
    const { username, message } = f.value;
    this.sendMessage(username, message);
  }

  onUpdateForm(f: NgForm) {
    const { message } = f.value;
    this.onUpdate(this.currentMessage.id, message);
    this.isEditing = false;
    this.messageModel = "";
  }

  async onUpdate(id: number, newMessage: string) {
    const response = await fetch(`${this.url}?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: newMessage
      })
    });
  }

  async onSubmitSearch(valueSearch: string) {
    const response = await fetch(`${this.url}?search=${valueSearch}`);
    const data = await response.json();
    this.resultSearch = data.result;
    console.log(this.resultSearch);
    this.numberOfSearchResults = 0;
    this.loadDisable = null;
    this.loadResult();
    this.showSearchResult = true;
  }

  loadResult() {
    if (this.resultSearch.length - 1 <= this.numberOfSearchResults + 5)
      this.loadDisable = true;
    this.numberOfSearchResults = this.numberOfSearchResults + 5;
  }

  toggleSearch() {
    this.showSearchResult = !this.showSearchResult;

  }

  async sendMessage(username: string, message: string) {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Id: Math.floor((Math.random() * 1000) + 1),
        Author: username,
        Message: message
      })
    });
    this.logData(await response.json());
  }

  async deleteMessage(id: number) {
    console.log(id);
    const response = await fetch(`${this.url}?id=${id}`, {
      method: 'DELETE'
    });
    this.logData(await response.json());
  }

  editMessage(messageContent: IMessage) {
    this.isEditing = true;
    this.currentMessage = messageContent;
    this.messageModel = messageContent.message;
  }

  logData(data: string) {
    console.log(data);
  }

  downloadLog() {
    window.open(`${this.url}/download`, "myWindow", "width=200,height=100");
  }

  ngOnDestroy(): void {
    window.clearInterval();
  }

}
