import { Component, OnInit } from '@angular/core';
import { Img } from '../image.model';
import { ImagesService } from '../images.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  storage: any;
  image: string;
  images: Img[];
  clicked: boolean;
  hidden: boolean;
  constructor(private imagesService: ImagesService, private storageService: StorageService) {
    this.image = "";
    this.clicked = false;
    this.hidden = false;
    this.images = [];
  }
  hideModal() {
    this.clicked = false;
    this.hidden = true;
  }
  onAddToOpenModal(img: string) {
    this.image = img;
    this.clicked = true;
    this.hidden = false;
  }
  ngOnInit() {
    this.storage = this.storageService.getLocalStorgae("ins");
    if (!this.storage) {
      this.images = this.imagesService.getImages();
    }
    else {
      this.images = JSON.parse(localStorage.getItem("ins"));
    }
  }
  addToLocal() {
    this.storageService.setLocalStorgae("ins",this.images);
  }

}
