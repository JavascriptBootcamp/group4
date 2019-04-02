import { Component, OnInit } from '@angular/core';
import { Img } from './img.model';
// import { url } from 'inspector';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images: Img[] = null;
  constructor() {

    this.images = [{ url: "https://en.wikipedia.org/wiki/Amsterdam", img: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" },
    { url: "https://en.wikipedia.org/wiki/Moon", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg" },
    { url: "https://en.wikipedia.org/wiki/Tel_Aviv", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg" }];
  }

  ngOnInit() {
  }

}
