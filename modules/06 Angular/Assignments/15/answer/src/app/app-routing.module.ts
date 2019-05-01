import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainGalleryComponent } from "./components/main-gallery/main-gallery.component";
import { AuthorComponent } from "./components/author/author.component"
const routes: Routes = [
  { path: '', component: MainGalleryComponent },
  { path: 'author/:ID', component: AuthorComponent }
  // { path: 'movies/:movieId', component: MovieComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
