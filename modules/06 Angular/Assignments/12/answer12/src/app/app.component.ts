import { Component } from '@angular/core';
import { Picture } from './app.picture';
import { Actor } from './app.actor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer12';

  pictures:Picture[];
  actors:Actor[];


constructor(){
  let img1=new Picture("https://en.wikipedia.org/wiki/Amsterdam","https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg");
      let img2=new Picture("https://en.wikipedia.org/wiki/Moon","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg");
      let img3=new Picture("https://en.wikipedia.org/wiki/Tel_Aviv","https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg");

        this.pictures=[img1,img2,img3];

    let actor1=new Actor('Tobey Maguire',38,'https://www.imdb.com/name/nm0001497/','https://m.media-amazon.com/images/M/MV5BMTYwMTI5NTM2OF5BMl5BanBnXkFtZTcwODk3MDQ2Mg@@._V1_.jpg');
    let  actor2=new Actor("Jennifer Aniston",50,"https://www.imdb.com/name/nm0000098/","https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg");
     let actor3=new Actor("Scarlett Johansson",38,"https://www.imdb.com/name/nm0424060/","https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg");
     
    this.actors=[actor1,actor2,actor3];
}




}
