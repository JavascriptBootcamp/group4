import { Component, OnInit } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
import { FilesService } from './files.service';
import { Client } from './model.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  clients: Client[];


  constructor(private filesService: FilesService) {
    this.clients = this.filesService.getClients();
  }

  ngOnInit(): void {
    this.clients = this.clients.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
  }

  mailto(mail: string): string {
    return "mailto:" + mail;
  }

}

