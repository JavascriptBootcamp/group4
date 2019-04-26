import { Component, OnInit } from '@angular/core';
import { ActorsService } from "../../services/actors.service";
import { Actor } from "../../modules/actor.interface";

@Component({
  selector: 'actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];

  constructor(private  actorsService:  ActorsService) { }

  ngOnInit() {
    this.actors = this.actorsService.getData();
  }

}
