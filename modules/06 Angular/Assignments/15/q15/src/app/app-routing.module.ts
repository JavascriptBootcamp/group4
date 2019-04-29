import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';

export const routes: Routes = [
  { path: '', component: PicturesComponent, pathMatch: 'full' },
  { path: 'author/:author', component: PicturesComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }