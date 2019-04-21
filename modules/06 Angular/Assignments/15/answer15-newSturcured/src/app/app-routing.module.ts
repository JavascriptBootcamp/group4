import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { AuthorComponent } from './author/author.component';

export const routes: Routes = [
  {path: '', component: PicturesComponent, pathMatch: 'full'},
  {path: 'author/:authorName', component: AuthorComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
