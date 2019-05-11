import { Component, OnInit, OnChanges } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-big-img',
  templateUrl: './big-img.component.html',
  styleUrls: ['./big-img.component.css']
})
export class BigImgComponent implements OnInit ,OnChanges{
  srcImg:string;
  zoom:boolean;
  constructor(private imageService:ImagesService) {
    this.srcImg = this.imageService.bigImg;
    this.zoom = this.imageService.zoom;
    console.log(this.srcImg ,"---" );
        console.log(this.imageService);
   }

  ngOnInit() {

  }

  ngOnChanges(){
    this.srcImg = this.imageService.bigImg;
    this.zoom = this.imageService.zoom;
    console.log(this.srcImg ,"---" );
  }


}
