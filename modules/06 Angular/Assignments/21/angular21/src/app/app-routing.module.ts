import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimerComponent } from './timer/timer.component';
import { CountdownComponent} from './countdown/countdown.component';

const routes: Routes = [{path:'timer',component:TimerComponent},
{path:'countDown',component:CountdownComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
