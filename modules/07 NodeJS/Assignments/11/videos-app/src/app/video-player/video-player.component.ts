import { Component, OnInit, Input ,OnChanges,SimpleChanges} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit ,OnChanges{
@Input() videoSrcId: string;
videoSrc:SafeResourceUrl;
src:string;
  constructor(private sanitizer: DomSanitizer) { 
    this.src = 'https://www.youtube.com/embed/';
    this.videoSrc =  this.sanitizer.
    bypassSecurityTrustResourceUrl("");
  }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
   this.videoSrc =  this.sanitizer.
   bypassSecurityTrustResourceUrl(this.src + changes.videoSrcId.currentValue + "?autoplay=1");
  }

}
