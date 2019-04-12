import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-section',
  templateUrl: './image-section.component.html',
  styleUrls: ['./image-section.component.css']
})

export class ImageSectionComponent implements OnInit {
@Input() imageSrc:string;
@Input() imgId:number;
@Output() makeBigImg = new EventEmitter<string>();
      private counter:number;
      borderImg:string
      picSizeProp:string;
      counterId:string;
  constructor() {
   
   }

  ngOnInit() {
    this.counterId="" +this.imgId;
   if(window.localStorage.getItem(this.counterId))
    this.counter=+window.localStorage.getItem(this.counterId);
    else  this.counter=0;
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
    let toStrLocalStorCounter :string=""+ this.counter;

    window.localStorage.setItem(this.counterId, toStrLocalStorCounter);

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
