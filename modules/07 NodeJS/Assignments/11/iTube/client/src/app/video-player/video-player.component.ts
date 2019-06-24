import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const mdYoutube = "?controls=1&autoplay=1";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit {
@Input() videoUrl: string;
getYoutubeUrl: any;

  constructor(private sanitizer: DomSanitizer) { 
    this.getYoutubeUrl = (url)=>this.sanitizer.bypassSecurityTrustResourceUrl.call(null,`${url}${mdYoutube}`);
  }

  ngOnInit() {
  }

}
