import { Component, OnInit } from '@angular/core';
import { of} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

interface Person {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'answer';
  numbers: string;

  constructor(){

  }

  ngOnInit(){
    of(
    { age: 20, name: 'amir'},
    { age: 30, name: 'avi'},
    { age: 30, name: 'sami'},
    { age: 50, name: 'yosi'},).pipe(
      distinctUntilChanged((x: Person,y: Person) => x.age === y.age),
    )
    .subscribe(x => console.log(x));
  }

}

