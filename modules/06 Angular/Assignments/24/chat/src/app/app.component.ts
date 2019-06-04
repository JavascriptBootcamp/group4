import { Component,OnInit } from '@angular/core';
import {ChatService} from './chat.service'
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
  title = 'chat';
  messages:IMessage[];
  url: string;
  isloadMore:boolean;
  searchStartIndex : number;
  searchEndIndex : number;
  searchValue:string;
  searchClicked : boolean;
  constructor(private chatService:ChatService){
   this.messages = [];
   this.url = "http://127.0.0.1:8000";
   this.isloadMore = false;
   this.searchStartIndex = 0;
   this.searchEndIndex = 0;
   this.searchValue = "";
   this.searchClicked = false;
  }

  ngOnInit(){

    this.chatService.onSearchClicked.subscribe(
      (obj)=>{
        this.searchClicked = obj.searchClicked;
        if(this.searchClicked){
          this.searchStartIndex = 0;
          this.searchEndIndex = 5;
          this.searchValue = obj.searchValue;
          this.getResults();
        }
       
      }
    )

  }


  async getResults(){
    const result = await this.chatService.getMessages(this.searchValue,this.url,this.searchStartIndex,this.searchEndIndex);
    this.messages = result["result"]["newChat"];
    this.isloadMore = result["result"]["isloadMore"];
    console.log(  this.messages,this.isloadMore  )
  }

  loadMore(){
    this.searchStartIndex += 5;
    this.searchEndIndex += 5;
    this.getResults();

  }


  onSubmitForm(f: NgForm) {
    console.log("Form Content", f);

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
    this.logData(await response.json());
  }


  logData(data: string) {
    console.log(data);
  }
}
