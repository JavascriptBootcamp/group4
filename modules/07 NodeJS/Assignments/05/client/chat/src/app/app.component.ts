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
  selection: string;
  chat: Message[];

  constructor(private messageService: MessageService){
    this.chat = [];
    this.selection = "POST";

  }
  run(selection: string, id: string, author: string, message: string){
    this.selection = selection;
    this.messageService.run(selection,id,author,message);
  }

  changeSelection(selection){
    this.selection = selection;
  }

  isIDDisabled(): boolean{
    return this.selection === "POST" || this.selection === "GET";
  }

  isAuthorDisabled(): boolean{
    return ! (this.selection === "POST");
  }

  isMessageDisabled(): boolean{
    return this.selection === "DELETE" || this.selection === "GET";
  }
}
