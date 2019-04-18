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
  authors:string[];
  amount:number;
  constructor(){
    this.pictures=[];
    this.selectedImage="";
    this.show=false;
    this.amount=20;
    this.authors=[];
  }
  ngOnInit(){
    this.fakeAuthors(this.amount);
    this.insertImagesToArray(this.amount);
  }

  insertImagesToArray(amount:number){
    for(let i=10; i<amount+10;i++){
      this.pictures.push(`https://picsum.photos/300/200?image=${i}`);
    }
  }
  onClickShow(src:string){
    this.show = true;
    this.selectedImage = src;
  }
  fakeAuthors(amount:number){
    for(let i=0; i<amount;i++){
      this.authors.push(`david`+i);
    }
  }
}
