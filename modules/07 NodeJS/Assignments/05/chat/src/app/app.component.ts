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

  constructor() {
    this.url = "http://192.168.25.45:8000";
    this.messages = [];
    this.isEditing = false;
    this.currentMessage = null;
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
      console.log(data);
    }, delay);
  }

  onSubmitForm(f: NgForm) {
    console.log("Form Content", f);

    const { username, message } = f.value;
    this.sendMessage(username, message);
  }

  async sendMessage(username: string, message: string) {
    // fetch(url, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'applciation/json'},
    //   body: JSON.stringify({
    //     Author: username,
    //     Message: message
    //   })
    // }).then( response => response.json() )
    // .then( data => console.log("Fetch - POST", data) );

    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Author: username,
        Message: message
      })
    });
    this.logData(await response.json());
  }

  async deleteMessage(id: number) {
    const response = await fetch(`${this.url}?id=${id}`, {
      method: 'DELETE'
    });
    this.logData(await response.json());
  }

  editMessage(messageContent: IMessage) {
    this.isEditing = true;
    this.currentMessage = messageContent;
  }

  logData(data: string) {
    console.log(data);
  }
}
