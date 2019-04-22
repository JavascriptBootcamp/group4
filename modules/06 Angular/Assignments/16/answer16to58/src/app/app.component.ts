import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  clickedMenuVideoSrc: string;
  clickedMenuVideoTitle: string;
  clickedMenuVideoArtistName: string;
  clickedMenuVideoDescription: string;

  playVideo(event) {
    this.clickedMenuVideoSrc = event.videoSrc;
    this.clickedMenuVideoTitle = event.title;
    this.clickedMenuVideoArtistName = event.artistName;
    this.clickedMenuVideoDescription = event.description;
  } 
}
