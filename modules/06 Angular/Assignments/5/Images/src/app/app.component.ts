import { Component } from '@angular/core';

interface Iimage{
  link:string,
  src:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images:Iimage[]

  constructor(){
    this.images = [
      {link:"https://en.wikipedia.org/wiki/Amsterdam",src:"https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"},
      {link:"https://en.wikipedia.org/wiki/Moon",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg"},
      {link:"https://en.wikipedia.org/wiki/Tel_Aviv",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg"},
      {link:"https://en.wikipedia.org/wiki/Prague",src:"https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg"},
      {link:"https://en.wikipedia.org/wiki/Holon",src:"https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg"},
      {link:"https://en.wikipedia.org/wiki/Amsterdam",src:"https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"},
      {link:"https://en.wikipedia.org/wiki/Amsterdam",src:"https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"},
      {link:"https://en.wikipedia.org/wiki/Amsterdam",src:"https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg"},
    ]
  }
}
