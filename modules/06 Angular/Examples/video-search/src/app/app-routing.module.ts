import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  { path: '', component: MoviesComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutComponent },
  { path: 'movies/:movieId', component: MovieComponent }
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
