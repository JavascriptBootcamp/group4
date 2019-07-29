import { Component } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  logo: string;
  constructor(){
    const color = new subscription<string>();
    const logo = new subscription<string>();
  }

}
