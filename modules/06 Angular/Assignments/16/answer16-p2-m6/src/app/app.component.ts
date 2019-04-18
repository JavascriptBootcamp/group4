import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer16-p2-m6';
  dataUrls = [];
  vidiosData = [];
  mainSrc:string = "";
  constructor(private san:DomSanitizer){}
  ngOnInit(){

   
      
      this.loadVideo()
     // this.setUrl();
  }

  loadVideo() {


    const yotube = fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=amaharic%20songs&key=AIzaSyAi2mXT1D2LuYWqaJePJ6ZYROEl4fEqMR8")
   
    yotube.then(res => res.json()).
    then(data => {
     console.log(data["items"][0]["id"]["videoId"])
        // this.mainSrc = data["items"][0]["id"]["videoId"];
     
      for(let itemData of data["items"]) {
      //console.log(itemData);
      //console.log(itemData["snippet"]["thumbnails"]["default"]["url"])
      this.vidiosData.push(itemData);
      this.dataUrls.push(itemData["id"]["videoId"]);
      }
    })
   /*  fetch("https://random.dog/woof.json").
    then(response => response.json()).
    then(data => {
      
        if (data.url.indexOf(".mp4") > -1){
            this.dataUrls.push(data.url)
        }
    j jk     jk        else {
            this.loadVideo();
        }
    }) */
}
play(mainSrc){
  this.mainSrc = `https://www.youtube.com/embed/${mainSrc}`;
  console.log("----",this.mainSrc)
}
getUrl(){
  return this.san.bypassSecurityTrustResourceUrl(this.mainSrc);
}
getSafeImg(img){
  return this.san.bypassSecurityTrustResourceUrl(img);
}
setUrl(){
  this.mainSrc = this.vidiosData[0]["id"]["videoId"];

}
}
