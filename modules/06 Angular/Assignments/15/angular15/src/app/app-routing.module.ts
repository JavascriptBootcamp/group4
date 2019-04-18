import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImagesBoxComponent } from './images-box/images-box.component';

export const routes: Routes = [
  { path: '', component: ImagesBoxComponent, pathMatch: 'full' },
  // { path: 'imgs', component: img },
  // { path: 'movies/:movieId', component: MovieComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
