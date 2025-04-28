import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/layout/main-content/main-content.component';
import { AlbumsComponent } from './components/albums/albums.component';
 
const routes: Routes = [
  {path:"", component: MainContentComponent},
  {path:"gallery/:branca", component: AlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
