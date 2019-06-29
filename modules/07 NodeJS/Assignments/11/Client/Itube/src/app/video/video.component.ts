import { Component, Input } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent{
  @Input() videoId;
  src: any;
  constructor(private mainService:MainService) { 
    this.src = null;
  }
  ngOnInit(){
    this.src = `https://img.youtube.com/vi/${this.videoId}/0.jpg`;
    // this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
  }
}
