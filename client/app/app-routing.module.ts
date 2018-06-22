import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MoviesComponent } from './admin/movies/movies.component';
import { MovieDetailComponent } from './admin/movie-detail/movie-detail.component';
import { AdminService } from './shared/services/admin.service';
import { MovieResolver } from './shared/guard/movies.resolveguard';

const routes: Routes = [
  {
    path: 'list',
    component: MovieListComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'movies', component: MoviesComponent },
      {
        path: 'movies/:id',
        component: MovieDetailComponent,
        resolve: { movie: MovieResolver },
        data: { mode: 'VIEW' }
      },
      { path: '', redirectTo: 'movies', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
