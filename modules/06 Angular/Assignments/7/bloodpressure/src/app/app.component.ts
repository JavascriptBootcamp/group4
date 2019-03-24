import { Component } from '@angular/core';

interface people {
  name: string,
  bloodPressure: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blood';
  peoples: people[];

  constructor() {
    this.peoples = [
      { name: "Eli", bloodPressure: 90 },
      { name: "Lali", bloodPressure: 50 },
      { name: "Moshe", bloodPressure: 130 }]
  }

  isNormal(bloodPressure: number): boolean {
    let isNormal = false;
    (bloodPressure >= 80 && bloodPressure <= 120) ? isNormal = true : isNormal;
    return isNormal;
  }


}
