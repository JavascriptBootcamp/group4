import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges, OnInit, OnDestroy {
  isHidden: boolean;
  someData: string;
  constructor() {
    this.isHidden = false;
    this.someData = "Moshiko is the king";
  }
  ngOnInit() {
    console.log("Parent - ngOnInit");
    setTimeout( () => {
      this.someData = "Moshiko is the king";
    }, 1000 );
    setTimeout( () => {
      this.someData = "Moshiko is the king";
    }, 3000 );
    setTimeout( () => {
      this.someData = "Gabi is the king";
    }, 5000 );
  }
  ngOnDestroy() {
    console.log("Parent - ngOnDestroy");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("parent changes", changes);
  }

  onSomeOutput() {
    console.log("onSomeOutput");
  }
}
