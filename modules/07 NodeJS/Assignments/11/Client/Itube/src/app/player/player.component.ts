import { Component, DoCheck } from '@angular/core';
import { ApiService } from '../api.service';
import { MainService } from '../main.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements DoCheck{
  videoSrc: any;
  constructor(private apiService: ApiService, private mainService: MainService, private sanitizer:DomSanitizer) { 
  this.videoSrc = "";
  }
  ngDoCheck(){
    this.videoSrc = `https://www.youtube.com/embed/${this.apiService.songs[this.mainService.selectedVideoIndex].videoId}`
    console.log(this.videoSrc);
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);
  }
}
