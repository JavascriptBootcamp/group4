import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.css']
})

export class ImageSectionComponent implements OnInit {
@Input() imageSrc:string;
@Input() imgId:number;
@Input() authorName:String; 
@Input() ID:string;
@Output() makeBigImg = new EventEmitter<string>();
      private counter:number;
      borderImg:string
      picSizeProp:string;
      counterId:string;
  constructor(private auhtorService:AuthorService) {
   
   }

  ngOnInit() {
    this.counter=this.auhtorService.getFromLocalStorage(this.imgId);
    if(this.counter===0){
      this.picSizeProp="120";

    }
    if(this.counter>=10){
      
      this.picSizeProp="150";

    }
    else{
      this.picSizeProp="125";

    }
    
  }
  onclickaddLike(){
    this.counter+=1;
      this.auhtorService.addToLocalStorage(this.imgId,this.counter);

    if(this.counter===0){
      this.picSizeProp="120";

    }
    if(this.counter>=10){
      
      this.picSizeProp="150";

    }
    else{
      this.picSizeProp="125";

    }

  }

  clickImg(){
    this.makeBigImg.emit(this.imageSrc);
    this.borderImg="10px solid ";


  }   

 

 

}
