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
  constructor(private filesService:FilesService){
    this.files = [];
    this.isFinishSearch=false;
  }


  async onSubmit(event,search){
    event.preventDefault();
    this.isFinishSearch=false;
    const {value} =  search;
    this.files = await this.filesService.getFiles(value);
    this.isFinishSearch=true;
  }




}
