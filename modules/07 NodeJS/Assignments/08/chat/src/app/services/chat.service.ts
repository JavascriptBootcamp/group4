import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url: string;
  messages: IMessage[];
  searchMess: boolean;
  interval: number;
  messInPage: number;
  showMess: number;

  constructor() {
    this.url = "http://localhost:8000";
    this.messages = [];
    this.searchMess = false;
    this.interval = 0;
    this.messInPage = 5;
    this.showMess = 5;
  }

  getMessages() {
    const delay = 2000;
    this.interval = window.setInterval(async () => {
      const response = await fetch(this.url);
      const data = await response.json();
      this.messages = data.result;
    }, delay);
  }
  async searchMessages(messSearch: string) {
    const response = await fetch(`${this.url}?search=${messSearch}`);
    const data = await response.json();
    window.clearInterval(this.interval);
    this.messages = data.result;
    this.searchMess = true;

  }
  async sendMessage(username: string, message: string) {
    await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Author: username,
        Message: message
      })
    });
  }
  
  async sendToDeleteMessage(id: number) {
    await this.deleteMessage(id);
    if (this.searchMess)
      this.searchMessages(this.messages[0].message);
  }
  async deleteMessage(id: number) {
    await fetch(`${this.url}?id=${id}`, {
      method: 'DELETE'
    });
  }
  async sendToUpdateMessage(id: number, message: string) {
    await this.updateMessage(id, message);
    if (this.searchMess)
      this.searchMessages(this.messages[0].message);
  }
  async updateMessage(id: number, message: string) {
    await fetch(`${this.url}?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message
      })
    });
  }
  loadMoreMessages() {
    this.showMess += this.messInPage;
  }
  backToChat() {
    this.searchMess = false;
    this.showMess = this.messInPage;
    this.messages = [];
    this.getMessages();
  }

}
