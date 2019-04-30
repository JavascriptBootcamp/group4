import { Component, OnInit } from '@angular/core';

import { Img } from "../../modules/img";
import { MainGalleryService } from 'src/app/main-gallery.service';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit {
  imgs:Img[];
  bigPicSrc:string;
  topPicSrcs:string[];
  
  constructor(private galleryService:MainGalleryService) {


    

    this.bigPicSrc = null;
  }

  ngOnInit(): void {
    this.imgs=this.galleryService.getImgs();
  }

  showBigPic(src:string) {
    this.bigPicSrc = src;
  }

  sortTop3() {
    
    this.topPicSrcs = this.galleryService.sortTop3();
  }

  closeBigPic() {
    this.bigPicSrc = null;
  }
}
