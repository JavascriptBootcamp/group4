import { Component } from '@angular/core';

export class Img {
  like:number;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instush';
  images: Img[];

  constructor(){
    this.images=[{like:0,image:"https://www.masa.co.il/wp-content/uploads/2016/02/ca628b9995e09a044f73cbb2a60e657d_1-open.jpg"},
    {like:0,image:"https://img.mako.co.il/2017/12/28/pisaphotography_x5.jpg"}
    ,{like:0,image:"https://edge.media.datahc.com/HI402816181.jpg"}];

  }

}
