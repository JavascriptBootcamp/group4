import { Component, OnDestroy, OnInit } from '@angular/core';
import { Img, ImagesService } from './images.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  images:Img[] = [];
  imageLikes:number[] = [];
  zoom:boolean;
  bigImg:string;


  constructor(private imageService:ImagesService){
   this.images = this.imageService.images;
  this.imageService.intialiazeLike();
   this.imageLikes = this.imageService.imageLikes;
  }

  ngOnInit (){
    this.imageService.imageToZoom.subscribe((data)=>{
     this.bigImg = data.img;
     this.zoom = data.zoom;
    })
  }

}
