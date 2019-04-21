import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiCalcComponent } from "./compoments/bmi-calc/bmi-calc.component";

const routes: Routes = [
  { path: '', component: BmiCalcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
