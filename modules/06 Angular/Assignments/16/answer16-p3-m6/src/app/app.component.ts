import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Collapse All';
  hideToggle = false;

  toggleTitle() {


    this.hideToggle = !this.hideToggle;

    if (this.hideToggle ) {
      this.title = 'Expand All';
    } else {
      this.title = 'Collapse All';
    }

  }
}
