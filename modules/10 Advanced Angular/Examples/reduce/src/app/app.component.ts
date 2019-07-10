import { Component } from '@angular/core';
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reduce';

source = of(1, 2, 3, 4);
example = this.source.pipe(reduce((acc, val) => acc + val));
//output: Sum: 10'
subscribe = this.example.subscribe(val => console.log('Sum:', val));
}
