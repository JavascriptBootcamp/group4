
import { Component} from '@angular/core';
import { Img } from './image.model';
// import { url } from 'inspector';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  images: Img[] = null;
  constructor() {

    this.images = [
      { url: "https://en.wikipedia.org/wiki/Google", 
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" 
      },
      { url: "https://en.wikipedia.org/wiki/JavaScript", 
        img: "https://pbs.twimg.com/profile_images/590149318071353345/4EqHKAGD_400x400.png" 
      },
      { url: "https://en.wikipedia.org/wiki/Google_Chrome", 
        img: "https://img.youtube.com/vi/arxBEkpSaR8/hqdefault.jpg" 
      },
      { url: "https://en.wikipedia.org/wiki/GitHub", 
        img: "https://github.githubassets.com/images/modules/open_graph/github-logo.png" 
      },
      { url: "https://en.wikipedia.org/wiki/React_(JavaScript_library)", 
        img: "https://cdn-images-1.medium.com/max/1200/1*YsPpBr_PgtyTR6CFDmKU9g.png" 
      },
      { url: "https://en.wikipedia.org/wiki/AngularJS", 
        img: "https://en.wikipedia.org/wiki/AngularJS" 
      },
      { url: "https://en.wikipedia.org/wiki/Vue.js", 
        img: "https://www.valuecoders.com/blog/wp-content/uploads/2017/11/featurednew.jpeg" 
      },
      { url: "https://en.wikipedia.org/wiki/MySQL", 
        img: "https://cdn-images-1.medium.com/max/1600/0*AhVo_3sCq-ft64ki.jpg" 
      },
      { url: "https://en.wikipedia.org/wiki/MongoDB", 
        img: "https://cdn-images-1.medium.com/max/1200/1*Mx3MUKkPENbaIR-vKGeLDw.jpeg" 
      },
      { url: "https://en.wikipedia.org/wiki/Node.js", 
        img: "https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png" 
      }
    ];
  }
}