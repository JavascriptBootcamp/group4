import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  getActorDetails(actor) {
    return fetch('http://localhost:5000?actorName=' + actor.replace(' ','_')).then( response => response.text() )
  }
}
