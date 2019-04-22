import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer';
  stringsArr:string[];

  constructor(){
    this.stringsArr=['a short sentence','a lazy fox' ,'look, it is working!',];
  }
}
