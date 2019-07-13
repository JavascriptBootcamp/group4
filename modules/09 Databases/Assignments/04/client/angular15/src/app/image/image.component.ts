import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Img } from '../image.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {iAuthor} from '../author.model';
import {ImagesService} from '../images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() img: Img;
  @Output() addToOpenModal = new EventEmitter();
  @Output() addToLocal = new EventEmitter<string>();
  isClicked: boolean;
  images: Img[];
  firstPage: boolean;
  author: iAuthor;
  authorImages: string[];
  constructor(private route: ActivatedRoute, private location: Location , private imagesService : ImagesService) {
    this.route = route;
    this.isClicked = false;
    this.images = [];
    this.authorImages = [];
    this.firstPage = true;
    this.author = null;
  }
  incrementLike(img: Img) {
    img.like++;
    this.addToLocal.emit();
  }
  isActive() {
    this.isClicked = true;
  }
  ngOnInit() {
    this.images = this.imagesService.getImages();
    if (!this.img) {
      this.setImage(this.route.snapshot.params.id);
    }
  }
  openModal() {
    this.addToOpenModal.emit(this.img.src);
  }
  setImage(authorId: number) {
    this.authorImages = [];
    this.firstPage = false;
    for (let image of this.images) {
      if (Number(authorId) === image.author.id) {
        this.authorImages.push(image.src);
        this.author = {
          name: image.author.name,
          id: image.author.id,
          profilePic: image.author.profilePic,
          facebook: image.author.facebook,
          desc: image.author.desc
        }
      }
    }
  }
  goBack(): void {
    this.location.back();
  }
}
