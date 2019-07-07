import { Component, OnInit } from '@angular/core';
import {AlbumsService} from '../albums.service';

interface Ialbum{
  albumId:string,
  name:string
}

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums:Ialbum[];
  picures:string[];
  constructor(private albumsService:AlbumsService) {
    this.albums = [];
    this.picures = [];
   }

  async ngOnInit() {
    this.albums = await this.albumsService.getAlbums();
  }

  async OnAlbumClicked(albumId){
    this.picures = await this.albumsService.getPictures(albumId);
    this.albumsService.albumPicEventActivated.next(this.picures);
  }

}
