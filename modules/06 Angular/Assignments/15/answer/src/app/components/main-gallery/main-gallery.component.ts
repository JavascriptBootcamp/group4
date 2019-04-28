import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../../images.service'
import { Img } from "../../modules/img";

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit {

  imgs:Img[];
  bigPicSrc:string;
  topPicSrcs:string[];
  
  constructor(private imgService:ImagesService ) {
    this.imgs=imgService.getImages();
    
    this.sortTop3();

    this.bigPicSrc = null;
  }

  ngOnInit(): void {
  }

  showBigPic(src:string) {
    this.bigPicSrc = src;
  }

  sortTop3() {
    let newTop3 = this.imgs.slice(0).sort((a,b) => ( b.likes - a.likes)).slice(0,3).map(img => img.src);
    this.topPicSrcs = newTop3;
  }

  closeBigPic() {
    this.bigPicSrc = null;
  }
}
