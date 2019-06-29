import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl : string;
  songs: any[];
  constructor() {
    this.serverUrl="http://localhost:4000"
    this.songs = [];
    this.getVideos();
  }
  async getVideos(){
    const response = await fetch(this.serverUrl+"/songs");
    const data = await response.json();
    console.log(data);
    this.songs = await data;
  }
}
