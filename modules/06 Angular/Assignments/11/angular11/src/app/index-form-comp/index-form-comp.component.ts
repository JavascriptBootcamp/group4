import { Component } from '@angular/core';
import {IndexForm} from '../index-form';

@Component({
  selector: 'app-index-form-comp',
  templateUrl: './index-form-comp.component.html',
  styleUrls: ['./index-form-comp.component.css']
})
export class IndexFormCompComponent {
  model = new IndexForm("gaby","123123");
}
