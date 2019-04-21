import { Component, OnInit, Input } from '@angular/core';
import { Picture } from '../picture';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  @Input() pictures:Picture[];
  selectedImage:string;
  show:boolean;
  amount:number;
  constructor(private dataService: GetDataService){
    this.pictures=[];
    this.selectedImage="";
    this.show=false;
  }
  ngOnInit(){
    if(this.pictures.length===0){
      this.getData();
      console.log("check");
    }
  }
  getData():void{
    this.pictures = [];
    this.pictures = this.dataService.getPictures();
  }
  onClickShow(src:string){
    this.show = true;
    this.selectedImage = src;
  }
}
