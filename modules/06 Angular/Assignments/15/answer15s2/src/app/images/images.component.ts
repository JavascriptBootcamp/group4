import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  mainImg: string;
  images: Image[];
  blurVisible: boolean;
  pictureVisible: boolean;

  constructor(private imagesService: ImagesService) {
    this.mainImg = "";
    this.blurVisible = false;
    this.pictureVisible = false;
    this.images = this.imagesService.getImages();
  }

  imgPressed(src: string) {
    this.mainImg = src;
    this.blurVisible = true;
    this.pictureVisible = true;
  }

  onBlur() {
    this.blurVisible = false;
    this.pictureVisible = false;
  }

  ngOnInit() {
  }

}
