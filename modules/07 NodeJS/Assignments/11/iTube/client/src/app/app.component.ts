import { Component } from '@angular/core';

export interface Video {
  title: string;
  desc: string;
  url: string;
  artist: string;
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
  constructor() {
    this.player = {
      title: "",
      desc: "",
      url: "",
      artist: "",
      imageSrc: ""
    }
  }
  ngOnInit() {
    fetch("http://localhost:8000/songs").then(stream=>stream.json().then(data=>this.videos = data));
    let dataStorge = JSON.parse(localStorage.getItem("Itube"));
    //this.dataStorge = JSON.parse(localStorage.getItem("Itube"));
    if (dataStorge) {
      this.player =
        {
          title: dataStorge.title,
          desc: dataStorge.desc,
          url: dataStorge.url,
          artist: dataStorge.artist,
          imageSrc: dataStorge.imageSrc
        }
    }
    else{
      this.player = this.videos[0];
    }
  }

  onChangeVideoEvent(video: Video){
    this.player = video;
    localStorage.setItem("Itube",JSON.stringify(video));
  }


  // onAddClickVideoEvent(video: Video) {
  //   this.player =
  //     {
  //       title: video.title,
  //       desc: video.desc,
  //       url: video.url,
  //       artist: video.artist,
  //       image: video.image
  //     }
  //   localStorage.setItem("Itube", JSON.stringify(this.player));
  // }
}
