import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Video } from '../video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements Video{
  @Input() videoSrc:string;
  @Output() videoHasClickedEvent=new EventEmitter<Video>();

  img:string;
  title:string;
  creator:string;
  description?: string;
  isClicked: boolean;

  constructor(){
    this.img=''
    this.title='blabla' + Math.floor((Math.random() * 20) + 1);;
    this.creator="ofek";
    this.description="very nice video";
    this.isClicked=false;
  }
  videoHasClicked(){
    console.log(this.isClicked);
    this.isClicked=true;
    this.videoHasClickedEvent.emit(this);
    console.log(this.isClicked);
  }

}
