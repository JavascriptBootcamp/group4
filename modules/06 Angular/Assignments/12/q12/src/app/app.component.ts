import { Component } from '@angular/core';
import { Picture } from './picture.model';
import { Actor } from './actor.model';
import { picturesData, actorsData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'q12';
  pictures :Picture[];
  actors :Actor[];

  hrefConstant = "https://www.imdb.com/name/";

  constructor(){
    this.pictures = [].concat(picturesData);
    this.actors = [].concat(actorsData);
  }
}