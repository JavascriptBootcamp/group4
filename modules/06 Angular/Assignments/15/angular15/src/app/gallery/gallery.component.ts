import { Component, OnInit } from '@angular/core';
import { Author } from '../Author.model';
import {AuthorService} from '../author.service';
export interface ImgsDetails{
  imgUrl:string;
  author:Author;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  title = 'angular15';
  images:ImgsDetails[];
  bigImgSrc:string;
  isDisplayed:boolean;

  constructor(private autorService:AuthorService){
    this.autorService.getImgsDetails().subscribe(images => this.images = images);
  }
  
  
  
  makeBigImg(bigImgsrc:string){
      this.bigImgSrc=bigImgsrc;
      this.isDisplayed=true;
  }
  closeBigPic(){
    this.isDisplayed=false;
  }

  ngOnInit() {
  }

}
