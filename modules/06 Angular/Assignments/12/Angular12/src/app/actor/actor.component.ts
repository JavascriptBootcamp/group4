import { Component, Input } from '@angular/core';
import { actor } from '../actor.model';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  @Input() myActor: actor;
}
