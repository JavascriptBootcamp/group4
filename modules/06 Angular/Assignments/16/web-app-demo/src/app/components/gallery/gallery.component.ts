import { Component, OnInit } from '@angular/core';
import { PicturesService } from "../../services/pictures.service";
import { Picture } from "../../interfaces/picture";

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  big_pic: Picture;
  pics: Picture[];

  constructor( private picturesService: PicturesService) { }

  ngOnInit() {
    this.pics = this.picturesService.getData();
    this.big_pic = this.pics[0];
    this.pics = this.pics.slice(1,this.pics.length)
  }

  arrow_click(arrow_type: string) {

    if(arrow_type==="l") {
      this.pics.push(this.big_pic);
      this.big_pic = this.pics.shift();
    }
    else {
      this.pics.unshift(this.big_pic);
      this.big_pic = this.pics.pop();
    }

  }

}
