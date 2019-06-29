import { Component } from '@angular/core';
import { VideosService } from './videos.service'


export interface Video {
  id: number
  title: string;
  singer: string;
  wards: string;
  url: string;
  imageSrc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos: Video[];
  player: Video;
  // dataStorge: Video;
  constructor(private videoService: VideosService) {

  }
  ngOnInit() {

    this.getVideos();

    let dataStorge = JSON.parse(localStorage.getItem("Itube"));
    //this.dataStorge = JSON.parse(localStorage.getItem("Itube"));
    if (dataStorge) {
      this.player =
        {
          id: dataStorge.id,
          title: dataStorge.title,
          singer: dataStorge.singer,
          wards: dataStorge.wards,
          url: dataStorge.url,
          imageSrc: dataStorge.imageSrc
        }
    }
    else {
      this.player = this.videos[0];
    }
  }

  onChangeVideoEvent(video: Video) {
    this.player = video;
    localStorage.setItem("Itube", JSON.stringify(video));
  }

  async getVideos() {
    this.videos = await this.videoService.getSongs();
  }

}
