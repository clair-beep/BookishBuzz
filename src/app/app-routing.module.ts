import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SongSearcherComponent } from './song-searcher/song-searcher.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/song', component: SongSearcherComponent },
  { path: 'account/login', component: AuthComponent },
  { path: '**', redirectTo: '/home' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
