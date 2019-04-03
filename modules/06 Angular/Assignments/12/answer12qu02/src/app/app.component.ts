import { Component } from '@angular/core';
import { Picture } from './picture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pictures: Picture[];

  constructor() {
    this.pictures = [
      { Link: "https://en.wikipedia.org/wiki/Amsterdam", Image: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" },
      { Link: "https://en.wikipedia.org/wiki/Moon", Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg" },
      { Link: "https://en.wikipedia.org/wiki/Tel_Aviv", Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg" },
      { Link: "https://en.wikipedia.org/wiki/Prague", Image: "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg" },
      { Link: "https://en.wikipedia.org/wiki/Holon", Image: "https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg" },
      { Link: "https://en.wikipedia.org/wiki/Amsterdam", Image: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" },
      { Link: "https://en.wikipedia.org/wiki/Amsterdam", Image: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" },
      { Link: "https://en.wikipedia.org/wiki/Amsterdam", Image: "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg" }
    ];
  }
}
