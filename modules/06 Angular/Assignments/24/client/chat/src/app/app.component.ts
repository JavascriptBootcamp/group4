import { Component, ViewChild, ElementRef } from '@angular/core';
import { Imessage } from './app.message.model';
import { MessageService } from './message.service';
import { Method } from './method.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild("selection")
  methodElement: ElementRef;

  @ViewChild("IDI")
  idElement: ElementRef;

  @ViewChild("authorI")
  authorElement: ElementRef;

  @ViewChild("messageI")
  messageElement: ElementRef;

  title = 'chat';
  method: string;
  chat: Imessage[];
  searchKey: string;
  isLoadMoreDisabled: boolean;
  isLoadMoreHidden: boolean;


  constructor(private messageService: MessageService){
    this.chat = [];
    this.method = Method.POST;
    this.isLoadMoreDisabled = false;
    this.isLoadMoreHidden = true;
    this.searchKey ='';

  }
  run(selection: string, id: string, author: string, message: string){
    this.method = selection;
    this.messageService.run(selection,id,author,message);
    //this.clearInputs();
  }

  changeSelection(selection){
    this.method = selection;
  }

  isIDDisabled(): boolean{
    return this.method === Method.POST || this.method === Method.GET;
  }

  isAuthorDisabled(): boolean{
    return ! (this.method === Method.POST);
  }

  isMessageDisabled(): boolean{
    return this.method === Method.DELETE || this.method === Method.GET;
  }

  onDeleteClicked(id: string){
    this.messageService.run(Method.DELETE,id,null,null);
  }

  onEditClicked(m: Imessage){
    // console.log("this.idElement:",this.idElement);
    // console.log("this.messageElement:",this.messageElement);
    // console.log("this.authorElement:",this.authorElement);

    this.idElement.nativeElement.value = m.id;
    this.messageElement.nativeElement.value = m.message;
    this.authorElement.nativeElement.value = m.author;

    this.methodElement.nativeElement.value = Method.PUT;

  }

  onSearchMessage(searchKey: string){
    this.isLoadMoreHidden = true;
    this.isLoadMoreDisabled = false;
    this.messageService.isInSearch = false;
    this.isLoadMoreHidden = true;

    this.searchKey = searchKey;
    console.log("searchKey:",searchKey);
    this.messageService.searchMessage(searchKey,1);
    if(this.messageService.isInSearch)
      this.isLoadMoreHidden = false;
  }

  loadMore(){
    // this.isLoadMoreHidden = true;
    // this.isLoadMoreDisabled = false;

    this.messageService.loadMore(this.searchKey);
    if(!this.messageService.isInSearch)
      this.isLoadMoreDisabled = true;


    // this.isLoadMoreHidden = !this.messageService.isInSearch;
    // this.isLoadMoreDisabled = !this.isLoadMoreHidden;

  }

  clearInputs(){
    this.idElement.nativeElement.value = "";
    this.messageElement.nativeElement.value ="";
    this.authorElement.nativeElement.value = "";
    this.methodElement.nativeElement.value = Method.GET;
    this.isLoadMoreHidden = true;
    this.isLoadMoreDisabled = false;
    this.searchKey = '';
  }
}
