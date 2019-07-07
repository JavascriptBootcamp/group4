import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Img } from "../../modules/img";
import { Author } from "../../modules/author";
import { AuthorsService } from "../../services/authors.service";
import { ImgService } from "../../services/img.service";
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() img: Img;
  @Output() showImgEvent = new EventEmitter<string>();
  @Output() incressLikeEvent = new EventEmitter();
  author_name: string;

  constructor(private authorsService: AuthorsService,private imgService:ImgService) {
    this.author_name = "";
  }

  ngOnInit() {
    this.author_name = this.authorsService.get_author(this.img.author_id).name;
  }

  addLike() {
    this.img.likes++;
    this.imgService.addLike(this.img.likes,this.img.src);
    this.incressLikeEvent.emit();
  }

  showImg() {
    this.showImgEvent.emit(this.img.src);
  }

}
