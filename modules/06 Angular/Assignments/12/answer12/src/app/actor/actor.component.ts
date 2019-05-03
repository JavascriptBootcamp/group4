import { Component, OnInit } from '@angular/core';
import {IActor} from '../iactor';
import {ActorDataService} from '../actor-data.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actors : IActor[];
  constructor(private actorDataService: ActorDataService) { }

  ngOnInit() {
    this.getActors();
  }

  getActors() : void {
    this.actors = this.actorDataService.getActors();
  }

}
