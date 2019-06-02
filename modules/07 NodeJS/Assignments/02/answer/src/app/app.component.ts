import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('selectFile') selectFile: ElementRef;
  constructor(public clientsService: ClientsService) {
  }

  ngOnInit(): void {
    this.clientsService.sortClient();
  }

  mailto(mail: string): string {
    return "mailto:" + mail;
  }
  save(): void {
    this.clientsService.saveInServer();
  }
  load(): void {
    this.clientsService.loadFromServer(this.selectFile.nativeElement.value);
  }
}
