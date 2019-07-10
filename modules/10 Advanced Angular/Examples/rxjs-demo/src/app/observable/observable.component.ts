import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  private anyErrors: string;
  private completed: boolean;
  private values: number[];
  private data: Observable<number>;

  constructor() {
    this.anyErrors = "";
    this.completed = false;
    this.values = [];
  }

  start() {
    this.data = new Observable( observer => {
      setTimeout( () => {
        observer.next(1);
      }, 1000 );

      setTimeout( () => {
        observer.next(2);
      }, 2000 );

      setTimeout( () => {
        observer.next(3);
      }, 3000 );

      setTimeout( () => {
        observer.error("Moshiko is the king");
      }, 4000 );

      setTimeout( () => {
        observer.complete();
      }, 4000 );
    } );

    this.data.subscribe(
      value => this.values.push(value),
      error => this.anyErrors = error,
      () => this.completed = true
    );

  }
}
