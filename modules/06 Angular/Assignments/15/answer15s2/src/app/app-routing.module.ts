import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  { path: '', component: ImagesComponent, pathMatch: 'full' },
  { path: 'authors/:authorId', component: AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
