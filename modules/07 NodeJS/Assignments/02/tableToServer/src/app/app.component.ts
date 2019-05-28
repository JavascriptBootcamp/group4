import { Component, OnInit } from '@angular/core';
import { FuncToServerService  } from "./func-to-server.service";
import { Client } from "./Client.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'tableToServer';

  
  clients:Client[];
  
    constructor( private funcToServerService : FuncToServerService ) {
      // this.clients = this.funcToServerService.clients;
    }
  
    ngOnInit(): void {
      this.funcToServerService.clients = this.funcToServerService.clients.sort( (a,b)=> (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
    }
  
    mailto(mail:string):string {
      return "mailto:"+mail;
    }

    saveTable(){
     this.funcToServerService.saveTofile(this.funcToServerService.clients);
    }

  }
  

