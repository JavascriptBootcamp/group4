import { Component } from '@angular/core';
import { CardDataAndActionsManagementService } from '../card-data-and-actions-management.service';

@Component({
  selector: 'app-shopping-card-table',
  templateUrl: './shopping-card-table.component.html',
  styleUrls: ['./shopping-card-table.component.css']
})
export class ShoppingCardTableComponent {

  shoppingCard: {};

  constructor(private logicServiceObj: CardDataAndActionsManagementService) {}
}
