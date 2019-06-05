import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstushPanelComponent } from './instush-panel/instush-panel.component'
import { AuthorProfileComponent } from './author-profile/author-profile.component'

const routes: Routes = [
  
  {path: '', component: InstushPanelComponent},
  {path: 'authors/:id',component : AuthorProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
