import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

   onSearchClicked = new EventEmitter<{searchValue:string,searchClicked:boolean}>();
  

  async getMessages(searchValue:string,url:string,searchStartIndex:number,searchEndIndex:number){
     const url_Q = `${url}/?searchValue=${searchValue}&searchStartIndex=${searchStartIndex}&searchEndIndex=${searchEndIndex}`;
     const response = await fetch(url_Q);
     const data = await response.json();
     console.log(response,data)
     return data;
   }

}
