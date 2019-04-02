import { Component } from '@angular/core';

interface picture {
  src: string;
  link: string;
}
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  pictures: picture[];
  constructor() {
    this.pictures = [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg", link: "https://en.wikipedia.org/wiki/Amsterdam"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg", link: "https://en.wikipedia.org/wiki/Moon"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg", link: "https://en.wikipedia.org/wiki/Tel_Aviv"
      },
      {
        src: "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg", link: "https://en.wikipedia.org/wiki/Prague"
      }
    ];
  }
}
