import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputMess') inputMess: ElementRef;
  isEditing: boolean;
  currentMessage: IMessage;

  constructor(public chatService: ChatService) {
    this.isEditing = null;
  }

  ngOnInit(): void {
    this.chatService.getMessages();
  }
  onSubmitForm(username: string, message: string) {
    this.chatService.sendMessage(username, message);
  }
  onUpdateForm(newMess: string) {
    this.isEditing = null;
    this.chatService.sendToUpdateMessage(this.currentMessage.id, newMess);
    this.setInputFields("", "");
  }
  onSubmitSearch(messSearch: string) {
    this.chatService.searchMessages(messSearch);
  }
  deleteMessage(id: number) {
    this.chatService.sendToDeleteMessage(id);
  }
  editMessage(messageContent: IMessage) {
    this.isEditing = true;
    this.currentMessage = messageContent;
    this.setInputFields(this.currentMessage.author, this.currentMessage.message);
  }
  setInputFields(name, mess) {
    this.inputName.nativeElement.value = name;
    this.inputMess.nativeElement.value = mess;
  }
  downloadLogChat() {
    this.chatService.downloadLogFile();
  }
  loadMoreMessages() {
    this.chatService.loadMoreMessages();
  }
  backToChat() {
    this.chatService.backToChat();
  }
  ngOnDestroy(): void {
    window.clearInterval(this.chatService.interval);
  }

}
