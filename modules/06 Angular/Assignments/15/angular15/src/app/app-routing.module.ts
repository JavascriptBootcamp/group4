import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorComponent} from './author/author.component';
import {GalleryComponent} from './gallery/gallery.component';
const routes: Routes = [
  
  { path: 'author/:ID', component: AuthorComponent },
  { path: 'gallery', component: GalleryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
