import { Component, Input, Output, OnInit} from '@angular/core';
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
  @Input() picture: Picture;
  @Input() isAuthorFromUrl: boolean;
  @Output() showPictureEvent = new EventEmitter<Picture>();
  isImageClicked: boolean;
  fontSize: string;

  constructor(private activatedRoute: ActivatedRoute, private picturesService: PicturesService) {
    this.isImageClicked = false;
    this.fontSize = 'small';
  }

  ngOnInit(){
    this.isImageClicked = Boolean(localStorage.getItem("isClickedPic" + this.picture.id));
    const likeCounterLS = localStorage.getItem("likeCounterPic" + this.picture.id);
    if(likeCounterLS)
      this.picturesService.setPictureLikeCounter(this.picture.id,+likeCounterLS);

    this.setFontSize();
  }

  onLikeClicked(){
    this.incCounter();
    this.updateLikeCounterLS();
    this.setFontSize();
  }

  incCounter(): void {
    this.picture.likeCounter++;
  }

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

}
