import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { chat } from './chat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('message') message: ElementRef;
  @ViewChild('username') username: ElementRef;
  @ViewChild('updateMsg') updateMsg: ElementRef;
  chat: chat[];
  id: number;
  url: string;
  isEditing: boolean;
  editingId: number;
  constructor() {
    this.url = "http://localhost:8000/";
    this.chat = [];
    this.id = null;
    this.isEditing = false;
    this.editingId = null;
  }
  ngOnInit() {
    const delay = 2000;
    setInterval(async () => {
      this.chat = await fetch(this.url).then(res => res.json());
    }, delay);
  }
  async postMessage(e: Event) {
    e.preventDefault();
    this.generateId();
    const message = this.message.nativeElement.value;
    const username = this.username.nativeElement.value;
    const msg = { username, message }
    const response = await fetch(this.url + "?id=" + this.id, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(msg)
    });
    return response.json();
  }
  async removeMessage(msgId: number) {
    const response = await fetch(this.url + "?id=" + msgId, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' }
    })
    return response.json();
  }
  async updateMessage(e: Event) {
    e.preventDefault();
    this.isEditing = false;
    const response = await fetch(this.url + "?id=" + this.editingId, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: this.updateMsg.nativeElement.value })
    })
    return response.json();

  }
  changeEditingState(id: number) {
    this.editingId = id;
    this.isEditing = true;
  }
  generateId() {
    this.id = Math.floor(Math.random() * 10000000);
  }
  downloadFile() {
    fetch(this.url + "download");
  }
}
