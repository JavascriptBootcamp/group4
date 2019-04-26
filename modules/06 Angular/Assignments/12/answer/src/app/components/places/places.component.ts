import { Component, OnInit } from '@angular/core';
import { PlacesService } from "../../services/places.service";
import { Place } from "../../modules/place.interface";

@Component({
  selector: 'places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.places = this.placesService.getData();
    this.places[0].img_url;
    this.places[0].info_url;
    this.places[0].name;
  }

}
