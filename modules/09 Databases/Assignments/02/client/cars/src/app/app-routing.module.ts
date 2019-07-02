import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CarComponent } from './components/car/car.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';

const routes: Routes = [
  { path: '', component: CarComponent , pathMatch : 'full' },
  { path: 'car', component: CarComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin-area', component: AdminAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
