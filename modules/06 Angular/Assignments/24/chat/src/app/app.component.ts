import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
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
  searcMessages:IMessage[];
  fiveMessages:IMessage[];
  isEditing: boolean;
  isSearching:boolean;
  currentMessage: IMessage;
  searchMessageIndex:number;
  @ViewChild('loadmr')loadmr:ElementRef;
  constructor() {
    this.url = "http://10.0.0.5:8000";
    this.messages = [];
    this.isEditing = false;
    this.isSearching = false;
    this.currentMessage = null;
    this.fiveMessages = [];
    this.searchMessageIndex=0;
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
  cancelSearch(e){
    e.preventDefault();
    this.isSearching = false;
    console.log(this.isSearching)
  }
searchMassage(e,quary){
  e.preventDefault();
  console.log(quary.value)
  this.isSearching = true;
  this.searcMessages= this.messages.filter(message => message.message.includes(quary.value))
  console.log(this.searcMessages)
  if(this.searcMessages.length <= 5){
    for (let i = 0; i < this.searcMessages.length; i++) {
      this.fiveMessages[i] = this.searcMessages[i];
    }
    this.loadmr.nativeElement.disabled=true;
    return
  }else{
    for (let i = 0; i < 5; i++) {
      this.fiveMessages[i] = this.searcMessages[i];
    }
    this.searchMessageIndex=4;
  }
}
  loadMore() {
    if(this.searcMessages.length%5===0){
      this.loadmr.nativeElement.disabled = true;
    }
    let sliceIndex=-1;
    if (this.searchMessageIndex + 5 < this.searcMessages.length) {
      this.searchMessageIndex++;
      for (let j = 0, i = this.searchMessageIndex; i < this.searchMessageIndex + 5; i++ , j++) {
        this.fiveMessages[j] = this.searcMessages[i];
      }
      this.searchMessageIndex = this.searchMessageIndex + 5;
    } else {
      //this.searchMessageIndex++;
      for (let j = 0, i = this.searchMessageIndex+1; i < this.searcMessages.length; i++ , j++) {
        this.fiveMessages[j] = this.searcMessages[i];
        sliceIndex=j;
      }
      this.fiveMessages=this.fiveMessages.slice(0, sliceIndex+1)
      this.loadmr.nativeElement.disabled = true;

    }
  }


  logData(data: string) {
    console.log(data);
  }
}
