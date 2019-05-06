import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {ShoppingService} from './shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular20';
  constructor(private router: Router , private shoppingService : ShoppingService){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart){
        this.shoppingService.removeAllItems();
      }
    })
  }
}
