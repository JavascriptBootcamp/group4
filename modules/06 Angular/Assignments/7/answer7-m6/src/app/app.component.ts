import { Component, OnInit } from '@angular/core';


interface Ipeople {
  name: string;
  bloodPressure: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'answer7-m6';
  peoples: Ipeople[];

  constructor() {
    this.peoples = [];
  }

  ngOnInit() {
    this.peoples.push({ name: "avi", bloodPressure: 90 })
    this.peoples.push({ name: "gabi", bloodPressure: 80 })
    this.peoples.push({ name: "tami", bloodPressure: 130 })
    this.peoples.push({ name: "eizik", bloodPressure: 60 })

  }

  bloodPerssuresCheck(bloodPressure: number): boolean {

    let isNormal = false;

    (bloodPressure >= 80 && bloodPressure <= 120) ? isNormal = true : isNormal;

    (bloodPressure <= 80 || bloodPressure >= 120) ? isNormal : isNormal = true;

    return isNormal
  }
}
