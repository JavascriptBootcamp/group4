import { Component, OnInit } from '@angular/core';
import { Video } from "../../interfaces/video";
import { VideosService } from "../../services/videos.service";

@Component({
  selector: 'itube',
  templateUrl: './itube.component.html',
  styleUrls: ['./itube.component.css']
})
export class ItubeComponent implements OnInit {

  videos: Video[];

  constructor( private videosService: VideosService) { 
  }

  ngOnInit() {
    this.videos = this.videosService.getData();
  }

}
