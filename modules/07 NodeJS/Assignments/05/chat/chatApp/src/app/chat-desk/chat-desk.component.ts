import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-desk',
  templateUrl: './chat-desk.component.html',
  styleUrls: ['./chat-desk.component.css']
})
export class ChatDeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendMassage(event:Event){
    event.preventDefault();
    console.log(event);
  }

}
