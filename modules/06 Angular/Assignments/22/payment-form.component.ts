import { Component } from '@angular/core';
import { CardDataAndActionsManagementService } from '../card-data-and-actions-management.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  constructor(private logicServiceObj: CardDataAndActionsManagementService) { }
}
