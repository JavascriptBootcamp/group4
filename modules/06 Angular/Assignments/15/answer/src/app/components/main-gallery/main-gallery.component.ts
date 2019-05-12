import { Component, OnInit } from '@angular/core';

import { Img } from "../../modules/img";
import { ImgService } from "../../services/img.service";

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit {

  imgs:Img[];
  bigPicSrc:string;
  topPicSrcs:string[];
  
  constructor(private imgService: ImgService) {
    this.topPicSrcs = this.imgService.get_Top3();
    this.imgs = this.imgService.get_imgs();
    this.bigPicSrc = null;
  }

  ngOnInit(): void {
  }

  showBigPic(src:string) {
    this.bigPicSrc = src;
  }

  sortTop3() {
    this.topPicSrcs = this.imgService.get_Top3();
  }

  closeBigPic() {
    this.bigPicSrc = null;
  }
}
