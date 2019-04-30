<<<<<<< HEAD
import { Component, Input,Output, OnInit } from '@angular/core';
=======
import { Component, Input, Output, OnInit} from '@angular/core';
>>>>>>> b4e22d7284b171342d61ad89e8a94ae4805e8570
import { EventEmitter } from '@angular/core';
import { Picture } from '../picture.model';
import { PicturesService } from '../pictures.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit{
<<<<<<< HEAD
@Input() image: string;
@Output() showPictureEvent = new EventEmitter<string>();
=======
  @Input() picture: Picture;
  @Output() showPictureEvent = new EventEmitter<Picture>();
  isImageClicked: boolean;
  fontSize: string;
>>>>>>> b4e22d7284b171342d61ad89e8a94ae4805e8570

  constructor(private activatedRoute: ActivatedRoute, private picturesService: PicturesService) {
    this.isImageClicked = false;
    this.fontSize = 'small';
  }

<<<<<<< HEAD
incCounter(): void{
  this.counter++;
  localStorage.setItem(this.image,this.counter.toString());
}
  constructor() { 
    this.counter = 0;
    console.log(this.image);
=======
  ngOnInit(){
    this.isImageClicked = Boolean(localStorage.getItem("isClickedPic" + this.picture.id));
    const likeCounterLS = localStorage.getItem("likeCounterPic" + this.picture.id);
    if(likeCounterLS)
      this.picturesService.setPictureLikeCounter(this.picture.id,+likeCounterLS);

    this.setFontSize();
>>>>>>> b4e22d7284b171342d61ad89e8a94ae4805e8570
  }

  onLikeClicked(){
    this.incCounter();
    this.updateLikeCounterLS();
    this.setFontSize();
  }

  incCounter(): void {
    this.picture.likeCounter++;
  }

<<<<<<< HEAD
ngOnInit(){
  this.counter = Number(localStorage.getItem(this.image));
}

=======
  updateLikeCounterLS(){
    localStorage.setItem("likeCounterPic" + this.picture.id,this.picture.likeCounter.toString());
  }

  setFontSize(){
    if (this.picture.likeCounter > 10) {
      this.fontSize = 'big';
    }
    else if (this.picture.likeCounter > 0){
      this.fontSize = 'normal';
    }
  }

  showPicture() {
    this.isImageClicked = true;
    this.showPictureEvent.emit(this.picture);
    localStorage.setItem("isClickedPic" + this.picture.id, JSON.stringify(this.isImageClicked));

  }
>>>>>>> b4e22d7284b171342d61ad89e8a94ae4805e8570

}
