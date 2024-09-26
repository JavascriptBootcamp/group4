import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCarComponent } from './new-car/new-car.component';
import { AboutComponent } from './about/about.component';
import { SearchCarComponent } from './search-car/search-car.component';

const routes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'add-newCar', component: NewCarComponent},
  { path: 'searchCar', component: SearchCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
