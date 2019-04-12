import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
@Input() actor;
  constructor() { }

  ngOnInit() {
  }

}
