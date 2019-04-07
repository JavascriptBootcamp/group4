import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pictures:string[];
  selectedImage:string;
  show:boolean;
  constructor(){
    this.pictures=[];
    this.selectedImage="";
    this.show=false;
  }
  ngOnInit(){
    this.insertImagesToArray(20);
  }

  insertImagesToArray(amount:number){
    for(let i=10; i<amount+10;i++){
      this.pictures.push(`https://picsum.photos/300/200?image=${i}`);
    }
  }
  onClickShow(src:string){
    this.selectedImage = src;
    this.show=true;
  }
}
