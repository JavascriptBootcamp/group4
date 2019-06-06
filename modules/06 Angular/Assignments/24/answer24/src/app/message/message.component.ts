import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../Message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  endPoint: string;
  messageDetails: string[];
  constructor() {
    this.endPoint="http://192.168.25.45:8000";
    this.messageDetails = [ ];
  }

  showDetails(id: string) {
    const url=`${this.endPoint}&i=${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setData(data))
  }
  setData(data: object) {
    for (let detail in data) {

      this.messageDetails.push(`${detail}: ${data[detail]}`)

    }
  }
  ngOnInit() {
  }

}
