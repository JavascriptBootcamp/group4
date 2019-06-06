import { Component, OnInit } from '@angular/core';
import { Message } from '../Message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  endPoint: string;
  messages: Message[];
  hasMore: boolean;
  page: number;
  search: string;
  constructor() { 
    this.endPoint = "http://192.168.25.45:8000";
    this.search = "";
    this.initValues();
  
  }

  initValues() {
    this.messages = [];
    this.page = 1;
    this.hasMore = false;
  }
  ngOnInit() {
  }
  searchMessages(event: Event, quary: HTMLInputElement) {
    event.preventDefault();
    this.initValues();
    this.search = quary.value;
    this.loadMore();
  }

  loadMore() {
    const url = `${this.endPoint}&page=${this.page}&s=${this.search}`;
    fetch(url)
      .then(response => response.json())
      .then(data => data.Search ? this.setMessages(data.Search):this.disableLoadMore());
// .then(data=>this.setMovies(data.Search));
  }

  setMessages(messages: Message[]) {
   
    this.messages = this.messages.concat(messages);
    this.page++;
    this.hasMore = true;
  }

  disableLoadMore(): void {
    this.hasMore = false;
  }
}
