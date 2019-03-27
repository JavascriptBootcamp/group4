import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str_arr:string[];

constructor() {
  this.str_arr = ['a short sentence','a lazy fox','look, it is working!'];
}

}
