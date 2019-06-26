import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { Video } from '../video';
import { VideoService } from '../services/video.service';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})



export class VideoPlayerComponent implements OnInit, AfterViewInit{
  // @Input() clickedVideo: Video;
  @ViewChild('videoRef') videoElemRef: ElementRef;
  @ViewChild('videoSrcRef') videoSrcElemRef: ElementRef;

  clickedVideo: Video;

  constructor(private _videoServiceObj: VideoService) {}


  ngOnInit() {
    this._videoServiceObj.clickedVideo$
      .subscribe(
        clickedVideo => {
          this.videoElemRef.nativeElement.src = clickedVideo.src;
        }
      );
  }

  ngAfterViewInit() {
    this.videoElemRef.nativeElement.src = this._videoServiceObj.clickedVideo.src;
  }
}
