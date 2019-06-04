import { Component, ViewChild, ElementRef } from '@angular/core';
import { Imessage } from './app.message.model';
import { MessageService } from './message.service';
import { Method } from './method.model';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chat';
  @ViewChild("f") form;
  // @ViewChild("selection") methodElement;
  // @ViewChild("IDI") idElement;
  // @ViewChild("authorI") authorElement;
  // @ViewChild("messageI") messageElement;

  method: string;
  id: number;
  author: string;
  message: string;

  chat: Imessage[];
  searchKey: string;
  isLoadMoreDisabled: boolean;
  isLoadMoreHidden: boolean;
  minLengthFlag: boolean;
  authorReqFlag: boolean;
  mode: string;

  constructor(private messageService: MessageService) {
    this.chat = [];
    this.method = Method.POST;
    this.isLoadMoreDisabled = false;
    this.isLoadMoreHidden = true;
    this.searchKey = '';
    this.minLengthFlag = false;
    this.authorReqFlag = false;
  }

  onSubmit(e) {
    this.authorReqFlag = false;
    this.minLengthFlag = false;
    if(this.mode === "search"){
      this.searchMessage();
      this.mode = "";
      return;
    }

    // Input error handler
    switch (this.method) {
      case Method.GET: {
        break;
      }

      case Method.PUT: {
        let authorI: string = this.form.controls.chatinputs.controls._author.value;
        if (!authorI || (authorI && authorI.length === 0)) {
          this.authorReqFlag = true;
          this.messageService.clearChat();
          this.clearInputs();
          return;
        }
        break;
      }

      case Method.POST: {
        let messageI: string = this.form.value.chatinputs._message;
        let authorI: string = this.form.controls.chatinputs.controls._author.value;

        if (!messageI || (messageI && messageI.length < 4)) {
          this.minLengthFlag = true;
          this.messageService.clearChat();
          this.clearInputs();
          return;
        }
        if (!authorI || (authorI && authorI.length === 0)) {
            this.authorReqFlag = true;
            this.messageService.clearChat();
            this.clearInputs();
          return;
        }
        break;
      }
    }

    this.run(this.method, this.id, this.author, this.message);
  }

  clearChat(){
    this.messageService.clearChat();
  }

  run(selection: string, id: number, author: string, message: string) {
    this.messageService.run(selection, id, author, message);
    this.clearInputs();
  }

  changeSelection(selection) {
    this.method = selection;
  }

  isIDDisabled(): boolean {
    return this.method === Method.POST || this.method === Method.GET;
  }

  isAuthorDisabled(): boolean {
    return !(this.method === Method.POST);
  }

  isMessageDisabled(): boolean {
    return this.method === Method.DELETE || this.method === Method.GET;
  }

  onDeleteClicked(id: number) {
    this.messageService.run(Method.DELETE, id, null, null);
  }

  onEditClicked(m: Imessage) {
    this.id = m.id;
    this.message = m.message;
    this.author = m.author;

    this.method = Method.PUT;

  }

  onSearchMessage(searchKey: string) {
    this.mode = "search";
    this.searchKey = searchKey;

  }

  searchMessage(){
    this.isLoadMoreHidden = true;
    this.isLoadMoreDisabled = false;
    this.messageService.isInSearch = false;

    this.messageService.clearChat();
    this.messageService.searchMessage(this.searchKey, 1);


    if (this.messageService.isInSearch)
      this.isLoadMoreHidden = false;
  }

  loadMore() {
    this.messageService.loadMore(this.searchKey);
    if (!this.messageService.isInSearch)
      this.isLoadMoreDisabled = true;
  }

  clearInputs() {
    // this.id = "";
    this.message = "";
    this.author = "";
    this.method = Method.GET;
    this.isLoadMoreHidden = true;
    this.isLoadMoreDisabled = false;
    this.searchKey = '';
  }
}
