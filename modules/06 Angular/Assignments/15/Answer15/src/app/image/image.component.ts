import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AppHelperService } from '../app-helper.service';
import IImgProps from '../imgProps.model';
import IAuthor from '../author.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit , AfterViewChecked{

  @Input() authorInfo: IAuthor;
  currentLikes: number;
  @Input() imgID: string;
  @Input() imgSrc: string;
  @Output() displayBigPicture: EventEmitter<string>;
  height: number;
  width: number;
  constructor(private appHelper: AppHelperService, private cdRef:ChangeDetectorRef) {
    this.currentLikes = 0;
    this.imgSrc = '#';
    this.height = 300;
    this.width = 300;
    this.displayBigPicture = new EventEmitter<string>();
  }


  ngOnInit() {
    const savedPropsObj = this.appHelper.getImgProperties(this.imgID);
    if (savedPropsObj) {
      this.currentLikes = savedPropsObj.currentLikes;
      this.imgSrc = savedPropsObj.imgSrc;
      this.height = savedPropsObj.height;
      this.width = savedPropsObj.width;
    }
  }

  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }


  onLikeClicked() {
    this.currentLikes++;
    if (this.currentLikes >= 10) {
      if (this.width !== 350 && this.height !== 350) {
        this.width += 25;
        this.height += 25;
      }
    }
    else if (this.width !== 325 && this.height !== 325) {
      this.width += 25;
      this.height += 25;
    }

    this.appHelper.saveProperties(this.imgID, {
      currentLikes: this.currentLikes, height: this.height
      , width: this.width, imgSrc: this.imgSrc, author: this.authorInfo.name
    });

    
  }

  showImage() {
    this.displayBigPicture.emit(this.imgSrc);
  }
}
