import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent{

  constructor(public apiService:ApiService) { }


}
