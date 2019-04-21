import { Component , OnInit} from '@angular/core';
import {GetDataService} from './get-data.service';
import { Author } from './author';
import { Picture } from './picture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pictures:Picture[];
  selectedImage:string;
  show:boolean;
  authors:Author[];
  amount:number;
  constructor(private dataService: GetDataService){
    this.pictures=[];
    this.selectedImage="";
    this.show=false;
    this.authors=[];
  }
  ngOnInit(){
    this.getData();
  }
  getData():void{
    this.authors = this.dataService.getAuthors();
    this.pictures = this.dataService.getPictures();
  }
  onClickShow(src:string){
    this.show = true;
    this.selectedImage = src;
  }
}
