import { Component, OnInit } from '@angular/core';
import {Image} from '../image.model'
import {ImageServiceService} from '../image-service.service'
@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  images:Image[];
  imageShowSrc:string;
  imageShowFlag:boolean;
  constructor(private imageServiceService:ImageServiceService) { 

    this.imageShowFlag = false;
    this.imageShowSrc = "";

    this.images = [];
    this.imageServiceService = imageServiceService;

  }


  
OnShowImage(image:Image){
  
    this.imageShowSrc = image.src;
    this.imageShowFlag = true;
  
  }
  
  OndontShowImage(){
    this.imageShowFlag = false;
  }

  ngOnInit() {

    this.images = this.imageServiceService.getImages();
  }

}
