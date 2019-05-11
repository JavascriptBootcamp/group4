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


  constructor(private imageService:ImagesService){
   this.images = this.imageService.images;
  this.imageService.intialiazeLike();
   this.imageLikes = this.imageService.imageLikes;
   this.zoom =  this.imageService.zoom;
   console.log(this.zoom);
  }

  ngOnInit (){

  }

}
