import { Component, OnInit ,Input} from '@angular/core';
import {Actor} from '../actor.module';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @Input() actor:Actor;

  constructor() { }

  ngOnInit() {
  }

}
