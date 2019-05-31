import { Component } from '@angular/core';
import { Message } from './app.message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chat';
  chat: Message[];

  constructor(){
    this.chat = [];
    this.chat.push(
      {
      id: 1,
      author: 'Daniel',
      message: 'Message 1'}
    );
  }
}
