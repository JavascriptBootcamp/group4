import { Component,OnDestroy } from '@angular/core';
import {Song} from './modules/song';
import {SongsService} from './services/songs.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  songs: Song[];
  selectedSong: Song;
  activateSubs:Subscription;
  constructor(private songsService:SongsService) {
    this.songs = [];
    this.selectedSong = {

      id: 0,
      title: "",
      singers: "",
      srcId : "",
      desc: "",
      imageSrc:""

    };
  }
  async ngOnInit() {

    this.songs = await this.songsService.loadSongs();
    this.selectedSong = this.songs[0];

    this.activateSubs = this.songsService.activatedEmitter.subscribe(song=>{
      this.selectedSong = song;
    })
    
  }

  ngOnDestroy(){
      this.activateSubs.unsubscribe();
  }

  

}
