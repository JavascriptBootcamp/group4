import { Component } from '@angular/core';
import { Message } from './app.message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chat';
  chat: Message[];

  constructor(private messageService: MessageService){
    this.chat = [];
    // this.chat.push(
    //   {
    //   id: 1,
    //   author: 'Daniel',
    //   message: 'Message 1'}
    // );
  }
  go(selection: string, id: string, author: string, message: string){
    this.messageService.go(selection,id,author,message);
  }
}
