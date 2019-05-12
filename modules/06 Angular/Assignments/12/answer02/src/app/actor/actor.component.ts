import { Component, OnInit } from '@angular/core';
import {IActor} from '../interfaces/Iactor';
import {ActorService} from '../services/actor.service';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit{
 
  actors:IActor[];
  
  constructor(private actorService:ActorService) { 
    

  }

  ngOnInit(): void {
    this.actors=this.actorService.getActors();
  }
}
