import { Component, OnInit } from '@angular/core';
import { SeviceToServerService } from "../sevice-to-server.service";

@Component({
  selector: 'app-chat-desk',
  templateUrl: './chat-desk.component.html',
  styleUrls: ['./chat-desk.component.css']
})

export class ChatDeskComponent implements OnInit {
 
  constructor(private seviceToServerService:SeviceToServerService)
   { 
   }

  ngOnInit() {
  }

  sendMessage(event:Event,author: HTMLInputElement,message: HTMLInputElement ){
    this.seviceToServerService.sendMessage(author.value,message.value);
    event.preventDefault();
    console.log(this.seviceToServerService.messages);
  }

}
