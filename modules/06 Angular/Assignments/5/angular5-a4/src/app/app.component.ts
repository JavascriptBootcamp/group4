import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular5-a4';
 images: Image[] = [];
  constructor() {
    this.images.push(new Image("https://en.wikipedia.org/wiki/Amsterdam", "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", 300, 200));
    this.images.push(new Image("https://en.wikipedia.org/wiki/Moon", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", 300, 200));
    this.images.push(new Image("https://en.wikipedia.org/wiki/Tel_Aviv", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", 300, 200));
    this.images.push(new Image("https://en.wikipedia.org/wiki/Prague", "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg", 300, 200));
    this.images.push(new Image("https://en.wikipedia.org/wiki/Holon", "https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg", 300, 200));
    this.images.push(new Image("https://en.wikipedia.org/wiki/Amsterdam", "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", 300, 200));

  }

}
class Image {
   href: string;
   src: string;
   height: number;
   width: number;
  constructor(href: string, src: string, height: number, width: number) {
    this.href = href;
    this.src = src;
    this.height = height;
    this.width = width;
  }
}
