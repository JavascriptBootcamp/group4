import { Component, OnInit, Input, Output } from '@angular/core';
import { Video } from '../video.model';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-bar-side-videos',
  templateUrl: './bar-side-videos.component.html',
  styleUrls: ['./bar-side-videos.component.css']
})
export class BarSideVideosComponent implements OnInit {

@Input() videoIns:Video;
@Output() clickedVideo=new EventEmitter<Video>();
  constructor() { 

  }

  ngOnInit() {
  }
  vidoeClick(){
    this.clickedVideo.emit(this.videoIns);
    
  }


  
}
