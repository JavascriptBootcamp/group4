import { Component, OnInit } from '@angular/core';
import { CarService } from "../car.service";

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

}
