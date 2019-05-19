import { Component, OnChanges, OnInit, OnDestroy, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy {
    @Input() data: string;
    @Output() someOutput = new EventEmitter<string>();
    interval: any;
    someData: number;
    lifecycleTicks: number;
    constructor() {
      console.log("Lifecycle: constructor");
      this.interval = 0;
      this.lifecycleTicks = 0;
    }

    ngOnInit() {
      console.log("Lifecycle: ngOnInit");
      // this.interval = setInterval( () => {
      //   this.someData = Math.random() * 1000;
      //   console.warn("this.someData", this.someData);
      // }, 1000 );
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log("ngOnChanges", changes);
      const {currentValue, previousValue} = changes.data; // object deconstruction
      if (currentValue === previousValue){
        console.log("Not doing anything...");
      }
      else {
        console.log("do something!");
      }
    }

    ngDoCheck() {
      console.log("Do Check");
    }

    ngOnDestroy() {
      console.log("Lifecycle: ngOnDestroy");
      clearInterval(this.interval);
    }

    onClick() {
      this.someOutput.emit("123");
    }
}
