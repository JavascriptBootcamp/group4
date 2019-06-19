import { Component } from '@angular/core';
import {FilesService} from './files.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-file';
  files : string[];
  isFinishSearch:boolean;
  status:boolean;
  constructor(private filesService:FilesService){
    this.files = [];
    this.isFinishSearch=false;
    this.status = true;
  }


  async onSubmit(event,search){
    event.preventDefault();
    this.isFinishSearch=false;
    const {value} =  search;
    const filesList:string[] = value.split(",");
    const {status,foundFiles} = await this.filesService.getFiles(filesList);
    if(status === "OK"){
      this.files = foundFiles?foundFiles:[];
      this.status = true;
    }
    else if(status === "Error"){
      this.status = false;
    }
    this.isFinishSearch=true;
  }




}
