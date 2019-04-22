import { Component, OnInit} from '@angular/core';

import { ImgData } from './img-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'answer12-p1-m6';
  pics: ImgData[] = [];


  ngOnInit() {

    this.pics = [{hrefImg:'https://en.wikipedia.org/wiki/Amsterdam',
    srcImg:'https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg'},
    {hrefImg:'https://en.wikipedia.org/wiki/Moon',
    srcImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg'},
    {hrefImg:'https://en.wikipedia.org/wiki/Tel_Aviv',
    srcImg:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg'},
    {hrefImg:'https://en.wikipedia.org/wiki/Prague',
    srcImg:'https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg'},
    {hrefImg:'https://en.wikipedia.org/wiki/Holon',
    srcImg:'https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg'}
  ]

  }

}



