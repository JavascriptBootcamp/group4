import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tapRxjs';



}
