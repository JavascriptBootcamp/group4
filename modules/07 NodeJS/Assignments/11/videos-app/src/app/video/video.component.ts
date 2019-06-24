import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from '../modules/song';
import {SongsService} from '../services/songs.service'
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
@Input() SongI: Song;
  constructor(private songsService:SongsService) { }

  ngOnInit() {
  }

  changeVideo(){
    this.songsService.activatedEmitter.next(this.SongI);
  }
}
